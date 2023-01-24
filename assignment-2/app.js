const express =require('express');

const app= express();

// app.use((req,res,next)=>{
//     console.log('first middleware');
//     next();
// });
// app.use((req,res,next)=>{
//     console.log('second middle ware');
//     res.send('<h1> my assignment is going to ready </h1>');
// });
app.use('/users',(req,res,next)=>{
    console.log('/users middle ware');
    res.send('<p> the middle ware two /users </p>');
    return res.end();
});
app.use('/',(req,res,next)=>{
    console.log('/middle ware');
    res.send('<p> the middle ware one </p>');
    return res.end();
});

app.listen(3000);