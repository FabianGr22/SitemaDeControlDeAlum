const modeloDocentes = {

    queryGetDocentes: "SELECT * FROM docentes",
    queryGetDocentesByID: `SELECT * FROM docentes WHERE ID =?`,
    queryDeleteDocentesByID: `UPDATE docentes SET Activo = 'N' WHERE ID = ?`,
    queryDocentesExits: `SELECT 
    Nombre, 
    Apellido,
    Matricula,
    Aula,
    Asistencia,
    Activo FROM docentes WHERE Nombre = ?`,
    queryAddDocentes:
    `INSERT INTO docentes(
        Nombre,
        Apellido,
        Matricula,
        Aula,
        Asistencia,
        Activo)
        VALUES (
            ?, 
            ?,
            ?,
            ?,
            ?,
            ?) `,

            UPDATEDocentes:`
            UPDATE docentes SET
            Apellido=?,
            Matricula=?,
            Aula=?,
            Asistencia=?,
            Activo=?
            WHERE Nombre=?`
    

}
module.exports = modeloDocentes