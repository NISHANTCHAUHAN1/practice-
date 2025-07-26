import mongoose from "mongoose";

// const connectDb =  async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL , {
//             dbName: "CURDApp",
//         });

//         console.log("Mongodb connected");
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default connectDb;

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL , {
            dbName: "CURDApp",
        })
        console.log("Mongodb connected");
        
    } catch(error) {
        console.log(error);
    }
}

export default connectDb;