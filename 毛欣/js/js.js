
$(function(){

    var H=$(".con").height()/$(".con li").length;
    console.log(H);
    $(".con ul li").hover(function (){
        $(this).stop().animate({
            height:H*2
        },500).siblings().stop().animate({
            height:($(".con").height()-H*2)/($(".con li").length-1)
        },500);
    },function(){
        $(".con ul li").stop().animate({
            height:H
        })
    })
})


