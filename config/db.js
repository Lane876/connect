const mogooose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

async function connectDb() {
  try {
    await mogooose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MogoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDb;
