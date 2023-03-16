import React from 'react'
import '../styles/index.css'
import logo from '../assets/logo.svg'
import Button from './ui/button'
import Input from './ui/Input'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'

const AuthorizationScreen = () => {
  const dispatch = useDispatch()

  const { isAuth } = useAuth()

  const signIn = async (email, phoneNumber, password) => {
    if ((email || phoneNumber) && password) {
      try {
        const response = await fetch('http://localhost:5000/users')
        const jsonData = await response.json()

        setRequests(jsonData)
      } catch (err) {
        console.log(err.message)
      }
      dispatch(
        setUser({
          email: user.email,
          id: user.id,
          phoneNumber: user.phoneNumber,
        })
      )
      push('/')
    } else {
      alert('Введите данные!!!')
    }
  }

  if (isAuth) {
    window.location('/')
  } else
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <form className="flex flex-col justify-center items-center">
          <img src={logo} className="w-[187px] h-[162px]" alt="site logo" />
          <h1 className="font-inter font-medium leading-6 text-[30px] mt-[16px] leading-[38px] text-[#1E1E1E]">
            Вход в систему
          </h1>
          <h2 className="font-inter font-normal text-[#747474] text-[16px] mt-[16px]">
            Добро пожаловать!
          </h2>
          <div className="flex flex-col">
            <Input
              label="Номер телефона/Email"
              type="text"
              placeholder="Введите номер телефона/Email"
            />
            <Input
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
            />
            <a
              href="/registration"
              className="text-[#2F6ED9] text-[14px] font-bold ml-[4px] mt-[8px]"
            >
              Забыли пароль?
            </a>
          </div>

          <Button text="Войти" />
          <div className="flex flex-row items-center mt-[16px]">
            <h4 className="text-[#747474] font-inter text-[14px]">
              У вас нет аккаунта?
            </h4>
            <a
              href="/registration"
              className="text-[#2F6ED9] text-[14px] font-bold ml-[4px]"
            >
              Зарегистрироваться
            </a>
          </div>
        </form>
      </div>
    )
}

export default AuthorizationScreen
