import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const todoPersonal = [];
const todoWork = [];

var currentpage = "/personal";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  currentpage = "/personal";
  console.log("it became personal")
  res.render("index.ejs", {currentpage:currentpage});
});

// app.post("/", (req, res) => {
//     currentpage = "/personal";
//   console.log("it became personal1")
//     todoPersonal.push(req.body["newItem"]);
//     res.redirect("/personal", {currentpage:currentpage});
// });

app.get("/personal", (req, res) => {
    currentpage = "/personal";
    console.log("it became persona2")
    res.render("index.ejs", {currentpage:currentpage, todo: todoPersonal});
});

app.get("/work", (req, res) => {
    currentpage = "/work";
    console.log("i became personal 5")
    res.render("index.ejs", {currentpage:currentpage, todo: todoWork});
});
  
app.post("/personal", (req, res) => {
    todoPersonal.push(req.body["newItem"]);
    res.redirect("/personal");
    console.log("it became personal3")
});
app.post("/work", (req, res) => {
    todoWork.push(req.body["newItem"]);
    res.redirect("/work");
    console.log("i became personal 4")

});
  
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

