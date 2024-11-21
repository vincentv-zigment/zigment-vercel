import SearchBar from "@/components/blocks/integrations/search-bar";
import MetaTagsComponents from "@/components/common/meta-tags-components";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { classNames } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  data: IntegrationDataI[];
};

export interface IntegrationDataI {
  id: string;
  app_name: string;
  logo_url: string;
  app_description: string;
  category: string;
}

export async function getServerSideProps() {
  try {
    const getData = await axiosWithoutAuth.get(`/integration/public/fetch-all`);

    return {
      props: {
        data: getData.data,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

const Index = ({ data }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    "ALL"
  );
  const [categoryList] = useState([
    ...data
      .map((x) => x.category.split(","))
      .flat()
      .filter((x, i, arr) => arr.indexOf(x) === i),
  ]);

  const [integrationsList, setIntegrationsList] = useState(data);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const scrollCategoryList = (direction: "left" | "right") => {
    const container = document.getElementById("category-list");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let filteredData = data;
    if (selectedCategory && selectedCategory !== "ALL") {
      filteredData = filteredData.filter((x) =>
        x.category.split(",").includes(selectedCategory)
      );
    }
    if (searchQuery) {
      filteredData = filteredData.filter((x) =>
        x.app_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setIntegrationsList(filteredData);
  }, [selectedCategory, searchQuery, data]);

  return (
    <>
      <MetaTagsComponents
        title="Zigment Integrations | Connect Your Sales Stack with AI-Powered Automation"
        description="Seamlessly integrate Zigment's AI sales platform with your existing tools. Connect with CRM, social media, messaging apps, and marketing platforms for unified sales engagement."
        keywords="sales platform integrations, CRM integration, sales automation connections, AI platform integrations, multi-channel sales tools, marketing automation integration, enterprise software integration, sales stack automation, whatsapp integration, social media integration"
        url="https://www.zigment.ai/integrations"
      />

      <section
        className="   sec_space1"
        style={{
          fontFamily: "Instrument, sans-serif",
        }}
      >
        <div className="text-center container sec_space1 ">
          <h2 className="sec_title1 [&>img]:inline-block mx-auto has_fade_anim max-w-[800px] ">
            Seamless Integration <br /> enhancing experience with <br /> Zigment
            solution
          </h2>
          <p
            className="mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim"
            style={{
              rotate: "none",
              scale: "none",
              opacity: 1,
            }}
          >
            {`Connect with third-party tools that you're already using`}
          </p>
        </div>

        {/* navigation */}
        <div className="flex items-center gap-4 justify-center mx-auto text-center overflow-x-hidden w-full max-w-5xl  ">
          <button onClick={() => scrollCategoryList("left")} className="p-2">
            <ChevronLeft />
          </button>
          <div
            id="category-list"
            className="flex items-center gap-4 overflow-x-hidden"
          >
            <button
              className={classNames(
                selectedCategory === "ALL"
                  ? `bg-btn-bg-main text-primary border border-action text-bold `
                  : ``,
                `py-2 px-4 w-full hover:bg-brand-orange-mainbg text-primary text-left whitespace-nowrap border border-primary font-bold rounded-md `
              )}
              key={`all-integration-0`}
              onClick={() => {
                setSelectedCategory("ALL");
              }}
            >
              All
            </button>
            {categoryList.map((x, __index__) => {
              return (
                <button
                  className={classNames(
                    selectedCategory === x
                      ? `bg-btn-bg-main text-primary border border-btn-bg-main text-bold `
                      : ``,
                    `py-2 px-4 w-full text-gray-500  text-left whitespace-nowrap border border-border hover:border-primary font-bold rounded-md `
                  )}
                  key={`${x.trim()}-integration-${__index__}`}
                  onClick={() => {
                    setSelectedCategory(x);
                  }}
                >
                  {x}
                </button>
              );
            })}
          </div>
          <button onClick={() => scrollCategoryList("right")} className="p-2">
            <ChevronRight />
          </button>
        </div>

        <div className="max-w-5xl md:px-5 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center py-10 lg:py-14">
          <div className=" w-full gap-8 flex flex-col  items-start  justify-center  p-2">
             
            <div className="relative h-fit w-full">
              <SearchBar setSearchQuery={setSearchQuery} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
              {integrationsList.map((x: IntegrationDataI, index__: number) => (
                <div
                  className="w-full  	  cursor-pointer  p-4 border border-border hover:border-primary   rounded-md flex items-center gap-3 relative"
                  key={`${x.id}-integration-${index__}`}
                >
                  <div className="w-[54px] h-[54px] p-2 border overflow-hidden border-slate-100 shrink-0 flex items-center justify-center">
                    <Image
                      width={500}
                      height={500}
                      src={x.logo_url}
                      alt=""
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className=" ">
                    <h3 className="  font-semibold">{x.app_name}</h3>
                    <p className="text-sm text-gray-600">{x.app_description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
