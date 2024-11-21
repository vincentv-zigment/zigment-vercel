import { Sprite } from "@/components/blocks/landing-page/marketing/tools/qrgenerator/sprite-sheet-display";
import QRCodeMain from "@/components/sections/marketing/tools/qrcodegenrator/qr-code-main";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { BiWorld } from "react-icons/bi";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { FaBitcoinSign, FaSquareFacebook } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { IoChatbubbleEllipsesSharp, IoWifi } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";

// Dynamically import components
const MetaTagsComponents = dynamic(() => import("@/components/common/meta-tags-components"));
const BitCoinComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/bitcoin-component"));
const EmailComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/email-component"));
const EventComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/event-component"));
const FacebookComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/facebook-component"));
const MainContent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/main-content"));
const MeeCardComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/mee-card-component"));
const PhoneComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/phone-component"));
const QrLayout = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/qr-layout"));
const SmsComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/sms-component"));
const TextComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/text-component"));
const TwitterComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/twitter-component"));
const VcardComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/vcard-component"));
const WifiComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/wifi-component"));
const YouTubeComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/youtube-component"));

// Dynamically import QRCodeManager with no SSR
const QRCodeManager = dynamic(
  () => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/qr-code-manager"),
  { ssr: false }
);

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

export const navItems = [
  {
    id: 1,
    slug: "url-qr-code",
    label: "URL",
    Component: MainContent,
    icon: BiWorld,
    description: "Generates a QR code that directs users to a specified URL when scanned, ideal for quickly sharing website links."
  },
  {
    id: 2,
    slug: "text-qr-code",
    label: "TEXT",
    Component: TextComponent,
    icon: FiFileText,
    description: "Creates a simple QR code containing plain text. Useful for conveying short messages or information without internet access."
  },
  {
    id: 3,
    slug: "email-qr-code",
    label: "EMAIL",
    Component: EmailComponent,
    icon: MdEmail,
    description: "Generates a QR code that can auto-populate an email when scanned, including recipient address, subject, and body, simplifying the process of sending pre-formatted emails."
  },
  {
    id: 4,
    slug: "phone-qr-code",
    label: "PHONE",
    Component: PhoneComponent,
    icon: FaPhoneAlt,
    description: "Produces a QR code that, when scanned, can initiate a call to a specified phone number, making it easier for users to contact businesses or individuals."
  },
  {
    id: 5,
    slug: "sms-qr-code",
    label: "SMS",
    Component: SmsComponent,
    icon: IoChatbubbleEllipsesSharp,
    description: "Creates a QR code that can initiate sending an SMS to a specific number with a predefined message, useful for promotions or communication."
  },
  {
    id: 6,
    slug: "vcard-qr-code",
    label: "VCARD",
    Component: VcardComponent,
    icon: RiContactsBookFill,
    description: "Generates a QR code containing virtual contact file (vCard) information, allowing contact details to be saved quickly and efficiently to a smartphone."
  },
  {
    id: 7,
    slug: "mecard-qr-code",
    label: "MECARD",
    Component: MeeCardComponent,
    icon: RiContactsBookFill,
    description: "Similar to a vCard, this QR code contains contact information but in a more condensed format known as MeCard, suitable for quick sharing of personal details."
  },
  {
    id: 8,
    slug: "facebook-qr-code",
    label: "FACEBOOK",
    Component: FacebookComponent,
    icon: FaSquareFacebook,
    description: "Creates a QR code that links directly to a Facebook page or profile, ideal for increasing social media engagement and follower count."
  },
  {
    id: 9,
    slug: "twitter-qr-code",
    label: "TWITTER",
    Component: TwitterComponent,
    icon: FaTwitter,
    description: "Generates a QR code that leads to a Twitter profile or can auto-populate a tweet, facilitating increased interaction and sharing on the platform."
  },
  {
    id: 10,
    slug: "youtube-qr-code",
    label: "YOUTUBE",
    Component: YouTubeComponent,
    icon: FaYoutube,
    description: "Produces a QR code that directs users to a YouTube channel or specific video, perfect for boosting views and subscriptions."
  },
  {
    id: 11,
    slug: "wifi-qr-code",
    label: "WIFI",
    Component: WifiComponent,
    icon: IoWifi,
    description: "Generates a QR code that allows users to connect to a Wi-Fi network without entering a password manually, enhancing convenience in places like cafes or hotels."
  },
  {
    id: 12,
    slug: "event-qr-code",
    label: "EVENT",
    Component: EventComponent,
    icon: FaCalendarAlt,
    description: "Creates a QR code that stores event details, such as date, time, and venue, making it easy for attendees to save and remember event information."
  },
  {
    id: 13,
    slug: "bitcoin-qr-code",
    label: "BITCOIN",
    Component: BitCoinComponent,
    icon: FaBitcoinSign,
    description: "Generates a QR code containing a Bitcoin address for quick and error-free transactions, ensuring seamless transfer of cryptocurrency."
  },
];

const Index: React.FC = () => {
  const [qrValue, setQrValue] = useState("https://example.com");
  const [selectedBodyType, setSelectedBodyType] = useState<Sprite | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [qrColors, setQrColors] = useState<QRColors>({
    singleColor: "#000000",
    gradientColor: "#000000",
    backgroundColor: "#FFFFFF",
  });
  const [selectedEyeType, setSelectedEyeType] = useState<Sprite | null>(null);


  const router = useRouter();
  const { query } = router;

  
  const findItem = useMemo(() => navItems.find((x) => x.slug === query.id), [query.id]);

   


  return (
      
    <QrLayout>
      <MetaTagsComponents
        url="https://zigment.com/tools/qr-code-generator"
        description="Create QR codes instantly for free!"
        keywords={`QR, QR Generator, QR Code, Code, ${findItem?.label}, ${findItem?.slug}`}
        title={`QR Generator - Create QR codes instantly for free! `}
      />
      <div className="bg-white flex flex-col md:flex-row h-auto min-h-[640px] mx-auto rounded-lg w-full">
        {/* QRCodeMain */}
        <QRCodeMain
          qrColors={qrColors}
          selectedBodyType={selectedBodyType}
          setQrColors={setQrColors}
          setQrValue={setQrValue}
          setSelectedBodyType={setSelectedBodyType}
          setSelectedEyeType={setSelectedEyeType}
          setSelectedImageUrl={setSelectedImageUrl}
        />
        <QRCodeManager
          value={qrValue}
          level="H"
          selectedBodyType={selectedBodyType}
          selectedImageUrl={selectedImageUrl ?? ""}
          colors={qrColors}
          selectedEyeType={selectedEyeType}
        />
      </div>
    </QrLayout>
  );
};

export default React.memo(Index);