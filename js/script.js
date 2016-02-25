$(function () {
  var $overlay = $('.overlay');
  var $toggle = $('.toggle-menu');
  var toggleOverlay = function (evt) {
    if (!$(evt.target).closest($overlay).length) {
        $overlay.addClass('hidden');
    } else {
        $(document).one('click', toggleOverlay);
    }
  }
  $toggle.click(function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $overlay.toggleClass('hidden');
    $(document).one('click', toggleOverlay);
  });
});
