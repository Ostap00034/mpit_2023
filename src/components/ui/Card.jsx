import React from 'react'

import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'

import Button from './button'

const Card = ({ type, address, description, author_name, number }) => {
  const types = ['Квартира', 'Комната', 'Дом']
  const images = [img1, img2, img3]
  return (
    <div className="flex flex-col justify-start items-start border-[1px] w-[30vw] h-auto p-[20px] border-[#0F1C2A]-20/100 ml-[20px] mt-[20px]">
      <img src={images[type]} className="w-[25vw] h-[10vw]" />
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        {types[type]}
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        Адрес: {address}
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        {description}
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        Арендодатель: {author_name}
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        к/т: {number}
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px]">
        Рейтинг: 4/5
      </div>
      <div className="border-[1px] border-[#0F1C2A]-20/100 mt-[8px] p-[6px] mb-[20px]">
        Описание: {description}
      </div>
      <Button text="Заказать" href="/ordering" withoutMarginTop />
    </div>
  )
}

export default Card
