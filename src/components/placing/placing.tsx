import s from './placing.module.scss'


const Placing = () => {
 return <div className={s.Placing}>
  <img src="/img/placing.png" className={s.Placing__image} alt="" />
  <h1 className={s.Placing__title}>Order is processed!</h1>
 </div>
}


export default Placing