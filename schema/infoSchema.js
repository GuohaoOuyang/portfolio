const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  text: {
    type: String,
    // trim: true,
    required: [true, 'text: Please add some text']
  },
  font: {
    type: String,
    required: [true, 'font: please choose your font']
  },
  into: {
    type: String,
    required: [true, 'into: Please choose where you want to put']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('info', infoSchema);
