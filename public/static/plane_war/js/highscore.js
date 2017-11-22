/**
 * Created by zhumengyue at 2017/11/22 12:34
 * description :
 */
$(function () {
  $(".wrapper").css("display","none");

  $.ajax({
    url: "http://localhost/plane_war/public/plane/index/gethighscore",
    data: { TaskId: $("#taskid").val() },
    type: "GET",
    success: function (result) {
      // debugger;
      var tr = $(".data");
      // console.log(result.data.rows)
      var temp = result.data;
      if ( temp.length > 0 ){
        $(".wrapper").css("display","");
        
        $.each(temp,function (index,item) {
          // console.log(index)
          // console.log(item)
          var items = tr.clone();
          var _index = index;
          items.children("td").each(function (innerindex) {
            switch(innerindex){
              case 0 :
                $(this).html(item.cardno);
                console.log(item.cardno)
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
})