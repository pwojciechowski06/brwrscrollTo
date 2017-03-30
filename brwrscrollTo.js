(function($) {
    $.fn.brwrscrollTo = function( object, time=2500 ) {
        return this.each( function() {
          $('html, body').animate({
                  scrollTop: $(object).offset().top
          }, time);
        });
    }
}(jQuery));
