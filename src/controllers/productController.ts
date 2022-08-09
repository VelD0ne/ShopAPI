import { Request, Response } from 'express';
import { productRepository } from '../db/repository/product';

export async function createProduct(req: Request, res: Response) {
  const product = await productRepository.create(req.body);
  const result = await productRepository.save(product);
  res.json(result);
}

export async function getProduct(req: Request, res: Response) {
  const product = await productRepository.findOneBy({
    id: parseInt(req.params.id),
  });
  res.json(product);
}

export async function getProducts(req: Request, res: Response) {
  const products = await productRepository.find();
  res.json(products);
}

export async function updateProduct(req: Request, res: Response) {
  const product = await productRepository.findOneBy({
    id: parseInt(req.params.id),
  });
  productRepository.merge(product, req.body);
  const result = await productRepository.save(product);
  res.json(result);
}
export async function deleteProduct(req: Request, res: Response) {
  const products = await productRepository.delete(req.params.id);
  res.json(products);
}
