import React, { useState } from 'react'
import '../styles/index.css'
import logo from '../assets/logo.svg'
import Input from './ui/Input'
import Button from './ui/button'

const SupportScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="mt-[24px] flex flex-col items-center gap-[8px]">
        <h1 className="font-inter font-medium leading-6 text-[30px] mt-[16px] leading-[38px] text-[#1E1E1E]">
          Заполните форму
        </h1>
        <Input
          type="text"
          label="Вопрос: "
          placeholder="Опишите вашу проблему"
          isArea
        />
        <Button text="Отправить" onClick={() => {}} route="/" width={120} />
      </form>
    </div>
  )
}

export default SupportScreen
