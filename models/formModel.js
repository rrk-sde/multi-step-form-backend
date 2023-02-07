const mongoose = require("mongoose");

const { Schema } = mongoose;

const formSchema = new Schema({
    addon: Object,
    duration: String,
    email: String,
    name: String,
    pnum: String,
    plan: String,
    price: String,
});

module.exports = mongoose.model("Form", formSchema);

