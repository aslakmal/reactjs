(function ($) {
    'use strict';
    $(document).ready(function () {

        let left_arrow = `${handle.icon}/assets/img/arrow_left.svg`;
        let right_arrow = `${handle.icon}/assets/img/arrow_right.svg`;

        $('.product_carousel').owlCarousel({
            loop: true,
            center: true,
            nav: true,
            navText: ["<img src='"+left_arrow+"' alt=''>", "<img src='"+right_arrow+"' alt=''>"],
            dots: false,
            // autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        //animation for fish image
        var right_to_left_g_one = $('.right_to_left_g_one');
        var left_to_right_g_two = $('.left_to_right_g_two');
        var left_to_right_g_three = $('.left_to_right_g_three');
        var right_to_left_g_four = $('.right_to_left_g_four');
        var left_to_right_g_five = $('.left_to_right_g_five');
        var right_to_left_s_one = $('.right_to_left_s_one');
        var left_to_right_s_two = $('.left_to_right_s_two');
        var left_to_right_s_three = $('.left_to_right_s_three');

        //mobile
        var m_right_to_left_g_one = $('.m_right_to_left_g_one');
        var m_left_to_right_g_two = $('.m_left_to_right_g_two');
        var m_right_to_left_s_one = $('.m_right_to_left_s_one');
        var m_right_to_left_g_three = $('.m_right_to_left_g_three');
        var m_left_to_right_s_two = $('.m_left_to_right_s_two');
        var m_left_to_right_g_four = $('.m_left_to_right_g_four');
        var m_left_to_right_s_three = $('.m_left_to_right_s_three');
        var m_right_to_left_g_five = $('.m_right_to_left_g_five');

        var cloudTl = new TimelineMax({ repeat: -1, });
        cloudTl.to(right_to_left_s_one, 25, { right: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(left_to_right_g_two, 20, { left: "100%", ease: Linear.easeNone }, 0)

        cloudTl.to(right_to_left_g_one, 20, { right: "100%", ease: Linear.easeNone }, 0)

        cloudTl.to(left_to_right_s_two, 30, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(left_to_right_g_three, 16, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(right_to_left_g_four, 25, { right: "100%", ease: Linear.easeNone }, 0)

        cloudTl.to(left_to_right_s_three, 25, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(left_to_right_g_five, 20, { left: "100%", ease: Linear.easeNone }, 0)

        //mobile
        cloudTl.to(m_right_to_left_g_one, 20, { right: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_left_to_right_g_two, 30, { left: "100%", ease: Linear.easeNone }, 0)

        cloudTl.to(m_right_to_left_s_one, 25, { right: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_right_to_left_g_three, 25, { right: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_left_to_right_s_two, 20, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_left_to_right_g_four, 35, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_left_to_right_s_three, 20, { left: "100%", ease: Linear.easeNone }, 0)
        cloudTl.to(m_right_to_left_g_five, 20, { right: "100%", ease: Linear.easeNone }, 0)

        //bubbles parallax
        gsap.to(".bubbles_one", {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper_items",
                scrub: .2,
            },
        });
        gsap.to(".bubbles_two", {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper_items",
                scrub: .2,
            },
        });
        //tentacle image parallax
        gsap.to(".tentacle_image", {
            yPercent: -150,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper_items",
                scrub: .2,
            },
        });

        //bubbles parallax
        gsap.to(".m_bubbles_one", {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".mobile_wrapper_items",
                scrub: true
            },
        });

        gsap.to(".m_bubbles_two", {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".mobile_wrapper_items",
                scrub: true
            },
        });

        //tentacle image parallax
        gsap.to(".m_tentacle_image", {
            yPercent: -250,
            ease: "none",
            scrollTrigger: {
                trigger: ".mobile_wrapper_items",
                scrub: .2
            },
        });

    });

    // parallax scrolling
    document.addEventListener("scroll", () => {
        const
            top = window.pageYOffset,
            one = document.querySelector(".full_content_wrapper"),
            two = document.querySelector(".header_section");

        one.style.bottom = -(top * 0.2) + "px";
        two.style.bottom = -(top * 0.3) + "px";

        const
            three = document.querySelector(".mobile_full_content_wrapper"),
            four = document.querySelector(".mobile_header_section");

        three.style.bottom = -(top * 0.2) + "px";
        four.style.bottom = -(top * 0.3) + "px";

    });


    //fade in effect
    const amimatedText = document.querySelectorAll(".animate_text");
    function setupSplits() {
        amimatedText.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                },
                duration: 2.5,
                delay: 0.1,
                opacity: 0,
                ease: "sine"
            });
        });
    }
    setupSplits();

    //audio player
    $('.audio_controlls').on('click', function () {
        if ($(this).hasClass('active')) {
            document.getElementById('player').play();
            $(this).removeClass('active');
        } else {
            document.getElementById('player').pause();
            $(this).addClass('active');
        }
    });

    //preloader
    var timer = {};
    var totalPerc = 100;
    var percSegCount = 10;
    var multiplier = Math.ceil(totalPerc / percSegCount);
    var maxSegIdx = Math.ceil(totalPerc / percSegCount);
    var currentIdx = 0;
    var prefix = 'water level-';

    var updateWaterLevelByPerc = updateWaterLevelByPerc;

    init();

    function init() {
        timer = initTimer();
    }

    function initTimer() {
        return setInterval(function () {
            var currentPrec = getCurrentPerc();
            updateWaterLevelByPerc(currentPrec);
            incSegmentIdx();
        }, 500);
    }

    function updateWaterLevelByPerc(perc) {
        var $loader = $('#loader');

        $loader.attr('class', ''); // clear class
        $loader.attr('class', prefix + perc);
    }

    function incSegmentIdx() {
        if (currentIdx >= maxSegIdx) {
            currentIdx = 0;
        } else {
            currentIdx++;
        }
    }

    function getCurrentPerc() {
        var value = currentIdx * multiplier;
        return value;
    }

    function stopTimer() {
        clearInterval(timer);
    }

    var loader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        loader.style.display = 'none';
    });

    //lightbox
    lightbox.option({
        'fadeDuration': 300,
        'imageFadeDuration': 300,
    })

})(jQuery);