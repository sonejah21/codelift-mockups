$('.modal-toggle').click(function(e){
  e.preventDefault();
  $('body').toggleClass('modal-active');
  $(this.hash).toggleClass('active');
});
