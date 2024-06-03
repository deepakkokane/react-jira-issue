import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  value: any;
  options: Array<{ value: string | number; label: string }>;
}

const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <label>
      {label}
      <select {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
