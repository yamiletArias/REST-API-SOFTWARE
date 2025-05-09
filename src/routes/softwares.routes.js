import { Router } from 'express';
import { 
  createSoftwares, 
  deleteSoftwares, 
  getSoftwareById, 
  getSoftwares, 
  updateSoftwares } from '../controllers/softwares.controller.js';

const router = Router();

router.get('/softwares', getSoftwares);
router.get('/softwares/:id', getSoftwareById);
router.post('/softwares', createSoftwares);
router.put('/softwares/:id', updateSoftwares);
router.delete('/softwares/:id', deleteSoftwares);

export default router;