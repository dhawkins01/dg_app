const axios = require("axios");
const router = require("express").Router();
require('dotenv').config();

const apiUser = process.env.API_USER;
const apiPW = process.env.API_PW;

function logout(sessname, sessid, token){
    axios({
        method: 'post',
        url: 'https://api.pdga.com/services/json/user/logout',
        headers: { "Content-type": "application/json",
        "Cookie": sessname + "=" + sessid,
        "X-CSRF-TOKEN": token }
        
    
      }).then(function (response){
          console.log(response.data);
          
      }).catch(function(error) {
          console.log(error)
      })
      ;
}

// function getCourses()
function getCourses(sessname, sessid, zip, token) {
    axios({
        method: "get",
        url: "http://api.pdga.com/services/json/course?postal_code=" + zip,
        headers: {"Cookie": sessname + "=" + sessid}
    }).then(function(response) {
        console.log(response.data);
        logout(sessname, sessid, token);
    })
}

router.get("/courses", (req, res) => {
    axios({
        method: 'post',
        url: 'https://api.pdga.com/services/json/user/login',
        headers: { "Content-type": "application/json" },
        data: {"username": apiUser, "password": apiPW}
    
      }).then(function (response){
          console.log(req.query.q);
          console.log(response.data.session_name);
          console.log(response.data.sessid);
          console.log(response.data.token);
          var sessionName = response.data.session_name;
          var sessionID = response.data.sessid;
          var token = response.data.token;
          var zipCode = req.query.q;
          getCourses(sessionName, sessionID, zipCode, token);

     }).catch(function(error) {
          console.log(error)
      });
      

});

module.exports = router;