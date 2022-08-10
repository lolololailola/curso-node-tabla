const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();

createFile(argv.b, argv.l, argv.h)
  .then((nameFile) =>
    console.log(
      `Tabla de multiplicar del ${argv.b}`.rainbow,
      "creada".bgMagenta
    )
  )
  .catch((err) => console.log(err));
