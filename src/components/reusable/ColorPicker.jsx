import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({color, selectColor}) => {
  return (
    <div>
      <SketchPicker color={color} onChange={selectColor} />
    </div>
  );
};

export default ColorPicker;