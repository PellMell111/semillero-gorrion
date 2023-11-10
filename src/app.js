import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('Bienvenido a Semillero Gorrión');
});

//Aquí irán los routers

app.use((error, req, res, next) => {
    const message = `Ha ocurrido un error: ${error.message}`;
    console.error(message);
    res.status(500).json({ message });
});
  
export default app;