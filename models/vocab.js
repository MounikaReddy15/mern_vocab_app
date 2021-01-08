const mongoose = require("mongoose");

const vocabSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    meaning: {
      type: Array,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Vocab = mongoose.model("Vocab", vocabSchema);

module.exports = Vocab;
