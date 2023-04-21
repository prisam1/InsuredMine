var multer = require('multer');
var csv = require('csvtojson');


const Csv = require('../model/csvModel');

const insertarDatosDB = async function (req, res) {
    
   const jsonArrray = await csv()
    .fromFile(req.file.path)
         Csv.insertMany(jsonArrray)
            
         .then(function(){res.status(200).send({message: "Successfully Uploaded!"})})
         
         .catch(function (err){
            res.status(500).send({message:err})
         }) 
     
}

module.exports={insertarDatosDB}
