/* jshint esnext: true */
$(() => {
  'use strict';
  let $body = $('body'),
      $window = $(window),
      $modal = $('#modal-info');

  $window.on('resize', () => {
    if ($(window).width() >= 768){
      $modal.modal('hide');
    }
  }).trigger('resize');
});
