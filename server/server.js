const express=require('express');
const path=require('path');
const port=process.env.PORT||3000;
const app =express();
const publicpath=path.join(__dirname,'..');
app.use(express.static(publicpath));
app.listen(port,()=>{
  console.log('waleed');
});
app.get('*',(requestAnimationFrame,res)=>{
  res.sendFile(path.join(publicpath,'index.html'))
});