/**
 * Created by zhumengyue at 2017/11/23 0:34
 * description :
 */
function userlogin(form) {
  $.ajax({
    url : "http://localhost/plane_war/public/plane/login/oklogin",
    type : "POST",
    data: form,
    processData:false,
    contentType:false,
    success:function(data){
      console.log(data);
      if (data.data) {
        alert("登录成功！你的卡号为："+data.data.cardno);
        setCookie("isLogin","true"); // 设置登录状态为已登录
        setCookie("maxscore",data.data.score); // 设置最高分
        setCookie("nowscore",0); // 初始化当前分
        setCookie("cardno",data.data.cardno); // 设置卡号
        window.location.href = "http://localhost/plane_war/public/plane/index/";
      }
    }
  });
}

function getRank(form) {
  var userrank;
  $.ajax({
    url : "http://localhost/plane_war/public/plane/index/getmyrank",
    type : "POST",
    data: form,
    processData:false,
    contentType:false,
    success:function(data){
      console.log(data);
      if (data.data) {
        userrank = data.data.userrank;
        setCookie("userrank",userrank); // 设置排名
        console.log(document.cookie)
      }
    }
  });
  return userrank;
}