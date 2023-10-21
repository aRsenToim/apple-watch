import { FC } from 'react'
import s from './amount.module.scss'


interface IProps {
 sum: number
 deleteAll: () => void
 buyProducts: () => void
}

const AmountSum: FC<IProps> = ({ sum, deleteAll, buyProducts }) => {
 return <div className={s.AmountSum}>
  <h2 className={s.AmountSum__title}>Условия заказа</h2>
  <hr className={s.AmountSum__line} />
  <div className={s.AmountSum__total}>
   <h3>Итого: </h3>
   <h3>{sum} $</h3>
  </div>
  <button className={s.AmountSum__button} onClick={buyProducts}>
   Перейти к оформлению
  </button>
  <button onClick={deleteAll} className={s.AmountSum__delete}>
   Убрать все
  </button>
 </div>
}

export default AmountSum