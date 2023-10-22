import s from './faq.module.scss'
import { FC, useState } from 'react'

interface IQuestions {
 title: string
 description: string
 isOpen: boolean
 id: number
}

const FaqComponent: FC = () => {
 const [questions, setQuestions] = useState<IQuestions[]>([
  {
   id: 0,
   title: 'Можно ли поменять в предоплаченном заказе часть товара?',
   description: 'Если ваш заказ еще не был передан в транспортную компанию, то вы можете обратиться к нам одним из удобных вам способом, и мы сделаем нужные корректировки.',
   isOpen: false
  },
  {
   id: 1,
   title: 'Как мне обменять товар?',
   description: `Обмен товара осуществляется в любом магазине re:Store, независимо от места покупки, в розничном магазине re:Store или интернет-магазине re-store.ru. Если вы приняли решение об обмене или возврате в день покупки, то вам следует обратиться в тот же магазин, где был приобретен товар. Товар, приобретенный в интернет-магазине re-store.ru, нельзя обменять или вернуть день в день.
   Если вы приняли решение об обмене или возврате в день покупки, то вам следует обратиться в тот же магазин или пункт выдачи, где был приобретен товар.
   Товар, приобретенный в интернет-магазине re-store.ru, нельзя обменять или вернуть день в день.`,
   isOpen: false
  },
  {
   id: 2,
   title: 'У меня сломалось устройство Apple. Как я могу его отремонтировать?',
   description: 'К сожалению, наши сервисные центры в Москве на данный момент не производят прием и диагностику устройств. Организация приёма устройств на обслуживание ожидается в ближайшее время. В других городах прием производиться в рабочей режиме.',
   isOpen: false
  },
  {
   id: 3,
   title: 'Как я могу забрать свой заказ, не посещая магазин?',
   description: `В таком случае, мы рекомендуем вам максимально использовать доставку.
   Для онлайн-заказов действует услуга экспресс-доставки от Яндекс.Доставка.
   Для вашего удобства мы также оставляем вариант получения заказа в сети постаматов и пунктов выдачи, которая работает как в Москве, так и в других городах России.`,
   isOpen: false
  },
  {
   id: 4,
   title: 'Как понять срок доставки товара?',
   description: 'Срок доставки товара зависит от наличия товара на складе в вашем городе и от выбранного вами варианта доставки. Варианты доставки с указанием срока указаны в карточке конкретного товара в каталоге сайта.',
   isOpen: false
  },
 ])

 const setQuest = (id: number) => {
  let questCopy = [...questions]
  questCopy[id].isOpen = !questCopy[id].isOpen
  setQuestions(questCopy)
 }

 return <div className={s.faq}>
  <h1 className={s.faq__title}>FAQ:</h1>
  <ul className={s.faq__items}>
   {questions.map((quest: IQuestions) => <li key={quest.id} className={s.faq__item}>
    <div className={s.item__title} onClick={() => {setQuest(quest.id)}}>{quest.title}</div>
    <div className={s.item__description} style={{
     display: quest.isOpen ? 'block' : 'none'
    }}>{quest.description}</div>
   </li>)}
  </ul>
 </div>
}

export default FaqComponent