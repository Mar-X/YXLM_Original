/**
 * Created by www1 on 2017/5/8.
 */
    //在此创建li标签
var arr = ["官网首页", "新闻资讯", "游戏攻略", "游戏特色", "同人专区", "官方渠道"];
var hrefArr = ["http://itcast.cn", "http://itcast.cn", "http://itcast.cn", "http://itcast.cn", "http://itcast.cn", "http://itcast.cn"];
var $ul = $("<ul class='top_nav'></ul>");
for (var i = 0; i < arr.length; i++) {
    var $li = $("<li class='top_nav_li'></li>");
    var $a = $("<a class='nav_item' target='_blank'></a>").css({href: hrefArr[i]}).text(arr[i]);

    $li.append($a);
    $li.append($("<span class='line'></span>"));
    $ul.append($li);
}
$(".top_bar").append($ul);