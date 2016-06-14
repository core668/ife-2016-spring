/*
    任务描述
    如图，模拟一个队列，队列的每个元素是一个数字，初始队列为空
    有一个input输入框，以及4个操作按钮
    点击"左侧入"，将input中输入的数字从左侧插入队列中；
    点击"右侧入"，将input中输入的数字从右侧插入队列中；
    点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
    点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
    点击队列中任何一个元素，则该元素会被从队列中删除
*/


window.onload = function () {
	//取得输入框和按钮
    var text = document.getElementById("text");
    var leftIn = document.getElementById("left-in");
    var leftOut = document.getElementById("left-out");
    var rightIn = document.getElementById("right-in");
    var rightOut = document.getElementById("right-out");
    var display = document.getElementById("display");
    //添加事件函数
    function addEvent(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
    //点击"左侧入"，将input中输入的数字从左侧插入队列中；
    addEvent(leftIn, "click", function () {
        var li = document.createElement("li");
        li.innerHTML = text.value;
        display.insertBefore(li, display.firstChild);
        //点击队列中任何一个元素，则该元素会被从队列中删除
        li.onclick = function(){
            display.removeChild(li);
        }
    });
    //insertBefore() 方法在您指定的已有子节点之前插入新的子节点。
    //点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
    addEvent(leftOut, "click", function () {
        if (display.firstChild !== null) {//第一个子元素存在
            display.removeChild(display.firstChild);
        } else {
            alert("队列为空！");
        }
    });
    //removeChild() 方法删除元素的某个指定的子节点。
    //点击"右侧入"，将input中输入的数字从右侧插入队列中；
    addEvent(rightIn, "click", function () {
        var li = document.createElement("li");
        li.innerHTML = text.value;
        display.appendChild(li);
        li.onclick = function(){
            display.removeChild(li);
        }
    });
    //appendChild() 方法向节点添加最后一个子节点。
    //点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
    addEvent(rightOut, "click", function () {
        if (display.lastChild !== null) {
            display.removeChild(display.lastChild);
        } else {
            alert("队列为空！");
        }
    });

    addEvent(text, "focus", function () {
       text.value = "";
    });

    addEvent(text, "focus", function () {
       text.value = "";
    });

    //点击队列中任何一个元素，则该元素会被从队列中删除
    
};






















