"use client";
import React, { useState } from 'react';
import { HuePicker } from 'react-color';

function CustomPointer({ pointerColor }) {
  return (
    <div
      className="custom-pointer"
      style={{ backgroundColor: pointerColor }}
    ></div>
  );
}


function ColorPicker({ onColorChange }) {
  const [color, setColor] = useState('#ffffff');
  const [pointerColor, setPointerColor] = useState('#ff0000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    setPointerColor(newColor.hex);
    onColorChange(newColor.hex);

    if(newColor.hex=="#008bff"){
      console.log("white");
    }
  };


  return (
    <div>

      <HuePicker
        height="220px"
        width="30px"
        color={color}
        onChange={handleColorChange}
        direction="vertical"
        pointer={() => <CustomPointer pointerColor={pointerColor} />}
      />
      <div
        className="center-line"
      ></div>
    </div>
  );
}


export default ColorPicker;