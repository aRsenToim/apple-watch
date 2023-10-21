import { FC, useState } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

interface ILink {
 name: string
 id: string
}

interface IProps {
 setIsLink: (link: string) => void
 isLink: string
}

const Navbar: FC<IProps> = ({ setIsLink, isLink }) => {
 const [linkes] = useState<ILink[]>([
  {
   name: "Iphone's",
   id: 'sa21ds'
  },
  {
   name: "Watch's",
   id: 'sadasds'
  },
  {
   name: "Macbooks",
   id: 'sasdfds'
  },
  {
   name: "All",
   id: 'sadsfds'
  },
 ])


 return <div className={s.Navbar}>
  <h2 className={s.Navbar__title}>Check also.</h2>
  <ul className={s.Navbar__links}>
   {linkes.map((link: ILink) => <div key={link.id}>{isLink == link.name ? <li className={s.Navbar__linkActive} onClick={() => { setIsLink(link.name) }}>
    {link.name}
   </li> : <li className={s.Navbar__link} onClick={() => { setIsLink(link.name) }}>
    {link.name}
   </li>}</div>)}
   <li className={s.Navbar__link}>
    <NavLink to={'/allproducts'} className={s.Navbar__linkItem}>
     See all {'>'}
    </NavLink>
   </li>
  </ul>
 </div>
}


export default Navbar