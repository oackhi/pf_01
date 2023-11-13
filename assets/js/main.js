$('.p-pickup__slider').slick({
    arrows: false,
    variableWidth: true
});

var mql = window.matchMedia('screen and (max-width: 768px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
        // スマホ向け（768px以下のとき）
        $('.l-allitems__list').not('.slick-initialized').slick({
            //スライドさせる
            lidesToShow: 2,
            arrows: false,
            variableWidth: true
        });
    } else {
        // PC向け
        $('.l-allitems__list.slick-initialized').slick('unslick');
    }
}

// ブレイクポイントの瞬間に発火
mql.addListener(checkBreakPoint);

// 初回チェック
checkBreakPoint(mql);