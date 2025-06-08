import express from 'express';
import sequelize from './config/db';
import userRoutes from './routes/user.routes';
import bookRoutes from './routes/book.routes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Use the user action routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

//Sync the database and run the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listen in port ${PORT}`);
    })
}).catch(err => {
    console.error('Error connecting to DB', err);
})