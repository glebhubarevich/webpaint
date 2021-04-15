$('.hamburger').click(function (e) { 
   $('.burger__content').toggleClass('active')
   $('.hamburger>span').toggleClass('active')
   $('.hamburger').toggleClass('active')
   $('body').toggleClass('_lock')
});