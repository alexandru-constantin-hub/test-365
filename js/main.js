// $(function() {
//     // toggle du btn active
//     $('[data-filter-color]').click(function() {
//          var choosenColor = $(this).data('filter-color');

//         $('[data-filter-color]').each(function(e){
//             $(this).removeClass('active');
//         });
//         $(this).addClass('active');

//         //toggle des sliders
//         $('[data-slider]').each(function(e){
//             if($(this).data('slider') = choosenColor){
//                 $(this).addClass('active');
//                 $(this).slick('setPosition');
//             }else{
//                 $(this).removeClass('active');
//             }
//         });
//         return false;
//     });
// });

window.onscroll = function() {stychyHeader()};
var navbar = document.getElementById("header-menu-sticky");
var sticky = navbar.offsetTop;


function stychyHeader() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

$(document).ready(function(){
    // slider
    let slideWrapper = $(".slider-section__slider");

    slideWrapper.slick({
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
    });

    // toggle menu mobile
   /* $('[ data-mobile-menuburger-open]').click(function() {
        $('.header-mobile__menu').css("display", "block");
    });

    $('[ data-mobile-menuburger-close]').click(function() {
        $('.header-mobile__menu').css("display", "none");
    });
    */

    $( ".header-mobile__burger" ).click(function() {
        $( ".header-mobile__menu" ).slideToggle( "slow" );
      });

    // toggle le sous menu
    // $('[ data-menu-dropdown]').click(function() {
    //     if($(this).find('.dropdown').hasClass('dropdown--opened')){
    //         $(this).find('.dropdown').removeClass('dropdown--opened');
    //         $(this).find('.header-mobile__link').removeClass('header-mobile__link--opened');
    //     }else{
    //         $(this).find('.dropdown').addClass('dropdown--opened');
    //         $(this).find('.header-mobile__link').addClass('header-mobile__link--opened');
    //     }
    // });
     

    $( ".header-mobile__has-dropdown" ).click(function() {
        $( ".header-mobile__has-dropdown .dropdown" ).slideToggle( "slow" );
      });

     
    $(".slick-dots li button").eq(0).text("Rouge");
    $(".slick-dots li button").eq(1).text("Vert");
    $(".slick-dots li button").eq(2).text("Bleu");



});


