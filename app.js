var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/clientes",function(req,res){
  res.sendFile(path + "clientes.html");
});
router.get("/producto",function(req,res){
    res.sendFile(path + "producto.html");
  });
  
app.use(express.static(path));
app.use("/", router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})