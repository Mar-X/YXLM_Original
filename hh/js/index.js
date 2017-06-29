/**
 * Created by hh on 2017/5/8.
 */
//
//$(function(){
//
//
//})
$(function(){
    setTimeout(function (){
        $(".bg").css({
            'transform':'scale(1.2)'
        })
    },500);
    $(".import").find("li").hover(function(){
       $(this).stop().animate({
           opacity:1,
           width:240,
           height:60
       },400).siblings().stop().animate({
           opacity:0.5 ,
           width:200,
           height:50
       },400);
   },function(){
       $(".import").find("li").stop().animate({ opacity:0.5 ,
           width:200,
           height:50
       },400);
   })
})







//$(window).load(function(){
//    $(window).scroll(function(){
//        $(window).scrollTop(0);
//    });
//    $(".import").find("li").hover(function(){
//        $(this).stop().animate({
//            opacity:1,
//            width:240,
//            height:60
//        },400).siblings().stop().animate({
//            opacity:0.5 ,
//            width:200,
//            height:50
//        },400);
//    },function(){
//        $(".import").find("li").stop().animate({ opacity:0.5 ,
//            width:200,
//            height:50
//        },400);
//    })
//
//    var clientX=$(window).width();
//    var clientY=$(window).height();
//    //console.log(clientY);
//    $(".big-bg,.bg").css({
//        width:clientX,
//        height:clientY
//    })
//    $(".bg").animate({
//        width:clientX*1.2,
//        height:clientY*1.2,
//
//    },1000)
//    //$(".big-bg").animate({
//    //      top:-clientX*0.2,
//    //      left:-clientY*0.2
//    //    }
//    //)
//})

// $(window).load(function(){
//     $(window).scroll(function(){
//         $(window).scrollTop(0);
//     });
//     $(".import").find("li").hover(function(){
//         $(this).stop().animate({
//             opacity:1,
//             width:240,
//             height:60
//         },400).siblings().stop().animate({
//             opacity:0.5 ,
//             width:200,
//             height:50
//         },400);
//     },function(){
//         $(".import").find("li").stop().animate({ opacity:0.5 ,
//             width:200,
//             height:50
//         },400);
//     })

//     var clientX=$(window).width();
//     var clientY=$(window).height();
//     //console.log(clientY);
//     $(".big-bg,.bg").css({
//         width:clientX,
//         height:clientY
//     })
//     // $(".bg").animate({
//     //     width:clientX*1.2,
//     //     height:clientY*1.2,
//     //     top: "-=" + $(this).height() *  + "px",
//     //     left: "-=" + $(this).width() * 0.1 + "px"
//     //
//     // },1000,function () {
//     //
//     //
//     // })
//     $(".bg").animate({
//         width:clientX*1.8,
//         height:clientY*1.8,
//         top: "-=" + $(this).height() * + "px",
//         left: "-=" + $(this).width() * 0.5 + "px"

//     },1000,"linear")
//     //$(".big-bg").animate({
//     //      top:-clientX*0.2,
//     //      left:-clientY*0.2
//     //    }
//     //)
// })