$('.my_button').on('click', function(event) {
  event.preventDefault();

  var myValue = $('.my_input').val();

  alert(myValue);
});
