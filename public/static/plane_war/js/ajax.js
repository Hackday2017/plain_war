/**
 * Created by zhumengyue at 2017/11/23 0:34
 * description : 和后台有数据交互的函数
 */

// 登录函数
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
        setCookie("cardno",data.data.cardno); // 设置卡号
        if (getCookie("nowscore") != "" || parseInt(getCookie("nowscore")) != 0 ){
          updateHighScore()
          setCookie("maxscore",getCookie("nowscore")); // 设置最高分
        } else {
          setCookie("maxscore",data.data.score); // 设置最高分
          setCookie("nowscore",0); // 初始化当前分
        }
        getRank();
        window.location.href = "http://localhost/plane_war/public/plane/index/";
      }
    }
  });
}

// 获取排名情况
function getRank() {
  var cardno = getCookie("cardno");
  var form = new FormData();
  form.append("cardno",cardno);
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
      }
    }
  });
  return userrank;
}

// 上传高分
function updateHighScore() {
  var name = $("input[ name='name' ]").val();
  var score = game.score;
  var score = parseInt(document.getElementById("endScroe").innerHTML);
  var form = new FormData();
  form.append("name",name);
  form.append("score",score);
  $.ajax({
    url : "http://localhost/plane_war/public/plane/index/updatescore",
    type : "POST",
    data: form,
    processData:false,
    contentType:false,
    success:function(data){
      console.log(data);
      if (data.data) {
        alert("上传成功！");
      }
    }
  })
};
