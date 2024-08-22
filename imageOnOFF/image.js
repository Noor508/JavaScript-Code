function onoff(){
  var im = document.getElementById("imgb");
  var status = im.getAttribute("status");
  if(status == 0)
  {
    im.src = "pic_bulbon.gif";
    im.setAttribute("status", "1");
  }
  else{
    im.src = "pic_bulboff.gif";
    im.setAttribute("status","0");
  }
}