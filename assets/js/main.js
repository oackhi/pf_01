//header
$(function () {
    var navPos = $('#header').offset().top;
    var navHeight = $('#header').outerHeight();
    var scrollend = $('#header-area').offset().top - 54; //ページ上部からの距離を取得
    $(document).scroll(function () {
        distance = $(this).scrollTop(); //スクロールした距離を取得
        if (scrollend <= distance) {
            $('.js-change-area').fadeOut();
            $('.js-header').addClass('change-color');

        } else {
            $('.js-change-area').fadeIn();
            $('.js-header').removeClass('change-color');
        }
    });
});


//scrollfadein
$(function () {
    $(window).scroll(function () {
        $('.js-fade').each(function () {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(function () {
                    $('.js-fade').each(function (i) {
                        $(this).delay(i * 200).queue(function () {
                            $(this).addClass('scroll');
                        });
                    });
                });

            }
        });
    });
});

// pickup
$('.p-pickup__slider').slick({
    arrows: false,
    variableWidth: true
});

// allitem, magazine
const mql = window.matchMedia('screen and (max-width: 768px)');

function checkBreakPoint(mql) {
    if (mql.matches) {
        // スマホ向け（768px以下のとき）
        $('.l-allitems__list').not('.slick-initialized').slick({
            arrows: false,
            variableWidth: true
        });
        $('.p-magazine__contents').not('.slick-initialized').slick({
            arrows: false,
            variableWidth: true
        });
    } else {
        // PC向け
        $('.l-allitems__list.slick-initialized').slick('unslick');
        $('.p-magazine__contents.slick-initialized').slick('unslick');
    }

}

// ブレイクポイントの瞬間に発火
mql.addListener(checkBreakPoint);

// 初回チェック
checkBreakPoint(mql);