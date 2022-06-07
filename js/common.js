$(function(){

  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href; //값을 반환
  }
  let currentHref = splitLocation($(location));

  $("#lnb ul li a").each(function(){
    if ( splitLocation($(this)) == currentHref ) {
      console.log(splitLocation($(this)));
      console.log(splitLocation($(location)));
      $(this).addClass("on")
    }
  });

// accordion
  $(".accordion dd:not(:first)").css({
    "display":"none",
    "height":0
  });

  $(".accordion dl dt").click(function(){
    let thisElem = $(this)
    if ( $("+dd",thisElem).css("display") == "none" ) {
      $(".accordion dd").each(function(){
         if ( $(this).css("display") === "block") {
          $(this).animate({height: 0},"slow",function(){
            $(this).css("display","none")
          });
        };
        console.log($(this).css("height"));
      });
      $("+dd",this).css("display","block").animate({height: 300})
    };
  });
});
