$(function () {
  $(':button').on('click', function(event) {

    event.preventDefault();
    var $new = $('<div class="block"><button class="deleteButton">x</button></div>');
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$($new).css('background-color', hue);
    $new.appendTo('#blockKeeper');
  })

  $('#blockKeeper').on('click','.block' , function() {
    $(this).css('background-color', 'black');
  })

  $('#blockKeeper').on('click', '.deleteButton', function() {
    $(this).parent().remove();
  })

})
