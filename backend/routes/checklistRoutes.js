import express from 'express';
import { addToChecklist, getChecklist, updateChecklistItem } from '../controllers/checklistController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add', auth, addToChecklist);
router.get('/', auth, getChecklist);
router.patch('/:id', auth, updateChecklistItem);

export default router;