import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
//configuración del acceso a las variables de entorno
dotenv.config();
//crear una constante para la conexión
const pool = createPool({
  host: process.env.DB_HOST,  // Dirección del servidor
  user: process.env.DB_USER,  // Nombre de usuario  
  password: process.env.DB_PASSWORD, // Contraseña
  database: process.env.DB_NAME,  // Nombre de la base de datos
  port: process.env.DB_PORT || 3306,   // Puerto predeterminado
  connectionLimit: 10,  // Número máximo de conexiones limitadas
  queueLimit: 0, // Número máximo de solicitudes en la cola
  waitForConnections: true,
});
//para ser utilizados en otros ambitos
export default pool; //defaul ya que es la unica exportada