/**
 * Created by zhumengyue at 2017/11/22 19:25
 * description :
 */

// 写cookie
function setCookie(name,value) {
  var hours = 1; // 持续时间
  var minutes = 10;
  var seconds = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + minutes * 60 * 1000);
  document.cookie = name + "="+ value + ";expires=" + exp.toGMTString();
}

// 读cookie
function getCookie(name) {
  var arr , reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return arr[2];
  else
    return null;
}

// 删除cookie
function deleteCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 10000 * 24 * 3600 * 1000);
  var cval = getCookie(name);
  if(!cval) {
    document.cookie = name + "="+cval+";expires="+exp.toGMTString();
  }
}