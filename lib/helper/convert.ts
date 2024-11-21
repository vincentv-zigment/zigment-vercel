/* eslint-disable @typescript-eslint/no-explicit-any */
import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content: string) => {
  return slug(content);
};

// Convert string to html
export const markdownify = (content: string, div?: boolean) => {
  const markdownContent: any = div
    ? marked.parse(content)
    : marked.parseInline(content);
  return { __html: markdownContent };
};
 
 

 
 
