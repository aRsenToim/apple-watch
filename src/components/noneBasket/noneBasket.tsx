import { NavLink } from 'react-router-dom'
import s from './noneBasket.module.scss'
import { FC } from 'react'


const NoneBasket: FC = () => {
 return <div className={s.noneBasket}>
  <img className={s.noneBasket__image} src="/img/emoji.png" alt="" />
  <h1 className={s.noneBasket__title}>Ваша корзина пуста</h1>
  <p className={s.noneBasket__description}>Самое время добавить в нее что-нибудь</p>
  <NavLink to={'/'} className={s.noneBasket__link}>Перейти в каталог</NavLink>
 </div>
}

export default NoneBasket