/* eslint-disable react-hooks/exhaustive-deps */
import CustomSelect4 from "@/components/common/selects/custom-select4";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCodeStyling, {
  CornerSquareType,
  DotType,
  Gradient,
} from "qr-code-styling"; // Import DotType and Gradient
import React, { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import AdComponent from "../ad-component";
import { Sprite } from "../sprite-sheet-display";
const getDotOptions = (id?: number): DotType => {
  switch (id) {
    case 1:
      return "rounded";
    case 2:
      return "square";
    case 3:
      return "dots";
    case 4:
      return "classy";
    default:
      return "square"; // default to square if undefined
  }
};

const getCornerSquareType = (id?: number): CornerSquareType => {
  switch (id) {
    case 5:
      return "dot";
    case 6:
      return "square";
    case 7:
      return "extra-rounded";
    default:
      return "square"; // default to square if undefined
  }
};

// Define the prop types
interface QRCodeManagerProps {
  value: string;
  selectedBodyType?: Sprite | null;
  selectedImageUrl?: string;
  colors?: {
    singleColor?: string;
    gradientColor?: string;
    backgroundColor?: string;
  };
  selectedEyeType?: Sprite | null;
  level?: "H" | "M" | "Q";
}

// Possible values for DotType, ensure this matches the library's definition
type FileExtension = "svg" | "png" | "jpeg" | "webp" | "pdf";

// Returns a valid DotType based on ID

// QRCodeManager component
const QRCodeManager: React.FC<QRCodeManagerProps> = ({
  value,
  selectedBodyType,
  selectedImageUrl,
  colors,
  selectedEyeType,
}) => {
  const [qrSize, setQrSize] = useState(300);
  const [isLoading, setIsLoading] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const [fileExt, setFileExt] = useState<FileExtension>("jpeg");
  const [openModal, setOpenModal] = useState(false);

  // Load the external script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [qrCode] = useState<QRCodeStyling>(
    new QRCodeStyling({
      width: 300,
      height: 300,
      data: value,
      dotsOptions: {
        type: getDotOptions(selectedBodyType?.id),
        color: colors?.singleColor || "#000000",
      },
      backgroundOptions: { color: colors?.backgroundColor || "#ffffff" },
    })
  );

  useEffect(() => {
    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
    }
  }, [qrCode, qrCodeRef]);

  useEffect(() => {
    if (!qrCode) return;
    const dotsOptions: {
      type?: DotType;
      color?: string;
      gradient?: Gradient;
    } = {
      type: getDotOptions(selectedBodyType?.id),
      color: colors?.singleColor,
    };
    qrCode.update({
      data: value,
      image: selectedImageUrl,
      imageOptions: {
        crossOrigin: "anonymous",
      },
      dotsOptions: dotsOptions,
      backgroundOptions: { color: colors?.backgroundColor || "#ffffff" },
      cornersSquareOptions: {
        type: getCornerSquareType(selectedEyeType?.id),
      },
      width: qrSize,
      height: qrSize,
    });
  }, [qrCode]);

  const handleCreateQRCode = () => {
    setIsLoading(true);
    const dotsOptions: {
      type?: DotType;
      color?: string;
      gradient?: Gradient;
    } = {
      type: getDotOptions(selectedBodyType?.id),
      color: colors?.singleColor,
    };

    if (colors && colors.singleColor && colors.gradientColor) {
      dotsOptions.gradient = {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: colors.singleColor },
          { offset: 1, color: colors.gradientColor },
        ],
      };
    }

    console.log(value, "value");
    qrCode.update({
      data: value,
      image: selectedImageUrl,
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
      },
      dotsOptions: dotsOptions,
      backgroundOptions: { color: colors?.backgroundColor || "#ffffff" },
      cornersSquareOptions: {
        type: getCornerSquareType(selectedEyeType?.id),
      },
      width: 300,
      height: 300,
    });

    setIsLoading(false);
  };

  const downloadQRCode = async () => {
    setIsLoading(true);
  
    // Temporarily update QR code dimensions to the desired size
    qrCode.update({
      width: qrSize,
      height: qrSize,
    });
  
    // Wait for the QR code to re-render with the new size
    await new Promise((resolve) => setTimeout(resolve, 200));
  
    if (fileExt === "pdf") {
      try {
        // Check if qrCodeRef.current is not null
        if (!qrCodeRef.current) {
          throw new Error("QR code element is not available.");
        }
  
        // Temporarily store the original dimensions of the QR code
        const originalWidth = qrCodeRef.current.style.width;
        const originalHeight = qrCodeRef.current.style.height;
  
        // Update QR code container size
        qrCodeRef.current.style.width = `${qrSize}px`;
        qrCodeRef.current.style.height = `${qrSize}px`;
  
        // Capture the div containing the QR code as a canvas
        const canvas = await html2canvas(qrCodeRef.current, { useCORS: true });
        const imgData = canvas.toDataURL("image/png");
  
        // Calculate the size of the PDF based on the QR code size
        const pdfWidth = qrSize * 0.264583; // Convert pixels to mm (1 px = 0.264583 mm)
        const pdfHeight = qrSize * 0.264583; // Convert pixels to mm
  
        // Create PDF with jsPDF
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: [pdfWidth, pdfHeight], // Adjust to fit the QR code size
        });
  
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("qrcode.pdf");
  
        // Reset the QR code to its original size and style immediately after download
        qrCode.update({
          width: 300,
          height: 300,
        });
  
        qrCodeRef.current.style.width = originalWidth;
        qrCodeRef.current.style.height = originalHeight;
  
        setIsLoading(false);
      } catch (error) {
        console.error("Error generating PDF:", error);
        setIsLoading(false);
      }
    } else {
      qrCode
        .download({
          extension: fileExt,
          name: "qrcode",
        })
        .then(() => {
          // Reset QR code dimensions back to original size
          qrCode.update({
            width: 300,
            height: 300,
          });
  
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error downloading QR code:", error);
  
          qrCode.update({
            width: 300,
            height: 300,
          });
          setIsLoading(false);
        });
    }
  };
  


  return (
    <>
      <div className="w-full md:w-[400px] bg-white  mt-4 md:mt-0 p-4 flex flex-col items-center justify-start space-y-6">
        <div className="flex items-center justify-center">
          <div ref={qrCodeRef} style={{ width: 300, height: 300 }} />
        </div>
        <div className="w-full p-4">
          <input
            type="range"
            min="200"
            max="2000"
            value={qrSize}
            onChange={(e) => setQrSize(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs font-sans font-light">
            <span>Low Quality</span>
            <span className="font-semibold">
              {qrSize}x{qrSize} Px
            </span>
            <span>High Quality</span>
          </div>
        </div>
        <div className=" w-full px-4 space-y-2">
           
          <Button
            onClick={handleCreateQRCode}
            disabled={isLoading}
            variant={'primary'}
            size={'full'}
          >
            Create QR Code
          </Button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenModal(true)}
              className={`bg-white hover:bg-brand-orange-mainbg hover:drop-shadow-md border-2 border-brand-orange-main text-brand-orange-main font-bold p-2 rounded-md flex items-center gap-4`}
              style={{ minWidth: "160px" }}
            >
              {isLoading ? (
                "Loading"
              ) : (
                <>
                <span className="shrink-0">
                  Download QR 
                </span>
                  <FiDownload className="font-bold stroke-2	" />
                </>
              )}
            </button>
            <CustomSelect4
              val={fileExt}
              setVal={(val) => setFileExt(val as FileExtension)}
              list={[
                { id: 0, label: "JPEG", value: "jpeg" },
                { id: 1, label: "SVG", value: "svg" },
                { id: 2, label: "EPS", value: "eps" },
                { id: 3, label: "PDF", value: "pdf" },
                { id: 4, label: "PNG", value: "png" },
              ]}
            />
          </div>
        </div>
      </div>
      {openModal && (
        <AdComponent
          loading={isLoading}
          setOpenModal={setOpenModal}
          downloadQR={downloadQRCode}
        />
      )}
    </>
  );
};

export default QRCodeManager;