import express from 'express';
import sequelize from './config/db';
import userRoutes from './routes/user.routes';
import bookRoutes from './routes/book.routes';
import loanRoutes from './routes/loan.routes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Use the user action routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/loans', loanRoutes)

//Sync the database and run the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listen in port ${PORT}`);
    })
}).catch(err => {
    console.error('Error connecting to DB', err);
})