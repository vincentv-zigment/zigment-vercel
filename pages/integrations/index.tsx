import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SearchBar from "@/components/blocks/integrations/search-bar";
import CustomSelect4 from "@/components/common/selects/custom-select4";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { classNames } from "@/lib/common";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "ALL"
  );
  const [categoryList, setCategoryList] = useState([
    ...data
      .map((x) => x.category.split(","))
      .flat()
      .filter((x, i, arr) => arr.indexOf(x) === i),
  ]);
  const [integrationsList, setIntegrationsList] = useState(data);

  const scrollCategoryList = (direction: "left" | "right") => {
    const container = document.getElementById("category-list");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (
      selectedCategory === null ||
      selectedCategory === undefined ||
      selectedCategory === "ALL"
    ) {
      setIntegrationsList(data);
    } else {
      setIntegrationsList(
        data.filter((x) => x.category.split(",").includes(selectedCategory))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title>Integrations</title>
        <meta
          name="description"
          content="Connect with third-party tools that you're already using"
        />
        <meta property="og:title" content="Integrations" />
        <meta
          property="og:description"
          content="Connect with third-party tools that you're already using"
        />
      </Head>
      <section
        className="   pt-0 md:pt-[25px] xl:pt-[58px] 2xl:pt-[128px]"
        style={{
          fontFamily: "Instrument, sans-serif",
        }}
      >
        <div className="text-center container">
          <h2 className="sec_title1 [&>img]:inline-block mx-auto has_fade_anim max-w-[800px] md:pt-[25px] xl:pt-[58px] 2xl:pt-[128px]">
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
            Connect with third-party tools that you're already using
          </p>
        </div>

        {/* navigation */}
        <div className="flex items-center gap-4 justify-center mx-auto text-center overflow-x-hidden w-full max-w-5xl md:pt-[25px] xl:pt-[58px] 2xl:pt-[128px]">
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
          <div className=" w-full gap-8 flex flex-col  items-start  justify-center  ">
            <div className="md:hidden mb-2 flex gap-4 text-lg items-center">
              <span className="font-medium">Category</span>
              {categoryList && (
                <CustomSelect4
                  val={selectedCategory}
                  setVal={(val) => {
                    setSelectedCategory(val);
                  }}
                  list={[
                    { id: 0, label: "ALL", value: "ALL" },
                    ...categoryList.map((x, index) => {
                      return {
                        id: x,
                        label: x,
                        value: x,
                      };
                    }),
                  ]}
                />
              )}
            </div>
            <div className="relative h-fit w-full">
              <SearchBar />
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
