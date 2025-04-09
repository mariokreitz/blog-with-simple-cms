export type BlogPost = {
  _id?: string;
  title: string;
  image: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
};
