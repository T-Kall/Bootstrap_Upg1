$(document).ready(function () {

    // loggorna

    var owl = $('#owl1');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    })

    // mobiler

    var owl2 = $('#owl2');

    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        }
    });

    
// color grejen

    $('.loop').on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.owl-item.center').removeClass('center'); // big = center
        $('.owl-item.first').removeClass('first'); // medium = first
        $('.owl-item.second').removeClass('second'); // large = second
        $('.owl-item').eq(idx).addClass('center');
        $('.owl-item').eq(idx-1).addClass('first');
        $('.owl-item').eq(idx+1).addClass('first');
        $('.owl-item').eq(idx-2).addClass('second');
        $('.owl-item').eq(idx+2).addClass('second');
    });


})








// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })