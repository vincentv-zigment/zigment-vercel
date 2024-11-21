import MarkdownToHTML3 from "@/components/common/markdown-to-html3";
import MetaTagsComponents from "@/components/common/meta-tags-components";
import { Button } from "@/components/ui/button";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { BsClock } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { JobI } from ".";

interface Context {
  params: {
    slug: string;
  };
}

interface ResponseData {
  data: JobI;
}

export const getServerSideProps = async (context: Context) => {
  try {
    const response = await axiosWithoutAuth<ResponseData>(
      `/cms/job-post/${context.params.slug}`
    );

    return {
      props: {
        data: response.data,
      },
    };
  } catch {
    return {
      props: {
        data: null,
      },
    };
  }
};

type Props = {
  data: JobI;
};

const JobPosting = ({ data }: Props) => {
  console.log(data.long_description);
  if (!data) {
    return (
      <>
        <div className="bg-white pt-12 min-h-screen   max-w-6xl mx-auto w-full   ">
          <div className="w-full  rounded-md bg-brand-blue-100/10 p-8   relative">
            <div className="flex justify-between items-center  space-y-4">
              <div className="">
                <h1 className="text-3xl font-bold">Job Not Found</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <MetaTagsComponents
        title={`${data.title} at Zigment | Build the Future of AI Sales Engagement`}
        description={
          data.short_description ||
          `Join Zigment's mission to transform sales engagement with AI. Help build cutting-edge AI agents and shape the future of business automation as our ${data.title}.`
        }
        keywords={`${data.tags.join(
          ", "
        )}, AI technology careers, Zigment careers, AI innovation jobs, sales automation careers, AI platform development, tech startup jobs, AI engineering careers`}
        url={`https://zigment.ai/careers/${data.slug}`}
      />
      <div className="  min-h-screen      ">
        <div className="pt-[120px] bg-sec_bg">
          <div className=" w-full max-w-6xl mx-auto  rounded-md bg-brand-blue-100/10 p-8   relative">
            <div className="flex justify-between items-center  space-y-4">
              <div className="">
                <h1 className="text-3xl font-bold">{data.title}</h1>

                <div className="flex  flex-wrap w-full items-center  gap-4 my-4 font-medium text-sm text-gray-500">
                  <span className="flex items-center gap-2   rounded-md">
                    <IoLocationOutline className="w-4 h-4" />
                    {data.location}
                  </span>
                  <span className="flex items-center gap-2   rounded-md  ">
                    <BsClock className="w-4 h-4" />
                    {data.role_type}
                  </span>
                  {/* <span className='flex items-center gap-2   rounded-md  '>
                    <MdCalendarMonth className='w-4 h-4' />
                    {moment.unix(data.created_at_timestamp).format("DD MMMM YYYY")}
                  </span> */}
                </div>
              </div>
            </div>

            <div className="w-full mt-4 flex flex-wrap items-center gap-2">
              {data.tags.map((x, index) => {
                return (
                  <Button
                    key={`${index}-tags-job-posts`}
                    size="auto"
                    variant="secondary"
                  >
                    {x}
                  </Button>
                );
              })}
            </div>

            <Button
              variant={"primary"}
              className="mt-10"
              size={"sm"}
              onClick={() => {
                if (data && data.apply_link) {
                  window.location.href = data.apply_link;
                }
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto py-20">
          <MarkdownToHTML3 content={data.long_description} />
        </div>
      </div>
    </>
  );
};

export default JobPosting;
