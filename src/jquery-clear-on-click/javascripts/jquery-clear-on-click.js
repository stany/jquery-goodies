/* Clear input or textarea elements from default text on clicking or focusing
   Example usage:
   
  $(function() {
    $('#user_comment').clearOnClick({text:'Click me to clear the content!...'});
    $('.ClearOnClick').clearOnClick({text:'Click me to clear the content!...'});
  });
*/

(function($){
  $.fn.clearOnClick = function(options) {
      
    var opts = $.extend({}, options);
      
    this.each(function(){
      var greyedOutColor = 'grey';
      var textColor      = 'black';
      $(this).css({ color: greyedOutColor }).attr({ value: opts.text }).focus(function(){
        if($(this).val()==opts.text){
          $(this).val("").css({ color: textColor });
        }
      }).blur(function(){
        if($(this).val()==""){
          $(this).css({ color: greyedOutColor }).val(opts.text);
        }
      });  
    });
    return this;
  };
})(jQuery);
