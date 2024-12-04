import React, { useState, useEffect, ChangeEvent } from "react";
import { QRColors } from "../main-content";

interface ColorSelectionComponentProps {
  onColorChange: (newColors: {
    singleColor?: string;
    gradientColor?: string;
    backgroundColor?: string;
  }) => void;
  qrColors: QRColors;
}

const ColorSelectionComponent: React.FC<ColorSelectionComponentProps> = ({ onColorChange, qrColors }) => {
  const [colorType, setColorType] = useState<"single" | "gradient">("single");
  const [singleColor, setSingleColor] = useState<string>("#000000");
  const [gradientColor, setGradientColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");

  useEffect(() => {
    setSingleColor(qrColors.singleColor);
    setGradientColor(qrColors.gradientColor);
    setBackgroundColor(qrColors.backgroundColor);
  }, [qrColors]);

  const handleTextColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSingleColor = e.target.value;
    console.log(newSingleColor,"new colors")
    setSingleColor(newSingleColor);
    onColorChange({singleColor: newSingleColor,  gradientColor: newSingleColor });
  };

  const handleGradientColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newGradientColor = e.target.value;
    console.log("new gradient",newGradientColor)
    setGradientColor(newGradientColor);
    onColorChange({singleColor: singleColor,  gradientColor: newGradientColor ?? '#000000' });
  };

  useEffect(()=>{

    if(colorType === 'single') {
      onColorChange({singleColor: singleColor,  gradientColor: singleColor })
    }else{
      onColorChange({singleColor: singleColor,  gradientColor: '#000000' })
      setGradientColor('#000000')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[colorType])

  const handleBackgroundTextColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newBackgroundColor = e.target.value;
    setBackgroundColor(newBackgroundColor);
    onColorChange({  backgroundColor: newBackgroundColor });
  };

  return (
    <div className="p-4 space-y-2">
      <div className="foreground">
        <div className="flex items-center space-x-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="colorType"
              value="single"
              className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
              checked={colorType === "single"}
              onChange={() => setColorType("single")}
            />
            <span className="ml-2">Single Color</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="colorType"
              value="gradient"
              className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
              checked={colorType === "gradient"}
              onChange={() => setColorType("gradient")}
            />
            <span className="ml-2">Gradient</span>
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <input
            type="color"
            value={singleColor}
            onChange={handleTextColorChange}
            className="border-2 border-gray-100 focus:border-brand-orange-main outline-none focus:ring-0  h-10 rounded  mt-2"
          />
          <input
            type="text"
            value={singleColor}
            onChange={handleTextColorChange}
            className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-2 rounded h-10 mt-2"
          />

          {colorType === "gradient" && (
            <>
              <input
                type="color"
                value={gradientColor}
                onChange={handleGradientColorChange}
                className="border-2 border-gray-100 focus:border-brand-orange-main outline-none focus:ring-0  h-10 rounded  mt-2"
              />
              <input
                type="text"
                value={gradientColor}
                onChange={handleGradientColorChange}
                className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-2 rounded h-10 mt-2"
              />
            </>
          )}
        </div>
      </div>

      <div className="background space-y-2 mt-2">
        <span>Background Color</span>
        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundTextColorChange}
            className="border-2 border-gray-100 focus:border-brand-orange-main outline-none focus:ring-0   rounded h-10 mt-2"
          />
          <input
            type="text"
            value={backgroundColor}
            onChange={handleBackgroundTextColorChange}
            className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-2 rounded h-10 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorSelectionComponent;
