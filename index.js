const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "img/muzzarella.png"
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "img/cebolla.png"
  },
  
  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    imagen: "img/napolitana.png"
  },
  
  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "img/4quesos.png"
  },
  
  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    imagen: "img/especial.png"
  },
  
  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "img/anana.png"
  },
];

document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener('click', searchPizza);

function searchPizza() {
  const searchInput = document.getElementById("searchInput").value;
  const pizzaContainer = document.getElementById("pizzaContainer");
  const overlay = document.querySelector(".overlay");

  const foundPizza = pizzas.find(pizza => pizza.id === parseInt(searchInput));

  if (foundPizza) {
    // Renderizar la tarjeta de la pizza encontrada
    const pizzaCard = `
      <div>
        <h2>${foundPizza.nombre}</h2>
        <img src="${foundPizza.imagen}" alt="${foundPizza.nombre}">
        <p>Ingredientes: ${foundPizza.ingredientes.join(", ")}</p>
        <h2>Precio: $${foundPizza.precio}</h2>
      </div>
    `;
    pizzaContainer.innerHTML = pizzaCard;

    // Guardar la última pizza buscada y encontrada en el LocalStorage
    localStorage.setItem("lastFoundPizza", JSON.stringify(foundPizza));
    overlay.classList.add("active");
  } else {
    // Mostrar un mensaje de error si la pizza no se encontró
    pizzaContainer.innerHTML = "<h2>No se encontró ninguna pizza con ese número.</h2>"
  }
}
const lastFoundPizza = JSON.parse(localStorage.getItem("lastFoundPizza"));
  if(lastFoundPizza){
  const pizzaContainer = document.getElementById("pizzaContainer");
  const pizzaCard = `
      <div>
        <h1>${lastFoundPizza.nombre}</h1>
        <img src="${lastFoundPizza.imagen}" alt="${lastFoundPizza.nombre}">
        <p>Ingredientes: ${lastFoundPizza.ingredientes.join(", ")}</p>
        <h2>Precio: $${lastFoundPizza.precio}</h2>
      </div>
    `;
    pizzaContainer.innerHTML = pizzaCard;
}
});