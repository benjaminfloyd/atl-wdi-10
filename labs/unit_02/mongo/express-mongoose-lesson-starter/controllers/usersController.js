var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");


// USERS INDEX ROUTE 
router.get('/', function(request, respond){
  user.find({})
    .exec(function(err, user){
      if(err){
      console.log("Error wile retrieving users:" + error);
      return;
    }
    respond.send(userList)
  })


})



// USER SHOW ROUTE



// USER CREATE ROUTE



// USER UPDATE ROUTE


// USER DESTROY


// ADD A NEW ITEM


// REMOVE AN ITEM $pull https://docs.mongodb.com/manual/reference/operator/update/pull/


module.exports = router;
