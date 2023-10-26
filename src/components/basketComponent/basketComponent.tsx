import { IProductProfile } from '../../types/profileType';
import AmountSum from '../amountSum/amount';
import CatalogBasket from '../catalogBasket/catalogBasket';
import s from './basketComponent.module.scss'
import { FC } from 'react'

interface IProsp {
 basket: IProductProfile[]
 sum: number
 deleteAll: () => void
 buyProducts: () => void
 deleteBasket: (product: IProductProfile) => void
}

const BasketComponent: FC<IProsp> = ({basket, sum, deleteAll, deleteBasket, buyProducts}) => {
 return <div className={s.BasketComponent}>
  <CatalogBasket basket={basket ?? []} deleteBasket={(product: IProductProfile) => { deleteBasket(product) }} />
  <AmountSum sum={sum} deleteAll={() => { deleteAll() }} buyProducts={() => { buyProducts() }} />
 </div>
}


export default BasketComponent