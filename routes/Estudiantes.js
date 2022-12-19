const {Router} = require("express")
const {getAlumnos, getAlumnosByID, deleteAlumnosByID, addAlumnos, updateByNombre } = 
require("../controllers/Estudiantes.js")
const router = Router()


//http://localhost:4005/api/v1/Alumnos


//GET
router.get("/", getAlumnos)

//localhost:5001/api/v1/Alumnos/id/3
router.get("/id/:id",getAlumnosByID )

//POST
router.post("/", addAlumnos)

// PUT//
router.put("/", updateByNombre)

//DELETE
router.delete("/id/:id", deleteAlumnosByID)



module.exports = router 