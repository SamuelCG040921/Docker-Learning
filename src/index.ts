import express from 'express';
import sequelize from './config/db';
import User from './models/User';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Test endpoint
app.get('/', (req, res) => {
    res.send('This is a test of a API + Sequalize + Docker');
});

//Endpoint to create a user
app.post('/users', async(req, res) => {
    try {
        const {name, email} = req.body;
        const user = await User.create({name, email});
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: 'An error ocurred creating the user', details: error});
    }
})

//Endpoint to list all the users
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

//Sync the database and run the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listen in port ${PORT}`);
    })
}).catch(err => {
    console.error('Error connecting to DB', err);
})