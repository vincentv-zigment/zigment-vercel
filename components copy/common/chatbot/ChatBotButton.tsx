import { Dispatch, SetStateAction } from 'react';
import { Oval } from 'react-loader-spinner';
import { CompanyDataI } from './ChatRightAway';
import Image from 'next/image';

type Props = {
  open: boolean,
  setLoading?: Dispatch<SetStateAction<boolean>>,
  companyData: CompanyDataI,
  setOpen: Dispatch<SetStateAction<boolean>>,
};

const ChatBotButton = ({ open, setLoading, companyData, setOpen }: Props) => {
  // Define a common base style for the buttons to reduce repetition
  const buttonBaseStyle = "flex items-center justify-center w-12 h-12 mt-2 rounded-full hover:scale-110 transition-all active:scale-90 relative shadow-lg"; // Added shadow-lg for shadow
  const bubble_background_color = 'black';
  return (
    <div className="flex items-center justify-end">
      {!open && (
        <button
          className={`sm:hidden p-1 ${buttonBaseStyle} bg-black-2`}
          style={{
            backgroundColor: bubble_background_color
          }} // Set your background color here
          onClick={() => {
            setOpen(!open);
            if (setLoading) {
              setLoading(false);
            }
          }}
        >
          {companyData.loading ? (
            <Oval
              height={30}
              width={30}
              color="white"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="black"
              strokeWidth={5}
              strokeWidthSecondary={5}
            />
          ) : (
            // Ensure the img tag does not disrupt flex centering, consider adding specific classes if needed
            <Image width={500} height={500} className="p-1.5" src={'/zigment_thumbnail_white.png'} alt="Chat" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> // Centered and constrained to button size
          )}
        </button>
      )}

      <button
        className={`hidden p-1 sm:block ${buttonBaseStyle}`}
        style={{ backgroundColor: bubble_background_color }} // Set your background color here for larger screens
        onClick={() => {
          setOpen(!open);
          if (setLoading) setLoading(false);
        }}
      >
        {companyData.loading ? (
          <Oval
            height={30}
            width={30}
            color="white"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="black"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        ) : (
          // Same adjustments for the image as above
          <Image width={500} height={500} className="p-1.5" src={'/zigment_thumbnail_white.png'} alt="Chat" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> // Centered and constrained to button size
        )}
      </button>
    </div>
  );
};

export default ChatBotButton;
