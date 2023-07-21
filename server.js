const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: [
      "https://prismatic-queijadas-0e8da0.netlify.app",
      "http://localhost:3000",
    ],
    allowedHeaders: ["Content-Type"],
    exposedHeaders: ["Access-Control-Allow-Origin"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
app.use(cors(corsOptions));


const PORT = 3001 || process.env.PORT;

const {userRouter} = require('./routes/users');
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('Server is running...')
})