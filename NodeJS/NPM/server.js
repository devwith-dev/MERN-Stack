const Color = require('color');

// Generate random colors

const color = Color("#f2c2c2").alpha(0.5).lighten(0.5);

const singleColor = color.hsl().toString();

console.log(singleColor);