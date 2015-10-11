/* jshint esnext: true */
$(() => {
  'use strict';
  let $body = $('body'),
      $window = $(window),
      overlayOpenClass = 'overlay-open';

  $('[data-toggle="overlay"]').on('click', (e) => {
    e.preventDefault();
    $body.toggleClass(overlayOpenClass);

    if ($body.hasClass(overlayOpenClass)){
      if (!$('#main-footer .vertical-container').length){
        $('#main-footer .footer-content').wrap('<div class="vertical-container"><div class="vertical-content"></div></div>');
      }
    } else {
      unwrapVerticalContainer();
    }
  });

  $window.on('resize', () => {
    if ($(window).width() >= 768){
      $body.removeClass(overlayOpenClass);
      unwrapVerticalContainer();
    }
  }).trigger('resize');

  function unwrapVerticalContainer(){
    if ($body.hasClass(overlayOpenClass)){
      $('.vertical-container .vertical-content').unwrap();
    }
  }
});
