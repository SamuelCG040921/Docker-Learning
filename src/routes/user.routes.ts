import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);

export default router;