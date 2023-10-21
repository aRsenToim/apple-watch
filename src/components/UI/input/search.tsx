import { FC } from 'react'
import s from './search.module.scss'

interface IProps {
 changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
 value: string
 title: string
}

const Search: FC<IProps> = ({changeInput, value, title}) => {
 return <div className={s.Search}>
  <h2 className={s.Search__tilte}>{title}</h2>
  <input type="text" className={s.Search__input} value={value} placeholder='Search' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {changeInput(e)}} />
 </div>
}

export default Search