const {request, response } = require ("express");

const pool = require ("../db/connection");
const modeloAlumnos = require ("../models/Estudiantes");

// hacer consultas
const getAlumnos = async (req = request, res = response) => {
    let conn;
    try {
        conn = await pool.getConnection()
        const alumno = await conn.query(modeloAlumnos.queryGetAlumnos, (error) => {throw new Error(error)})
        if (!alumno){
            res.status(404).json({msg: "Alumno NO registrado"})
            return
        }         
        res.json({alumno}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}

// consulta a la base de datos
const getAlumnosByID = async (req = request, res = response) => {
    const {id} = req.params
    let conn;
    try {
        conn = await pool.getConnection()
        const [alumnos] = await conn.query(modeloAlumnos.queryGetAlumnosByID,[id],(error) => {throw new Error(error)})
        if (!alumnos){
            res.status(404).json({msg: `Alumno inexistente con el ID=${id}`})
            return
        }         
        res.json({alumnos}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}

//Eliminar un alumno
const deleteAlumnosByID = async (req = request, res = response) => {
    const {id} = req.params
    let conn;
    try {
        conn = await pool.getConnection()
        const useraffectedRows= await conn.query(modeloAlumnos.queryDeleteAlumnosByID, [id], (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (useraffectedRows === 0){
            res.status(404).json({msg: `Alumno NO eliminado con el ID  ${id}`})
            return
        }    
        res.json({msg: `Alumno eliminado EXITOSAMENTE con el ID  ${id}`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


// Agregar un alumno 
const addAlumnos= async (req = request, res = response) => {
    const {
        Nombre, 
        Apellido,
        NumControl,
        Materia,
        Aula,
        Asistencia,
        Activo
  
} = req.body

if(
    !Nombre||
    !Apellido||
    !NumControl
    
    ) {
    res.status(400). json({msg: "Falta informacion del Alumno"})
    return
}
    let conn;
    try {
        conn = await pool.getConnection()
        const [userExist] = await conn.query(modeloAlumnos.queryAlumnosExits,[Nombre])
       
        if (userExist){
            res.status(403).json({msg: `El Alumno ${Nombre} ya se encuentra registrado `})
            return
        }    

        const {affectedRows}= await conn.query(modeloAlumnos.queryAddAlumnos,
            [   Nombre,
                Apellido,
                NumControl,
                Materia,
                Aula,
                Asistencia,
                Activo          
        ], (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo agregar el registro del Alumno ${Nombre}`})
            return
        }    
        res.json({msg: `El alumno ${Nombre} se agrego correctamente`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


// Actualizar el alumno 
const updateByNombre = async (req = request, res = response) =>{
    const {
        Nombre, 
        Apellido,
        NumControl,
        Materia,
        Aula,
        Asistencia,
        Activo
    } = req.body

    if (
        !Nombre
           
    ){
        res.status(400).json({msg:"Falta datos"})
        return
    }

    let conn;
    try {
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloAlumnos.queryAlumnosExits,[Nombre])
        if (!user){
            res.status(403).json({msg: `El Alumno ${Nombre}  no EXISTE `})
        }
        const {affectedRows} = await conn.query(modeloAlumnos.UPDATEAlumnos,[
            Apellido||user.Apellido,
            NumControl||user.NumControl,
            Materia||user.Materia,
            Aula||user.Aula,
            Asistencia||user.Asistencia,
            Activo||user.Activo,
            Nombre
        ],(error)=>{throw new error})
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro del Alumno ${Nombre}`})
            return
        }
        res.json({msg: `El Nombre del Alumno${Nombre} se actualizo correctamente.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}



module.exports = {getAlumnos, getAlumnosByID, deleteAlumnosByID, addAlumnos, updateByNombre}
