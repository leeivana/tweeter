$(document).ready(function(){
  const maxLength = 140;
  $('section.new-tweet textarea').on('keyup', function(){
    const $counter = $(this).siblings('span.counter');
    let remaining = maxLength - $(this).val().length;
    $counter.toggleClass('makeRed', remaining < 0);
    $counter.text(remaining);
  });
  $counter.val('');
});