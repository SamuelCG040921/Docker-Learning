import sequelize from "../config/db";
import { DataTypes, Model } from "sequelize";
import User from "./User";
import Book from "./Book";

class Loan extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public loanDate!: Date;
  public returnDate!: Date;
  public returned!: boolean;
}

Loan.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    bookId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Book,
        key: "id",
      },
    },
    loanDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "loans",
    sequelize,
    timestamps: true,
  }
);

User.hasMany(Loan, { foreignKey: "userId" });
Loan.belongsTo(User, { foreignKey: "userId" });

Book.hasMany(Loan, {foreignKey: 'bookId'});
Loan.belongsTo(Book, {foreignKey: 'bookId'});

export default Loan