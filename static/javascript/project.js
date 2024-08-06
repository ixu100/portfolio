function showProj(id){
  var proj = document.getElementById(id);
  var cover = document.getElementById('blur');

  if (proj.style.display === "block") {
    proj.style.display = "none"
  }
  else{
    proj.style.display = "block"
  }
  if (cover.style.display === "block"){
    cover.style.display = "none"
  } else{
    cover.style.display = "block"
  }
  if (document.body.style.overflow === 'hidden'){
    document.body.style.overflow = 'visible'
  } else {
    document.body.style.overflow = 'hidden'
  }

}

function dip(){
  document.getElementById('proj1').style.display = "none" 
  // document.getElementById('proj2').style.display = "none"
  document.getElementById('blur').style.display = "none"
  document.body.style.overflow = "visible"
}