import React from 'react'
import '../styles/index.css'
import logo from '../assets/logo.svg'
import Input from './ui/Input'
import Button from './ui/button'
import { useDispatch, useSelector } from 'react-redux'

const VerificationScreen = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex flex-col justify-center items-center">
        <img
          onClick={(e) => {
            e.preventDefault()
          }}
          src={logo}
          className="w-[187px] h-[162px]"
          alt="site logo"
        />
        <h1 className="font-inter font-medium leading-6 text-[30px] mt-[16px] leading-[38px] text-[#1E1E1E]">
          Получение кода
        </h1>
        <Input label="Код" type="text" placeholder="Введите код" />

        <Button text="Зарегистрироваться" />

        <div className="flex flex-row items-center mt-[16px]">
          <a
            href="/registration"
            className="text-[#2F6ED9] text-[14px] font-bold ml-[4px]"
          >
            Назад
          </a>
        </div>
      </form>
    </div>
  )
}

export default VerificationScreen
