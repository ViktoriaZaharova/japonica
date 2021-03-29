$("body").on("click", ".btn-top-scroll", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

// slider
$('.main-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '  <path d="M99.1,504.731l-8.848-9.114A0.906,0.906,0,0,1,90,495a0.87,0.87,0,0,1,.255-0.623l8.848-9.114a0.84,0.84,0,0,1,1.216,0,0.9,0.9,0,0,1,0,1.252l-7.384,7.606H120.14a0.886,0.886,0,0,1,0,1.771H92.934l7.384,7.605a0.9,0.9,0,0,1,.255.623,0.879,0.879,0,0,1-.255.623A0.856,0.856,0,0,1,99.1,504.731Z" transform="translate(-90 -485)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '    <path d="M1821.9,504.731l8.85-9.114A0.945,0.945,0,0,0,1831,495a0.89,0.89,0,0,0-.25-0.623l-8.85-9.114a0.845,0.845,0,0,0-1.22,0,0.9,0.9,0,0,0,0,1.252l7.39,7.606h-27.21a0.886,0.886,0,0,0,0,1.771h27.21l-7.39,7.605a0.924,0.924,0,0,0-.25.623,0.883,0.883,0,0,0,.25.623A0.862,0.862,0,0,0,1821.9,504.731Z"\n' +
        '          transform="translate(-1800 -485)"/>\n' +
        '</svg>\n</button>',
    appendArrows: '.main-slider-nav',
    fade: true
});

$('.brands-slider').slick({
    slidesToShow: 7,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '  <path d="M99.1,504.731l-8.848-9.114A0.906,0.906,0,0,1,90,495a0.87,0.87,0,0,1,.255-0.623l8.848-9.114a0.84,0.84,0,0,1,1.216,0,0.9,0.9,0,0,1,0,1.252l-7.384,7.606H120.14a0.886,0.886,0,0,1,0,1.771H92.934l7.384,7.605a0.9,0.9,0,0,1,.255.623,0.879,0.879,0,0,1-.255.623A0.856,0.856,0,0,1,99.1,504.731Z" transform="translate(-90 -485)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '    <path d="M1821.9,504.731l8.85-9.114A0.945,0.945,0,0,0,1831,495a0.89,0.89,0,0,0-.25-0.623l-8.85-9.114a0.845,0.845,0,0,0-1.22,0,0.9,0.9,0,0,0,0,1.252l7.39,7.606h-27.21a0.886,0.886,0,0,0,0,1.771h27.21l-7.39,7.605a0.924,0.924,0,0,0-.25.623,0.883,0.883,0,0,0,.25.623A0.862,0.862,0,0,0,1821.9,504.731Z"\n' +
        '          transform="translate(-1800 -485)"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});

$('.hits-slider').slick({
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '  <path d="M99.1,504.731l-8.848-9.114A0.906,0.906,0,0,1,90,495a0.87,0.87,0,0,1,.255-0.623l8.848-9.114a0.84,0.84,0,0,1,1.216,0,0.9,0.9,0,0,1,0,1.252l-7.384,7.606H120.14a0.886,0.886,0,0,1,0,1.771H92.934l7.384,7.605a0.9,0.9,0,0,1,.255.623,0.879,0.879,0,0,1-.255.623A0.856,0.856,0,0,1,99.1,504.731Z" transform="translate(-90 -485)"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20">\n' +
        '    <path d="M1821.9,504.731l8.85-9.114A0.945,0.945,0,0,0,1831,495a0.89,0.89,0,0,0-.25-0.623l-8.85-9.114a0.845,0.845,0,0,0-1.22,0,0.9,0.9,0,0,0,0,1.252l7.39,7.606h-27.21a0.886,0.886,0,0,0,0,1.771h27.21l-7.39,7.605a0.924,0.924,0,0,0-.25.623,0.883,0.883,0,0,0,.25.623A0.862,0.862,0,0,0,1821.9,504.731Z"\n' +
        '          transform="translate(-1800 -485)"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});
$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});
