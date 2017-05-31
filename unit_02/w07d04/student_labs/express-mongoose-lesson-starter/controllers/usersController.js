var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function (request, response) {

    User.find({})
        .exec(function (error, userList) {

            if(error) {
                console.log("Error while retrieving users: " + error);
                return;
            }

            response.render('users/index', {
                userList: userList
            });
        })

})

// USER CREATE FROM (NEW)
router.get('/new', function(request, response){
    response.render('user/new');
});

// USER CREATE ROUTE (NEW)
router.post('/', function(request, response){
    var newUserFromForm = request.body;

    var user = new User({
        first_name: newUserFromForm.first_name,
        last_name: newUserFromForm.last_name,
        email: newUserFromForm.email
    });

    user.save(function(err, user){
        if(err) {
            console.log(err);
            return;
        }
        response.redirect('/users')
    })
})
// USER SHOW ROUTE
router.get('/:id', function (request, response) {

    var userId = request.params.id;

    User.findById(userId)
        .exec(function (error, user) {

            if(error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            response.render('users/show', {
                user: user
            });
        });

});


// USER EDIT ROUTE
router.get('/edit/:id', function (request, response) {

    var userId = request.params.id;

    User.findById(userId)
        .exec(function (error, user) {

            if(error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            response.render('users/edit', {
                user: user
            });
        });
});

// USER UPDATE ROUTE
router.put('/:id', function (request, response) {

    var userId = request.params.id;
    var newUserInfo = request.body;

    User.findByIdAndUpdate(userId, newUserInfo, {new: true})
        .exec(function (error, user) {
            
            if(error) {
                console.log("Error while updating User with ID of " + userId);
                return;
            }

            response.redirect(userId);

        });
    

});


// USER DESTROY
router.delete('/:id', fucntion (request, response) {
    
    var userId = request.params.id

    User.findByIdAndRemove(userId)
    exec(function(error, user){

        if(error){
            console.log("Error while deleting User with ID of + userId")
        }
        response.redirect('/user')
    })
});


// ADD A NEW ITEM


// REMOVE AN ITEM


module.exports = router;