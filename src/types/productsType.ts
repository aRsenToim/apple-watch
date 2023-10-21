

export interface IProduct {
 id: string
 title: string
 img: string
 info: {
  Price: number
  Memory: number | null
  Category: string
  cpu: string
  camera: string
  size: string
  weight: string
  display: string
  battary: string
 }
 description: string
}

export interface IResponseGetProducts {
 data: IProduct[]
}

export interface IResponseGetProduct {
 data: IProduct
}