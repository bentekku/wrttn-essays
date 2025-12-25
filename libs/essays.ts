import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Essay } from "./types";
import { calculateMetrics } from "./utils";

const postsDirectory = path.join(process.cwd(), "content");

export async function getAllEssays(): Promise<Essay[]> {
  // Get file names under /content
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the essay metadata section
      const { data, content } = matter(fileContents);
      const metrics = calculateMetrics(content);

      return {
        id,
        content,
        ...metrics,
        // Spread the frontmatter (title, date, tags)
        ...(data as { title: string; date: string; tags: string[] }),
      } as Essay;
    });

  // Sort essays by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getEssayById(id: string): Promise<Essay | undefined> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const metrics = calculateMetrics(content);

    return {
      id,
      content,
      ...metrics,
      ...(data as { title: string; date: string; tags: string[] }),
    } as Essay;
  } catch (e) {
    return undefined;
  }
}
