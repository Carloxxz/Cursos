/* $(document).ready(function () {
  $("h1").css("color", "red");
}); */

//$("h1").css("color", "red");

//cpn jQuery $ se usa para seleccionar una o muchas cosas de la misma forma
/* console.log($("h1").css("font-size"));
$("button"); */

// $("h1").addClass("big-title");

/* sirve para ver si tiene esa clase y devuelve booleano
$("h1").hasClass("big-title") */

/* recuperar y alterar atributos de los elementos de la página
console.log($("img").attr("src")); */

/* selecciona las etiquetas "a" y las cambia por "href"
$("a").attr("href", "http://www.yahoo.com"); */

/* $("h1").click(function(){
  $("h1").css("color", "purple");
}); */


/* cambio de color sin usar jquery
for (var i = 0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    document.querySelector("h1").style.color = "purple";
  })
} */

/* Cambio de color usando jquery
$("button").click(function(){
  $("h1").css("color", "purple");
}) */

/* cambia el texto de h1 cuando se presiona una tecla en el documento
$(document).keypress(function(event){
  $("h1").text(event.key);
}) */

//.on() una forma mas facil de eventos

/* $("h1").on("mouseover", function(){
  $("h1").css("color","purple");
}) */

/* Puedes agregar elementos before y after (queda dentro del h1 cuidado pero principalmente quedan fuera de las etiquetas)
$("h1").before("<button>New</button>"); */

/* prepend y append quedan dentro de las etiquetas 
prepend antes o al inicio
append despues o al final
 */
 
/* remove
$("button").remove(); 
*/

//ANIMACIONES

/* $("button").on("click", function(){
  $("h1").hide();
})
 */
/* $("button").on("click", function(){
  $("h1").show();
}) */

/* $("button").on("click", function(){
  $("h1").toggle();
}); */

/* $("button").on("click", function(){
  $("h1").fadeOut();
}); */

/* $("button").on("click", function(){
  $("h1").fadeIn();
}); */

/* $("button").on("click", function(){
  $("h1").fadeToggle();
}); */

/* $("button").on("click", function(){
  $("h1").slideUp();
}); */

/* $("button").on("click", function(){
  $("h1").slideDown();
}); */

/* $("button").on("click", function(){
  $("h1").slideToggle();
}); */

/* $("button").on("click", function(){
  $("h1").animate({opacity: 0.5});
}); */

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});