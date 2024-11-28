"use client";

import { useRef } from "react";

// gsap
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";

// types

// lib
import { delayTime2 } from "@/lib/helper/delayTime";

// shadcn components
import { BlogI } from "@/lib/types/blog";
import BlogCard1 from "../blog-card";

// components



type Props = {
      blogs: BlogI[];
  };
  
 
const BlogItems = ({ blogs,    }: Props) => {
 

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <>
        <div className="container" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] xl:gap-x-[40px] gap-y-[40px] xl:gap-y-[60px]">
            {blogs.slice(0, 3).map((blog, i) => (
              <div
                key={blog.slug}
                className="has_fade_anim"
                data-delay={delayTime2(i + 1)}
              >
                <BlogCard1 blog={blog} allowBtn={true} />
              </div>
            ))}
          </div>

       
        </div>
    </>
  );
};

export default BlogItems;
