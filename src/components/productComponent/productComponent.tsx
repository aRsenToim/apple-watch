import { IProduct } from '../../types/productsType'
import s from './productComponent.module.scss'
import { FC } from 'react'

interface IProps {
 product: IProduct
}

const ProductComponent: FC<IProps> = ({product}) => {
 return <div className={s.ProductComponent}>
  <img className={s.ProductComponent__image} src={product.img} alt="" />
  <div className={s.ProductComponent__info}>
   <h1 className={s.ProductComponent__title}>{product.title}</h1>
   <h3 className={s.ProductComponent__price}>{product.info.Price} $</h3>
   <ul className={s.ProductComponent__items}>
    <li>Memory: {product.info.Memory} gb</li>
    <li>Category: {product.info.Category}</li>
    <li>cpu: {product.info.cpu} cores</li>
    <li>camera: {product.info.camera} mp</li>
    <li>size: {product.info.size} мм</li>
    <li>weight: {product.info.weight} мм</li>
    <li>display: {product.info.display}</li>
    <li>battary: {product.info.battary}</li>
   </ul>
   <div className={s.ProductComponent__description}>
    <p className={s.ProductComponent__tilteDesc}>Описание: </p>
    <p className={s.ProductComponent__textDesc}>
    {product.description}
    </p>
   </div>
  </div>
 </div>
}

export default ProductComponent