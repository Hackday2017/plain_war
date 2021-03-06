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
      var num = 0;
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
                $(this).html(_index+1);
                break;
              case 1 :
                $(this).html(item.name);
                break;
              case 2 :
                $(this).html(item.score);
                break;
            }
          });
          items.insertBefore(tr);
          num++;
          if(num==10) return false;
        });
        $(".data").eq(temp.length).css("display","none")
      }
    }
  })
})
