import React, { useEffect } from "react";
import { JobI } from ".";
import moment from "moment";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import MetaTagsComponents from "@/components/common/meta-tags-components";
import MarkdownToHTML2 from "@/components/common/markdown-to-html2";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { Button } from "@/components/ui/button";
import MarkdownToHTML from "@/components/common/markdown-to-html";
import MarkdownToHTML3 from "@/components/common/markdown-to-html3";

export async function getServerSideProps(context: any) {
  try {
    const response = await axiosWithoutAuth(
      `/cms/job-post/${context.params.slug}`
    );

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}

type Props = {
  data: JobI;
};

const JobPosting = ({ data }: Props) => {
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
        url={`https://zigment.ai/careers/${data.slug}`}
        title={`${data.title} - Careers | Zigment AI`}
        keywords={data.tags.join(",")}
        description={data.short_description ?? `Join as ${data.title}`}
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
              variant={'primary'}
              className="mt-10"
              size={'sm'}
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
