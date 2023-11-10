import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, default: true },
    stock: { type: Number },
    category: { type: String },
    thumbnails: { type: String },
  });

const Product = mongoose.model('Product', productSchema);

export default Product;