$(function() {
  $('.burger').on('click', function(){
      $('.nav-links').toggleClass('nav-active');
      $(this).toggleClass('toggle');
      $('.burger-musk').fadeToggle('300');
      $('body').toggleClass('noscroll');
  });

  $('.nav-links li').on('click', function(){
  $('.nav-links').removeClass('nav-active');
  $('.burger').removeClass('toggle')
  $('.burger-musk').fadeToggle('300');
  $('body').removeClass('noscroll');
  });
});