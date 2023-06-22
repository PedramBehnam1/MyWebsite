const mongoose = require('mongoose')
const mysql = require('mysql')

const connectionString = "mongodb+srv://pedrambehnam4586:Pedram4586@mywebsite.bcyesuu.mongodb.net/MyWebsite?retryWrites=true&w=majority";


// const connectDB = (url)=>{
//     return mongoose
//     .connect(url, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology:true
//     })
// }


const con =  mysql.createConnection({
    host: "billy.iran.liara.ir",
    user: "root",
    password: "p65p2RtwzvXpJS3Fi3k2IJW5"
    
})

con.connect((err)=>{
    return err
    console.log("Connected!");
})


