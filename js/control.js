$(function(){

  'use strict';

  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html ,body').animate(
        {
            scrollTop:$(target).offset().top
        },
        800
    );
  });

    var offset = $('#nav-container').offset();
    $(window).scroll(function(){

        if( $(window).scrollTop() > offset.top ) {
            $('#nav-container').addClass('fixedNav');
        } else {
            $('#nav-container').removeClass('fixedNav');
        }

    });

});
