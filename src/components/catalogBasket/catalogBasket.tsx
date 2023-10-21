import { FC } from 'react'
import s from './catalogBasket.module.scss'
import BasketCard from '../basketCard/basketCard'
import { IProductProfile } from '../../types/profileType'

interface IProps {
 basket: IProductProfile[]
 deleteBasket: (product: IProductProfile) => void
}

const CatalogBasket: FC<IProps> = ({ basket, deleteBasket }) => {
 return <div className={s.CatalogBasket}>
  <h2 className={s.CatalogBasket__title}>Basket:</h2>
  <div className={s.CatalogBasket__items}>
   {basket.map((product: IProductProfile) => <BasketCard deleteBasket={() => { deleteBasket({ id: product.id, name: product.name, img: product.img, price: product.price }) }} key={product.id} id={product.id} title={product.name} img={product.img} price={product.price} />)}
  </div>
 </div>
}


export default CatalogBasket