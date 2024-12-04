import { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";


const VideoDemo = () => {
  const [open, setOpen] = useState(false);
  const [mobilePlay, setMobilePlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect()
  return (
    <>
      <div className="w-full md:w-[250px]  rounded-lg overflow-hidden bg-black relative block mt-6">
        <button
          className="hidden md:block absolute cursor-pointer z-[2] right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FaCirclePlay className="w-10 h-10" />
        </button>
        <button
          className={`md:hidden ${
            mobilePlay && "hidden"
          } absolute cursor-pointer z-[2] right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2`}
          onClick={() => {
            setMobilePlay(true);
            if (videoRef && videoRef.current) {
              videoRef.current.play();
            }
          }}
        >
          <FaCirclePlay className="w-10 h-10" />
        </button>
        <video
          ref={videoRef}
          controls={mobilePlay}
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.zigment.ai/assets/1712047058-WhatsApp demo 6 short.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {open && (
        <div className="w-screen z-10 h-screen fixed inset-0 ">
          <div
            className=" w-full h-full  bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="fixed rounded-lg overflow-hidden inset-x-0 mx-auto bottom-1/2 translate-y-1/2 w-11/12 lg:w-3/4 ">
            <video
              controls
              autoPlay={open}
              muted
              className="w-full h-full object-cover"
            >
              <source
                src="https://cdn.zigment.ai/assets/1712047058-WhatsApp demo 6 short.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDemo;
