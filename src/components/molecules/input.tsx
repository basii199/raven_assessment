import "./input.css";
import React from "react";
import infoCircle from "/info-circle.svg";
import DropDown from "./dropdown";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "dropdown";
  label: string;
};

const Input: React.FC<InputProps> = ({ variant, label, ...props }) => {
  return (
    <div className="input_wrapper">
      <div className="input_label">
        {label}
        <img src={infoCircle} alt="more info" />
      </div>
      {!variant && (
        <>
          <input placeholder="0.00" className="input" {...props} type="text" />
          <p className="input_currency">USD</p>
        </>
      )}
      {variant === "dropdown" && (
        <div className="dropdown_wrapper">
          <DropDown
            dropDownItems={[
              { item: "Fill or kill", value: "Fill or kill" },
              { item: "Good till cancelled", value: "Good till cancelled" },
              { item: "Good till date", value: "Good till date" },
            ]}
            init="Good till cancelled"
            className="dropdown-items"
          />
        </div>
      )}
    </div>
  );
};

export default Input;
