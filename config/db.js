const mongoose = require("mongoose");
exports.connectToDatabase = () => {
  // The useNewUrlParser, useUnifiedTopology and strickQuery options are set to true to avoid some deprecation warnings.
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database successfully ✅ "))
    .catch((e) => console.log("error occured while db connection", e));
};