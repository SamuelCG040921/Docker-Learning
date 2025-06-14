import LoanRepository from "../repositories/loan.repository";
import { Request, Response } from "express";

const loanRepository = new LoanRepository();

export const createLoan = async (req: Request, res: Response) => {
  try {
    const { userId, bookId, returnDate } = req.body;

    if (!userId || !bookId || !returnDate) {
      res.status(400).json({ error: "All fields are required" });
    }

    const loan = await loanRepository.createLoan({
      userId,
      bookId,
      returnDate,
    });
    res.status(201).json({ loan: loan, message: "Loan created succesfully" });
  } catch (error) {
    res.status(400).json({ error: "Error creating loan", details: error });
  }
};

export const getAllLoans = async (req: Request, res: Response) => {
  try {
    const loans = await loanRepository.getLoans();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve loans", details: error });
  }
};
