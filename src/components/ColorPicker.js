import React, { useState } from "react";

export const ColorPicker = props => {
  const [selectedOption, setSelectedOption] = useState(props.current);

  const palatte = [
    { name: "redder", hex: "#F35A69" },
    { name: "dusk", hex: "#221C35" },
    { name: "snow", hex: "#F9FAFB" },
    { name: "sky", hex: "#00A6FB" },
    { name: "coast", hex: "#00FDDC" },
    { name: "none", hex: "none" },
  ];

  const handleChange = e => {
    props.onChange(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <label for={props.for}>{props.for}:</label>
      <span>
        {palatte.map(color => {
          return (
            <>
              <input
                type="radio"
                id={color.name}
                name={props.for}
                value={color.hex}
                checked={selectedOption === color.hex}
                onChange={handleChange}
              />
              <label for={color.name}>{color.name}</label>
            </>
          );
        })}
      </span>
    </>
  );
};
