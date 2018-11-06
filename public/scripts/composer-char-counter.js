$(document).ready(function(){
  const maxLength = 140;
  $('section.new-tweet textarea').on('keyup', function(){
    let remaining = maxLength - $(this).val().length;
    $(this).siblings('span.counter').toggleClass('makeRed', remaining < 0);
    $(this).siblings('span.counter').text(remaining);
  });
});