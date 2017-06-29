/**
 * Created by Lynn_ on 2017/4/29.
 */
var Txt = {
    /**
     *��װ��һ����ȡ��ǩ���ı��ĺ���
     *@param ele
     *@return {*}
     */
    getText: function (ele) {
        if (typeof ele.innerText == "String") {
            return ele.innerText;
        }
        else {
            return ele.textContent;
        }
    },

    /**
     *��װ��һ�����ݰ汾�����ñ�ǩ���ı��ĺ���
     *@param ele
     *@param value
     */
    setText:function(ele, value){
        if (typeof ele.innerText == "String"){
            return ele.innerText = value;
        }
        else{
            return ele.textContent = value;
        }
    },


}





var Tag = {
    /**
     * ��װ��һ�����ݰ汾�Ļ����һ����ǩ�ڵ�ĺ���
     * @param ele
     * @returns {*}
     */
    getNextElement:function(ele){
        if(ele && ele.nextElementSibling){
            return ele.nextElementSibling;
        }
        else{
            if(ele){
                ele = ele.nextSibling;
                while(ele.nextSibling != 1){
                    ele = ele.nextSibling;
                }
                return  ele;
            }
        }
    },


    /**
     * ��װ��һ�����ݰ汾�Ļ����һ����ǩ�ڵ�ĺ���
     * @param ele
     * @returns {*}
     */
    getPreviousElement:function(ele){
        if(ele && ele.previousElementSibling){
            return ele.previousElementSibling;
        }
        else{
            ele = ele.previousSibling;
            while(ele.previousSibling != 1){
                ele = ele.previousSibling;
            }
            return ele;
        }
    },


    /**
     * ��װ��һ�����ݰ汾�Ļ�õ�һ����ǩ�ڵ�ĺ���
     * @param ele
     * @returns {*}
     */
    getFirstElement:function(ele){
        if(ele){
            if(ele.firstElementChild){
                return ele.firstElementChild;
            }
            else{
                if(ele){
                    ele = ele.firstChild;
                    while(ele.firstChild != 1){
                        ele = ele.firstChild;
                    }
                    return ele;
                }
            }
        }
    },


    /**
     * ��װ��һ�����ݰ汾�Ļ�õ�һ����ǩ�ڵ�ĺ���
     * @param ele
     * @returns {*}
     */
    getLastElement:function(ele){
        if(ele){
            if(ele.lastElementChild){
                return ele.lastElementChild;
            }
            else{
                if(ele){
                    ele = ele.lastChild;
                    while(ele.lastChild != 1){
                        ele = ele.lastChild;
                    }
                    return ele;
                }
            }
        }
    },
}



/**
 * ��װ��һ�������ƶ��ĺ���
 * @param obj
 * @param target
 */
function animateJ(obj, target) {
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10;
        step = leader < target ? step : -step;
        if (Math.abs(leader - target) > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        }
        else {
            clearInterval(obj.timeId);
            obj.style.left = target + "px"
        }

    }, 15);
}



/**
 * ��װ��һ���ɣ��쵽���ƶ�����animate����
 * @param obj
 * @param target
 */
function animateFL(obj, target) {
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader == target) {
            clearInterval(obj.timeId)
        }
    }, 15);
}



/**
 * ��װһ�������Ե�animate����
 * @param obj
 * @param target
 * @param attr
 */
function animateOne(obj,target,attr){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function(){
        var leader = parseInt(getStyle(obj,attr))||0;
        var step = (target - leader)/10;
        step = step>0 ? Math.ceil(step):Math.floor(step);
        leader = leader +step;
        obj.style[attr] = leader +"px";
        if(leader == target){
            clearInterval(obj.timeId)
        }
    },15)
}


/**
 * ��װ������Ե�animate����
 * @param obj
 * @param json
 */
function animateMore(obj,json){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function(){
        var flag = true;
        for(var key in json){
            var leader = parseInt(getStyle(obj,key))||0;
            var target = json[key];
            var step = (target - leader)/10;
            step = step>0 ? Math.ceil(step):Math.floor(step);
            leader = leader +step;
            obj.style[key] = leader +"px";
            if(leader != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timeId)
        }
    },15)
}


/**
 * ��װ�˶�����Ե�animate����+�ص�����+͸����+�㼶
 * @param obj
 * @param json
 * @param fn
 */
function animateAll(obj,json,fn){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function(){
        var flag = true;
        for(var key in json){
            if(key == "opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0;
                var target = json[key]*100; //
                var step = (target - leader)/10;
                step = step>0 ? Math.ceil(step):Math.floor(step);
                leader = leader +step;
                obj.style[key] = leader/100;
            }
            else if(key == "zIndex"){
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key]; //Ŀ��λ��
                var step = (target - leader)/10;
                step = step>0 ? Math.ceil(step):Math.floor(step);
                leader = leader +step;
                obj.style[key] = leader;
            }
            var leader = parseInt(getStyle(obj,key))||0;
            var target = json[key];
            var step = (target - leader)/10;
            step = step>0 ? Math.ceil(step):Math.floor(step);
            leader = leader +step;
            obj.style[key] = leader +"px";
            if(leader != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timeId);
            if(fn){
                fn();
            }
        }
    },15)
}

/**
 * ��װһ����ȡĳ�������ǩ�����Եĺ���
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}


/**
 * ��װ��һ����ȡҳ�汻��ȥ�ĸ߶Ȼ���������ĺ���
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll(){
    return {
        scrollTop:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ||0,
        scrollLeft:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft ||0
    }
}


/**
 *��װ��һ��client����ҳ�����������
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0
    }
}


/**
 *��װһ����ȡҳ��ĳ�������λ��
 * @param e
 * @returns {{pageX: (*|Number|number), pageY: (*|Number|number)}}
 */
function page(e){
    return {
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft ,
        pageY: e.pageY || e.clientY + document.documentElement.scrollTop
    }
}


/**
 * ��װһ�����ݰ汾������¼��ĺ���
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj,type,listener){
    if(obj.removeEventListener){
        obj.removeEventListener(type,listener,false);
    }
    else if(obj.detachEvent){
        obj.detachEvent(type,listener);
    }
    else{
        obj["on"+type] = null;
    }
}

/**
 * ��װ��һ�����ݰ汾��ע���¼��ĺ���
 * @param obj
 * @param type
 * @param fn
 */
function addEventListener(obj,type,listener){
    if(obj.addEventListener){
        obj.addEventListener(type,listener,false);
    }
    else if(obj.attachEvent){
        obj.attachEvent("on"+type,listener);
    }
    else{
        obj["on"+type] = listener;
    }
}


/**
 *��װ��һ����װ���ݵ����ð���¼�
 * @param e
 */
function stopPropagation(e){
    if(e&& e.stopPropagation){
        e.stopPropagation();
    }
    else{
        e.cancelBubble = true;
    }
}

/**
 * ��װһ��$����
 * @param str
 * @returns {*}
 */
function $(str){
    if(typeof str == "function"){
        window.onload = str;
    }
    else{
        var char = str.charAt(0);
        if(char == "#"){
            return document.getElementById(str.slice(1));
        }
        else if(char == "."){
            return document.getElementsByClassName(str.slice(1));
        }
        else{
            return document.getElementsByTagName(str);
        }
    }
}