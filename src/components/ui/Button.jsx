import React from 'react'
import '../../styles/index.css'

const Button = ({ text, route = '/', onClick = {} }) => {
  return (
    <a
      href={route}
      onClick={onClick}
      className="block text-center bg-[#2F6ED9] mt-[24px] min-w-[380px] w-[19vw] h-[auto] py-[10px] px-[14px] text-inter text-[16px] font-inter font-semibold tracking-[0.05em] text-white not-italic leading-6 rounded-[8px]"
    >
      {text}
    </a>
  )
}

export default Button
