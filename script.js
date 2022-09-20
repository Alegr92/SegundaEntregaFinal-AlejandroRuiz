let juegos = [
  {
    id: 0,
    nombre: "Super Dragonball",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_746825-MLA50249425214_062022-F.webp",
    info: "Desarrollador:\nDimps Corporation\n\nEditor:\nBandai Namco\n\nGenero:\nAccion,anime y manga\n\nJugadores:\n1-8 Cooperativo\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n14 Octubre 2020",
    consola: "switch",
  },
  {
    id: 1,
    nombre: "Animal Crossing",
    precio: 12000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_650648-MLA43429177645_092020-O.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nEstrategia,Vida virtual\n\nJugadores:\n1-8 Cooperativo\n\nIdioma:\nTexto esp, voces ing\n\nLanzamiento:\n20 Marzo 2020",
    consola: "switch",
  },
  {
    id: 2,
    nombre: "Pokemon Arceus",
    precio: 12500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744362-MLA49012110106_022022-F.webp",
    info: "Desarrollador:\nGame Freak\n\nEditor:\nNintendo\n\nGenero:\nRol,Accion RPG\n\nJugadores:\n1+ online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n28 Enero 2022",
    consola: "switch",
  },
  {
    id: 3,
    nombre: "Crash Bandicoot",
    precio: 12000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_884513-MLA40916645369_022020-F.webp",
    info: "Desarrollador:\nVicarious Visions\n\nEditor:\nActivision\n\nGenero:\nAccion,plataformas\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n29 Junio 2018",
    consola: "switch",
  },
  {
    id: 4,
    nombre: "Minecraft",
    precio: 9000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_646719-MLA45046828793_032021-F.webp",
    info: "Desarrollador:\nMojang\n\nEditor:\nMojang\n\nGenero:\nAventura,accion\n\nJugadores:\n8+ online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n12 Mayo 2017",
    consola: "switch",
  },
  {
    id: 5,
    nombre: "Super Smashbros",
    precio: 12000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_805062-MLA40861843559_022020-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nLucha,accion\n\nJugadores:\n1-8 online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n07 Diciembre 2018",
    consola: "switch",
  },
  {
    id: 6,
    nombre: "Mario Kart 8",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_976227-MLA40865290222_022020-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nConduccion,arcade\n\nJugadores:\n1-8 online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n18 Marzo 2022",
    consola: "switch",
  },
  {
    id: 7,
    nombre: "Pokemon Pikachu",
    precio: 11000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_883793-MLA40861843926_022020-F.webp",
    info: "Desarrollador:\nGame Freak\n\nEditor:\nNintendo\n\nGenero:\nRol,Accion RPG\n\nJugadores:\n1+ online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n16 Noviembre 2018",
    consola: "switch",
  },
  {
    id: 8,
    nombre: "Luigis Mansion",
    precio: 12000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_699851-MLA40862922069_022020-F.webp",
    info: "Desarrollador:\nNext level games\n\nEditor:\nNintendo\n\nGenero:\nAccion,aventura\n\nJugadores:\n1-8 online\n\nIdioma:\nTexto esp\n\nLanzamiento:\n31 Octubre 2019",
    consola: "switch",
  },
  {
    id: 9,
    nombre: "Mario Odyssey",
    precio: 15000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_958303-MLA40864140097_022020-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nAccion,plataformas\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp\n\nLanzamiento:\n27 Octubre 2017",
    consola: "switch",
  },
  {
    id: 10,
    nombre: "Pikmin 3",
    precio: 10000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_928473-MLA44340121238_122020-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nAccion,aventura\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp, voces ing\n\nLanzamiento:\n30 Octubre 2020",
    consola: "switch",
  },
  {
    id: 11,
    nombre: "Plants VS Zombies",
    precio: 11000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_816219-MLA45822158747_052021-F.webp",
    info: "Desarrollador:\nPopCap\n\nEditor:\nEA\n\nGenero:\nAccion,shooter\n\nJugadores:\n1-8\n\nIdioma:\nTexto esp, voces ing\n\nLanzamiento:\n18 Marzo 2021",
    consola: "switch",
  },
  {
    id: 12,
    nombre: "Mario Party",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_776422-MLA48119516759_112021-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nMinijuegos\n\nJugadores:\n1-4\n\nIdioma:\nTexto esp\n\nLanzamiento:\n29 Octubre 2021",
    consola: "switch",
  },
  {
    id: 13,
    nombre: "Zelda BOTW",
    precio: 13000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_951591-MLA40862922196_022020-F.webp",
    info: "Desarrollador:\nNintendo\n\nEditor:\nNintendo\n\nGenero:\nAccion,aventura\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n03 Marzo 2017",
    consola: "switch",
  },
  {
    id: 14,
    nombre: "Demon Slayer",
    precio: 15000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_760811-MLA51195737358_082022-F.webp",
    info: "Desarrollador:\nCyberConnect2\n\nEditor:\nAniplex of America\n\nGenero:\nAccion\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n10 Junio 2022",
    consola: "switch",
  },
  {
    id: 15,
    nombre: "Ratchet & Clank",
    precio: 12000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_755182-MLA46792980044_072021-F.webp",
    info: "Desarrollador:\nInsomniac Games\n\nEditor:\nSony\n\nGenero:\nAccion,Shooter\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n11 Junio 2021",
    consola: "ps5",
  },
  {
    id: 16,
    nombre: "Demon Souls",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_972821-MLA45056517536_032021-F.webp",
    info: "Desarrollador:\nBluepoint Games\n\nEditor:\nSony\n\nGenero:\nRol, RPG\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n19 Noviembre 2020",
    consola: "ps5",
  },
  {
    id: 17,
    nombre: "Fifa 23",
    precio: 16000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_710956-MLA51275779605_082022-F.webp",
    info: "Desarrollador:\nEA Sports\n\nEditor:\nEA Sports\n\nGenero:\nDeportes\n\nJugadores:\n1-4\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n30 Septiembre 2023",
    consola: "ps5",
  },
  {
    id: 18,
    nombre: "Sackboy",
    precio: 9000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_928590-MLA44341706305_122020-F.webp",
    info: "Desarrollador:\nSumo Digital\n\nEditor:\nSony\n\nGenero:\nAccion,aventura\n\nJugadores:\n1-4\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n19 Noviembre 2020",
    consola: "ps5",
  },
  {
    id: 19,
    nombre: "Spider-man Miles Morales",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_736145-MLA50145467465_052022-F.webp",
    info: "Desarrollador:\nInsomniac Games\n\nEditor:\nSony\n\nGenero:\nAccion,aventuras\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n06 Julio 2020",
    consola: "ps5",
  },
  {
    id: 20,
    nombre: "Returnal",
    precio: 11000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_877947-MLA46305203217_062021-F.webp",
    info: "Desarrollador:\nHousemarque\n\nEditor:\nSony\n\nGenero:\nAccion,shooter\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n30 Abril 2021",
    consola: "ps5",
  },
  {
    id: 21,
    nombre: "Just Dance 2021",
    precio: 11000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_821188-MLA46706906310_072021-F.webp",
    info: "Desarrollador:\nUbiSoft Paris\n\nEditor:\nUbisoft\n\nGenero:\nMusica\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp\n\nLanzamiento:\n12 Noviembre 2020",
    consola: "ps5",
  },
  {
    id: 22,
    nombre: "Death Stranding",
    precio: 13000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_821678-MLA47815830372_102021-F.webp",
    info: "Desarrollador:\nKojima Productions\nEditor:\nSony\n\nGenero:\nAccion,aventura\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n14 Julio 2020",
    consola: "ps5",
  },
  {
    id: 23,
    nombre: "Horizon Forbidden West",
    precio: 15000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_926589-MLA49015885287_022022-F.webp",
    info: "Desarrollador:\nGuerrilla Games\n\nEditor:\nSony\n\nGenero:\nAccion,aventura\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp, voces esp\n\nLanzamiento:\n18 Febrero 2022",
    consola: "ps5",
  },
  {
    id: 24,
    nombre: "Uncharted",
    precio: 14000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_703262-MLA48858970353_012022-F.webp",
    info: "Desarrollador:\nIron Galaxy\n\nEditor:\nSony\n\nGenero:\nAccion,aventura\n\nJugadores:\n1\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n19 Octubre 2022",
    consola: "ps5",
  },
  {
    id: 25,
    nombre: "Ghost of Tsushima",
    precio: 12500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_858358-MLA47203909054_082021-F.webp",
    info: "Desarrollador:\nSucker Punch\n\nEditor:\nSony\n\nGenero:\nAccion,aventura\n\nJugadores:\n1-2\n\nIdioma:\nTexto esp, voces ingles y japones\n\nLanzamiento:\n20 Agosto 2021",
    consola: "ps5",
  },
  {
    id: 26,
    nombre: "Riders Republic",
    precio: 13000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_734532-MLA48064243881_102021-F.webp",
    info: "Desarrollador:\nUbisoft Annecy\n\nEditor:\nUbisoft\n\nGenero:\nDeportes\n\nJugadores:\n1-50 online\n\nIdioma:\nTexto esp, voces ingles\n\nLanzamiento:\n28 Octubre 2021",
    consola: "ps5",
  },
];
let total = 0;
let contador = 0;
let carrito = [];
let $productsSwitch = document.querySelector(".products-switch");
let $productsPs5 = document.querySelector(".products-ps5");
let $templateCard = document.getElementById("template-card").content;
let $carritoWindow = document.querySelector(".carrito-window");
let $templateCarrito = document.getElementById("template-carrito").content;
let $modalContainer = document.querySelector(".modal-container");
let $modalWindow = document.querySelector(".modal");
let $fragmentCarrito = document.createDocumentFragment();
let $fragmentSwitch = document.createDocumentFragment();
let $fragmentPs5 = document.createDocumentFragment();
let $divContador = document.querySelector(".circle");
let $divCarrito = document.querySelector(".carrito-window");
let $seccionTotal = document.querySelector(".carrito-total");
let $modalWindowCart = document.querySelector(".modal-cart");

// DECLARACION DE FUNCIONES////////////////////////////////////////////////////////////////////

let injectProducts = (juegos) => {
  for (let item of juegos) {
    if (item.consola === "switch") {
      $templateCard
        .querySelector(".main-img")
        .setAttribute("src", `${item.imagen}`);
      $templateCard
        .querySelector(".sec-img")
        .setAttribute("src", `${item.imagen}`);
      $templateCard.querySelector("pre").textContent = item.info;
      $templateCard.querySelector(".title-card").textContent = item.nombre;
      $templateCard.querySelector(".price-card").textContent = item.precio;
      $templateCard.querySelector("button").setAttribute("id", `${item.id}`);
      let clone = $templateCard.cloneNode(true);
      $fragmentSwitch.appendChild(clone);
    } else {
      $templateCard.querySelector(".card").classList.add("card-ps5");
      $templateCard.querySelector(".back").classList.add("back-ps5");
      $templateCard.querySelector(".main-img").classList.add("ps5-img");
      $templateCard.querySelector("button").classList.add("button-ps5");
      $templateCard
        .querySelector(".main-img")
        .setAttribute("src", `${item.imagen}`);
      $templateCard
        .querySelector(".sec-img")
        .setAttribute("src", `${item.imagen}`);
      $templateCard.querySelector("pre").textContent = item.info;
      $templateCard.querySelector(".title-card").textContent = item.nombre;
      $templateCard.querySelector(".price-card").textContent = item.precio;
      $templateCard.querySelector("button").setAttribute("id", `${item.id}`);
      let clone = $templateCard.cloneNode(true);
      $fragmentPs5.appendChild(clone);
    }
  }
  $productsSwitch.appendChild($fragmentSwitch);
  $productsPs5.appendChild($fragmentPs5);
};

let setCarrito = (obj, carrito) => {
  let producto = {
    id: obj.querySelector("button").getAttribute("id"),
    img: obj.querySelector(".main-img").getAttribute("src"),
    title: obj.querySelector(".title-card").textContent,
    price: obj.querySelector(".price-card").textContent,
    subPrice: 0,
    items: 1,
  };
  let existe = carrito.some((obj) => obj.id === producto.id);
  console.log(existe);
  if (existe) {
    carrito.forEach((obj) => {
      if (obj.id === producto.id) {
        obj.items++;
        obj.subPrice = obj.price * obj.items;
      }
    });
  } else {
    producto.subPrice = producto.price * producto.items;
    carrito.push(producto);
    console.log(carrito);
  }
  injectCarrito();
  injectTotal();
};

let injectTotal = () => {
  total = 0;
  let div = document.createElement("div");
  div.classList.add("carrito-total");
  let p = document.createElement("p");
  p.classList.add("total-p");
  let button = document.createElement("button");
  button.classList.add("total-buy");

  div.appendChild(p);
  div.appendChild(button);

  carrito.forEach((obj) => {
    total += obj.subPrice;
  });

  p.textContent = `Total a pagar: ${total}`;
  button.textContent = "Comprar";
  $carritoWindow.insertAdjacentElement("beforeend", div);
};

let refreshTotal = () => {
  let $parrafoTotal = document.querySelector(".total-p");
  total = 0;
  carrito.forEach((obj) => {
    total += obj.subPrice;
  });
  $parrafoTotal.textContent = `Total a pagar: ${total} `;
};

let injectCarrito = () => {
  carrito.forEach((producto) => {
    $carritoWindow.innerHTML = "";
    $templateCarrito.querySelector(".id").textContent = producto.id;
    $templateCarrito
      .querySelector(".main-img-carrito")
      .setAttribute("src", producto.img);
    $templateCarrito.querySelector(".title-carrito").textContent =
      producto.title;
    $templateCarrito.querySelector(".mid-p").textContent = producto.items;
    $templateCarrito.querySelector(
      ".price"
    ).textContent = `Precio: ${producto.price}`;
    $templateCarrito.querySelector(".sub-price").textContent = `Sub Total:
    ${producto.subPrice} `;
    $templateCarrito
      .querySelector(".delete")
      .setAttribute("src", "./Assets/delete-trash-svgrepo-com.svg");
    let clone = $templateCarrito.cloneNode(true);
    $fragmentCarrito.appendChild(clone);
  });
  $carritoWindow.appendChild($fragmentCarrito);
};

let addCounter = (obj, carrito) => {
  let id = obj.querySelector("button").getAttribute("id");
  let existe = carrito.some((obj) => obj.id === id);
  console.log(existe);
  if (!existe) {
    contador++;
  }
};

let injectCounter = (cont) => {
  if (cont !== 0) {
    $divContador.classList.add("active");
    $divContador.textContent = cont;
  } else {
    $divContador.textContent = cont;
  }
};

let showModal = (obj) => {
  let img = obj.querySelector(".sec-img").getAttribute("src");
  let title = obj.querySelector(".title-card").textContent;
  let card = $modalContainer.querySelector(".modal");
  $modalWindow.querySelector(".main-img-modal").setAttribute("src", img);
  $modalWindow.querySelector(".msg-modal").textContent =
    "Agregaste correctamente!";
  $modalWindow.querySelector(".title-modal").textContent = title;
  $modalContainer.classList.remove("visible");
  card.classList.add("fade-in");
  setTimeout(() => {
    $modalContainer.classList.add("visible");
  }, 2000);
};

let showModalCart = () => {
  let card = $modalWindowCart.querySelector(".modal");
  $modalWindowCart.classList.remove("visible");
  card.classList.add("slide-in-top");
  setTimeout(() => {
    $modalWindowCart.classList.add("visible");
  }, 2000);
};

let removeProduct = (obj, carrito, ventana) => {
  let id = obj.querySelector(".id").textContent;
  for (let index = 0; index < carrito.length; index++) {
    if (carrito[index].id === id) {
      ventana.removeChild(obj);
      carrito.splice(index, 1);
      contador--;
      if (contador === 0) {
        $divContador.classList.remove("active");
        $carritoWindow.innerHTML = `<div class="carrito-visible">
      <p>Game Over Games</p>
      <p>Tu carrito esta vacio</p>
    </div>`;
      } else {
        $divContador.textContent = contador;
      }
    }
  }
};

let increaseProduct = (obj, carrito) => {
  let id = obj.querySelector(".id").textContent;
  let cantidad = obj.querySelector(".mid-p");
  let precio = obj.querySelector(".sub-price");
  carrito.forEach((obj) => {
    if (obj.id === id) {
      obj.items++;
      obj.subPrice = obj.items * obj.price;
      cantidad.textContent = obj.items;
      precio.textContent = textContent = `Sub Total: ${obj.subPrice}`;
    }
  });
};

let decreaseProduct = (obj, carrito) => {
  let id = obj.querySelector(".id").textContent;
  let cantidad = obj.querySelector(".mid-p");
  let precio = obj.querySelector(".sub-price");
  carrito.forEach((obj) => {
    if (obj.id === id) {
      if (obj.items > 1) {
        obj.items--;
        obj.subPrice = obj.items * obj.price;
        cantidad.textContent = obj.items;
        precio.textContent = textContent = `Sub Total: ${obj.subPrice}`;
      }
    }
  });
};

let storageCarrito = () => {
  let json = JSON.stringify(carrito);
  localStorage.setItem("carrito", json);
};

let storageCounter = () => {
  let json = JSON.stringify(contador);
  localStorage.setItem("contador", json);
};

// EJECUCION DEL SCRIPT//////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", (e) => {
  injectProducts(juegos);
  let carritoStorage = localStorage.getItem("carrito");
  let contadorStorage = localStorage.getItem("contador");
  if (carritoStorage !== null) {
    carrito = JSON.parse(carritoStorage);
    contador = JSON.parse(contadorStorage);
  }
  if (carrito.length !== 0) {
    showModalCart();
    injectCarrito();
    injectTotal();
    injectCounter(contador);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    showModal(e.target.parentElement);
    addCounter(e.target.parentElement, carrito);
    injectCounter(contador);
    console.log(contador);
    setCarrito(e.target.parentElement, carrito);
    storageCarrito();
    storageCounter();
  }

  if (e.target.matches(".carrito")) {
    $divCarrito.classList.toggle("transform");
  }

  if (e.target.matches(".up")) {
    increaseProduct(e.target.parentNode.parentElement, carrito);
    refreshTotal();
    storageCarrito();
  }

  if (e.target.matches(".down")) {
    decreaseProduct(e.target.parentNode.parentElement, carrito);
    refreshTotal();
    storageCarrito();
  }

  if (e.target.matches(".delete")) {
    removeProduct(e.target.parentElement, carrito, $carritoWindow);
    if (carrito.length !== 0) {
      refreshTotal();
    }
    storageCarrito();
    storageCounter();
  }
});
