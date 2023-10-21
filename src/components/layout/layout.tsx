import { FC, useEffect } from 'react'
import s from './layout.module.scss'
import {Outlet} from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setProfileFetch } from '../../store/actions/profileAction'
import { getSum } from '../../store/slices/profileSlice'

const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const basket = useAppSelector(state => state.profileSlice.basket)
 const buyed = useAppSelector(state => state.profileSlice.buyed)
 const sum = useAppSelector(state => state.profileSlice.sum)

 useEffect(() => {
  if (!basket || !buyed) {
   dispatch(setProfileFetch())
   dispatch(getSum())
  }
 }, [])
 return <div className={s.Layout}>
  <Header sum={sum}/>
  <Outlet/>
  <Footer/>
 </div>
}

export default Layout