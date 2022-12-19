const modeloAlumnos = {
queryGetAlumnos: "SELECT * FROM alumnos",
queryGetAlumnosByID: `SELECT * FROM alumnos WHERE ID =?`,
queryDeleteAlumnosByID: `UPDATE alumnos SET Activo = 'N' WHERE ID = ?`,
queryAlumnosExits: `SELECT 
Nombre, 
Apellido,
NumControl,
Materia,
Aula,
Asistencia,
Activo FROM alumnos WHERE Nombre = ?`,
queryAddAlumnos:
`INSERT INTO alumnos(
    Nombre,
    Apellido,
    NumControl,
    Materia,
    Aula,
    Asistencia,
    Activo)
    VALUES (
        ?, 
        ?,
        ?,
        ?,
        ?,
        ?,
        ?) `,

     UPDATEAlumnos:`
    UPDATE alumnos SET
    Apellido=?,
    NumControl=?,
    Materia=?,
    Aula=?,
    Asistencia=?,
    Activo=?
    WHERE Nombre=?`

        
}

module.exports = modeloAlumnos