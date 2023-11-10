import mongoose from 'mongoose';

export const init = async () => {
    try {
        const URI = 'mongodb://localhost:27017/semillero-gorrion';
        await mongoose.connect(URI);
        console.log('Base de datos conectada.');
    } catch (error) {
        console.log('Ha ocurrido un error al conectarse a la base de datos.', error.message);
    }
}