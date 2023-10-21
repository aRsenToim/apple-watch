import { FC } from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
 sum: number
}

const Header: FC<IProps> = ({sum}) => {
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
 </div>
}

export default Header