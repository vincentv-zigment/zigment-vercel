import React, { Dispatch, SetStateAction } from "react";
import SpriteFrame from "../sprite-sheet-component";

// Interface for sprite data
export interface Sprite {
  id: number;
  type?: string;
  backgroundPosition: { x: number; y: number };
}

// Interface for component props
interface SpriteSheetDisplayProps {
  onSelectBodyType?: Dispatch<SetStateAction<Sprite | null>>;
  selectedId?: number | null; // Holds the ID of the selected body
  onSelectEyeType?: Dispatch<SetStateAction<Sprite | null>>;
  setSelectedEyeId?: Dispatch<SetStateAction<number | null>>; // Setter for the selected eye ID
  selectedEyeId?: number | null; // Holds the ID of the selected eye
}

// Sprite data for body types and eye shapes
const spriteData: Sprite[] = [
  { id: 1, backgroundPosition: { x: -585, y: -95 } },
  { id: 2, backgroundPosition: { x: -505, y: -455 } },
  { id: 3, backgroundPosition: { x: -105, y: -215 } },
];

const eyeFrameShape:Sprite[] = [
  { id: 5, type: "dot", backgroundPosition: { x: -525, y: -245 } },
  { id: 6, type: "square", backgroundPosition: { x: -525, y: -125 } },
  { id: 7, type: "extra-rounded", backgroundPosition: { x: -5, y: -305 } },
];

// SpriteSheetDisplay component in TypeScript
const SpriteSheetDisplay: React.FC<SpriteSheetDisplayProps> = ({
  onSelectBodyType,
  selectedId,
  onSelectEyeType,
  setSelectedEyeId,
  selectedEyeId,
}) => {
  // Function to handle body type selection
  const handleSelectBodyType = (id: number) => {
    const selectedSprite = spriteData.find((sprite) => sprite.id === id) ?? null;
    if (onSelectBodyType) {
      onSelectBodyType(selectedSprite);
    }
  };

  // Function to handle eye frame shape selection
  const handleSelectedEyeType = (id: number) => {
    const selectedSprite = eyeFrameShape.find((sprite) => sprite.id === id) ?? null;
    if (setSelectedEyeId) {
      setSelectedEyeId(id);  // Assuming you want to keep track of the eye's ID
    }

    if (onSelectEyeType) {
      onSelectEyeType(selectedSprite);
    }
  };

  return (
    <div className="space-y-4">
    <div className="space-y-2">

      <label className="text-gray-600 font-bold text-sm leading-tight mb-0 pb-2">
        Body Shape
      </label>
      <div className=" grid grid-cols-4 gap-8" style={{ width: "240px" }}>
        {spriteData.map((sprite) => (
          <div
            key={sprite.id}
            className={`bg-white cursor-pointer rounded-lg flex justify-center items-center ${
              selectedId === sprite.id ? "bg-gray-100 border-4 border-primary" : ""
            }`}
            style={{ width: "60px", height: "60px", overflow: "hidden" }}
            onClick={() => handleSelectBodyType(sprite.id)}
          >
            <div style={{ transform: "scale(0.5)", transformOrigin: "center" }}>
              <SpriteFrame
                backgroundPosition={sprite.backgroundPosition}
                width={90}
                height={80}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="space-y-2">

        <label className="text-gray-600 font-bold text-sm leading-tight mb-0 pb-2">
          Eye Frame Shape
        </label>
        <div className=" grid grid-cols-4 gap-8" style={{ width: "240px" }}>
          {eyeFrameShape.map((sprite) => (
            <div
              key={sprite.id}
              className={`bg-white cursor-pointer rounded-lg flex justify-center items-center ${
                selectedEyeId === sprite.id ? "  border-4 border-primary" : ""
              }`}
              style={{ width: "60px", height: "60px", overflow: "hidden" }}
              onClick={() => handleSelectedEyeType(sprite.id)}
            >
              <div style={{ transform: "scale(0.7)", transformOrigin: "center" }}>
                <SpriteFrame
                  backgroundPosition={sprite.backgroundPosition}
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default SpriteSheetDisplay;
