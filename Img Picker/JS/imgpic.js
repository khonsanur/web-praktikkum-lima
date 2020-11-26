// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Cirrocumulus.jpeg'>";
           window.alert("Ini Awan Cirrocumulus.jpeg");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Altocumulus.jpeg'>";
           window.alert("Ini Awan Altocumulus.jpeg");
       }
       else if (pil=="3")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Stratocumulus.jpeg'>";
           window.alert("Ini Awan Stratocumulus.jpeg");
       }
       else if (pil=="4")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Cirrus.jpeg'>";
           window.alert("Ini Awan Cirrus.jpeg");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Cumulus.png'>";
           window.alert("Ini Awan Cumulus.png");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Cumulonimbus.jpeg'>";
           window.alert("Ini Awan Cumulonimbus.jpeg");
       }else{
           document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
       }
       
   }
   