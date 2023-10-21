import { $api } from "./api"
import {IResponseGetProducts, IResponseGetProduct} from '../types/productsType'

export const productsApi = {
 async getProducts(): Promise<IResponseGetProducts>{
  const data = await $api.get('/products')
  return data
 },
 async getProduct(id: string): Promise<IResponseGetProduct>{
  const data = await $api.get(`/products/${id}`)
  return data
 }
}