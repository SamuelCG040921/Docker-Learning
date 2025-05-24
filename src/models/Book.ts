import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Book extends Model {
    public id!: number;
    public author!: string;
    public title!: string;
    public isbn!: string;
    public publishedYear!: number;
}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING(13),
            allowNull: false
        },
        publishedYear: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, 
    {
        tableName: "books",
        sequelize
    }
);

export default Book