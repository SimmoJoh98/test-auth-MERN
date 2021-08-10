const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');


dotenv.config()
mongoose.connect(process.env.DB_ACCESS, () => {
    console.log('DB Connected Successfully')
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls);

app.listen(port, () => {
    console.log(`Express Server Listening at: http://localhost:${port}`)
})