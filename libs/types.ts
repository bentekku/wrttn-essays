export type Essay = {
  id: string; // This will now be the filename (e.g., 'sharpening-the-axe')
  title: string;
  date: string;
  readTime: string;
  wordCount: number;
  tags: string[];
  content: string;
  excerpt: string;
};
