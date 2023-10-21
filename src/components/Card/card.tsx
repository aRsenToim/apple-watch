import { FC } from 'react'
import s from './card.module.scss'
import { NavLink } from 'react-router-dom'


interface IProps {
 id: string
 title: string
 img: string
 isBasket: boolean
 info: {
  Price: number
  Memory: number | null
  Category: string
 }
 
 addBasket: () => void
 deleteBasket: () => void
}

const Card: FC<IProps> = ({ id, title, img, info, isBasket, addBasket, deleteBasket}) => {
 return <div className={s.Card}>
  <NavLink to={`/product/${id}`}>
   <img src={img} className={s.Card__image} alt="" />
  </NavLink>
  <div className={s.Card__info}>
   <NavLink to={`/product/${id}`} className='navlink'>
    <h3 className={s.Card__title}>{title}</h3>
   </NavLink>
   <ul className={s.Card__characteristic}>
    <li>Price: {info.Price}$</li>
    <li>Memory: {info.Memory} GB</li>
    <li>Category: {info.Category}</li>
   </ul>
   <div className={s.Card__buttons}>
    {isBasket ? <button className={s.Card__buttonDelete} onClick={() => {deleteBasket()}}>delete basket</button> : <button onClick={() => {addBasket()}} className={s.Card__button}>Add basket</button>}
   </div>
  </div>
 </div>
}


export default Card