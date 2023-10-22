import AboutUs from "../components/AboutUs/AboutUs"
import Reviews from "../components/Reviews/Reviews"
import FaqComponent from "../components/faq/faq"
import Placing from "../components/placing/placing"
import Home from "../pages/Home"
import Product from "../pages/Products"
import AllProducts from "../pages/allProducts"
import Basket from "../pages/basket"


export interface IRoute {
 path: string
 element: React.ElementType
}

enum RoutesName {
 Home = '/',
 Product = '/product/:id',
 AllProducts = '/allproducts',
 AboutUs = '/aboutus',
 Reviews = '/reviews',
 FAQ = '/faq',
 Basket = '/basket',
 Plancing = '/placing'
}

export const routes: IRoute[] = [
 {
  path: RoutesName.Home,
  element: Home
 },
 {
  path: RoutesName.Product,
  element: Product
 },
 {
  path: RoutesName.AllProducts,
  element: AllProducts
 },
 {
  path: RoutesName.AboutUs,
  element: AboutUs
 },
 {
  path: RoutesName.FAQ,
  element: FaqComponent
 },
 {
  path: RoutesName.Reviews,
  element: Reviews
 },
 {
  path: RoutesName.Basket,
  element: Basket
 },
 {
  path: RoutesName.Plancing,
  element: Placing
 },
]