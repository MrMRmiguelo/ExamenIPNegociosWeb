const express = require("express");
const routes = require("./routes");
const app = express();


app.use("/", routes());


app.engine(
    "hbs",
    exphbs({
      defaultLayout: "main",
      extname: ".hbs",
    })
  );
  
  app.set("view engine", "hbs");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/", routes());

//Inicializador de servidor mediante un puerto especifico

app.listen(7000, () => {
console.log("Servidor ejecutandose en el puerto 7000")
});
