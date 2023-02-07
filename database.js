const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017/multiform_db";

mongoose.set("strictQuery", false);

mongoose.connect(MONGO_URL, (err) => {
    if (!err) {
        console.log("Connected to MongoDB");
    } else {
        console.log("Error in DB connection: " + err);
    }
});



