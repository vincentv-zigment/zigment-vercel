

export interface BlogI {
  _id: string;
  slug: string;
  title: string;
  markdown: string;
  author: string;
  description: string;
  published_at: string;
  cover_image: string;
  category_name:string;
  author_description:string;
  tags:string[];
  time_to_read:number;
  category_id:string
}

export type BlogResponse = {
  body: {
    parent: string
  }
  details: BlogI
}


