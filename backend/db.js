// connecting to DB
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/mynotebook"

// gpt
async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (err) {
    console.error("Failed to connect to Mongo!!!", err);
  }
}

// comment
// const connectToMongo = () => {
//   mongoose.connect(mongoURI);
//     console.log("Connected to Mongo Successfully!");
// }

// cwh - error created
/*
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully!");
  })
}
  */

// comment
/*
async function connectToMongo() {
  await mongoose.connect(mongoURI).then(() => {
    console.log("Connected to Mongo Successfully!")
  }).catch(err =>console.log(err));
}
  */


module.exports = connectToMongo;