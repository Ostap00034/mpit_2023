import React from 'react'
import '../../styles/index.css'

const Input = () => {
  return (
    <div>
      <label htmlFor="password" className="font-inter text-[14px] font-medium">
        Пароль
      </label>
      <input
        id="password"
        type="password"
        placeholder="Введите свой пароль"
        className="mt-[6px] min-w-[380px] w-[19vw] h-[auto] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]"
      />
    </div>
  )
}

export default Input
