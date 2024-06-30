var vid = document.getElementById("vidio");
function alat() { 
    vid.currentTime=13;
    vid.play();
  } 
  function coba() { 
    vid.currentTime=52;
    vid.play();
  } 
  
  $(document).ready(function(){
    $('.kesimpulan1').hide();
    $('.kesimpulan').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.kesimpulan1').show();
  }
  
});