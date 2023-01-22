import express from 'express'
const router = express.Router();
import { registrar, perfil, confirmar, autenticar } from '../controllers/veterinarioController.js'
import checkAuth from '../middleware/authMiddleware.js';

// Área Pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
// Área Privada
router.get('/perfil', checkAuth, perfil);

export default router;