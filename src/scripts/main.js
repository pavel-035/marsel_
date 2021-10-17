$(window).on('scroll', function() {
    $(".addClassOnScroll").each(function() {
        var height = $(window).height();
        var scrollTop = $(window).scrollTop();
        var obj = $(this);
        var pos = obj.position();
        if (height + scrollTop - 200 > pos.top) {
            $(this).addClass('animated');
        }
        else {
            $(this).removeClass('animated');
        }
    })
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
}

installMediaQueryWatcher("(min-width: 600px)", function(matches) {
    if (matches) {
        gsap.to(".header__fobos", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "top 80%",
                end: "bottom"
            },
            y: () => {
                return -200 * 100 / 1920 + 'vw';
            }
        });
        gsap.to(".header__deymos", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "top 80%",
                end: "bottom"
            },
            y: () => {
                return -200 * 100 / 1920 + 'vw';
            }
        });
        gsap.to(".header__mars", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start top",
                end: "bottom center"
            },
            y: () => {
                return -210 * 100 / 1920 + 'vw';
            }
        });
        gsap.to(".header__content", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 20%",
                end: "bottom"
            },
            y: () => {
                return 600 * 100 / 1920 + 'vw';
            }
        });

        gsap.to(".header", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 80%",
                end: "bottom"
            },
            backgroundPosition: '50% 100%'
        });

        gsap.to(".header", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 80%",
                end: "bottom"
                // markers: true,
            },
            backgroundPosition: '50% 100%'
        });
    } else {
        gsap.to(".header__fobos", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "top 80%",
                end: "bottom"
            },
            y: () => {
                return -110 * 100 / 600 + 'vw';
            }
        });
        gsap.to(".header__deymos", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "top 80%",
                end: "bottom"
            },
            y: () => {
                return -110 * 100 / 600 + 'vw';
            }
        });
        gsap.to(".header__mars", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start top",
                end: "bottom center"
            },
            y: () => {
                return -100 * 100 / 600 + 'vw';
            }
        });
        gsap.to(".header__content", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 20%",
                end: "bottom"
            },
            y: () => {
                return 500 * 100 / 600 + 'vw';
            }
        });

        gsap.to(".header", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 80%",
                end: "bottom"
            },
            backgroundPosition: '50% 100%'
        });

        gsap.to(".header", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1,
                start: "start 80%",
                end: "bottom"
                // markers: true,
            },
            backgroundPosition: '50% 100%'
        });
    }
});