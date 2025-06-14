import Loan from "../models/Loan";

export default class LoanRepository {
    async createLoan(data: {
        userId: number;
        bookId: number;
        returnDate: Date;
      }) {
        return await Loan.create(data);
      }

      async getLoans() {
        return await Loan.findAll({include: ['User', 'Book']});
      }
}