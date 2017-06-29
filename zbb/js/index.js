/**
 * Created by zbb on 2017/5/3.
 */
window.onload=function () {
        var box = document.getElementById("banner");
        var ul = document.getElementById("imgs");
        var lis = ul.children;
        var imgWidth = lis[0].offsetWidth;
        var bannerNav = document.getElementById("banner_nav");
        var links = bannerNav.children;
        var timeId = null;

        // 4 开启自动轮播
        var pic = 0; // 移动的图片的张数
        var cicle = 0;// 当前要变的小圆圈的索引
        timeId = setInterval(playNext,3000);

        // 5 鼠标移入大盒子，清除定时器
        box.onmouseover = function () {
            clearInterval(timeId);
        }
        // 6 鼠标移出大盒子，重新开启定时器
        box.onmouseout = function () {
            timeId = setInterval(playNext,3000);
        }

            /**
             * 封装一个播放下一张图片的函数
             */
        function playNext(){
            if (pic == lis.length - 1) {
                pic = 0;
                ul.style.left = "0px";//让ul迅速的恢复到原来的位置
            }
            pic++;
            var target = -imgWidth * pic;
            animate(ul, target,'left');
            if (cicle < links.length - 1) {
                cicle++;
            } else {
                cicle = 0;
            }
            for (var i = 0; i < links.length; i++) {
                links[i].removeAttribute("class");
            }
            links[cicle].setAttribute("class", "current");
        }


    // 1 为每个链接注册事件
        links[0].setAttribute("class","current");
        for( var i=0; i<links.length ;i++){
            links[i].setAttribute("index",i);

            //2  鼠标滑过为当前小圆圈设置样式
            links[i].onmouseover =function () {
                for( var j=0; j<links.length;j++){
                    links[j].removeAttribute("class","current");
                }
                this.setAttribute("class","current");
                var index = this.getAttribute("index");
                // 3 移动的距离就是当前圆圈的索引*一张图片的宽度
                pic = cicle = index;       //同步
                var target = -imgWidth*index;
                animate(ul,target,'left');
            }
        }



    /**
     * 封装了一个单属性的animate函数
     * @param obj
     * @param target
     * @param attr
     */
    function animate(obj,target,attr) {
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var leader =parseInt(getStyle(obj,attr)) ;//getStyle函数获取的是带px单位的数值
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            obj.style[attr] = leader+'px';
            if(leader == target){
                clearInterval(obj.timeId);
            }
        },10);
    }


    /**
     * 封装了一个获取当前属性值得函数
     * @param obj
     * @param attr
     * @returns {*}
     */
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else {
            return  window.getComputedStyle(obj,null)[attr];
        }
    }

}
    // Tab 栏切换

    $(function () {
        var ulWidth = $(".news_list").find("ul").width();
         $(".news_tab").hover(function () {
             $(".news_tab .first").removeClass("first");
             $(this).find("em").stop().animate({
                 opacity:1});
             $(this).siblings(".news_tab").find("em").stop().animate({
                 opacity:0
             })
            $(".news_list").stop().animate({
                left:-$(this).index()*ulWidth
            });
         })
    })