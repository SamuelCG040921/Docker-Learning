import BookRepository from "../repositories/book.repository";
import { Request, Response } from "express";

const bookRepository = new BookRepository();

export const createBook = async (req: Request, res: Response) => {
  try {
    const { author, title, isbn, publishedYear } = req.body;
    const data = { author, title, isbn, publishedYear };
    const book = await bookRepository.createBook(data);
    res.status(201).json({book, message: "Book created successfully"});
  } catch (error) {
    res.status(400).json({error: "Error creating book", details: error});
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookRepository.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({error: "Error fetching books", details: error});
    }
}
