import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

// Social media logos array
const socialMediaLogos = [
  { id: "facebook", logo: 'https://cdn.zigment.ai/assets/facebook.png'},
  { id: "zigment", logo: 'https://cdn.zigment.ai/assets/zigment.svg' },
  { id: "twitter", logo: '/logos/twitter-icon-circle.svg' },
  { id: "youtube", logo: '/logos/youtube-icon.svg' },
  { id: "instagram", logo: 'https://cdn.zigment.ai/assets/Instagram_logo_2016.svg' },
  { id: "linkedin", logo: '/logos/linkedin-icon.svg' },
  { id: "vimeo", logo: '/logos/vimeo.png' },
  { id: "whatsapp", logo: 'https://cdn.zigment.ai/assets/WhatsApp.svg.webp' },
  { id: "appStore", logo: '/logos/appstore-seeklogo.svg' },
  { id: "googlePlay", logo: '/logos/google-play-store.svg' },
  { id: "gmail", logo: 'https://cdn.zigment.ai/assets/Gmail_icon_(2020).svg' },
  { id: "google_calender", logo: 'https://cdn.zigment.ai/integrations/google_calendar.svg' },
];

// Define props for LogoUploadComponent
interface LogoUploadComponentProps {
  imagePreviewUrl: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  triggerFileInput: () => void;
  setSelectedImageUrl: (logo: string) => void;
}

const LogoUploadComponent: React.FC<LogoUploadComponentProps> = ({
  imagePreviewUrl,
  handleImageChange,
  handleRemoveImage,
  triggerFileInput,
  setSelectedImageUrl,
}) => {


  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center">
        <div
          className="bg-white w-40 h-40 p-2 border-2 border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={triggerFileInput}
        >
          {imagePreviewUrl ? (
            <Image
              width={500}
              height={500}
              src={imagePreviewUrl}
              alt="Uploaded Logo"
              className="w-full h-full object-contain"
            />
          ) : (
            <span>NO LOGO</span>
          )}
        </div>
        <div className="flex flex-col ml-4 space-y-4">
          <Button
            variant={'primary'}
            size={'sm'}
            onClick={triggerFileInput}
          >
          Upload Image
          </Button>
          {imagePreviewUrl && (
            <Button
              size={'sm'}
              variant={'secondary'}
              onClick={handleRemoveImage}
            
            >
              Remove Image
            </Button>
          )}
        </div>
        <input
          type="file"
          id="logo-image-upload"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="mt-4 flex-wrap flex">
        {socialMediaLogos.map(({ id, logo }) => (
          <div
            key={id}
            className="bg-white p-2 border border-gray-300 m-1 shadow-sm"
          >
            <Image
              width={500}
              height={500}
              src={logo}
              alt={`${id} logo`}
              className="w-10 h-10 cursor-pointer object-contain"
              onClick={async() => {
                setSelectedImageUrl(logo)
                
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoUploadComponent;
