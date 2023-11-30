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
            changeArea.fadeOut(50);
            header.addClass('change-color');
        } else {
            changeArea.fadeIn(50);
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
    const b = $('.button-bbb');
    const c = $('.button-ccc');
    // 現在どちらが表示されているか判定用
    let flag1 = true;
    let flag2 = true;
    // 2連続でクリックしたか判定用
    let count1 = 0;
    let count2 = 0;

    b.addClass("down");
    $(".bbb").click(function () {
        flag1 = true;
        flag2 = false;
        count1++;
        c.removeClass("up");
        c.addClass("down");
        c.addClass("active");

        if (count1 === 2) {
            b.removeClass("active");
            c.removeClass("active");
            b.removeClass("up");
            b.addClass("down");
            count1 = 0;
            count2 = 0;
        } else if (flag1) {
            const z = $(b).hasClass('down');
            if (z) {
                b.removeClass("down");
                b.addClass("up");
            } else {
                b.removeClass("up");
                b.addClass("down");
            }
        }
    });

    c.addClass("down");
    $(".ccc").click(function () {
        flag2 = true;
        flag1 = false;
        count2++;
        b.removeClass("up");
        b.addClass("down");
        b.addClass("active");

        if (count2 === 2) {
            b.removeClass("active");
            c.removeClass("active");
            c.removeClass("up");
            c.addClass("down");
            count1 = 0;
            count2 = 0;
        } else if (flag2) {
            const x = $(c).hasClass('down');
            if (x) {
                c.removeClass("down");
                c.addClass("up");
            } else {
                c.removeClass("up");
                c.addClass("down");
            }
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
const mql = window.matchMedia('screen and (max-width: 899px)');

function checkBreakPoint(mql) {
    if (mql.matches) {
        // スマホ向け（899px以下のとき）
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