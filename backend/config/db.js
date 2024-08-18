
const mongoose = require("mongoose");

const connectDB = async(req, res) => {
    const DBConnect = await mongoose.connect(process.env.MONGO_URI);

    if(DBConnect) {
        console.log("Database Connected")
    }
    else {
        console.log(DBConnect)
    }
} 

module.exports = connectDB