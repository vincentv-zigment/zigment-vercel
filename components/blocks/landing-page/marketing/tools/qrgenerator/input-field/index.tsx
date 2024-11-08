import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder = "" }) => (
  <div className="w-full px-2">
    <label className="block font-medium   pb-2 cursor-default text-gray-500">
      {label}
    </label>
    <input
      type="text" // Specify type if needed
      className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
