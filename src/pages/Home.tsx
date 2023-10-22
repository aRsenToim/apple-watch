import { FC, useEffect, useState } from "react"
import Catalog from "../components/catalog/catalog"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setIsLink } from "../store/slices/productsSlice"
import { useProducts } from "../hooks/useProducts"
import { IProduct } from "../types/productsType"
import Navbar from "../components/navlink/Navbar"
import { IProductProfile } from "../types/profileType"
import { addBasketFetch, deleteBasket } from "../store/actions/profileAction"
import { getSum } from "../store/slices/profileSlice"
import Prealoder from "../components/prealoder/prealoder"


const Home: FC = () => {
 const products = useProducts()
 const [isProducts, setIsProducts] = useState<IProduct[] | null>(null)
 const isLink = useAppSelector(state => state.productsSlice.isLink)
 const dispatch = useAppDispatch()
 const basket = useAppSelector(state => state.profileSlice.basket)

 useEffect(() => {
  let arr = products.filter((product: IProduct) => {
   if (product.info.Category == isLink) {
    return product
   }
  })
  setIsProducts(arr);
 }, [isLink])



 return <div>
  {isProducts ? <>
   <Navbar isLink={isLink} setIsLink={(link: string) => { dispatch(setIsLink(link)); dispatch(getSum()) }} />
   <Catalog deleteBasket={(product: IProductProfile) => { dispatch(deleteBasket(basket ?? [], product)); }} addBasket={(product: IProductProfile) => { dispatch(addBasketFetch(basket ?? [], product)); }} products={!isProducts || isLink == 'All' ? products : isProducts} basket={basket ?? []} />
  </> : <Prealoder />}
 </div>
}


export default Home