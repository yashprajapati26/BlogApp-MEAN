const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const DBUri = "mongodb+srv://yashmongodb:Yash%40260801@cluster0.w8ehrtf.mongodb.net/BlogApp?retryWrites=true&w=majority"

mongoose.connect(DBUri,{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){
        console.error(err);
    }else console.log("Connected to mongodb database...");
})

module.exports = mongoose