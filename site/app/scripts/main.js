/* jshint esnext: true */
$(() => {
  $('[data-toggle="overlay"]').on('click', (e) => {
    e.preventDefault();
    $('body').toggleClass('overlay-open');
  });

  $('window').on('resize', () => {
    console.log(this.width());
  }).trigger('resize');
});
