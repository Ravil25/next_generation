const mongoose = require('mongoose');

export const CarDescSchema = new mongoose.Schema({ 
    _id: { 
        type: String, 
        required: true, 
    }, 
    title: { 
        type: String, 
        required: true, 
    }, 
    year: { 
        type: Number, 
        required: true, 
    }, 
    price: { 
        type: String, 
        required: true, 
    }, 
    generation: { 
        type: String, 
    }, 
    capacity: { 
        type: String, 
    }, 
    city: { 
        type: String, 
    }, 
    body: { 
        type: String, 
    }, 
    rudder: { 
        type: String, 
    }, 
    color: { 
        type: String, 
    }, 
    clearedInKazakhstan: { 
        type: String, 
    }, 
    mileage_run: { 
        type: String, 
    }, 
    drive: { 
        type: String, 
    }, 
}, { 
    timestamps: true 
}) 

export const CarDesc =  mongoose.model("CarDesc", CarDescSchema)
 