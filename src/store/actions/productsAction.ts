import { Dispatch } from "react"
import { productsApi } from "../../api/productsApi"
import { IResponseGetProduct, IResponseGetProducts } from "../../types/productsType"
import { setError, setProduct, setProducts } from "../slices/productsSlice"
import { AxiosError } from "axios"



export const getProductsFetch = () => {
 return (dispatch: Dispatch<any>) => {
  productsApi.getProducts().then((data: IResponseGetProducts) => {
   dispatch(setProducts(data.data))
  }).catch((error: Error | AxiosError) => dispatch(setError(error.message)))
 }
}


export const getProductFetch = (id: string) => {
 return (dispatch: Dispatch<any>) => {
  productsApi.getProduct(id).then((data: IResponseGetProduct) => {
   dispatch(setProduct(data.data))
  }).catch((error: Error | AxiosError) => dispatch(setError(error.message)))
 }
}