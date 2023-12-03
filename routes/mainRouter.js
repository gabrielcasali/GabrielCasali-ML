const { Router } = require("express");


const controller = require("controllers/mainControllers.js");

const router = Router();

const routes = {
  indexRoute: "views/index.html",
  registerRoute:'views/register.html',
  loginRoute:'views/login.html',
  productCartRoute:'views/productCart.html',
  productDetailRoute:'views/productDetail.html',
};

router.get(routes.indexRoute, controller.homeController);
router.get(routes.registerRoute, controller.homeController);
router.get(routes.loginRoute, controller.homeController);
router.get(routes.productCartRoute, controller.homeController);
router.get(routes.productDetailRoute, controller.homeController);

module.exports = router;