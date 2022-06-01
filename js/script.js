// heart change
$(document).ready(function () {
  $(".heart").click(function (e) { 
      e.preventDefault();
      $(".heart i").toggleClass("fas");
  });
});
// nav toggle
$(document).ready(function() {
    $('.nav-toggler').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('nav-show');
   });
 });

