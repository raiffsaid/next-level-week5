import express from 'express'; 
import './database';
import { routes } from './routes';

const app = express();

app.use(express.json()); // Definir uso do JSON antes das rotas

app.use(routes);

app.listen(3333, () => console.log('Server running on port 3333'));