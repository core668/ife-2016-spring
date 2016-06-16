/*
获取checkbox,然后点击变换背景颜色做交互.
 */
 var table = document.getElementsByTagName('table')[0];
 var outer = document.getElementsByClassName('outer');
 var inner = document.getElementsByClassName('inner');
table.onclick = function(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;

	if (target.className == 'outer') {
		for (var i = 0; i < outer.length; i++) {
			if (target.firstElementChild.style.display == "none") {
		     target.style.backgroundColor = "#f07600";
		     target.firstElementChild.style.display = "block";
		   }else {
		     target.style.backgroundColor = "#ebebeb";
		     target.firstElementChild.style.display = "none";
		   }
		}
	}
}



















