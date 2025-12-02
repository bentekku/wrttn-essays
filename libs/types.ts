// The structure of a single essay object from your JSON data
export type Essay = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  wordCount: number;
  tags: string[];
  content: string;
  excerpt: string;
};
