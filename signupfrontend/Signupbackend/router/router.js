//const { response } = require('express')
const express=require('express')
const app = express()
const router=express.Router()
const signupTemplateCopy = require('../models/model')

router.post('/signup',(request,response)=>{
    const createuser = new signupTemplateCopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,




    })



    createuser.save()
    .then(data =>{
        response.json(data)
        })
    .catch(error =>{
        response.json(error)
        })








})


  


module.exports=router