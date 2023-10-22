import { FC } from 'react'
import s from './prealoder.module.scss'

const Prealoder: FC = () => {
 return <div className={s.Prealoder}>
  <img src="/img/prealoder.gif" alt="" className={s.Prealoder} />
 </div>
}


export default Prealoder