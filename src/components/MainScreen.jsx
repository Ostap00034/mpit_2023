import React from 'react'
import { useNavigate } from 'react-router-dom'

import minilogo from '../assets/minilogo.svg'
import userIcon from '../assets/icons/user.svg'

import Button from './ui/button'
import Input from './ui/Input'
import Card from './ui/Card'

const MainScreen = () => {
  const nav = useNavigate()
  return (
    <div className="w-full h-screen">
      <header className="w-full h-[100px] bg-white flex flex-row justify-between items-center px-[72px]">
        <div className="flex flex-row items-center cursor-pointer	">
          <img
            src={minilogo}
            alt="site logo"
            onClick={() => {
              nav.push('/')
            }}
            className="w-[56px] h-[56px]"
          />
          <h1 className="text-jost text-[#2F6ED9] text-[36px] font-normal ml-[16px]">
            House rent
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center h-full">
          <Button
            width={176}
            text="Задать вопроc"
            withoutMarginTop={true}
            onClick={() => {}}
            route="/support"
          />
          <img
            src={userIcon}
            alt="userIcon"
            className="w-[40px] h-[40px] mx-4"
          />

          <h2 className="text-[20px] text-[#0F1C2A] text-jost leading-[20px] font-normal mx-[20px]">
            UserName
          </h2>
          <Button
            width={176}
            text="Выйти"
            withoutMarginTop={true}
            onClick={() => {}}
            route="/"
            color={`bg-[#E25050]`}
          />
        </div>
      </header>
      <div className="w-full h-[412px] flex flex-col justify-start items-center bg-cover bg-[url(../assets/images/main.png)]">
        <h1 className="text-jost text-[24px] font-semibold leading-[20px] my-[36px]">
          Поиск гостиниц и отелей
        </h1>
        <div className="min-w-[56vw] w-auto h-auto min-h-[256px] bg-white flex flex-col justify-start items-center px-[16px]">
          <h1 className="text-jost text-[24px] font-semibold leading-[20px] mt-[8px]">
            Отели
          </h1>
          <div className="mt-[24px] flex flex-row items-end gap-[8px]">
            <Input
              type="text"
              label="Направление"
              withoutMarginTop={true}
              placeholder="Город, село"
            />
            <Input
              type="date"
              label="Дата начала"
              withoutMarginTop={true}
              placeholder="Выберите"
            />
            <Input
              type="date"
              label="Дата конца"
              withoutMarginTop={true}
              placeholder="Выберите"
            />
            <Input
              type="number"
              label="Количество"
              withoutMarginTop={true}
              placeholder="Количество"
              width={50}
            />
            <Button
              text="Найти"
              onClick={() => {}}
              withoutMarginTop={true}
              width={120}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-row flex-wrap justify-center items-start p-[20px] ">
        <Card
          type={1}
          address="Дом2 квартира 43"
          description="Большая квартира в центре города"
          author_name="Иванов Виктор"
          number="8965947853"
        />
        <Card
          type={0}
          address="улица Ирнова Дом 1 5 комната"
          description="Маленька комната в дали от города"
          author_name="Степанов Александр"
          number="8932785323"
        />
        <Card
          type={2}
          address="Дом1 квартира 4"
          description="Большая квартира в центре города"
          author_name="Андреев Айтал"
          number="8965947853"
        />
        <Card
          type={2}
          address="Дом1 квартира 4"
          description="Большая квартира в центре города"
          author_name="Иванов Виктор"
          number="8965947853"
        />
        <Card
          type={2}
          address="Дом1 квартира 4"
          description="Большая квартира в центре города"
          author_name="Иванов Виктор"
          number="8965947853"
        />
        <Card
          type={2}
          address="Дом1 квартира 4"
          description="Большая квартира в центре города"
          author_name="Иванов Виктор"
          number="8965947853"
        />
      </div>
    </div>
  )
}

export default MainScreen
