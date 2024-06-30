function gbr1(){
    batang.style.display="";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="black";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";
}
function gbr2(){
    batang.style.display="none";
    jarum.style.display="";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="black";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";
}
function gbr3(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="";
    lingkaran.style.display="none";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="black";
    tombol4.style.background="#04709b";
    tombol5.style.background="#04709b";
}
function gbr4(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="";
    silinder.style.display="none";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="black";
    tombol5.style.background="#04709b";
}
function gbr5(){
    batang.style.display="none";
    jarum.style.display="none";
    ladam.style.display="none";
    lingkaran.style.display="none";
    silinder.style.display="";

    tombol1.style.background="#04709b";
    tombol2.style.background="#04709b";
    tombol3.style.background="#04709b";
    tombol4.style.background="#04709b";
    tombol5.style.background="black";
}

var vid = document.getElementById("vidio");
function alat() { 
    vid.currentTime=28;
    vid.play();
  } 
  function coba1() { 
    vid.currentTime=41;
    vid.play();
  } 
  function coba2() { 
    vid.currentTime=65;
    vid.play();
  } 
  
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.latihanhide').show(100);
  }
  
});