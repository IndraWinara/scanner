import { app } from "./app";
import connectDb from "./utils/db";

const port = 5000

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
    connectDb()
})