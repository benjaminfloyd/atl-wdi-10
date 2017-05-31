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

<<<<<<< HEAD


// USER CREATE ROUTE



=======
// USER CREATE ROUTE

>>>>>>> 660449f22ebce44d381acf513f5876f1da0059f7
// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

<<<<<<< HEAD

// REMOVE AN ITEM $pull https://docs.mongodb.com/manual/reference/operator/update/pull/
=======
// REMOVE AN ITEM
>>>>>>> 660449f22ebce44d381acf513f5876f1da0059f7

module.exports = router;
