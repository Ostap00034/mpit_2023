import React from 'react'
import '../styles/index.css'
import logo from '../assets/logo.svg'

const RegistrationScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex flex-col justify-center items-center">
        <img src={logo} className="w-[187px] h-[162px]" alt="site logo" />
        <h1 className="font-inter font-medium leading-6 text-[30px] mt-[16px] leading-[38px] text-[#1E1E1E]">
          Войдите в свой аккаунт
        </h1>
        <h2 className="font-inter font-normal text-[#747474] text-[16px] mt-[16px]">
          Добро пожаловать!
        </h2>
        <div className="flex flex-col mt-[16px]">
          <label
            htmlFor="login"
            className="font-inter text-[14px] font-medium mt-[16x]"
          >
            Email/Номер телефона
          </label>
          <input
            id="login"
            type="text"
            placeholder="Введите свою почту/Номер телефона"
            className="mt-[6px] mb-[16px] min-w-[380px] w-[19vw] h-[auto] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]"
          />
          <label
            htmlFor="password"
            className="font-inter text-[14px] font-medium"
          >
            Пароль
          </label>
          <input
            id="password"
            type="password"
            placeholder="Введите свой пароль"
            className="mt-[6px] min-w-[380px] w-[19vw] h-[auto] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]"
          />
        </div>

        <button className="bg-[#2F6ED9] mt-[24px] min-w-[380px] w-[19vw] h-[auto] py-[10px] px-[14px] text-inter text-[16px] font-inter font-semibold tracking-[0.05em] text-white not-italic leading-6 rounded-[8px]">
          Войти
        </button>
        <div className="flex flex-row items-center mt-[16px]">
          <h4 className="text-[#747474] font-inter text-[14px]">
            У вас нет аккаунта?
          </h4>
          <a className="text-[#2F6ED9] text-[14px] font-bold ml-[4px]">
            Зарегистрироваться
          </a>
        </div>
      </form>
    </div>
  )
}

export default RegistrationScreen
