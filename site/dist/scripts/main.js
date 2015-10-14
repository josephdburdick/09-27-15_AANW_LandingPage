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

  // $modal.on('hide.bs.modal', (e) => {
  //   setTimeout(function(){
  //     $("html, body").animate({ scrollTop: 0 }, 300);
  //   }, 100);
  // });

  $('[data-toggle="modal"]').on('click', (e) =>{
    e.preventDefault();
  });
});
