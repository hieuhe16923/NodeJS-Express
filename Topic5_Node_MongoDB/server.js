require('dotenv').config();
// Khai bao doi tuong MongoClient tu module: mongodb
const {MongoClient} = require('mongodb');

// Khoi tao doi tuong ket noi CSDL
const dbClient = new MongoClient(process.env.URL_MONGODB);

// Dinh nghia 1 ham xu ly ket noi CSDL theo co che bat dong bo (async)
// return: Promise (onFullFill, onReject, onFinally)
async function connectDB(){
    // Tien hanh ket noi CSDL
    await dbClient.connect();
    console.log("Connect to MongoDB success");
    // Chi dinh ten CSDL va collection can lam viec
    const dbName = dbClient.db(process.env.DB_NAME);
    const collection = dbName.collection("students");

    // Thuc hien cac action tren collection: CRUD
    // C - Create
    await collection.insertOne({'name': 'Hoàng Phi Hồng', 'age': 20, 'gender': 'male'});
        
    // R - Read
    console.log("List all students:");
    const studentList = await collection.find({}).toArray();
    return studentList;
}

// Thuc thi ket noi va nhan ket qua tra ve
connectDB()
    .then(console.log)
    .catch(console.error)
    .finally(()=> dbClient.close());