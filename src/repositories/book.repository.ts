import Book from "../models/Book";

export default class BookRepository {
    async createBook(data: {author: string, title: string, isbn: string, publishedYear: number}){
        return await Book.create(data);
    }

    async getAllBooks() {
        return await Book.findAll();
    }
}