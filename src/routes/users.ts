import express from 'express';
import {
  getAllUsers,
  getUserById,
  patchUser,
  patchUserAvatar,
  getCurrentUser,
} from '../controllers/users';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', getUserById);
router.patch('/me', patchUser);
router.patch('/me/avatar', patchUserAvatar);

export default router;
