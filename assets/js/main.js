//header
$(function () {
    var navPos = $('#header').offset().top;
    var navHeight = $('#header').outerHeight();
    var scrollend = $('#main-area').offset().top - 54; //ページ上部からの距離を取得
    var changeArea = $('.js-change-area');
    var header = $('.js-header');
    $(document).scroll(function () {
        var distance = $(this).scrollTop(); //スクロールした距離を取得
        if (scrollend <= distance) {
            changeArea.fadeOut();
            header.addClass('change-color');
        } else {
            changeArea.fadeIn();
            header.removeClass('change-color');
        }
    });
    $('.change-color').toggleClass('active');
});


$(function () {
    let flag = true;
    let flags = [0, 0];
    let classes = ['ppp', 'qqq'];

    function toggleClasses() {
        $('.l-header__top').toggleClass('active');
        $('.l-header__logo').toggleClass('active');
        $('.l-header__menu').toggleClass('active');
        $('.c-logo__white').toggleClass('active');
        $('.c-logo__black').toggleClass('active');
        $('.l-header__link').toggleClass('active');
        $('.c-contact').toggleClass('active');
        $('.c-search').toggleClass('active');
        $('.c-login').toggleClass('active');
        $('.c-cart').toggleClass('active');
    }

    function clickHandler(index, buttonClass) {
        $(`.${buttonClass}`).click(function () {
            classes.forEach((cls, clsIndex) => {
                if (clsIndex === index) {
                    $(`.${cls}`).addClass("iii");
                    flags[clsIndex]++;
                } else {
                    $(`.${cls}`).removeClass("iii");
                }
            });

            if (flag) {
                $(".abc").slideToggle(".ccc");
                flag = false;
                toggleClasses();
            } else if (flags[index] === 2) {
                $(`.${classes[index]}`).removeClass("iii");
                $(".abc").slideToggle(".ccc");
                toggleClasses();
                flag = true;
                flags = [0, 0];
            }
        });
    }

    ['bbb', 'ccc'].forEach((cls, index) => {
        clickHandler(index, cls);
    });
});



$(function () {
    let flag;
    let flag1;
    let flag2;

    flag = true;
    flag1 = 0;
    flag2 = 0;

    const b = $('.button-bbb');
    const c = $('.button-ccc');

    b.addClass("down");
    $(".bbb").click(function () {
        // b.next().slideToggle(500);
        flag2++;

        if (flag1 === 0) {

            // if (flag) {
            //     b.removeClass("down");
            //     b.addClass("up");
            //     c.addClass("active");
            //     flag = false;
            // } else if (flag1 === 2) {
            //     b.removeClass("up");
            //     c.removeClass("active");
            //     b.addClass("down");
            //     flag = true;
            //     flag1 = 0;
            //     flag2 = 0;
            // }
            const z = $(b).hasClass('down');
            c.removeClass("up");
            c.addClass("down");
            if (z) {
                b.removeClass("down");
                b.addClass("up");
            } else {
                b.removeClass("up");
                b.addClass("down");
            }

        } else {
            flag1 = 0;
        }
    });

    c.addClass("down");
    $(".ccc").click(function () {
        // b.next().slideToggle(500);
        flag1++;
        if (flag2 === 0) {

            // if (flag) {
            //     c.removeClass("down");
            //     c.addClass("up");
            //     b.addClass("active");
            //     flag = false;
            // } else if (flag2 === 2) {
            //     c.removeClass("up");
            //     b.removeClass("active");
            //     c.addClass("down");
            //     flag = true;
            //     flag1 = 0;
            //     flag2 = 0;
            // }
            const x = $(c).hasClass('down');
            b.removeClass("up");
            b.addClass("down");
            if (x) {
                c.removeClass("down");
                c.addClass("up");
            } else {
                c.removeClass("up");
                c.addClass("down");
            }
        } else {
            flag2 = 0;
        }
    });
});


// sp_menu
$(function () {
    const nav = $('.sp_nav');
    $('#sp_menu, .close').on('click', function () {
        nav.toggleClass('toggle');
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
            nextArrow: '<img src="./assets/images/arrow_right.png" class="slide-arrow next-arrow">',
            prevArrow: '<div class="prev-arrow"></div>',
            variableWidth: true
        });
        $('.p-magazine__contents').not('.slick-initialized').slick({
            nextArrow: '<img src="./assets/images/arrow_right.png" class="slide-arrow next-arrow">',
            prevArrow: '<div class="prev-arrow"></div>',
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