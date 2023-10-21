import {IProductProfile} from '../types/profileType'


export const localStorageApi = {
 keyBasket: 'basketAW',
 keyBuyed: 'buyedAW',
 getBasket() {
  const data = localStorage.getItem(this.keyBasket)

  if (!data) return []

  return JSON.parse(data)
 },
 setBasket(basket: IProductProfile[]) {
  localStorage.setItem(this.keyBasket, JSON.stringify(basket))
 },
 getBuyed() {
  const data = localStorage.getItem(this.keyBuyed)

  if (!data) return []

  return JSON.parse(data)
 },
 setByued(basket: IProductProfile[]) {
  localStorage.setItem(this.keyBuyed, JSON.stringify(basket))
 }
}