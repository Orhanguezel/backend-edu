import {Schema,model} from "mongoose";
/*
const studentSchema= new Schema({
    fullName: String,
    age: Number,
    className: String,
    hobbies:[String],
    address: {
        city: String,
        street: String,
        number: Number
    }
}, {timestamps: true});

*/

const addressSchema= new Schema({
    city: {type: String, minlength: 3, maxlength: 50},
    postalCode: {type: String, minlength: 5, maxlength: 10},
}, {_id: false});

const studentSchema= new Schema({
    fullName: {type: String, required: true, minlength:4, maxlength: 50},
    age: {type: Number, required: true, min: 18, max: 65},
    className: String,
    hobbies: [{type: String, enum:["swimming", "reading", "running", "dancing"]}],
    address: addressSchema // 🔹 Adres bilgisi subdocument olarak eklendi
}, {timestamps: true});

export const Student =model("Student", studentSchema);
export default Student;