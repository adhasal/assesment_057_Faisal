// routes/BarangRoutes.js
import express from 'express';
import * as BarangController from '../controller/BarangController.js';

const router = express.Router();

router.get('/barang', BarangController.getBarang);
router.get('/barang/:kodeBarang', BarangController.getBarangById);
router.post('/barang', BarangController.createBarang);
router.put('/barang/:kodeBarang', BarangController.updateBarang);
router.delete('/barang/:kodeBarang', BarangController.deleteBarang);

export default router;
