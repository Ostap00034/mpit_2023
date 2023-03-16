import React from 'react'
import '../../styles/index.css'

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  width,
  withoutMarginTop = false,
}) => {
  return (
    <div
      className={withoutMarginTop ? 'flex flex-col' : 'flex flex-col mt-[16px]'}
    >
      <label htmlFor="id" className={'font-inter text-[14px] font-medium'}>
        {label}
      </label>
      <input
        id="id"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className={
          withoutMarginTop
            ? 'w-[' +
              width +
              'px] h-[auto] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]'
            : 'min-w-[' +
              width +
              'px] mt-[6px] h-[auto] w-[380px] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]'
        }
      />
    </div>
  )
}

export default Input
