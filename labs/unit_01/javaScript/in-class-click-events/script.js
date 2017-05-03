window.onload = function() {
var button = document.getElementById('buttonOne');

button.addEventListener("click",function(){
    alert('You have clicked button 1')
});


var buttonTwo = document.getElementById('buttonTwo');

buttonTwo.addEventListener("click",function() {
    var par1 = document.createElement("p");


    par1.innerHTML = 'A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback)' ;
    document.getElementById('info').appendChild(par1);

});

var buttonThree = document.getElementById('buttonThree');

buttonThree.addEventListener("click",function() {
    var removepar = document.getElementsByTagName('p')[0];
    document.getElementById('info').removeChild(removepar);

});
}

// // var button = document.querySelector("button");

// // button.addEventListener("click", function(event){
//   // console.log("Executed in the callback function.");
// });
