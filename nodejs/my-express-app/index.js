const express=require('express');
const app=express();
const PORT=3001;
//app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello,World!');
});
app.get('/api/data',getData);
function getData(req,res) {
    res.json({message:'This is some data!'});
}
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});