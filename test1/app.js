const express = require("express");

const app = express();

app.use("/add-product", (req,res,next) => {
    console.log("another middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
});
app.use('/product',(req, res, next)=>{
    // console.log("we are in /product path");
    res.redirect('/');

});


app.use("/", (req,res,next) => {
    res.send("<h1>Hello from Express js</h1>");
});


app.listen(3000);