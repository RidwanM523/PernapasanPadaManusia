var vid = document.getElementById("vidio");

function pengantar() { 
  vid.currentTime=1;
  vid.play();
} 
function coba1() { 
    vid.currentTime=26;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=65;
    vid.play();
  } 
  function coba3() { 
    vid.currentTime=118;
    vid.play();
  } 
  
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.latihanhide').hide();
     $('.kesimpulantam').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show(100);
    $('.kesimpulantam').show(100);
  }
  
});