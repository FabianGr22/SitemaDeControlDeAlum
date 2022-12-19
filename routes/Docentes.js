const {Router} = require("express")
const { getDocentes, getDocentesBYID, deleteDocentesByID, addDocentes, updateByNombre } = 
require("../controllers/Docentes.js")
const router = Router()


//http://localhost:5001/api/v1/Alumnos
router.get("/", getDocentes)
//localhost:5001/api/v1/Alumnos/id/1
router.get("/id/:id",getDocentesBYID )


//POST
router.post("/", addDocentes)

// PUT//
router.put("/", updateByNombre)


//DELETE
router.delete("/id/:id", deleteDocentesByID)
module.exports = router
