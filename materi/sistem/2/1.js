function gbr1(){
    deklinasi.style.display="";
    inklinasi.style.display="none";


    tombol.style.background="black";
    tombol2.style.background="#04709b";

}
function gbr2(){
  deklinasi.style.display="none";
  inklinasi.style.display="";

    tombol.style.background="#04709b";
    tombol2.style.background="black";
}

$(document).ready(function(){
  $('.kesimpulan').hide();

document.getElementById('vidio').addEventListener('ended',myHandler,false);

function myHandler(e) {
  $('.kesimpulan').show(100);
  $('.sebelum').hide(100);
}

});