import {
  Dispatch,
  SetStateAction
} from "react";
 
type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const TextComponent = ({ setQrValue }: Props) => {
  return (
    <div>
      <label htmlFor="text-content">Your Text</label>
      <textarea
        id="text-content"
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full mt-2"
        placeholder="Enter your text here"
        rows={5}
        onChange={(e) => setQrValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextComponent;
