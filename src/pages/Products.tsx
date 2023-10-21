import { FC } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {useEffect} from 'react'
import { getProductFetch } from "../store/actions/productsAction"
import ProductComponent from "../components/productComponent/productComponent"

const Product: FC = () => {
 const {id} = useParams()
 const product = useAppSelector(state => state.productsSlice.product)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (product?.id !== id) {
   dispatch(getProductFetch(id ?? ''))
  }
 }, [id])

 return <div>
  {product ? <ProductComponent product={product}/> : null}
 </div>
}


export default Product