import RSS from "rss";
import { Essay } from "./types";

const SITE_URL = "https://wrttn-essays.vercel.app";
const SITE_DESCRIPTION =
  "Exploring writing to better understand the world and myself, as part of my journey preparing for UPSC civil services";
const AUTHOR_NAME = "Shadab Khan";

export function generateRSSFeed(essays: Essay[]): string {
  const feed = new RSS({
    title: "Wrttn Essays",
    description: SITE_DESCRIPTION,
    feed_url: `${SITE_URL}/api/feed.xml`,
    site_url: SITE_URL,
    author: AUTHOR_NAME,
    language: "en",
    pubDate: new Date(),
  });

  // Add each essay as an RSS item
  essays.forEach((essay) => {
    feed.item({
      title: essay.title,
      description: essay.excerpt || essay.content.substring(0, 500),
      url: `${SITE_URL}/essays/${essay.id}`,
      author: AUTHOR_NAME,
      date: new Date(essay.date),
      guid: `${SITE_URL}/essays/${essay.id}`,
      categories: essay.tags,
    });
  });

  return feed.xml({ indent: true });
}
