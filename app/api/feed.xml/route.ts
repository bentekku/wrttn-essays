import { getAllEssays } from "@/libs/essays";
import { generateRSSFeed } from "@/libs/rss";

export async function GET() {
  const essays = await getAllEssays();
  const rss = generateRSSFeed(essays);

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
