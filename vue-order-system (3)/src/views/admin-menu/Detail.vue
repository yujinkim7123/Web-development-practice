<template>
  <div>
<div>
  <b-card
    :title="data.name"
    :img-src="setImage()"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 detail-card"
  >
    <b-card-text>
      {{data.description}}
    </b-card-text>

    <b-button @click="moveRegister" href="#" variant="primary">수정하기</b-button>
    <b-button @click="deleteMenu" href="#" variant="danger">삭제하기</b-button>
    <b-button @click="moveList" href="#" variant="outline-primary">목록</b-button>
  </b-card>
</div>
  </div>
</template>

<script>
import { api } from "@/utils/axios"

export default {
  data(){
    return {
      data: {}
    }
  },
  async created(){
    // console.log(this.$route)
    // console.log(this.$route.params)
    // console.log(this.$route.params.id)

    const result = await api.menus.findOne(this.$route.params.id)
    console.log(result)
    this.data = result.data
    // 지금의 정보들을 활용하여, axios 요청하기
    // findOne 요청을 콘솔로 출력하기
  },
  methods:{
    moveList(){
      this.$router.push("/admin/menus")
    },
    setImage() {
      return `http://3.35.208.145:8080/${this.data.image_src}`;
    },
    async deleteMenu(){
      const confirmResult = confirm("삭제하시겠습니까?")
      if(confirmResult){
        const result = await api.menus.delete(this.$route.params.id)
        alert(result.data.message)
        this.$router.push("/admin/menus")
      }
    },
    moveRegister(){
      this.$router.push(`/admin/menus/register/${this.$route.params.id}`)
    }
  }
}
</script>

<style>

</style>
