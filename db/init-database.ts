import mongoose from 'mongoose';

export const initDatabase = async () =>{
    mongoose 
    .connect('mongodb+srv://bbabdibakas:qW0ybV9AzeOL0azf@cluster0.wpyegpl.mongodb.net/?retryWrites=true&w=majority') 
    .then(() => console.log("DB OK")) 
    .catch((err) => console.log("DB error", err))
}