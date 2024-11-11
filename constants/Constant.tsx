// Definición de las variables de entorno
export const API = process.env.REACT_APP_API;
export const URL = process.env.REACT_APP_API_URL;

// Definición de colores de la aplicación
export const COLORS = {
  verdeoscuro: "#204929", // Verde oscuro
  verdeclaro: "#7AAA94", // Verde claro
  bgBeige: "#F5EDE0", // Beige de fondo
  black: "#000000", // Negro para el texto
  white: "#ffffff", // Blanco para el texto en botones
  borderGray: "#ccc", // Gris para bordes
  rojo: "#CA5A61", // Rojo para los botones
  gray: "2f2f2f",
};

// Ruta de imágenes de banderas
const countrysDIR = "../assets/images/countrys/";

// Definición de los idiomas con rutas explícitas
const languages = [
  {
    code: "es",
    name: "Español",
    flag: require("../assets/images/countrys/spain.png"),
  },
  {
    code: "en",
    name: "Inglés",
    flag: require("../assets/images/countrys/uk.png"),
  },
  {
    code: "pt",
    name: "Portugués",
    flag: require("../assets/images/countrys/portugal.png"),
  },
  {
    code: "fr",
    name: "Francés",
    flag: require("../assets/images/countrys/france.png"),
  },
  {
    code: "de",
    name: "Alemán",
    flag: require("../assets/images/countrys/germany.png"),
  },
  {
    code: "zh",
    name: "Chino",
    flag: require("../assets/images/countrys/china.png"),
  },
  {
    code: "ru",
    name: "Ruso",
    flag: require("../assets/images/countrys/russia.png"),
  },
];

// Exportación de idiomas como default
export default languages;
