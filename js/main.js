
$(function () {

  //add class active to link
  $('nav .nav-list .nav-item .nav-link').click(function () {
    $('nav .nav-list .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
  });

  //fixed navbar
  $(window).scroll(function () {
    if($(window).scrollTop() >= $('.upper-bar').innerHeight()) {
      $('.navbar').addClass('fixed-nav');
    } else{
      $('.navbar').removeClass('fixed-nav');
    }
  });
})
