import { FC } from 'react'
import s from './basketCard.module.scss'

interface IProps {
 img: string
 title: string
 price: number
 id: string
 deleteBasket: () => void
}

const BasketCard: FC<IProps> = ({img, title, price, deleteBasket}) => {
 return <div className={s.BasketCard}>
  <img src={img} className={s.BasketCard__image} alt="" />
  <div className={s.BasketCard__info}>
   <div className={s.BasketCard__head}>
    <h2>{title}</h2>
    <button className={s.BasketCard__btn} onClick={deleteBasket}>
     <img src="/img/delete.png" alt="" />
    </button>
   </div>
   <div className={s.BasketCard__footer}>
    <h4>{price} $</h4>
   </div>
  </div>
 </div>
}


export default BasketCard