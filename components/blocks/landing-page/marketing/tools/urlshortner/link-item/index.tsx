import Spinner from "@/components/common/loaders/spinner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import QRCodeLib from "qrcode";
import React, { useCallback, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoCheckmarkDoneOutline, IoClose } from "react-icons/io5";
import validator from "validator";

export type LinkHref = {
  id: string;
  title?: string;
  shortUrl: string;
  longUrl: string;
  createdAt: string;
  totalClicks: number;
  password: string;
};

interface LinkItemProps {
  link: LinkHref;
  onRemove: (id: string) => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ link, onRemove }) => {
  const [downloadQrCodeSize, setDownloadQrCodeSize] = useState(128);
  const [activeSize, setActiveSize] = useState<number | null>(null); // Allow activeSize to be number or null
  const [showModal, setShowModal] = useState(false);
  const parts = link.shortUrl.split("/");
  const uniqueId = parts[parts.length - 1];

  const { addToast } = useToast()
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(link.shortUrl);
    addToast('info', 'URL copied!')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link.shortUrl]);

  const handleQRCodeClick = () => {
    setShowModal(true);
  };

  const handleRemove = () => {
    onRemove(link.id);
  };

  const selectSize = (size: number) => {
    setDownloadQrCodeSize(size);
    setActiveSize(size); // Update activeSize here to highlight the button
  };


  const downloadQRCode = useCallback(() => {
    QRCodeLib.toDataURL(link.shortUrl, { width: downloadQrCodeSize })
      .then((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = `QRCode-${downloadQrCodeSize}px.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error("Error generating QR code:", err);
      });
  }, [downloadQrCodeSize, link.shortUrl]);


  return (
    <div className="flex items-center justify-start space-x-1 z-40">
      <div
        className="flex items-center justify-between bg-gray-50 p-2 border-b-2 border-blue-500  my-2"
        style={{ width: "600px" }}
      >
        <div className="flex flex-grow items-center">
          <div className="text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap w-60">
            {link.longUrl}
          </div>
          <a
            href={link.shortUrl}
            target="_blank"
            className="ml-2 text-blue-400"
          >
            {link.shortUrl}
          </a>
        </div>
        <div className="flex items-center gap-1">

          <button
            onClick={handleQRCodeClick}
            className="p-1 rounded-full text-gray-600 hover:text-gray-800"
          >
            <BsQrCode size="1.5em" />
          </button>


          <ContactModal href={`/tools/url-shortner/analytics?linkId=${uniqueId}&token=${encodeURIComponent(
            link.password
          )}`} />

          <button
            onClick={handleCopy}
            className="text-gray-600 hover:text-gray-800 group w-10 h-10 text-center flex items-center justify-center focus:bg-gray-100"
          >
            <span className="group-focus:hidden" >

              Copy
            </span>
            <span className="hidden group-focus:block">
              <IoCheckmarkDoneOutline className="w-6 h-6" />
            </span>
          </button>
        </div>
        {showModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black-2 opacity-50   flex justify-center items-center" onClick={() => setShowModal(false)}>
            </div>
            <div className="bg-white p-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col items-center justify-center w-full max-w-xl h-72">
              <div className="w-fit h-fit bg-white   flex items-center justify-center overflow-hidden">
                {/* <QRCode value={link.shortUrl} size={128} /> */}
              </div>
              <div className="flex justify-center mt-4 ">
                {[64, 128, 256, 512].map((size) => (
                  <button
                    key={size}
                    onClick={() => selectSize(size)}
                    className={`m-2 p-2 rounded   border border-gray-500 ${activeSize === size ? " text-white bg-gray-500" : "bg-white text-gray-500"
                      }`}
                  >
                    {size}px
                  </button>
                ))}
              </div>
              <div className="flex flex-center gap-4 mt-4  ">
                <Button
                  onClick={downloadQRCode}
                  variant={'primary'} 
                  size={'sm'}
                >
                  <FiDownload className="w-5 h-5 	" />
                  <span> Download</span>
                </Button>
                <Button
                  onClick={() => setShowModal(false)}
                  variant={'outline'}
                  size={'sm'}
                >
                  Close
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <button
        onClick={handleRemove}
        className="p-4 text-black hover:bg-gray-50 active:bg-gray-100 font-medium  rounded flex items-center gap-4"
      >
        <IoClose size="1.5em" />
      </button>

    </div>
  );
};

export default LinkItem;


const ContactModal = ({ href }: { href: string }) => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    full_name: false,
    email: false,
  });
  const [openForm, setForm] = useState(false)
  const [formData, setFormData] = useState({ email: '', full_name: '', });
  const handleValidation = () => {
    let isValid = true;
    const newErrors: { full_name: boolean; email: boolean } = { full_name: false, email: false };

    // Validate each field (you can add your own validation logic)

    // Validate Name field
    if (formData.full_name.trim() === "") {
      newErrors.full_name = true;
      isValid = false;
    }




    if (!validator.isEmail(formData.email.trim())) {
      addToast('error', 'Email is not in Correct format')
      newErrors.email = true;
      isValid = false;
    }







    setErrors(newErrors);
    if (!isValid) addToast('error', 'Please fill all the Details')
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true)
    // Validate the form before submitting
    if (handleValidation()) {
      // Your form submission logic  
      try {
        await axiosWithoutAuth.post(`/cms/new-lead`, {
          name: formData.full_name,
          email: formData.email,
          source: Marketing_Lead_Source.SEO_TOOL,
          source_detail: 'URL-SHORTNER',
        })
        setLoading(false)
        window.open(href, '_blank');  // Updated line
        setForm(false)

      } catch {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  };
  return (
    <>
      <button
        className="p-1 rounded-full text-gray-600 hover:text-gray-800"
        onClick={() => setForm(true)}
      >
        <FaChartSimple className="w-6 h-6" />
      </button>
      <>

        {openForm &&
          <div className='w-screen h-screen fixed z-[30]'>
            <div className="fixed inset-x-0 bottom-1/2 translate-y-1/2 mx-auto  h-fit  border border-gray-200   rounded-2xl bg-white text-left shadow-xl  sm:my-8  w-full  max-w-md p-4 sm:p-10 z-[20]">
              <div className="sm:flex w-full sm:items-start">

                <div className="mt-3  text-center w-full sm:mt-0 sm:text-center">
                  <h3 className="text-xl font-bold leading-6 text-gray-900">
                    {`Track Your Link's Performance`}
                  </h3>
                  <p className='text-sm mt-4'>But first, we need some info. Share a few details in the form below so we can better help you and your company</p>
                  <div className="mt-8 w-full space-y-4">

                    <input
                      type="text"
                      value={formData.full_name}
                      name="full_name"
                      className={`block w-full rounded-lg border-2 border-gray-600 px-4  py-2 focus:border-brand-orange-main focus:ring-brand-orange-main sm:text-sm text-left ring-1 placeholder:font-[400] placeholder:text-gray-400
                      ${errors.full_name ? "ring-red-500 border-red-500" : "ring-transparent"}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      value={formData.email}
                      name="email"
                      className={`block w-full rounded-lg border-2 border-gray-600 px-4  py-2 focus:border-brand-orange-main focus:ring-brand-orange-main sm:text-sm text-left ring-1 placeholder:font-[400] placeholder:text-gray-400
                      ${errors.email ? "ring-red-500 border-red-500" : "ring-transparent"}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Email"
                    />

                  </div>
                </div>
              </div>
              <div className="mt-4   w-full">
                <Button
                  variant={'primary'}
                  type="button"
                  size={'full'}
                        
                  onClick={(e) => { handleSubmit(e) }}

                >
                  {loading ?
                    <Spinner color="" />
                    : 'Continue'}

                </Button>
                <div className="text-center text-xs mt-2 ">We respect your privacy & information</div>

              </div>
            </div>
            <div className="fixed w-screen h-screen bg-black/50 blur-sm	 z-[10] inset-0" onClick={() => setForm(false)}>

            </div>
          </div>
        }
      </>
    </>
  )

}