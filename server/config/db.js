const mongoose = require('mongoose');

exports.mongoConnection = mongoose.connect('mongodb://localhost:27017/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connection successful!!");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});
