//const { response, request } = require('express')
let express = require('express');
let app = express();
app.use( express.static( "public" ) );
//we use ejs beacause it resemble with 
app.set('view engine', 'ejs');

// we definied the variables to do the services closed we get the current day and hour
const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

/*we use the middleware witch the 3rd parames(next)
We are closed the 6th and 7th day of the week ,
so we definied the day in the intervals [1,5]
and we do as with the hours
now when we are in the closed time we return the serviceClose folder*/
app.use((request, response, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 /*0*/ && hours < 17) {
    next();
  } else {
    response.render("serviceClose");
  }
});

/* we get the home folder in we check the render this and the root */
 app.get('/', function(request, response){
    response.render("home");
 });
 
/* we get the folder contacts and we derige in the path contacts */
 app.get("/contacts", (req, res) => {
    res.render("contacts");
  });
  
  app.get("/services", (req, res) => {
    res.render("services");
  });

app.listen(4000)