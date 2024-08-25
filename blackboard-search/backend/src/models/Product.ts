import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  collectionAdmin: { type: String, required: true } // Añadir este campo
});

export const Product = model('Product', productSchema);
