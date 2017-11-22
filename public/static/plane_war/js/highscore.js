/**
 * Created by zhumengyue at 2017/11/22 12:34
 * description :
 */

$(function () {
  // 返回键
  $(".back").click(function () {
    window.location.href = "http://localhost/plane_war/public/plane/index/";
  });

  $(".wrapper").css("display","none");

  // 获取数据并在表格里显示
  $.ajax({
    url: "http://localhost/plane_war/public/plane/index/gethighscore",
    data: { TaskId: $("#taskid").val() },
    type: "GET",
    success: function (result) {
      // debugger;
      var tr = $(".data");
      var temp = result.data;
      if ( temp.length > 0 ){
        $(".wrapper").css("display","");
        
        $.each(temp,function (index,item) {
          var items = tr.clone();
          var _index = index;
          items.children("td").each(function (innerindex) {
            switch(innerindex){
              case 0 :
                $(this).html(item.cardno);
                break;
              case 1 :
                $(this).html(item.name);
                break;
              case 2 :
                $(this).html(item.score);
                break;
              case 3 :
                $(this).html(item.school);
                break;
              case 4 :
                $(this).html(item.major);
                break;
            }
          });
          items.insertBefore(tr);
        });
        $(".data").eq(temp.length).css("display","none")
      }
    }
  })
  
  function getrank(form) {
    $.ajax({
      url : "http://localhost/plane_war/public/plane/index/getmyrank",
      type : "POST",
      data: form,
      processData:false,
      contentType:false,
      success:function(data){
        console.log(data);
        if (data.data) {
          setCookie("userrank",data.data.userrank); // 设置排名
          // console.log(document.cookie)
        }
      }
    })
  }


})
