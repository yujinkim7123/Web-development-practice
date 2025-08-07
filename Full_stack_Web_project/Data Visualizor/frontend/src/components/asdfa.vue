<template>
  <el-form ref="form" :model="form" label-width="120px">
    <div class="groups-wrapper">

      <el-form-item label="키워드">
        <el-input v-model="form.keyword">
          <el-button @click="saveKeyword" slot="append">키워드 추가</el-button>
        </el-input>
      </el-form-item>


      <div v-if="keywords" class="tag-wrrapeer">
        <el-tag class="group-tag" v-for="keyword in keywords" :key="keyword" @click="removeKeyWord(keyword)">{{keyword}}</el-tag>
      </div>

      <el-form-item label="주제">
        <el-input v-model="form.groupName"></el-input>
      </el-form-item>

      <div v-if="keywordGroups" class="tag-wrapper">
        <el-tag class="group-tag" v-for = "(group, index) in keywordGroups" :key="index" type="success" @click="removeGroup(group.groupName)">
          {{group.groupName}}
        </el-tag>
      </div>

      <el-button type="primary" class="create-button" @click="saveGroup">주제 생성하기</el-button>

    </div>



    <div class="groups-wrapper">
      <el-form-item label="시간대별 설정">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.startDate" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.endDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>



 <el-form-item label="연령별">
        <el-select v-model="form.ages" multiple  placeholder="please select your zone">
          <el-option label="all" value=""></el-option>
          <el-option label="0 ~ 12세" value="1"></el-option>
          <el-option label="13 ~ 18세" value="2"></el-option>
          <el-option label="19 ~ 24세" value="3"></el-option>
          <el-option label="25 ~ 29세" value="4"></el-option>
          <el-option label="30 ~ 34세" value="5"></el-option>
          <el-option label="35 ~ 39세" value="6"></el-option>
          <el-option label="40 ~ 44세" value="7"></el-option>
          <el-option label="45 ~ 49세" value="8"></el-option>
          <el-option label="50 ~ 54세" value="9"></el-option>
          <el-option label="55 ~ 59세" value="10"></el-option>
          <el-option label="60세 이상" value="11"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="구간 단위">
        <el-radio-group v-model="form.timeUnit">
          <el-radio label="date"></el-radio>
          <el-radio label="week"></el-radio>
          <el-radio label="month"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="디바이스">
        <el-radio-group v-model="form.device">
          <el-radio label="all"></el-radio>
          <el-radio label="pc">pc</el-radio>
          <el-radio label="mo">모바일</el-radio>
        </el-radio-group>
      </el-form-item>


      <el-form-item label="성별">
        <el-radio-group v-model="form.gender">
          <el-radio label="all">모두</el-radio>
          <el-radio label="m">남</el-radio>
          <el-radio label="f">녀</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>


  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import { dataLap } from "../utils/axios"
import moment from "moment"
import {mapActions} from "vuex"

  export default {
    data() {
      return {
        form: {
          startDate : null,
          endDate : null,
          timeUnit : "month",
          keyword: "",
          groupName: "",
          device:"all",
          gender:"all",
        },
        keywordGroups: [],
        keywords: []
      }
    },
    methods: {
      ...mapActions(["generateChartData"]),
      async onSubmit() {
        console.log(this.form)
        const {startDate, endDate, timeUnit, device, gender, ages} = this.form


        if(this.keywordGroups.length && startDate && endDate && timeUnit && device && gender&&ages){

          const data = {
            keywordGroups : this.keywordGroups,
            startDate : moment(startDate).format("YYYY-MM-DD"),
            endDate : moment().format("YYYY-MM-DD"),
            timeUnit,
            device,
            gender,
            ages
          }
  
          const result = await dataLap.post(data)
          console.log(result.statusText)
          if(result.statusText === "OK"){
            console.log("hi")
            this.generateChartData()
          }
        } else {
          alert ("빈값을 입력해주세요")
        }


      },
      saveKeyword(){
        console.log("check")
        if(this.form.keyword){
          this.keywords.push(this.form.keyword)
        }
        this.form.keyword = "";
        console.log(this.keywords)
      },
      removeKeyWord(keyword){
        this.keywords = this.keywords.filter(e => e !== keyword)
      },
      saveGroup(){
        if(this.form.groupName){
          this.keywordGroups.push({
            groupName : this.form.groupName,
            keywords : this.keywords
          })

          this.form.groupName = "",
          this.keywords = []

          console.log(this.keywordGroups)
        }
      },
      removeGroup(groupName){
        console.log(groupName)
        this.keywordGroups = this.keywordGroups.filter(e => e.groupName !== groupName)
      }
    }
  }
</script>

<style>
.groups-wrapper{
  display: flex;
  flex-direction: column;
  border:1px solid #dddddd;
  padding:30px;
  margin-bottom: 30px;
  align-items: stretch;
}

.create-button{
  width:31%;
  margin-top:30px !important;
  margin-left:120px !important;
}

.tag-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
}

.group-tag{
  width:80px;
  font-size:11px !important;
  margin:3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>