import express from 'express';
import { initDb } from '../database/database';
import cors from 'cors';
import {Application} from "../database/models/application.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Инициализация базы данных
initDb().then(() => {
    console.log('Database connected and synchronized');
});

app.post('/app', async (req, res) => {
    try {
        const { description, status } = req.body;
        const user = await Application.create({ description, status });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/app/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const application = await Application.findByPk(id);

        if (application) {
            res.json(application);
        } else {
            res.status(404).json({ error: 'Заявка не найдена' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Экспорт серверной функции Vercel
export default function handler(req, res) {
    app(req, res);
}
