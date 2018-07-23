const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const promoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  price: {
    type: mongoose.Types.Currency,
    required: true,
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

const PromoModel = mongoose.model('Promo', promoSchema);

module.exports = PromoModel;
