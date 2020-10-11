$(function () {
    const slider = document.querySelector('.swiper-container');
    let swiper = new Swiper(slider,{
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centeredSlides: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1100: {
            }
        }
    });
    function backToTop(){
        let button = $('.btn__to-top');
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 900){
                button.fadeIn();
            }else{
                button.fadeOut();
            }
        });
        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 700)
        })
    }
    backToTop();
    function menuFixed(){
        let menu  = $('.header');
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 1100){
                menu.addClass('fixed')
            }else{
                menu.removeClass('fixed')
            }
        });
        $('html').animate(100)
    }
    menuFixed();

    $(window).on('load', () => {
        $('#log-reg').vide('./video/video-bg');
    });
    $(function() {
        $('.input-file').styler();
    });

    $('[data-fancybox]').fancybox({
        loop: true,
        keyboard: true,
        toolbar: true,
        transitionEffect: "fade",
        buttons: [
            "slideShow",
            "fullScreen",
            "thumbs",
            " slideShow ",
            "close",
        ]
    });
    $('select').styler();
    function animateItem() {
        new WOW().init();
    }
    animateItem();
    $('.header__menu-btn').mouseup(function () {
        $('.menu-list').fadeToggle(200, "swing")
    });
    let bellDrop = $(".header__menu-btn");
    let bellItem = $(".menu-list");
    $(document).on('click', function (b) {
        if (!bellDrop.is(b.target) && bellDrop.has(b.target).length === 0 &&
            !bellItem.is(b.target) && bellItem.has(b.target).length === 0
        ) {
            bellItem.fadeOut();
        }
    });
    document.body.onload = ()  => {
        setTimeout( () =>  {
            let preloader = document.getElementById('preloader-loader')
            if ( !preloader.classList.contains('done')){
                preloader.classList.add('done')
            }
        }, 300)
    }
    // $('.icon-th-list').on('click', function () {
    //     $('.product__item').addClass('list')
    //     $('.icon-th-large').removeClass('active')
    //     $('.icon-th-list').addClass('active')
    // });

    // $('.icon-th-large').on('click', function () {
    //     $('.product__item').removeClass('list')
    //     $('.icon-th-list').removeClass('active')
    //     $('.icon-th-large').addClass('active')
    // });


    // $(".rate-star").rateYo().on("rateyo.change", function (e, data) {
    //     let rating = data.rating;
    //     $(this).parent().find('.score').text('score :'+ $(this).attr('data-rateyo-score'));
    //     $(this).parent().find('.result').text('rating :'+ rating);
    // });

    // $('.aside-btn__category').on('click', function () {
    //     $('.aside-category__list').slideToggle()
    // });
});


