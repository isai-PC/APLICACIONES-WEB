import db from '../config/db.js'; //importamos la base de datos de config
//      ^- db =  pool
//no se ocupa ottros ekemtos, aqui se manejan las consultas
// Solo lógica de DB
//desistructuracion
/* const getAllGrupos =  () => {    traer todos los grupos */
export const getAllGrupos = async () => {  //funcion asincrona

  const [rows] = await db.query('SELECT * FROM grupos WHERE activo=1'); // .query es una consulta
  return rows;
};

export const getAllGruposById = async () => {  //funcion asincrona

  const [rows] = await db.query('SELECT * FROM grupos WHERE activo =1 AND id_grupo = ?', [id_grupo]); // .query es una consulta
  return rows[0];//devuelve la primera fila
};


export const createGrupo = async ({ nombre_grupo }) => {  //funcion asincrona
  const [result] = await db.query(
    'INSERT INTO grupos (nombre_grupo) VALUES (?)',
    [nombre_grupo]
  );
  return { id: result.insertId, nombre_grupo };
};