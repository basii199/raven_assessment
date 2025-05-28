import { useState, type FC, type ReactNode } from "react";
import down from "/caret-down-grey.svg";

interface Item {
  item: ReactNode;
  value: string;
}

type Props = {
  dropDownItems: Item[];
  init: string;
  className?: string;
};

const DropDown: FC<Props> = ({ dropDownItems, init, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [localValue, setLocalValue] = useState(init);

  return (
    <>
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="profile_button menu"
      >
        {localValue}
        <img src={down} alt="caret down" />
        <div
          className={`menu-dropdown ${className} ${
            dropdownOpen ? "" : "menu-dropdown--hidden"
          }`}
        >
          {dropDownItems.map(({ item, value }, index) => (
            <div
              onClick={() => setLocalValue(value)}
              key={index}
              className="dropdown-item"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
