const mongoose = require("mongoose")

//connction 
mongoose.connect("mongodb+srv://raufraoof34:12345@cluster0e.efecezc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))
let mongoschema = mongoose.Schema

const EmployeeSchema = new mongoose.Schema({
    enmae:String,
    eage:Number,
    eposition:String,
    esalary:Number,
})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel