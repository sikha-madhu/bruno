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