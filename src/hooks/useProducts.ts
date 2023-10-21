import { getProductsFetch } from "../store/actions/productsAction"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from 'react'


export function useProducts() {
 const products = useAppSelector(state => state.productsSlice.products)
 const dispatch = useAppDispatch()
 useEffect(() => {
  if (!products) {
   dispatch(getProductsFetch())
  }
 }, [products])

 return products ?? []
}