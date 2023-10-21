import { FC } from 'react'
import s from './catalog.module.scss'
import Card from '../Card/card'
import { IProduct } from '../../types/productsType'
import { IProductProfile } from '../../types/profileType'

interface IProps {
 products: IProduct[]
 basket: IProductProfile[]
 addBasket: (product: IProductProfile) => void
 deleteBasket: (product: IProductProfile) => void
}


const Catalog: FC<IProps> = ({ products, basket, addBasket, deleteBasket }) => {

 return <div className={s.Catalog}>
  <div className={s.Catalog__items}>
   {products.map((product: IProduct) => <Card addBasket={() => {addBasket({id: product.id, price: product.info.Price, img: product.img, name: product.title})}} deleteBasket={() => {deleteBasket({id: product.id, price: product.info.Price, img: product.img, name: product.title})}} isBasket={JSON.stringify(basket).includes(JSON.stringify({id: product.id, price: product.info.Price, img: product.img, name: product.title}))} key={product.id} id={product.id} title={product.title} info={product.info} img={product.img} />)}
  </div>
 </div>
}


export default Catalog