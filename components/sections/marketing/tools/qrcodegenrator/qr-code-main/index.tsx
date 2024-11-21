import { Sprite } from "@/components/blocks/landing-page/marketing/tools/qrgenerator/sprite-sheet-display";
import { navItems, QRColors } from "@/pages/tools/qr-code-generator/[id]";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineQrcode } from "react-icons/ai";
import {
  FaPaintBrush,
  FaRegImage
} from "react-icons/fa";


// Dynamically import components
const LogoUploadComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/qrlogo-upload-component"));
const SpriteSheetDisplay = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/sprite-sheet-display"));
const Accordion = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/accordian"));
const ColorSelectionComponent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/color-selection-component"));
 
const MainContent = dynamic(() => import("@/components/blocks/landing-page/marketing/tools/qrgenerator/main-content"));
 

type Props = {
    setSelectedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
    setQrColors: React.Dispatch<React.SetStateAction<QRColors>>;
    setQrValue: React.Dispatch<React.SetStateAction<string>>;
    qrColors: QRColors;
    selectedBodyType: Sprite | null;   
    setSelectedBodyType: React.Dispatch<React.SetStateAction<Sprite | null>>; 
    setSelectedEyeType: React.Dispatch<React.SetStateAction<Sprite | null>>;
}

const QRCodeMain = ({
    setSelectedImageUrl,
    setQrColors,
    setQrValue,
    qrColors,
    selectedBodyType,
    setSelectedBodyType,
    setSelectedEyeType
}: Props) => {
    const router = useRouter();
  const { query } = router;
  const pathname = query.id as string;

  const CurrentComponent = useMemo(() => navItems.find((x) => pathname === x.slug), [pathname]);

  useEffect(() => {
    if (pathname && !CurrentComponent) {
      router.push("/tools/qr-code-generator/url-qr-code");
    }
  }, [pathname, CurrentComponent, router]);

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const [selectedEyeId, setSelectedEyeId] = useState<number | null>(null);

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
        setSelectedImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [setSelectedImageUrl]);

  const handleRemoveImage = useCallback(() => {
    setImagePreviewUrl(null);
    setSelectedImageUrl(null);
  }, [setSelectedImageUrl]);

  const handleColorSettingsChange = useCallback((newColors: {  singleColor?: string;
    gradientColor?: string;
    backgroundColor?: string;}) => {
    setQrColors(newColors as QRColors);
  }, [setQrColors]);

  const handleLogoSelect = useCallback((logo: string) => {
    setImagePreviewUrl(logo);
    setSelectedImageUrl(logo);
  }, [setSelectedImageUrl]);

  return (
    <div className="w-full md:w-3/4  bg-gray-2 p-4 md:p-8 space-y-2 rounded-lg">
    <Accordion
      icon={CurrentComponent ? CurrentComponent.icon : navItems[0].icon}
      title={"ENTER CONTENT"}
      openAccordion={openAccordion || ""}
      setIsOpen={(title: string) =>
        setOpenAccordion(openAccordion === title ? null : title)
      }
    >
      {CurrentComponent ? 
        <CurrentComponent.Component 
        setQrValue={setQrValue} /> 
        : 
        <MainContent setQrValue={setQrValue} />
      }
    </Accordion>

    <Accordion
      icon={FaPaintBrush}
      title={"SET COLOR"}
      openAccordion={openAccordion || ""}
      setIsOpen={(title: string) =>
        setOpenAccordion(openAccordion === title ? null : title)
      }
    >
      <ColorSelectionComponent
        qrColors={qrColors}
        onColorChange={handleColorSettingsChange}
      />
    </Accordion>
    <Accordion
      icon={FaRegImage}
      title={"ADD LOGO IMAGE"}
      openAccordion={openAccordion || ""}
      setIsOpen={(title: string) =>
        setOpenAccordion(openAccordion === title ? null : title)
      }
    >
      <LogoUploadComponent
        imagePreviewUrl={imagePreviewUrl}
        handleImageChange={handleImageChange}
        handleRemoveImage={handleRemoveImage}
        triggerFileInput={() =>
          document.getElementById("logo-image-upload")?.click()
        }
        setSelectedImageUrl={handleLogoSelect}
      />
    </Accordion>
    <Accordion
      icon={AiOutlineQrcode}
      title={"CUSTOMIZE DESIGN"}
      openAccordion={openAccordion || ""}
      setIsOpen={(title: string) =>
        setOpenAccordion(openAccordion === title ? null : title)
      }
    >
      <SpriteSheetDisplay
        onSelectBodyType={setSelectedBodyType}
        selectedId={selectedBodyType?.id}
        onSelectEyeType={setSelectedEyeType}
        selectedEyeId={selectedEyeId}
        setSelectedEyeId={setSelectedEyeId}
      />
    </Accordion>
  </div>
  )
}

export default QRCodeMain