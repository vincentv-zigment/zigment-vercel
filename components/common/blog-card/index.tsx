import Image from "next/image";
import Link from "next/link";

// lib
import { cn } from "@/lib/utils";

// types

// shadcn components
import { buttonVariants } from "@/components/ui/button";
import { BlogI } from "@/lib/types/blog";

type Props = {
  blog: BlogI;
  allowBtn?: boolean;
};

const BlogCard1 = ({ blog, allowBtn = true }: Props) => {
  return (
    <article className="">
      <div className="rounded-theme overflow-hidden">
        <Link href={`/blog/${blog.slug}`}>
          <Image
            width={400}
            height={300}
            style={{ height: "auto", aspectRatio: "3/2" }}
            className="object-cover"
            src={blog.cover_image}
            alt="blog image"
          />
        </Link>
      </div>
      <div className="mt-[28px] xl:mt-[38px]">
        <div>
          <span className="text-[18px] leading-none">{blog.published_at}</span>
        </div>
        <h3 className="text-[22px] xl:text-[22px]  !leading-[1.33] mt-[15px]">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        {allowBtn && (
          <div className="mt-[25px] xl:mt-[40px]">
            <Link
              href={`/blog/${blog.slug}`}
              className={cn(
                buttonVariants({ variant: "normal" }),
                "underline text-primary underline-offset-4 !p-0 !h-auto"
              )}
            >
              Learn more
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard1;
