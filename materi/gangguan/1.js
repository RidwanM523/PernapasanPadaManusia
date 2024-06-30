  $(document).ready(function(){
    $('.latihan').hide();
    $('.tambahan').hide();
    $('.soal').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.latihan').show(100);
    $('.tambahan').show(100);
    $('.soal').show(100);
    $('.sebelum').hide(100);
  }
  
});