import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({label, color, selectColor}) => {
  return (
    <div>
      <SketchPicker color={color} onChange={selectColor} />
      <p>{label} color: {color}</p>
    </div>
  );
};

export default ColorPicker;