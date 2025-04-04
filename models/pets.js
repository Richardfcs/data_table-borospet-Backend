const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    typep: { type: String, enum: ['gato', 'cachorro'], required: true },
    race: { type: String, required: true},
    gender: { type: String, enum: ['M', 'F'], required: true },
    age: { type: Number, required: true },
    responsible: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Pet = mongoose.model('Plantation', petsSchema);

module.exports = Pet;
