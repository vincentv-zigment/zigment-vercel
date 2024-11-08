import Image from "next/image";

// lib
import { markdownify } from "@/lib/helper/convert";

type Props = {
  service: {
    data: {
      title: string;
      short_description: string;
      image: string;
    };
  };
};

const ServiceCard6 = ({ service }: Props) => {
  const { title, short_description, image } = service.data;
  return (
    <div className="px-[50px]">
      {image && (
          <Image width={85} height={86} className="w-24 h-24" src={image} alt="feature icon" />
      )}
      <div className="mt-[38px]">
        <h3
          className="text-[20px] lg:text-[24px] leading-tight"
          dangerouslySetInnerHTML={markdownify(title)}
        />
        <p className="mt-[19px]">{short_description}</p>
      </div>
    </div>
  );
};

export default ServiceCard6;
