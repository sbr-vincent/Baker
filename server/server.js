const express = require("express");
const app = express();

const cors = require('cors');
app.use(express.json(), cors());

const dotenv = require('dotenv');
dotenv.config();

const connectDb =  require("./config/mongoose.config");
connectDb()

const bakeryRouter = require('./routes/bakery.routes')
app.use('/api/bakery', bakeryRouter)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))