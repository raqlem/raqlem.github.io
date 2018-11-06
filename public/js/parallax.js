debounce(function() {
    var current_scroll = $(this).scrollTop();
    oVal = ($(window).scrollTop() / 3);
    var scroll = $(window).scrollTop();
    $('.page-header-image[data-parallax="true"]').css({
        'transform': 'translate3d(0,' + oVal + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-o-transform': 'translate3d(0,' + oVal + 'px,0)', 6
        //'transform': 'translate3d(-50%, -' + (scroll / 10) + '%, 0) scale(' + (100 + scroll / 10) / 100 + ')',
    });

})