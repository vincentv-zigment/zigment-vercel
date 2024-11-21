import React from "react";
// import sprite_sheet from "@/assets/images/tools/qrgenerator/spritesheet.png"
// Define the props interface
interface SpriteFrameProps {
  backgroundPosition?: { x: number; y: number }; // Optional with default
  width: number; // Required
  height: number; // Required
}

// The SpriteFrame component in TypeScript
const SpriteFrame: React.FC<SpriteFrameProps> = ({
  backgroundPosition = { x: 0, y: 0 }, // Default value
  width,
  height,
}) => {
  // Ensure `backgroundPosition` has default values
  const { x, y } = backgroundPosition;

  const style = {
    backgroundImage:
      `url(https://www.qrcode-monkey.com/img/qr/spritesheet.png)`, // Replace with your actual path
    backgroundPosition: `${x}px ${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundRepeat: "no-repeat",
    display: "block",
  };

  return <div className="sprite" style={style} />;
};

export default SpriteFrame;
