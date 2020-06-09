const express = require("express");
const router = express.Router();



module.exports = function(){
    routes.get('/', console.log("En la ruta /"));
    routes.post("/calculos", Controller.calculos);

    return routes;
}