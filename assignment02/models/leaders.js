const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    default: '',
  },
  abbr: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const LeaderModel = mongoose.model('Leader', leaderSchema);

module.exports = LeaderModel;
