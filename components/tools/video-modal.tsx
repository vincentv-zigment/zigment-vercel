"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { Dialog, DialogContent } from "../ui/dialog";
import { MdClose } from "react-icons/md";

type Props = {
  link: string;
  isOpen: boolean;
  close: () => void;
};

const VideoModal = ({ link, isOpen, close }: Props) => {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    const device_width = window.innerWidth;
    setDeviceWidth(device_width);
  }, []);

  const findVideoWidth = (data: number): string => {
    if (data <= 425) {
      return "max-w-[90vw]";
    } else if (data > 425 && data <= 820) {
      return "max-w-[520px]";
    } else {
      return "max-w-[640px]";
    }
  };
  return (
    <Dialog onOpenChange={close} open={isOpen} modal>
      <DialogContent
        className={cn(
          findVideoWidth(deviceWidth),
          "px-0 pb-0 pt-[40px] border-[0px] flex justify-center shadow-none [&>button]:right-0 [&>button]:top-0 h-5/6 rounded-theme z-[1000]"
        )}
      >
        <div className="h-full relative lg:w-full ">

          <button className="p-1 absolute border top-2 right-2 lg:top-0 z-10 lg:-right-12 w-fit h-fit border-border rounded-full " onClick={close}>
            <MdClose className="w-6 h-6"/>
          </button>
            <ReactPlayer
              url={link}
              width={findVideoWidth(deviceWidth)}
              height="95%"
              loop
              playing
              
            />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
