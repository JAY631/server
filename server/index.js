const express = require("express");
const server = express();
const cors = require("cors");

const PORT = 7070;

server.use(cors());
server.use(express.json());
server.get("/", (req, res) => {
  res.send([
    {
      title: "Магнат",
      description: "Ресторан, место проведения торжественных мероприятий",
      location: "г. Ош",
      places: "200-500",
      category: "restaurant",
    },
  ]);
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту 7070 ${PORT}`);
});
