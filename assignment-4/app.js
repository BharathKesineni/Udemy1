const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const usersList = []

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/",(req,res,next) => {
    //res.sendFile(path.join(__dirname,"views", "add-user.html"));
    res.render("add-user",{pageTitle: "Add User Page"});
});
app.get("/user",(req,res,next) => {
    // res.sendFile(path.join(__dirname,"views","user-list.html"));
    res.render("user-list",{pageTitle: "User List page", users: usersList});
});
app.post("/add-user",(req,res,next) => {
    console.log(req.body);
    usersList.push({userName: req.body.userName});
    res.redirect("/user");
})

app.listen(3000);
