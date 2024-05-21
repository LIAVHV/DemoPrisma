import express from "express";
import directorioRoutes from './routes/unidad/unidad.route.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', directorioRoutes);

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT: ${port}`)
});