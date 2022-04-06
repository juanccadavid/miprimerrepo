const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = ["http://localhost:8081", "http://localhost:8082"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (corsOptions.indexOf(origin) === -1) {
        return callback(
          new Error(`La politica de CORS para esta url no permite el acceso`),
          false
        );
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// let corsOptions = {
//     origin:'http://localhost:8081',
// };
// Configuración CORS para ver desde donde nos pueden acceder
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extends:true}));

//Configruar ruta general para cuando se levante el servidor
//Funcion tipo apuntador , request y response
app.get("/", (req, res) => {
    res.json({ mensaje:"Bienvenidos a mi primera API con Express"});
});

//Definimos el puerto
const PORT = 8081;
// app.listen(PORT, () => {
//     console.log(`Server corriendo en el puerto: ${PORT}`);
// });

const Server = app.listen(PORT, function () {
    let host = Server.address().address;
    console.log("Servidor Backend en http://%s:%s",host, PORT);
});
