const mongoose = require("mongoose");

const puppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
});

const Puppy = mongoose.model("puppy", puppySchema);

export default Puppy;
