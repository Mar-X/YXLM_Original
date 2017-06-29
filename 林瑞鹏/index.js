/**
 * Created by Lynn_ on 2017/4/29.
 */
$(function(){
    $(".hero1,.hero2 div").on({
        'mouseenter':function(){
            $(this).stop().animate({
                'fontSize':24
            },300)
        },
        'mouseleave':function(){
            $(this).stop().animate({
                'fontSize':20
            })
        }
    })

    $(".hero_topBar ul li a").on("mouseenter",function(){
        $(this).css("font-size","36px")
    })
    $(".hero_topBar ul li a").on("mouseleave",function(){
        $(this).css("font-size","20px")
    })

    $(".hero_list_all").append($("#one").clone());
    $(".hero_list_all li").on("mouseenter",function(){
        $(this).stop().animate({
            'opacity':0.4
        })
    })
    $(".hero_list_all li").on("mouseleave",function(){
        $(this).stop().animate({
            'opacity':1
        })
    })

    var boxWidth = 118*7;
    var num=0;
    $(".arrow").on("click",function(e){
        e.preventDefault()
        num++;
        if(num<3){
            $(".hero_list_all").stop().animate({
                left:-boxWidth * num
            },300)
        }
        else{
            num = 0 ;
            $(".hero_list_all").animate({
                left:-boxWidth * num
            },0,function(){
                num++;
                $(".hero_list_all").animate({
                    left:-boxWidth * num
                },300)
            })
        }
    })
})