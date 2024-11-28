"use client";

import Link from "next/link";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import { cn } from "@/lib/utils";

// types

// shadcn components
import BlogItems from "@/components/common/blog-items";
import Title1 from "@/components/common/title/title1";
import { buttonVariants } from "@/components/ui/button";
import { BlogI } from "@/lib/types/blog";


 type Props = {
    data:BlogI[]
 }



const BlogSection = ({data}:Props) => {

  const containerRef = useRef<HTMLDivElement>(null!);
//   const getBlogData = await blogData();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1 bg-sec_bg">
      <div className="container">
        <div
          className="flex justify-between items-center gap-x-[50px] gap-y-[30px] flex-col md:flex-row"
          ref={containerRef}
        >
          <Title1
            text={'Blogs'}
            html
            className="[&>br]:hidden md:[&>br]:block has_fade_anim"
          />
            <div className="has_fade_anim">
              <Link
                href={'/blog'}
                className={cn(buttonVariants({ variant: "primary" }))}
              >
                <span className="btn-span" data-text={'Browse All Blogs'}>
                  {`Browse All Blogs`}
                </span>
              </Link>
            </div>
        </div>
        <div className="mt-[28px] xl:mt-[38px] 2xl:mt-[58px]">
          <BlogItems blogs={data} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
