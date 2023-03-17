document.querySelector("ul").lastElementChild.innerHTML = "Carlos"
document.querySelector("li a").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
// document.querySelector("h1").classList.add("huge");


// QUERYSELECTOR
// QUERYSELECTORALL

// document.querySelector("h1").style.fontSize = "10rem"

// document.querySelector("h1").innerHTML = "Good bye"


// Con esta linea de codigo podemos modificar el elemento o variable
/* var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye"; */

// Sirve para cambiar estilos, heading es una clase
// heading.style.color = "red"; 

// metodo click() para simular un click en un input
// document.querySelector("input").click()

// los objetos en DOM pueden tener propiedades o metodos

// ELEMENTS BY TAG NAME

/* getElementsByTagName() sirve para buscar elementos con nombres de etiqueta, 
la diferencia es el plural, entonces toma todos lo elementos de esa etiqueta y debes
usar [] para seleccionar el que quieres */

/* document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length; */

// ELEMENTS BY CLASS NAME

// permite seleccionar y modificar elementos con la misma clase (elements = array)
// document.getElementsByClassName("btn")[0].style.color = "red";

// ELEMENT BY ID

// document.getElementById("title").innerHTML = "Good bye";

// ADD
// REMOVE
// TOGGLE

// document.querySelector("button").classList.add("invisible");
// document.querySelector("button").classList.remove("invisible");
// document.querySelector("button").classList.toggle("invisible");

// TEXT CONTENT
/* a diferencia de innerHTML que igual sirve para modificar, textContent solo arrojara el texto dentro de las etiquetas o atributos, innerHTML lo que hace es darte todo lo que se encuentra adentro de la etiqueta que seleccionaste, usando innerHTML se puede agregar texto sobre la marcha  */

// document.querySelector("h1").textContent = "<i>jai</i>"; solo texto
// document.querySelector("h1").innerHTML = "<i>Good bye</i>"; codigo y texto

// ATTRIBUTES
// GET ATTRIBUTE
// SET ATTRIBUTE

//document.querySelector("a").setAttribute("href", "https://www.bing.com");