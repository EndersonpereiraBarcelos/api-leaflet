// // const universidades = await fetch(
// //     "https://deno-api-fake.deno.dev/api/universidade"
// //   ).then((r) => r.json()),
// //   users = await fetch("https://deno-api-fake.deno.dev/api/users").then((r) =>
// //     r.json()
// //   );

// // let popupContent;

// // const secaoAbout = document.querySelector("#about .container");

// // function createIcon(icon) {
// //   let markerIcon = L.icon({
// //     iconUrl: `public/img/${icon}.png`,
// //     iconSize: [30, 43], // size of the icon
// //     iconAnchor: [16, 41], // point of the icon which will correspond to marker's location
// //     popupAnchor: [15, -90], // point from which the popup should open relative to the iconAnchor
// //   });

// //   return markerIcon;
// // }

// // //UNIVERSIDADES FETCH
// // let uniArray = [];

// // for (let i = 0; i < universidades.length; i++) {
// //   popupContent = `<a href="#${universidades[i].nome}"><h2>${universidades[i].nome}</h2></a>`;

// //   let uniIcon = createIcon("uni");

// //   let marker = L.marker([universidades[i].lat, universidades[i].lon], {
// //     icon: uniIcon,
// //   }).bindPopup(popupContent);
// //   uniArray.push(marker);

// //   let uniSection = document.createElement("section");
// //   uniSection.id = `#${universidades[i].nome}`;
// //   uniSection.classList.add("secao-uni");
// //   uniSection.innerHTML = `
// //         <h2>${universidades[i].nome}</h2>
// //         <p>Aqui terão informações sobre a ${universidades[i].nome}.</p>
// //       `;
// //   secaoAbout.appendChild(uniSection);
// // }
// // const uniLayer = L.layerGroup([...uniArray]);

// // var map = L.map("map").setView([51.505, -0.09], 13);

// // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
// //   attribution:
// //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// // }).addTo(map);


var map = L.map("map").setView([-20.3222, -40.3381], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-20.27646554342108, -40.304655949280544])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
