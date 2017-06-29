/**
 * Created by huangxiaojing on 2017/5/3.
 */
// window.onload = function(){
$(function(){


    //var trBTopOne = document.getElementById("trBTopOne");
    var trBTopOne = document.getElementsByClassName("trBTopOne");
    for(var i = 0 ; i < trBTopOne.length; i++){
        var img = trBTopOne[i].children[0];
        img.onmouseover = function(){
            this.setAttribute("class","img-bg");
            //this.nextSibling.style("display","block")
        }
        img.onmouseout = function(){
            this.removeAttribute("class")
        }
    }
    var trTopR = document.getElementById("trTopR")
    var lis = trTopR.getElementsByTagName("li");
    lis[0].style.lineHeight = "18px"
    var is = trTopR.getElementsByTagName("i");
    var spans = trTopR.getElementsByTagName("span");

    for(var j = 0 ; j < lis.length; j++){
        lis[j].setAttribute("value",j)
        lis[j].onmouseover = function(){
            var value = this.getAttribute("value");
            animate(this,{
                lineHeight :18
            })
            //this.style.lineHeight ="18px"
            animate(is[value],{
                marginTop : 0
                })
            //is[value].style.marginTop = "0px"
            spans[value].style.color = "red"
        }
        lis[j].onmouseout = function(){
            spans[0].style.color = "";
            for(var k = 1 ; k < lis.length; k++){
                //lis[k].style.lineHeight = "58px"
                animate(lis[k],{
                    lineHeight :58
                })
                //is[k].style.marginTop = "30px"
                animate(is[k],{
                    marginTop : 30
                })
                spans[k].style.color = "";
            }
        }
    }




    //for(var j = 0 ; j < lis.length; j++){
    //    lis[j].setAttribute("value",j)
    //      lis[j].onmouseover = function(){
    //          var value = this.getAttribute("value");
    //         this.style.lineHeight ="18px"
    //          is[value].style.marginTop = "0px"
    //          spans[value].style.color = "red"
    //      }
    //    lis[j].onmouseout = function(){
    //        spans[0].style.color = "";
    //        for(var k = 1 ; k < lis.length; k++){
    //            lis[k].style.lineHeight = "58px"
    //            is[k].style.marginTop = "30px"
    //            spans[k].style.color = "";
    //        }
    //    }
    //    }

    function animate(obj, json, fn) {
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var flag = true;
            for (var key  in  json) {
                // key就是json对象里面的属性   json[key]是属性值 也就是要到达的目标位置
                var leader = parseInt(getStyle(obj, key)) || 0;
                var target = json[key];//这个就是要达到的目标位置
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader + 'px';
                // 通过调试发现，只要有一个到达了目标位置，就清掉了定时器，不符合我们的要求
                // 我们的需求是，所有的属性都到达目标位置才能够清掉定时器
                // 因此只要有一个属性没有到达目标位置，就不能清掉定时器，当所有的属性都到达目标位置，才能够清掉定器
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {  // flag为true的时候，就说明所有的属性都到达了目标位置，这个时候才能够清掉定时器
                clearInterval(obj.timeId);
                // 如果有函数传进来，要执行回调函数里面的代码
                if (typeof fn == "function") {
                    fn();
                }
            }

        }, 15)
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }
})
