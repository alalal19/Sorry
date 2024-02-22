var counter = 0;
setInterval( function(){
  counter++; 
  if(counter <= 10){
    id = document.getElementById("repeat");
    var i = 0;
    
    var firstTxt = "Aku minta maaf ya kalo akhir-akhir ini kita komunikasi nya menerut aku sangat sangat jelek. ";
    var secTxt = " Aku tau kalo ego kita lagi sering-seringnya sama-sama tinggi.";
    var thirdTxt = " Aku ngerti juga mungkin kita lagi sama-sama capek karna urusan kuliah dan lain-lain.";
	var fourthTxt = " Aku minta maaf kalo aku banyak gak bisa ngertiin kalo kamu lagi bercanda.";
	var fiveTxt = " Aku tau munkin ini cuma sekedar alesan ku tapi emang akhir-akhir ini banyak banget yang aku khawatirin.";
	var sixTxt = " Aku lagi mikir gimana aku bisa survive dan terus bisa bahagian kamu.";
	var sevenTxt = " Aku juga gak mungkin selalu minta bantuin kamu kalo aku lagi kehabisan uang ";
	var eightTxt = " Maaf kalo akhir akhir ini aku sering nyebelin kamu";
	var nineTxt = " Semoga kamu masih mau maafin aku dan ngertiin aku";
	var tenTxt = " Love You Caca To the moon and back 💖";
	
    var speed = 35;

    
function typeWriter() {
  if (counter == 1) {
    document.getElementById("repeat").innerHTML += firstTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } else if(counter == 2) {
    document.getElementById("repeat").innerHTML += secTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } else if (counter == 3)  {
     document.getElementById("repeat").innerHTML += thirdTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 4) {
    document.getElementById("repeat").innerHTML += fourthTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 5) {
    document.getElementById("repeat").innerHTML += fiveTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 6) {
    document.getElementById("repeat").innerHTML += sixTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 7) {
    document.getElementById("repeat").innerHTML += sevenTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 8) {
    document.getElementById("repeat").innerHTML += eightTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 9) {
    document.getElementById("repeat").innerHTML += nineTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }else if(counter == 10) {
    document.getElementById("repeat").innerHTML += tenTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }
} 
    id = typeWriter();
  }
   
}, 7000);


//autoscroll

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,50);
}

setTimeout(function(){ pageScroll(); }, 3000);