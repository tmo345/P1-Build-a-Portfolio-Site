// Event listener on hover and focusin/focusout for .inactive menu items (i.e. not current page)
// On hover and focusin/focusout - toggle remove-highlight

$('.inactive').hover(function(){
  $('.active a').toggleClass('remove-highlight');
});

$('.inactive').focusin(function(){
  $('.active a').addClass('remove-highlight');
});

$('.inactive').focusout(function(){
  $('.active a').removeClass('remove-highlight');
});