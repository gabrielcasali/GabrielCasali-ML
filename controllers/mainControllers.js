const path = require("path");

const controller = {
  homeController: (req, res) => {
       res.render("views/index.html");
    },
    loginController:(req, res) => {
      res.render("views/index.html");
    },
    productCartController:(req, res) => {
      res.render("views/productCart.html");
    },  
    registerController:(req, res) => {
    res.render("views/register.html");
    },
    productDetailController:(req, res) => {
    res.render("views/productDetail.html");
    },
}
  //Controller:(req, res) => {res.render("");}

module.exports = controller;