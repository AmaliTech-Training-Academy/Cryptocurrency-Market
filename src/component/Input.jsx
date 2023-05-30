import React from "react";

const Input = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  type,
  onBlur,
  error,
  touch,
}) => {
  return (
    <div className="mb-[21px]">
      <label htmlFor={name} className="font-normal text-[15px] lg:text-[20.7px] md:text-[20.7px] ml-2 lg:ml-0 lg:pl-3">
        {label}
      </label>
      <br />
      <input
        id={name}
        type={type}
        className={`w-60  lg:w-[339px] md:w-[339px] h-[51px] rounded-lg  border-[1px] ml-0
         lg:ml-0  pl-3 ${
          error && touch ? "border-[red]" : "border-[#53352d80]"
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && touch && <p className="text-[red] pl-3">{error}</p>}
    </div>
  );
};

export default Input;
