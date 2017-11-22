/**
 * Created by zhumengyue at 2017/11/22 16:42
 * description :
 */
window.onload = function () {
  // 当前是注册页面
  if (!user.nowIsLogin) {
    $(".title").css("display","flex");
    $("#register-form").css("display","block");
    $("#register-text").css("color","#6277ff");
    $("#login-text").css("font-size","24px");
  }

  // 点击切换登录/注册页面
  $(".title").click (function () {
    user.nowIsLogin = !user.nowIsLogin; // 切换登录/注册状态
    // 文字变化，表单隐藏/显示
    if ( user.nowIsLogin ) {
      $("#register-text").css("color","");
      $("#register-text").css("font-size","24px");
      $("#register-form").css("display","none");
      $("#login-text").css("font-size","30px");
      $("#login-text").css("color","#6277ff");
      $("#login-form").css("display","block");
    } else {
      $("#login-text").css("color","");
      $("#login-text").css("font-size","24px");
      $("#login-form").css("display","none");
      $("#register-text").css("font-size","30px");
      $("#register-text").css("color","#6277ff");
      $("#register-form").css("display","block");
    }
  }
  )
}
