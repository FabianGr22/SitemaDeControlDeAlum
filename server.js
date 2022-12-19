const express = require('express')
const AlumnosRouter = require('./routes/Alumnos')
const DocentesRouter = require('./routes/Docentes')

const cors = require("cors")
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            Alumnos: "/api/v1/Alumnos",
            Docentes: "/api/v1/Docentes",

            

        }
        this.middlewares()
        this.routes()
       

    }

    routes(){
        //this.app.get('/', (req, res) =>{
          //  res.send('Hellow Word')
   // }) // End Point

   this.app.use(this.paths.Alumnos, AlumnosRouter)
   this.app.use(this.paths.Docentes, DocentesRouter)




}
middlewares(){
    this.app.use(cors())//permite solictudes del origen usado
    this.app.use(express.json())// Habilita la lectura de contenido de formato json 
}

listen(){
    this.app.listen(process.env.PORT,() => {
    // console.log("Backend en ejecucion en el puerto", process.env.PORT)
        console.log(process.env.PORT);
})
}
}

module.exports = Server