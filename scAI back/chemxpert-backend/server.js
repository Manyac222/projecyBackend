import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import reactionRoutes from './routes/reactions.js';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ChemXpert API is running!');
});

app.use('/api/reactions', reactionRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

connectDB();