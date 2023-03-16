import React, { useState } from 'react'
import '../styles/index.css'
import logo from '../assets/logo.svg'
import Input from './ui/Input'
import Button from './ui/button'

const RegistrationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex flex-col justify-center items-center">
        <img src={logo} className="w-[187px] h-[162px]" alt="site logo" />
        <h1 className="font-inter font-medium leading-6 text-[30px] mt-[16px] leading-[38px] text-[#1E1E1E]">
          Создайте свой аккаунт
        </h1>
        <h2 className="font-inter font-normal text-[#747474] text-[16px] mt-[16px]">
          Добро пожаловать!
        </h2>
        <div className="flex flex-col">
          <Input
            required={true}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Номер телефона"
            type="text"
            placeholder="Введите номер телефона"
          />
          <Input
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
            placeholder="Введите email"
          />
          <Input
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Пароль*"
            type="password"
            placeholder="Введите пароль"
          />
          <Input
            required={true}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            label="Введите пароль повторно*"
            type="password"
            placeholder="Введите пароль"
          />
        </div>

        <Button text="Дальше" route="/verification" />
        {/* <Button
          onClick={(e) => {
            e.preventDefault()
            if (phoneNumber && email && password && password2) {
              if (password === password2) {
                console.log(phoneNumber, email, password)
              } else {
                alert('Пароли не совпадают!')
              }
            } else {
              alert('Введите данные!!!')
            }
          }}
          text="Дальше"
        /> */}

        <div className="flex flex-row items-center mt-[16px]">
          <h4 className="text-[#747474] font-inter text-[14px]">
            Уже есть аккаунт?
          </h4>
          <a
            href="/authorization"
            className="text-[#2F6ED9] text-[14px] font-bold ml-[4px]"
          >
            Войти
          </a>
        </div>
      </form>
    </div>
  )
}

export default RegistrationScreen
