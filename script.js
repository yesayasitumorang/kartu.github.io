function showDiv() {document.getElementById('Content').style.display = "block";}
  function iloveu() {document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";document.getElementById('text2').style.display = "none";}
function mulai() {ketiknm();showDiv();document.querySelector("body").style.animation = "fanim 6s ease infinite";}
  function ketiknm() {if(a<textnm.length){document.getElementById("textnama").innerHTML += textnm.charAt(a);a++;setTimeout(ketiknm,100);}if(a==textnm.length){document.getElementById('pergeseran').style.opacity = "1";document.getElementById('pergeseran').style.visibility = "visible";document.getElementById('pergeseran').style.margin = "60px 0 0 0";}}
