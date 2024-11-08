import { JobI } from "@/pages/careers";
import Link from "next/link";
import React from "react";
import { BsClock } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

type Props = {
  job: JobI;
};

const JobCard = ({ job }: Props) => {
  return (
    <div
      key={`${job._id}-job-post`}
      className="border bg-white border-primary p-6 rounded-2xl   hover:cursor-pointer text-left mt-2"
      onClick={() => {
        window.location.href = `/careers/${job.slug}`;
      }}
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-2xl">{job.title}</h2>
        <Link
          href={`/careers/${job.slug}`}
          className="flex font-medium border-b-2 border-transparent hover:border-gray-500 items-center gap-2"
        >
          Apply <MdArrowOutward className="w-6 h-6" />
        </Link>
      </div>
      <p className="font-medium text-gray-600">{job.short_description}</p>
      <div className="flex w-full items-center gap-2 my-4 font-medium text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <IoLocationOutline className="w-4 h-4" />
          {job.location}
        </span>
        <span className="flex items-center gap-2 pl-2">
          <BsClock className="w-4 h-4" />
          {job.role_type}
        </span>
      </div>
      <div className="flex items-end md:items-center w-full justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {job.tags.map((tag) => {
            return (
              <span
                key={`job_key_${tag}`}
                className="px-4 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-500"
              >
                {tag}
              </span>
            );
          })}
        </div>
     
      </div>
    </div>
  );
};

export default JobCard;
