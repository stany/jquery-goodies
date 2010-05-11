/* Exclusive Checkboxes in a group
  Example usage:
  
  $(function() {
    $('.ExclusiveCheckboxes :checkbox').checkMaxOne();
  });
*/

(function($) {

$.fn.extend({

  checkMaxOne: function(options) {
    var allCheckboxes = $(this);

    return this.each(function(i) {
      $(this).change(function(event) {
        
        var clickedElement = this;
        
        if ($(this).attr('checked')) {
          allCheckboxes.each(function() {
            if (this != clickedElement) $(this).attr('checked',false);
          });
        }
      });
    });
  }
});

})(jQuery);
