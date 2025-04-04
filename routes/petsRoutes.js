const express = require('express');
const router = express.Router();
const { createPets, getPets, updatePets, deletePets, getPetsById } = require('../controllers/petsController');

// Rotas de plantações
router.post('/', createPets);
router.get('/', getPets);
router.put('/:id', updatePets);
router.delete('/:id', deletePets); // Rota para atualizar plantação
router.get('/:id', getPetsById); // Rota para deletar plantação

module.exports = router;
