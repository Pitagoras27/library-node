const sharp = require('sharp');

// regenera imagenes con el formato especificado a partir de una fuente svg

sharp('imgs/js_logo.svg')
  .resize(80, 80)
  .toFile('js_resize.png');

sharp('imgs/js_logo.svg')
  .grayscale()
  .toFile('js_grayscale.png');

sharp('imgs/js_logo.svg')
  .rotate(90)
  .toFile('js_rotate.png'); 