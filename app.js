const express = require('express');
const router = require("routes/mainRouter.js");
const path=require('path');

const app = express();

app.use(express.static('public'));

app.set(' ', 'views');
app.set('view engine', 'html');
app.set("views",path.resolve("views"));
app.engine('html', require('ejs').renderFile);

app.use(router);

app.listen(3000, ()=>{
  console.log("Servidor corriendo en el puerto 3030");
})
// Configurar vistas
//app.set('views', './views');
//app.set('view engine', 'html');
//app.engine('html', require('ejs').renderFile);

// Configurar rutas
//const indexRouter = require('./routes/index');
//const productRouter = require('./routes/product');
//const cartRouter = require('./routes/cart');
//const userRouter = require('./routes/user');
//const registerRouter = require('./routes/user');

//app.use('/', indexRouter);
//app.use('/product', productRouter);
//app.use('/cart', cartRouter);
//app.use('/user', userRouter);
//app.use('/register', registerRouter); 