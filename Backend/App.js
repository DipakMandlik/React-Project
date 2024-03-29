const model=require('./model')

const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors())

app.use(express.json())

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/new')

app.get(('/'),(req,res) =>{
    res.send("Hello Everyone")
})


// GET the data
app.get('/findall',async (req,res)=>{
    try{
        const userData= await model.find();
        res.status(200).send(userData);
        
    }

    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})
/

// POST the data
app.post('/edutechUsers', async(req,res)=>{

    const{name,usermail,mobile,pass}= req.body;

    try{
        const users =new model({
            name,usermail,mobile,pass
        })

        const data = await users.save()
        res.status(200).send({data})
        console.log("Post method called")
    }

    catch(error){
        console.log('error')
    }
})


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`app listen on port ${PORT}`)
})