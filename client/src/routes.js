// In your routes configuration file
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/all-countries',
    component: path.resolve(`src/pages/allCountries.js`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/pages/404.js`)
  }
];