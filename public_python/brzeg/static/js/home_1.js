$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ portfolio slider1 -----------
    var portSwiper = new Swiper('.tc-portfolio-st1 .portfolio-slider', {
        // slidesPerView: 3,
        spaceBetween: 120,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-portfolio-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        on: {
            init: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            },
            slideChange: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1.4,
            }
        }
    });

    // custom pagination 
    function updateCustomPagination(portSwiper) {
        const totalSlides = portSwiper.slides.length - (portSwiper.loop ? 2 : 0); // Adjust for cloned slides if loop is true
        const currentIndex = portSwiper.realIndex + 1; // realIndex starts from 0
      
        const customPagination = document.querySelector('.numbers-pagination');
        
        customPagination.innerHTML = `<span class="slide-cont"> ${currentIndex} </span> <span class="slide-mark"> / </span> <span class="slide-all"> ${totalSlides} </span>`;
    }
    updateCustomPagination(portSwiper);


    function updateProgressBar(portSwiper) {
        const totalSlides = portSwiper.slides.length - (portSwiper.loop ? 2 : 0); // Adjust for duplicated slides in loop mode
        const currentIndex = portSwiper.realIndex + 1; // realIndex starts from 0
        const progressPercentage = (currentIndex / totalSlides) * 100;
        const progressBar = document.querySelector('.swiper-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
      }

    //   end portfolio slider 


    // testimonials slider
    var swiper = new Swiper('.tc-testimonials-st1 .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // blog slider
    var swiper = new Swiper('.tc-blog-st1 .blog-slider', {
        // slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});

$('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));

    if (target.length) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: target.offset().top - 100
        }, 800);
    }
});



// ------------ gsap scripts -----------
$(function () {
    
    




    

});
