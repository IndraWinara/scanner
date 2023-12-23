import mongoose from "mongoose";
require('dotenv').config()


const dbUrl : string = process.env.DB_URI || ''


const connectDb = async ()=>{
    try {
        await mongoose.connect(dbUrl)
        .then(()=>{
            console.log(`Mongodb Connected`)
        })
    } catch (error : any) {
        console.log(`Mongodb disconnected ${error.message}`)
        setTimeout(connectDb,4000)
    }
}

export default connectDb