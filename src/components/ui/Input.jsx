import React from 'react'
import '../../styles/index.css'

const Input = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="flex flex-col mt-[16px]">
      <label htmlFor="id" className="font-inter text-[14px] font-medium">
        {label}
      </label>
      <input
        id="id"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-[6px] min-w-[380px] w-[19vw] h-[auto] border-solid border-[1px] border-[#D0D5DD] py-[10px] px-[14px] text-inter text-[16px] leading-6 rounded-[8px]"
      />
    </div>
  )
}

export default Input
