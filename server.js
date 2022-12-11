import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


const VIEWS_PATH = "./views/books";

//setting view engine to ejs
app.set("view engine", "ejs");

//route for home page
app.get("/", function (req, res) {
  res.render("home");
});

//route for home page
app.post("/search", function (req, res) {
  const { Search } = req.body;
  const SearchArr = Search.split(" ");
  
  const books = [
    { name: "dune", path: "dune" },
    { name: "lord of the flies", path: "flies" },
    { name: "the grapes of wrath", path: "grapes" },
    { name: "leaves of grass", path: "leaves" },
    { name: "to kill a mockingbird", path: "mockingbird" },
    { name: "the sun and her flowers", path: "sun" },
  ];

  const booksList = books.filter((book) =>
    SearchArr.some((word) => book.name.includes(word))
  )
  res.render("searchresults", {
    booksList,
  });
});

app.get("/readlist", function(req, res){
  res.render("readlist");
});

//route for poetry page
app.get("/poetry", function (req, res) {
  res.render("poetry");
});

//route for sun page
app.get("/sun", function (req, res) {
  res.render("books/sun");
});

//route for leaves page
app.get("/leaves", function (req, res) {
  res.render("books/leaves");
});

//route for novel page
app.get("/novel", function (req, res) {
  res.render("novel");
});

//route for grapes page
app.get("/grapes", function (req, res) {
  res.render("books/grapes");
});

//route for flies page
app.get("/flies", function (req, res) {
  res.render("books/flies");
});

//route for fiction page
app.get("/fiction", function (req, res) {
  res.render("fiction");
});

//route for mockingbird page
app.get("/mockingbird", function (req, res) {
  res.render("books/mockingbird");
});

//route for dune page
app.get("/dune", function (req, res) {
  res.render("books/dune");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});
