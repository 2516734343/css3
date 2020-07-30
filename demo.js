function init() {
    bindEvent();
}
init();
function bindEvent() {
    $('.cube').on('mouseenter',function (e) {
        addId(e,'in',this);
        // changeBg(this);
    }).on('mouseleave',function (e) {
        addId(e,'out',this);
        // changeBg(this);
        $(this).on('animationend',function () {
            if ($(this).attr('id').indexOf('out') !== -1) {
                $(this).attr('id','');//将移出后的id值清空
            }
        })

    })
}
function addId(e,status,item) {
    var d = getDir(e,item);
    var str = status;
    switch (d) {
        case 0:
            str +=  '-top';
            $('.wrapper').css({
                backgroundColor:'#00FFFF'
            })
            break;
        case 1:
            str += '-right';
            $('.wrapper').css({
                backgroundColor:'#F3E2A9'
            })
            break;
        case 2:
            str += '-bottom';
            $('.wrapper').css({
                backgroundColor:'#58FAAC'
            })
            break;
        case 3:
            str += '-left';
            $('.wrapper').css({
                backgroundColor:'#F2F5A9'
            })
            break;
    }
    $(item).attr('id',str);//改变item的id值
}
function getDir(e,item) {
    var w = item.offsetWidth;
    var h = item.offsetHeight;
    var x = e.clientX - item.offsetLeft - w /2;
    var y = e.clientY - item.offsetTop - h / 2;
    // console.log(x);
    // console.log(y);
    var d = (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    // console.log(d);
    return d;
}
// function changeBg(item) {
//     var bg = $(item).attr('data-bg');
//     $('.wrapper').css({
//         backgroundColor:bg
//     })
// }