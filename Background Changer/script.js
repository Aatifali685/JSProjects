const simpleColors = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Maroon",
  "Navy",
  "Olive",
  "Teal",
  "Silver",
  "Gold",
  "Beige",
  "Coral",
  "Ivory",
  "Turquoise",
  "Tan",
  "Violet",
  "Lavender",
  "Indigo",
  "Peach",
  "Mint",
  "Aqua",
  "SkyBlue",
  "SlateGray",
  "Crimson",
  "Khaki",
  "Orchid",
  "Plum",
  "Salmon",
  "Tomato",
  "Wheat",
  "Azure",
  "Chocolate",
  "FireBrick",
  "Gainsboro",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "LawnGreen",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSteelBlue",
  "LemonChiffon",
  "Moccasin",
  "MistyRose",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "NavajoWhite",
  "OldLace",
  "OrangeRed",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "Peru",
  "PowderBlue",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Thistle",
  "WhiteSmoke",
  "YellowGreen",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGreen",
];
const hexcolors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const color = document.querySelector(".color");

btn1.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexcolors[getRandomNumber1()];
  }
  // console.log(hexColor);

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber1() {
  return Math.floor(Math.random() * hexcolors.length);
}

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = simpleColors[randomNumber];
  color.textContent = simpleColors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * simpleColors.length);
}
