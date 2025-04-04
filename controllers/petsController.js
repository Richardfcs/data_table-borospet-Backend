const Pet = require('../models/pets');

// Criar nova plantação
exports.createPets = async (req, res) => {
    try {
        const { name, typep, race, gender, age, responsible } = req.body;
        const pet = new Pet({ name, typep, race, gender, age, responsible });
        await pet.save();
        res.status(201).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todas as plantações
exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find().populate('responsible', 'name');
        res.status(200).json(pets);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPetsById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).populate('responsible', 'name');
        if (!pet) {
            return res.status(404).json({ message: 'Pet não encontrado' });
        }
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar plantação
exports.updatePets = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, typep, race, gender, age, responsible } = req.body;

        const updatedPet = await Pet.findByIdAndUpdate(id, { name, typep, race, gender, age, responsible }, { new: true });
        if (!updatedPet) return res.status(404).json({ message: 'Pet não encontrado' });

        res.status(200).json(updatedPet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir plantação
exports.deletePets = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPet = await Pet.findByIdAndDelete(id);
        if (!deletedPet) return res.status(404).json({ message: 'Pet não encontrado' });

        res.status(200).json({ message: 'Pet excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
