const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://muthupandi:EViCkrWFh6k5b3bs@namastenode.pj18r.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
