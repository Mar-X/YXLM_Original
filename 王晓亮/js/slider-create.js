//在此创建轮播图
/**
 * Created by www1 on 2017/5/8.
 */
var arr = ["l_f_1.png", "r_m_1.png", "l_m_1.png", "r_f_1.png"];
var $ul = $("<ul></ul>");
var $liAct = $("<li class='slider active'></li>");
var $li = $("<li class='slider'></li>");
for (var i = 0; i < arr.length; i++) {
    var $r = $("<span class=\'r" + i + "\'></span>").css({background: 'url(王晓亮/images/' + arr[i] + ') no-repeat'}).offset({left: 170 + i % 2 * -220});
    if (i < 2) {
        $liAct.append($r);
    } else {
        $li.append($r);
    }
}
$ul.append($liAct);
$ul.append($li);

$(".main_banner").append($ul);
