const {request, response } = require ("express");

const pool = require ("../db/connection");
const modeloDocentes = require ("../models/Docentes");


const getDocentes = async (req = request, res = response) => {
    let conn;
    try {
        conn = await pool.getConnection()
        const docente = await conn.query(modeloDocentes.queryGetDocentes, (error) => {throw new Error(error)})
        if (!docente){
            res.status(404).json({msg: " Docente NO Registrado"})
            return
        }         
        res.json({docente}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}

const getDocentesBYID = async (req = request, res = response) => {
    const {id} = req.params
    let conn;
    try {
        conn = await pool.getConnection()
        const [maestro] = await conn.query(modeloDocentes.queryGetDocentesByID,[id],(error) => {throw new Error(error)})
        if (!maestro){
            res.status(404).json({msg: `Docente inexistente con el ID=${id}`})
            return
        }         
        res.json({maestro}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


const deleteDocentesByID = async (req = request, res = response) => {
    const {id} = req.params
    let conn;
    try {
        conn = await pool.getConnection()
        const useraffectedRows= await conn.query(modeloDocentes.queryDeleteDocentesByID, [id], (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (useraffectedRows === 0){
            res.status(404).json({msg: `Docente NO eliminado con el ID  ${id}`})
            return
        }    
        res.json({msg: `Docente eliminado EXITOSAMENTE con el ID ${id}`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


const addDocentes= async (req = request, res = response) => {
    const {
        Nombre, 
        Apellido,
        Matricula,
        Aula,
        Asistencia,
        Activo
  
} = req.body

if(
    !Nombre||
    !Apellido||
    !Matricula
    
    ) {
    res.status(400). json({msg: "Falta informacion del Docente"})
    return
}
    let conn;
    try {
        conn = await pool.getConnection()
        const [userExist] = await conn.query(modeloDocentes.queryDocentesExits,[Nombre])
       
        if (userExist){
            res.status(403).json({msg: `El Docente ${Nombre} ya se encuentra registrado `})
            return
        }    

        const {affectedRows}= await conn.query(modeloDocentes.queryAddDocentes,
            [   Nombre,
                Apellido,
                Matricula,
                Aula,
                Asistencia,
                Activo          
        ], (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (affectedRows === 0){
            res.status(404).json({msg: `No se agrego el registro del Docente ${Nombre}`})
            return
        }    
        res.json({msg: `El Docente ${Nombre} se agrego correctamente`}) 
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
const updateByNombre= async (req = request, res = response) =>{
    const {
       
        Nombre, 
        Apellido,
        Matricula,
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
        const [user]=await conn.query(modeloDocentes.queryDocentesExits,[Nombre])
        if (!user){
            res.status(403).json({msg: `El Docente ${Nombre}  no EXISTE `})
        }
        const {affectedRows} = await conn.query(modeloDocentes.UPDATEDocentes,[
            Apellido||user.Apellido,
            Matricula||user.Matricula,
            Aula||user.Aula,
            Asistencia||user.Asistencia,
            Activo||user.Activo,
            Nombre
        ],(error)=>{throw new error})
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro del Docente ${Nombre}`})
            return
        }
        res.json({msg: `El Nombre del Docente ${Nombre} se actualizo correctamente.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = { getDocentes, getDocentesBYID, deleteDocentesByID, addDocentes, updateByNombre}