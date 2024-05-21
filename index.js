import express from "express";
import estados from './routes/Estados/estados.route.js';
import municipios from './routes/Municipios/municipios.route.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', estados);
app.use('/api', municipios);
app.listen(port, () => {
    console.log(`APP LISTENING ON PORT: ${port}`)
});