import { FC, useState } from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
   sum: number
}

const Header: FC<IProps> = ({ sum }) => {
   const [isBurger, setIsBurger] = useState<boolean>(false)

   return <div className={s.Header}>
      <NavLink to='/'>
         <img className={s.Header__logo} src="/img/logo.png" alt="" />
      </NavLink>
      <ul className={s.Header__links}>
         <li className={s.Header__link}>
            <NavLink to='/' className={s.Header__Navlink}>
               Home
            </NavLink>
         </li>
         <li className={s.Header__link}>
            <NavLink to='/aboutus' className={s.Header__Navlink}>
               About Us
            </NavLink>
         </li>
         <li className={s.Header__link}>
            <NavLink to='/reviews' className={s.Header__Navlink}>
               Reviews
            </NavLink>
         </li>
         <li className={s.Header__link}>
            <NavLink to='/faq' className={s.Header__Navlink}>
               FAQ
            </NavLink>
         </li>
         <li className={s.Header__link}>
            <NavLink to='/basket' className={s.Header__Navlink}>
               <img src="/img/basket.png" alt="" />
               {sum}
            </NavLink>
         </li>
      </ul>
      <div className={s.Header__burgerBtn}>
         <button onClick={() => { setIsBurger(isBurger ? false : true) }}>
            <img src="/img/burger.png" alt="" />
         </button>
      </div>
      <div className={s.Header__burger} style={{
         display: isBurger ? 'block' : 'none',
         transition: "0.5s easy"
      }}>
         <ul className={s.Burger__navbar}>
            <li className={s.Burger__link}>
               <NavLink onClick={() => {setIsBurger(false)}} to='/' className={s.Burger__Navlink}>
                  Home
               </NavLink>
            </li>
            <li className={s.Burger__link}>
               <NavLink onClick={() => {setIsBurger(false)}} to='/aboutus' className={s.Burger__Navlink}>
                  About Us
               </NavLink>
            </li>
            <li className={s.Burger__link}>
               <NavLink onClick={() => {setIsBurger(false)}} to='/reviews' className={s.Burger__Navlink}>
                  Reviews
               </NavLink>
            </li>
            <li className={s.Burger__link}>
               <NavLink onClick={() => {setIsBurger(false)}} to='/faq' className={s.Burger__Navlink}>
                  FAQ
               </NavLink>
            </li>
            <li className={s.Burger__link}>
               <NavLink onClick={() => {setIsBurger(false)}} to='/basket' className={s.Burger__Navlink}>
                  <img src="/img/basket.png" alt="" />
                  {sum}
               </NavLink>
            </li>
         </ul>
      </div>
   </div>
}

export default Header