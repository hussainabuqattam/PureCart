const { User } = require("./modules/User");
const connectdb = require("./config/DB");
const dotenv = require("dotenv").config();
connectdb();

// import data using seeding database

const importInformation = async () => {
  try {
    await User.insertMany(information);
    console.log("information imported");
  } catch (error) {
    console.log(error);
  }
};

// delet all information in datatbase

const deletedata = async () => {
  try {
    await User.deleteMany();
    console.log("information deleted");
  } catch (error) {
    console.log(error);
  }
};

// run function

// the argv is > node[0] > seeder [1] > -import[2] or -deleted[2]
if (process.argv[2] === "-import") {
  importInformation();
} else if (process.argv[2] === "-deleted") {
  deletedata();
}
