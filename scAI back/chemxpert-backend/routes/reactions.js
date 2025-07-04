import express from 'express';
import { Reaction } from '../models/Reaction.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const reaction = new Reaction(req.body);
  try {
    const newReaction = await reaction.save();
    res.status(201).json(newReaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;