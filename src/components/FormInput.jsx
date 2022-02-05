import React from "react";

export default function FormInput({
  labelId,
  text,
  onChange,
  value,
  placeholder,
  type = "text"
}) {
  return (
    <>
      <label htmlFor={labelId}> {text} </label>
      <input
        className="form-control mb-3"
        type={type}
        placeholder={placeholder}
        id={labelId}
        onChange={onChange}
        value={value}
      />
    </>
  )
}