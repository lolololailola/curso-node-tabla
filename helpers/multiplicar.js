const fs = require("fs");

const colors = require("colors");

const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      consola +=
        colors.cyan(base) +
        ` ${"*".red} ` +
        colors.magenta(i) +
        `${" = ".blue}` +
        colors.bgRed(base * i) +
        "\n";
      salida += `${base} * ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("===================".america);
      console.log("   Tabla del".green, colors.cyan(base), ":".green);
      console.log("===================".america);

      console.log(consola);
    }
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;

    //   console.log(`Tabla de multiplicar del ${base} creada`);
    // });

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
