const formModel = require('../models/formModel');

module.exports.addFormData = async (req, res) => {
    console.log(req.body, "3");

    const form = new formModel(req.body);
    const isSaved = await form.save();

    if (isSaved) {
        res.send('Form Data Saved');
    }
    else {
        res.send('Error in saving form data');
    }
}
