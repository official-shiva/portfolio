const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`DB Connected!!`.bgWhite.green);
}).catch((err) => {
    console.log(`DB not connected!! ------>` + err.bgWhite.red);
});