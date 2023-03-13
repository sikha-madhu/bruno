$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $panels = $('.panel');
  
    var scroll = $window.scrollTop() + ($window.height() / 3);
  
    $panels.each(function() {
      var $this = $(this);
      if ($this.position().top <= scroll && $this.position().top + $this.outerHeight() > scroll) {
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $body.addClass('color-' + $this.data('color'));
      }
    });
  
    // Add this code to set the background color back to white if no panel is visible
    if (!$panels.is(':visible')) {
      $body.removeClass(function(index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });
      $body.addClass('color-white');
    }
});
$(document).on('scroll',function(){
  $('.textCorosol').css("left",math.max(400 - 0.35*window.scrollY,100) + "px");
})
$(window).scroll(function(){
  $(".bannertitle").css("opacity", 1 - $(window).scrollTop()/ 250);
  $(".bannertitle").css("font-size", 104 - $(window).scrollTop()/ 250);
});
// $(window).scroll(function(){
//   var fontSize = 24 - $(window).scrollTop()/ 250;
//   $(".bannertitle").css("font-size", fontSize + "px");
// });
$(function(){
  boxRollovers();
});

function boxRollovers()
{
  $selector = $("div");
  XAngle = 0;
  YAngle = 0;
  Z = 50;
  
  $selector.on("mousemove",function(e){
    var $this = $(this);
    var XRel = e.pageX - $this.offset().left;
    var YRel = e.pageY - $this.offset().top;
    var width = $this.width();
  
    YAngle = -(0.5 - (XRel / width)) * 40; 
    XAngle = (0.5 - (YRel / width)) * 40;
    updateView($this.children(".moreButton"));
    updateView($this.children(".buttonText"));
  });
  
  $selector.on("mouseleave",function(){
    oLayer = $(this).children(".moreButton");
    oLayer = $(this).children(".buttonText");
    oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    oLayer.find("strong").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
  });
}

function updateView(oLayer)
{
  oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
  oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
}
var _window = window,Splitting = _window.Splitting,ScrollOut = _window.ScrollOut;
Splitting();
ScrollOut({
  targets: '.word',
  scrollingElement: '.page' });