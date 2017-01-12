$(document).ready(function(){
  $(".animals").submit(function(event){
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "turtle"){
      $(location).attr('href', 'turtles.html');
    } else if (animal === "snake"){
      $(location).attr('href', 'snakes.html');
    } else if (animal === "insect"){
      $(location).attr('href', 'insects.html');
    }

    event.preventDefault();
  });

});
