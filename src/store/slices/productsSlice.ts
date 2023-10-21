import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/productsType'


interface IInitialState {
 error: string | null,
 products: IProduct[] | null
 product: IProduct | null
 isLink: string
}

const initialState: IInitialState = {
 error: null,
 products: null,
 product: null,
 isLink: "All"
}


const productsSlice = createSlice({
 name: "productsSlice",
 initialState,
 reducers: {
  setProducts(state, action: PayloadAction<IProduct[]>) {
   state.products = action.payload
  },
  setError(state, action: PayloadAction<string>) {
   state.error = action.payload
  },
  setProduct(state, action: PayloadAction<IProduct>) {
   state.product = action.payload
  },
  setIsLink(state, action: PayloadAction<string>){
   state.isLink = action.payload
   // let productsCopy = state.products
   // productsCopy?.filter((product: IProduct) => {
   //  if (product.info.Category.toLocaleUpperCase() == action.payload.toLocaleUpperCase()) {
   //   return product
   //  }
   // })
   // state.products = productsCopy
  }
 }
})


export default productsSlice.reducer
export const { setError, setProducts, setProduct, setIsLink } = productsSlice.actions