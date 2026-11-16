import {MongoClient} from 'mongodb';
import { env } from './env.js';

//Configuración de la cadena de datos
const usuario = encodeURIComponent(env.mongo.user);
const password = encodeURIComponent(env.mongo.password);
const uri = `mongodb://${usuario}:${password}@${env.mongo.host}:${env.mongo.port}/?authSource=${encodeURIComponent(env.mongo.authSource)}`;

//Creamos un cliente reutyilizable
const client = new MongoClient(uri, {
    
    serverSelectionTimeoutMS: 5000 // Tiempo de espera para la selección del servidor
}
)

let database = null;

// ESTABLECER LA CONEXION
export async function conectarMongoDB() {
    await client.connect();

    database=client.db(env.mongo.database);

    // Comprobar que MongoDB Responde
    await database.command({ ping: 1 });
    console.log('Conectado a MongoDB. Eres un exito hermano');
    return database;
}

//RECUPERAR LA BD CONECTADA
export function obtenerMongoDB() {
    if (!database) {
        throw new Error('Mongo DB no ha querido trabajar hoy, no se ha establecido la conexión');
    }

    return database;
}

//CERRAR CONEXION CUANDO CORRESPONDA
export async function cerrarMongoDB() {
    await client.close();
    database = null;
}

