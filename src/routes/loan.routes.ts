// src/routes/loan.routes.ts
import express from "express";
import { createLoan, getAllLoans } from "../controllers/loan.controller";

const router = express.Router();

router.get('/', getAllLoans);
router.post('/', createLoan);

export default router;
