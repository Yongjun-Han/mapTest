const express = require('express');
const axios = require('axios');
const app = express()

const id = "rw8kfxnmol"
const secret = "KLcIjNMP9IXvoxSEQmdcNjip3b5oj0agPyQmIQ30"
    // "query=분당구 불정로 6" 
  // "X-NCP-APIGW-API-KEY-ID: {애플리케이션 등록 시 발급받은 client id값}"
  // "X-NCP-APIGW-API-KEY: {애플리케이션 등록 시 발급받은 client secret값}"\
const address = "대전 서구 대덕대로 182"

const header = {
  "X-NCP-APIGW-API-KEY-ID" :  id,
  "X-NCP-APIGW-API-KEY" : secret
}


app.get("/", async(req,res)=> {
  try {
    let result = await axios({
      method : "get",
      url : `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
      headers: header
    });

    const resultMsg = result.data
    // console.log(resultMsg)
    res.send(resultMsg)

  }catch(err){
    console.log(err)
  }
})

app.listen(6565, ()=> {
  console.log("server on")
})
// axios.get
// const apiURL = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode"
// res.header(headers).send()