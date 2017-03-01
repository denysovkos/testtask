const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let validators = require('mongoose-validators');

const orderSchema = new Schema({
  orderN: {type: String, validate: validators.isLength(1, 60)},
  managerName: {type: String, validate: validators.isLength(1, 60)},
  salesType: {type: String, validate: validators.isLength(1, 60)},
  customer: {type: String, validate: validators.isLength(1, 60)},
  provider: {type: String, validate: validators.isLength(1, 60)},
  dueDate: {type: String, validate: validators.isLength(1, 60)},
  createdMonth: {type: String}
});

module.exports = orderSchema;
