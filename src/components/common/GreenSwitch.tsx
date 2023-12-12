import { useState } from "react";

interface customeSwitchProps {
  index: number;
  onColor: string;
  closeColor: string;
  onChange: (value: number, value2: boolean) => any;
  isSelected: boolean;
}
function GreenSwitch({
  index,
  onColor,
  closeColor,
  onChange,
  isSelected,
}: customeSwitchProps) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleSwitchChange = () => {
    toggleSwitch();
    onChange(index, isSelected);
    // Do something with the new switch state, using the `index` prop to identify the item
  };
  return (
    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name={`toggle-${index}`}
        id={`toggle-${index}`}
        className="absolute hidden w-6 h-6 rounded-full  border-4 appearance-none cursor-pointer"
        checked={isOn}
        onChange={handleSwitchChange}
      />
      <label
        htmlFor={`toggle-${index}`}
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
          isOn ? onColor ?? "bg-[#3A7065]" : closeColor ?? "bg-[#bbbbbb]"
        }`}
      >
        <div
          className={`absolute inset-0 h-6 w-6 rounded-full transition-transform transform ${
            isOn ? "translate-x-full" : ""
          } bg-white`}
        ></div>
      </label>
    </div>
  );
}

export default GreenSwitch;
