var x = document.getElementById("hc_extension_bkgnd");
if(x !== null){
  console.log("Detected contrast Extention");  
  console.log("Fitting box to content");  
  x.style.width = "100%";
  x.style.height = "100%";
  x.style.position = "fixed";
}