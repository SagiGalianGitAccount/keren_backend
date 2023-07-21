const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: ['http://localhost:3000', 'https://64baaafed143b7190f099c01--singular-gumption-1efb7d.netlify.app/'], credentials: true}));


const PORT = 3001 || process.env.PORT;

const {userRouter} = require('./routes/users');
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('Server is running...')
})