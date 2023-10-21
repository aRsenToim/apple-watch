import { useEffect, useState } from "react"
import Search from "../components/UI/input/search"
import { useProducts } from "../hooks/useProducts"
import Catalog from "../components/catalog/catalog"
import { IProduct } from "../types/productsType"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getSum } from "../store/slices/profileSlice"
import { addBasketFetch, deleteBasket } from "../store/actions/profileAction"
import { IProductProfile } from "../types/profileType"



const AllProducts = () => {
 const [input, setInput] = useState<string>('')
 const products = useProducts()
 const [isProducts, setIsProducts] = useState<IProduct[] | null>(null)
 const basket = useAppSelector(state => state.profileSlice.basket)
 const dispatch = useAppDispatch()

 useEffect(() => {
  setIsProducts(products.filter((product: IProduct) => {
   if (product.title.search(input) !== -1) {
    return product
   }
  }))
 }, [input])


 return <div>
  <Search value={input} title="All products:" changeInput={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.currentTarget.value) }} />
  <Catalog deleteBasket={(product: IProductProfile) => {dispatch(deleteBasket(basket ?? [], product)); dispatch(getSum())} } addBasket={(product: IProductProfile) => {dispatch(addBasketFetch(basket ?? [], product)); dispatch(getSum())}} basket={basket ?? []} products={!isProducts || input == '' ? products : isProducts} />
 </div>
}


export default AllProducts