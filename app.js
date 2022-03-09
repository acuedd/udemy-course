const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {

  User.findById('62283ea500de2e8afea36751')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
        console.log("fuck here");
        console.log(err);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongose
  .connect('mongodb://root:hmlDoUrden@localhost:27017/shop?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
  .then(result =>{
    User.findOne()
      .then(user =>{
        if(!user){
          const user = new User({
            name: "acuedd", 
            email: "acuedd@gmail.com", 
            cart:{
              items: []
            }
          })
          user.save();
        }
      })    
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
