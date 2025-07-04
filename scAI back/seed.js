import mongoose from 'mongoose';
import { Reaction } from './models/Reaction.js';
import dotenv from 'dotenv';

dotenv.config();

const reactions = [
  {
    name: "Haber Process",
    equation: "N2 + 3H2 → 2NH3",
    type: "industrial",
    catalyst: "Iron",
    temperature: "400-450°C",
    pressure: "150-200 atm",
    enthalpy: "-92 kJ/mol",
    deltaG: "-33 kJ/mol"
  },
  // აქ დავამატებ მეტ რეაქციას!!!!!!!!!
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Reaction.deleteMany(); 
    await Reaction.insertMany(reactions);
    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();