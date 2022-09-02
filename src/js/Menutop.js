
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide',{
      type   : 'loop',
      perPage: 1,
      focus  : 'center',
      transition: '3s'
  } );
  splide.mount();
} );

document.querySelector('.fa-bars').addEventListener("click", event =>{
  const list = document.querySelector('.list')
  const change = document.querySelector('.banner')
  if(list.classList.contains("list-actived")){
      list.classList.remove("list-actived")
  }else{
      list.classList.add("list-actived")
} 
}
) 

$(document).ready(function () {
  $("#remove").addClass("loader");
 document.querySelector("#remove").textContent="HI, WELCOME TO MY PROJECT"
  setTimeout(function () {
    $("#remove").removeClass("loader");
    document.querySelector("#remove").textContent=""
  }, 2500);
});
window.onload = () =>{
  window.onscroll = function()
  {
    if(window.scrollY>=350){
    document.querySelector('header').style.marginTop="0px"
    } else{
      document.querySelector('header').style.marginTop="20px"
    }
    console.log("scrolling.....", window.scrollY);
  }
  }
