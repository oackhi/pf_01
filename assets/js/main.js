//header
$(function () {
    var navPos = $('#header').offset().top;
    var navHeight = $('#header').outerHeight();
    var scrollend = $('#main-area').offset().top - 130; //ページ上部からの距離を取得
    var changeArea = $('.js-change-area');
    var header = $('.js-header');
    $(document).scroll(function () {
        var distance = $(this).scrollTop(); //スクロールした距離を取得
        if (scrollend <= distance) {
            changeArea.fadeOut(200);
            header.addClass('change-color');
            $('.l-header__title, .p-items__wrap, .p-magazine__wrap').addClass('active');
        } else {
            changeArea.fadeIn(200);
            header.removeClass('change-color');
            $('.l-header__title, .p-items__wrap, .p-magazine__wrap').removeClass('active');
        }
    });
    $('.change-color').toggleClass('active');
});


$(function () {
    let flag = true;
    let flags = [0, 0];
    let classes = ['p-items__wrap', 'p-magazine__wrap'];

    function toggleClasses() {
        $('.l-header__top').toggleClass('active');
        $('.l-header__logo').toggleClass('active');
        $('.l-header__menu').toggleClass('active');
        $('.l-header__link').toggleClass('active');
        $('.l-header__top--wrap').toggleClass('active');
        $('.c-contact').toggleClass('active');
        $('.c-search').toggleClass('active');
        $('.c-login').toggleClass('active');
        $('.c-cart').toggleClass('active');
    }

    function clickHandler(index, buttonClass) {
        $(`.${buttonClass}`).click(function () {
            classes.forEach((cls, clsIndex) => {
                if (clsIndex === index) {
                    $(`.${cls}`).addClass("count-result");
                    flags[clsIndex]++;
                } else {
                    $(`.${cls}`).removeClass("count-result");
                }
            });

            if (flag) {
                $(".wrap-active").slideToggle(".magazine-list");
                flag = false;
                toggleClasses();
            } else if (flags[index] === 2) {
                $(`.${classes[index]}`).removeClass("count-result");
                $(".wrap-active").slideToggle(".magazine-list");
                toggleClasses();
                flag = true;
                flags = [0, 0];
            }
        });
    }

    ['items-list', 'magazine-list'].forEach((cls, index) => {
        clickHandler(index, cls);
    });
});



function controlAccordion(target, nexttarget, flag, nextflag, count, nextcount) {
    flag = true;
    nextflag = false;
    count++;
    nexttarget.removeClass("up");
    nexttarget.addClass("down");
    nexttarget.addClass("active");

    if (count === 2) {
        target.removeClass("active");
        nexttarget.removeClass("active");
        target.removeClass("up");
        target.addClass("down");
        count = 0;
        nextcount = 0;
    } else if (flag) {
        const z = $(target).hasClass('down');
        if (z) {
            target.removeClass("down");
            target.addClass("up");
        } else {
            target.removeClass("up");
            target.addClass("down");
        }
    }

    return [flag, nextflag, count, nextcount];
}

$(function () {
    const b = $('.button-itemsList');
    const c = $('.button-magazineList');
    // 現在どちらが表示されているか判定用
    let flag1 = true;
    let flag2 = true;
    // 2連続でクリックしたか判定用
    let count1 = 0;
    let count2 = 0;

    b.addClass("down");
    $(".items-list").click(function () {
        [flag1, flag2, count1, count2] = controlAccordion(b, c, flag1, flag2, count1, count2);
    });

    c.addClass("down");
    $(".magazine-list").click(function () {
        [flag2, flag1, count2, count1] = controlAccordion(c, b, flag2, flag1, count2, count1);
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