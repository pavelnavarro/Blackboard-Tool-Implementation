import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Product } from './models/Product';

dotenv.config();

console.log('MongoDB URI:', process.env.MONGODB_URI); // Verificar

mongoose.connect(process.env.MONGODB_URI || '', {
  serverSelectionTimeoutMS: 5000, // Ajusta el tiempo de espera según sea necesario
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const be_server = express();

be_server.use(express.json());
be_server.use(express.urlencoded({ extended: true }));
be_server.use(cors());

be_server.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'I hear your request' });
});

be_server.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

be_server.post('/products', async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      ...req.body,
      collectionAdmin: '1NNovati0n-o8fW' // Añadir este campo
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product', error });
  }
});

be_server.put('/products/:id', async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
      collectionAdmin: '1NNovati0n-o8fW' // Añadir este campo
    }, { new: true });
    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product', error });
  }
});

be_server.delete('/products/:id', async (req: Request, res: Response) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Product with id ${req.params.id} deleted` });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

be_server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
