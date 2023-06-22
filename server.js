const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();
app.use(cors())
const files = require('./routes/files')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const bodyParser = require('body-parser')

//middlware
// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));

//routes
app.use('/photo',files)

app.use(notFound)

const port = process.env.PORT || 3000;
// const MONGO_URI = "mongodb+srv://pedrambehnam4586:Pedram4586@mywebsite.bcyesuu.mongodb.net/MyWebsite?retryWrites=true&w=majority" 
const start = async ()=>{
    try {
        // await connectDB();
        //DB connection
        require('./database/connection')
        //app listen port
        app.listen(port,console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()
