const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  timestamp: String, // Could be Date as well, but used String to reduce complexity, not recommended
  note: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = {
  model: Note,
  schema: noteSchema
};
