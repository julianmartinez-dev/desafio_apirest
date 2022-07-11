import express, { Request, Response } from 'express';
import productsRoutes from './routes/productos'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productsRoutes);

app.get('/', (req : Request, res : Response) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(8080, () => {
    console.log('Server running on port 8080');
})

app.on("error", e => console.log('Error: ', e));