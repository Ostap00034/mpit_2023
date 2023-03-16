import React from 'react'
import '../../styles/index.css'

const Button = ({
  text,
  route = '/',
  onClick = {},
  withoutMarginTop = false,
  width = 380,
}) => {
  return (
    <a
      href={route}
      onClick={onClick}
      className={
        withoutMarginTop
          ? 'w-[' +
            width +
            'px] block text-center bg-[#2F6ED9] w-auto h-[44px] py-[10px] px-[14px] text-inter text-[16px] font-inter font-semibold tracking-[0.05em] text-white not-italic leading-6 rounded-[8px]'
          : 'w-[' +
            width +
            'px] block text-center bg-[#2F6ED9] mt-[24px] min-w-[380px] w-auto h-[44px] py-[10px] px-[14px] text-inter text-[16px] font-inter font-semibold tracking-[0.05em] text-white not-italic leading-6 rounded-[8px]'
      }
    >
      {text}
    </a>
  )
}

export default Button
