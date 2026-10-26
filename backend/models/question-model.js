// schema/structure
// Import mongoose
// define schema:
// question : String,
// options: array of object : [{id,value}]
//          1: Mango 2: Apple 3: Grapes 4: Kiwi
// answer: object {id,value}
// export model

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

    question:String,
    options:[{id:Number, value:String}],
    answer:{id:Number, value:String}
})

module.exports = mongoose.models?.Question || mongoose.model("Question", questionSchema)
// questions

