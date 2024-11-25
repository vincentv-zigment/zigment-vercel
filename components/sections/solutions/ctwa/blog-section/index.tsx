"use client";

import Link from "next/link";
import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// lib
import { cn } from "@/lib/utils";

// types
import { SingleBlogType } from "@/types";

// shadcn components
import BlogItems from "@/components/common/blog-items";
import Title1 from "@/components/common/title/title1";
import { buttonVariants } from "@/components/ui/button";

 

const blogs:SingleBlogType[] = [
    {
        content:'Easy hacks which you can implement today with little or no investment',
        data:{
            title:'How you can automate your hiring process with AI',
            date:'June 7, 2023',
            image:'/assets/imgs/blog-section/blog_1_image.webp'
        },
        slug:'how-you-can-automate-your-hiring-process-with-ai'
    },
    {
        content:'Are you a Health / wellness coach, Business coach, Influencer,',
        data:{
            title:'Lead Nurturing with Conversational AI: A New Paradigm',
            date:'June 7, 2023',
            image:'/assets/imgs/blog-section/blog_2_image.webp'
        },
        slug:'lead-nurturing-with-conversational-AI'
    }
]

const BlogSection = () => {

  const containerRef = useRef<HTMLDivElement>(null!);

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
          <BlogItems blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
