let exp = require("express");
let app = express();
let cors = require("cors");
let path = require("path");

let bodyParser = require("body-parser");
let logins = {}
let imgs = {}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
  
    //intercepts OPTIONS method
    if ("OPTIONS" === req.method) {
      //respond with 200
      res.send(200);
    } else {
      //move on
      next();
    }
  });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
    });
  }
app.post("/login",(req,res) => {
    if(req.body.login !== undefined){
        if(logins.has(req.body.username) && logins[req.body.username] === req.body.password){
        res.send({auth:true,list:[]});
        }
    }
});
app.post("/signup",(req,res) => {
    //set username and password
    if(req.body.login !== undefined){
        logins[req.body.username] = req.body.password;
    }
    res.send({proceed:true});
});
app.post("/signupIMG",(req,res) => {
    if(req.body.img !== undefined){
        imgs[req.body.username] = req.body.img;
    }
});
app.post("/update",(req,res) => {
    //format -> {hash key:}
    console.log(req.body.hash);
});

let port = process.env.PORT || 9000;

app.listen(port);