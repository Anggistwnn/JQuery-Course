$(function() {
  $('.btn').click(function() {
    // Assign the jQuery object for #title to the $title variable
    var $title = $('#title');
    var $text = $('#text');
    
    // Rewrite the following using the $title variable:
    $title.css('color', 'red');
    $title.html('Goodbye, Ken!');
    $title.fadeOut(1000);
    
    // Rewrite the following using method chaining:
    $text.css('color', 'blue');
    $text.html('<h3>See you soon!</h3>');
    $text.fadeOut(1000);
  });
});

 $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
    } else {
      $answer.addClass('open');
    }
  });