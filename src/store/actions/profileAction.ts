import { Dispatch } from "react"
import { localStorageApi } from "../../api/localstorageApi"
import { getSum, setBasket, setBuyed } from "../slices/profileSlice"
import { IProductProfile } from "../../types/profileType"



export const setProfileFetch = () => {
 return (dispatch: Dispatch<any>) => {
  dispatch(setBasket(localStorageApi.getBasket()))
  dispatch(setBuyed(localStorageApi.getBuyed()))
 }
}

export const addBasketFetch = (basket: IProductProfile[], product: IProductProfile) => {
 return (dispatch: Dispatch<any>) => {
  dispatch(setBasket([...basket, product]))
  localStorageApi.setBasket([...basket, product])
  dispatch(getSum())
 }
}

export const deleteBasket = (basket: IProductProfile[], product: IProductProfile) => {
 return (dispatch: Dispatch<any>) => {
  let copyBasket = [...basket]
  copyBasket.forEach((item, index) => {
   if (item.id == product.id) {
    copyBasket.splice(index, 1)
   }
  })
  dispatch(setBasket(copyBasket))
  localStorageApi.setBasket(copyBasket)
  dispatch(getSum())
 }
}

export const deleteAllBasket = () => {
 return (dispatch: Dispatch<any>) => {
  dispatch(setBasket([]))
  localStorageApi.setBasket([])
 }
}

export const buyProducts = (fullBasket: IProductProfile[]) => {
 return (dispatch: Dispatch<any>) => {
  dispatch(deleteAllBasket())
  dispatch(setBuyed(fullBasket))
  localStorageApi.setByued(fullBasket)
  dispatch(getSum())
 }
}