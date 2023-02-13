const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

// mongodb://localhost:27017/aryan-dynamic

mongoose.connect("mongodb://localhost:27017" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 