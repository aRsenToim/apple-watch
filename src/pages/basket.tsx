import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import CatalogBasket from "../components/catalogBasket/catalogBasket"
import AmountSum from "../components/amountSum/amount"
import { buyProducts, deleteAllBasket, deleteBasket } from "../store/actions/profileAction"
import { IProductProfile } from "../types/profileType"
import NoneBasket from "../components/noneBasket/noneBasket"
import BasketComponent from "../components/basketComponent/basketComponent"




const Basket: FC = () => {
 const basket = useAppSelector(state => state.profileSlice.basket)
 const sum = useAppSelector(state => state.profileSlice.sum)
 const dispatch = useAppDispatch()

 return <div style={{
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
 }}>
  {basket?.length == 0 ? <NoneBasket /> : <div>
   <BasketComponent sum={sum} basket={basket ?? []} deleteBasket={(product: IProductProfile) => { dispatch(deleteBasket(basket ?? [], product))} } deleteAll={() => {dispatch(deleteAllBasket())}} buyProducts={() => {dispatch(buyProducts(basket ?? []))}}/>
  </div>}
 </div>
}


export default Basket