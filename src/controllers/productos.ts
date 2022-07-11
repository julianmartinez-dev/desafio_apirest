import { Request, Response } from 'express';
import { Contenedor, IProducto } from '../contenedor';

const contenedor = new Contenedor('data');

type Data =
| { message: string }
| IProducto[]
| IProducto

const getAllProducts = async (req: Request, res: Response<Data>) => {
  const products = await contenedor.getAll();
  if(!products){
    return res.status(404).json({ message: 'No hay productos' });
  }
  res.json(products);
};

const getProductById = async (req: Request, res: Response<Data>) => {
  const id = req.params.id;

  if(isNaN(Number(id))){
    return res.status(400).json({ message: 'Id inválido' });
  }  
  
  const product = await contenedor.getById(Number(id));

  if(!product){
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.status(200).json(product);
   
};

const addProduct = async (req: Request, res: Response<Data>) => {
  let { title, price, thumbnail} = req.body as IProducto;

  
  if([title,price,thumbnail].includes('')){
    return res.status(400).json({ message: 'Petición incorrecta' });
  }
  
  price = Number(price);
  const newProductID = await contenedor.save({ title, price , thumbnail });
  
  res.json({ 
    id: newProductID,
    title,
    price,
    thumbnail
   });
};

const deleteProduct = async (req: Request, res: Response<Data>) => {
  const id = req.params.id;
  
  if(isNaN(Number(id))){
    return res.status(400).json({ message: 'Id inválido' });
  }

  const product = await contenedor.getById(Number(id));
  if(!product){
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  await contenedor.deleteById(Number(id));
  return res.status(200).json({ message: 'Producto eliminado' });
  
 
};

const updateProduct = async ( req: Request, res: Response<Data>) => {
  const id = req.params.id;
  const { title = "", price = 0, thumbnail = ''} = req.body as IProducto;

  if(isNaN(Number(id))){
    return res.status(400).json({ message: 'Id inválido' });
  }

  if([title,price,thumbnail].includes('' || 0)){
    return res.status(400).json({ message: 'Petición incorrecta' });
  }

  const productToUpdate = await contenedor.getById(Number(id));
  if(!productToUpdate){
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  await contenedor.update(Number(id), { title, price, thumbnail });
  return res.status(200).json({ message: 'Producto actualizado' });
}

export { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct };
