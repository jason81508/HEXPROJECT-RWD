// nav toggle
$(document).ready(function() {
    $('.nav-toggler').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });

//  text typing
var typed = new Typed(".new-type",{
  strings:["","Web Designer","Web Developer","Graphic Designer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})