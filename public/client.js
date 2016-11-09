// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

  // IMAGE EDITING:
  
  // banner width and height // PROBLEM STILL - text added shows outside if banner is smaller.
  $('#bannerwidth').on('keyup', function() {
      var value = $(this).val();
       if ($.isNumeric(value) && Math.floor(value) == +value && (value > 0 && value < 1001 && value != null)) {
          $('#bannerwidtherror').css({'visibility' : 'hidden', 'display' : 'none'});
           var canvascontainer = document.getElementById("canvascontainer");
           $(canvascontainer).css('width', value);
      } else {
          $('#bannerwidtherror').css({'visibility' : '', 'display' : 'block'});
      }
  }).keyup();

  $('#bannerheight').on('keyup', function() {
      var value = $(this).val();
      if ($.isNumeric(value) && Math.floor(value) == +value && (value > 0 && value < 1001 && value != null)) {
          $('#bannerheighterror').css({'visibility' : 'hidden', 'display' : 'none'});
          var canvascontainer = document.getElementById("canvascontainer");
          $(canvascontainer).css('height', value);
      } else {
          $('#bannerheighterror').css({'visibility' : 'visible', 'display' : 'block'});
      }
  }).keyup();
        
        
        
        
});
