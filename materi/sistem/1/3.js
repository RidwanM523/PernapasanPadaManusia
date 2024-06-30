function gbr1(){
    induksi.style.display="";
    menggosok.style.display="none";
    elektro.style.display="none";


    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
}
function gbr2(){
  induksi.style.display="none";
  menggosok.style.display="";
  elektro.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b"; 
}
function gbr3(){
  induksi.style.display="none";
  menggosok.style.display="none";
  elektro.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";
}

var vid = document.getElementById("vidio");
function coba1() { 
    vid.currentTime=18;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=141;
    vid.play();
  } 
  function coba3() { 
    vid.currentTime=342;
    vid.play();
  } 
  
  $(document).ready(function(){
    $('.kesimpulansebelum').hide();
    $('.latihanhide').hide();
    $('.pertanyaansingkat').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.kesimpulansebelum').show(100);
    $('.sebelum').hide(100);
    $('.latihanhide').show();
    $('.pertanyaansingkat').show();
  }
  
});