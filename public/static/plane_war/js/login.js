/**
 * Created by zhumengyue at 2017/11/22 16:42
 * description :
 */
// 注册逻辑
function register() {
  var cardno = $("input[ name='cardno' ]").eq(0).val(),
      name   = $("input[ name='name' ]").val(),
      major  = $("input[ name='major' ]").val(),
      gender = $("input[name='gender']:checked").val(),
      school = $("input[name='school']:checked").val();

  if (!cardno) {
    alert("请输入卡号！")
  } else if (!name) {
    alert("请输入姓名！")
  } else{
    var form = new FormData();
    form.append("cardno",cardno);
    form.append("name",name);
    form.append("major",major);
    form.append("gender",gender);
    form.append("school",school);

    //
    $.ajax({
      url : "http://localhost/plane_war/public/plane/login/adduser",
      type : "POST",
      data: form,
      processData:false,
      contentType:false,
      success:function(data){
        console.log(data);
        if (data.data) {
          alert("注册成功！你的卡号为："+cardno);
          document.getElementsByClassName("title")[0].click();
        }
      }
    })
  }

}

// 登录逻辑
function login() {
  var cardno = $("input[ name='cardno' ]").eq(1).val();

  var form = new FormData();
  form.append("cardno",cardno);

  // 登录
  userlogin(form);
  getRank(form);
  // $.ajax({
  //   url : "http://localhost/plane_war/public/plane/login/oklogin",
  //   type : "POST",
  //   data: form,
  //   processData:false,
  //   contentType:false,
  //   success:function(data){
  //     console.log(data);
  //     if (data.data) {
  //       alert("登录成功！你的卡号为："+cardno);
  //       setCookie("isLogin","true"); // 设置登录状态为已登录
  //       setCookie("maxscore",data.data.score); // 设置最高分
  //       setCookie("nowscore",0); // 初始化当前分
  //       // 获取排名信息
  //       $.ajax({
  //         url : "http://localhost/plane_war/public/plane/index/getmyrank",
  //         type : "POST",
  //         data: form,
  //         processData:false,
  //         contentType:false,
  //         success:function(data){
  //           console.log(data);
  //           if (data.data) {
  //             setCookie("userrank",data.data.userrank); // 设置排名
  //             console.log(document.cookie)
  //           }
  //         }
  //       })
  //       window.location.href = "http://localhost/plane_war/public/plane/index/";
  //     }
  //   }
  // })
}

window.onload = function () {
  // 当前是注册页面
  if (!user.nowIsLogin) {
    $(".title").css("display", "flex");
    $("#register-form").css("display", "block");
    $("#register-text").css("color", "#6277ff");
    $("#login-text").css("font-size", "24px");
  }
  // 点击切换登录/注册页面
  $(".title").click(function () {
      user.nowIsLogin = !user.nowIsLogin; // 切换登录/注册状态
      // 文字变化，表单隐藏/显示
      if (user.nowIsLogin) {
        $("#register-text").css("color", "");
        $("#register-text").css("font-size", "24px");
        $("#register-form").css("display", "none");
        $("#login-text").css("font-size", "30px");
        $("#login-text").css("color", "#6277ff");
        $("#login-form").css("display", "block");
      } else {
        $("#login-text").css("color", "");
        $("#login-text").css("font-size", "24px");
        $("#login-form").css("display", "none");
        $("#register-text").css("font-size", "30px");
        $("#register-text").css("color", "#6277ff");
        $("#register-form").css("display", "block");
      }
    }
  );
  // 登录/注册页 返回按钮
  $(".back").click(function () {
    window.location.href = "http://localhost/plane_war/public/plane/index/";
  })
}


