const express = require('express');
const cors  = require('cors');
const { pool } = require('./db');
const multer = require('multer');
const morgan = require('morgan');
const PORT = 8080;
const path = require('path');


const upload = multer({

    storage: multer.diskStorage({

        destination: (req, file, done) => {
            done(null, "public/")
        },

        filename: (req, file, done)=>{
            console.log(file);

            const ext = paht.extname(file.originalname);
            const fileNameExeptExt = path.basename(file.originalname, ext);

            const saveFileName = fileNameExeptExt + Date.now() + ext;
            done(null, saveFileName);


        }

    })
})



const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

app.get("/api/menus", async(req, res)=> {

        try{
            const data = await pool.query("SELECT * FROM menus");
            return res.json(data[0]);
        }catch(error)
        {

            console.log(error);
            return res.json({
                success:false,
                message:"전체 메뉴 목록 조회에 실패하였습니다"
            });

        }



});

app.get("/api/menus/:id", async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM menus WHERE id = ?", [req.params.id]);
      console.log(data[0]);
      // data[0] -> data[0][0] 배열안의 객체에 접근
      return res.json(data[0][0]);
  
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "메뉴 조회에 실패하였습니다."
      })    
    }
  })
  
  
  
  // post("라우터 주소", upload , (req, res) )
  app.post("/api/menus", upload.single('file'),async (req, res) => {
    try {
      // multer에서 정상처리해서 데이터를 넘겨주는 경우 req.file에 담겨서
     
      const {name, desctription} = req.body;
      const {path} = req.file;
  
      const result = await pool.query('insert into menus (name, description, image_src) values(?,?,?)', [name, desc])
  
     
     
      console.log(req.file);
  
      return res.json({
        success: true,
        message:"메뉴 등록에 성공하였습니다."
      })
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "메뉴 등록에 실패하였습니다."
      })
    }
  })


  app.post("/api/orders", async(req,res)=> {

        try{

            const data = await pool.query(`INSERT INTO orders (quantity, request_detail, menus_id)
            VALUES (?,?,?)`, [req.body.quantity, req.body.request_detail, req.body.menus_id])

            return res.json({

                succsess: true,
                message: "주문 성공"
            });



        }catch(error){

            console.log(error);
            return res.json({
                success: false,
                message: "실패"
            });
        }


  })

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const data = await pool.query(`SELECT a.id, quantity, request_detail, name, description FROM orders as a INNER JOIN menus as b ON (a.menus_id = b.id) WHERE a.id = ?`, [req.params.id]);
      console.log(data[0]); 
      // data[0] -> data[0][0] 배열안의 객체에 접근
      return res.json(data[0][0]);
  
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "주문 조회에 실패하였습니다."
      })    
    }
  })
  

  app.patch('/api/orders/:id', async(req, res) => {

    try{

        const data = await pool.query(`UPDATE orders SET quantity = ?, request_detail = ?, menus_id = ? WHERE id = ?`, [req.body.quantity, req.body.request_detail, req.body.menus_id, req.params.id]);

        return res.json({
            success: true,
            message: "주문 정보 수정에 성공하였습니다."
        })



    }catch (error) {
        console.log(error);
        return res.json({
          success: false,
          message: "주문 정보 수정에 실패하였습니다."
        })    
    }

  })

app.delete('/api/orders/:id', async(req, res) => {

    try{

        const data = await pool.query(`DELETE FROM orders WHERE id = ?`, [req.params.id]);
        return res.json({

            success: true,
            message: "주문 삭제에 성공하였습니다"

        });
    }catch(error)
    {
        console.log(error);
        return res.json({
            success: false,
            message: "주문 삭제에 성공하였습니다"
        })

    }


})

app.listen(PORT, () => console.log(`${PORT} 기동중`));