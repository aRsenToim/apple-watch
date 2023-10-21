import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductProfile } from "../../types/profileType";


interface IinitialState {
 basket: IProductProfile[] | null
 buyed: IProductProfile[] | null
 sum: number
}

const initialState: IinitialState = {
 basket: null,
 buyed: null,
 sum: 0
}

const profileSlice = createSlice({
 name: "profileSlice",
 initialState,
 reducers: {
  setBasket(state, action: PayloadAction<IProductProfile[]>){
   state.basket = action.payload
  },
  setBuyed(state, action: PayloadAction<IProductProfile[]>){
   state.buyed = action.payload
  },
  getSum(state){
   let count = 0;
   state.basket?.forEach((product: IProductProfile) => {
    count += product.price
   })
   state.sum = count
  }
 }
})

export default profileSlice.reducer
export const {setBasket, setBuyed, getSum} = profileSlice.actions