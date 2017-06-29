/**
 * Created by www1 on 2017/5/8.
 */

$(function () {
    //缓慢显示logo
    $(".logo img").show(1000);
    var $slider = $(".main_banner .slider");
    sliderShow($slider);

    //广告条动作
    $(".NIE_topBar_news").on({
        "mouseenter": function () {
            console.log(11);
            $(this).children().first().hide().end().last().show();
        },
        "mouseleave": function () {
            $(this).children().first().show().end().last().hide();
        }
    });
    //游戏菜单动作
    $(".NIE_topBar_menu").on({
        "mouseenter": function () {
            $(this).children().children().stop(true, true);
            $(this).children().last().children().show();
        },
        "mouseleave": function () {
            $(this).children().children().stop(true, true);
            $(this).children().last().children().hide();
        }
    });

    var $NIE_treasure = $(".NIE_treasure");
    treasureSlide($NIE_treasure);
    //设置鼠标事件
    $NIE_treasure.parent().on({
        "mouseenter": function () {
            clearInterval($NIE_treasure.timeId);
        },
        "mouseleave": function () {
            treasureSlide($NIE_treasure);
        }
    });

    //二维码扫描线开始工作
    var $scanLine = $(".scan_qrCode .scan_line");
    scan($scanLine);

    //window滚动函数,此函数包括：判断位置并使logo以及topbar隐藏/显示，二维码扫描线不可见停止，可见扫描
    $(window).on("scroll", function () {
        var $logoImg = $(".logo img");
        var $NIE_topBar = $("#NIE_topBar");
        var $top_bar = $(".top_bar");
        var $topLeft = $(".top_left");
        if (($(this).scrollTop() > $NIE_topBar.height() && !$top_bar.hasClass("fixed")) || ($(this).scrollTop() < $NIE_topBar.height() && $top_bar.hasClass("fixed"))) {
            $top_bar.toggleClass("fixed");
            $logoImg.stop(true);
            $topLeft.stop(true);
            $logoImg.toggle("normal");
            $topLeft.toggle("normal");
        }
        if ($(this).scrollTop() > ($scanLine.offset().top)) {
            clearScanInterval($scanLine);
        } else {
            scan($scanLine);
        }
    });

    //设置bunny动画
    $(".bunny img").on("mouseenter", function () {
        $(this).stop(true);
        $(this).hide("slow")
    }).on("mouseleave", function () {
        $(this).stop(true);
        $(this).show("slow")
    });

    //点击按钮切换大图动画。
    var $next_img = $(".main_banner>.next_img");
    $next_img.on("click", function () {
        if (!$slider.children().is(":animated")) {
            sliderAnimate($slider);
        }
    });

    //点击按钮鼠标悬浮放大，离开回位
    $(".next_img").on({
        mouseenter: function (e) {
            $(this).stop(true, true);
            $(this).animate({
                width: $(this).width() * 1.2,
                height: $(this).height() * 1.2,
                top: "-=" + $(this).height() * 0.1 + "px",
                left: "-=" + $(this).width() * 0.1 + "px"
            }, "normal")
        },
        mouseleave: function () {
            $(this).stop(true, true);
            $(this).animate({
                width: $(this).width() / 1.2,
                height: $(this).height() / 1.2,
                top: "+=" + $(this).height() * 0.1 / 1.2 + "px",
                left: "+=" + $(this).width() * 0.1 / 1.2 + "px"
            }, "normal")
        }
    });
    //二维码点击缩入
    $(".download_wrap .close_dl").on("click", function () {
        console.log(123);
        $(this).parent().hide("slow");
        clearScanInterval($scanLine);
        $(".dl_wrap_fold").show("slow").click(function () {
            $(this).hide("slow").siblings().show("slow").off();
            //二维码重新开始扫描
            scan($scanLine);
        });
    });
    //设置同人区显示
    var $top_bar_moreZq = $(".top_bar_moreZq")
    $(".top_nav_li").eq(4).on({
        mouseenter: function () {
            $(this).stop(true);
            $top_bar_moreZq.slideDown();
        },
        mouseleave: function () {
            $(this).stop(true);
            $top_bar_moreZq.mouseleave();
        }
    });
    $top_bar_moreZq.on({
        mouseleave: function () {
            $(this).stop(true);
            $(this).slideUp();
            $(this).flag = true;
        },
        mouseenter: function () {
            $(this).stop(true);
            $(this).slideDown();
        }
    });
    //同人通栏点击上浮
    $(".top_bar_more a").on({
        mouseenter: function () {
            $(this).children().first().stop(true).animate({top: -20}).end().last().stop(true).animate({top: 55})
        },
        mouseleave: function () {
            $(this).children().first().stop(true).animate({top: 0}).end().last().stop(true).animate({top: 75})
        }
    });

});
//会员宝箱及充值轮播，没有定位，直接剪切
function treasureSlide($NIE_treasure) {
    clearInterval($NIE_treasure.timeId);
    $NIE_treasure.timeId = setInterval(function () {
        $NIE_treasure.stop(true, true);
        $NIE_treasure.animate({top: -55}, function () {
            $NIE_treasure.css("top", 0);
            $NIE_treasure.append($NIE_treasure.children(":first"));
        })
    }, 2000);
}

//重新封装$scanLine计时器停止函数。
function clearScanInterval($scanLine) {
    clearInterval($scanLine.timeId);
    $scanLine.timeId = 0;
}

//二维码扫描线动画，在可见区域一直扫描，当页面卷动覆盖后清除定时器
function scan($scanLine) {
    //判断timeId如不为0则返回。
    if ($scanLine.timeId) {
        return;
    }
    qrScan($scanLine);
    $scanLine.timeId = setInterval(function (e) {
        qrScan($scanLine);
    }, 2000);
    function qrScan($scanLine) {
        $scanLine.stop(true, true);
        $scanLine.animate({top: 89}, 2000, function () {
            $scanLine.css("top", 10);
        });
    }
}

//slider动画函数回调
function sliderShow($slider) {
    if (!$slider) {
        $slider = $(".main_banner .slider");
    }
    $slider.not(".active").children().first().animate({
        left: 0,
        opacity: 1
    }, 1000).siblings().animate({left: 195, opacity: 1}, 1000);
    $slider.toggleClass("active");
}

//slider动画函数
function sliderAnimate($slider) {
    $slider.filter(".active").children().first().animate({
        left: 195,
        opacity: 0
    }, 2000).siblings().animate({left: 0, opacity: 0}, 1000, sliderShow)
};
