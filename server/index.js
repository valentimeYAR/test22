// index.js
import express from 'express';
import {initDb} from "./database/database.js";
import {Application} from "./database/models/application.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

initDb().then(() => {
    console.log('Database connected and synchronized');
});


app.post('/app', async (req, res) => {
    try {
        const {description, status} = req.body;
        const user = await Application.create({description, status});
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get('/app/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const application = await Application.findByPk(id);

        if (application) {
            res.json(application);
        } else {
            res.status(404).json({error: 'Заявка не найдена'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
