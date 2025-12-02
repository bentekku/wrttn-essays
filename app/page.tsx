import path from "path";
import { promises as fs } from "fs";
import { Essay } from "@/libs/types";
import { calculateMetrics } from "@/libs/utils";
import EssayList from "@/components/EssayList";

// Function to read and parse the local JSON file and apply metrics
const getEssays = async (): Promise<Essay[]> => {
  // Define the path to your JSON file
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "essays.json");

  // Read the file system on the server
  const fileContents = await fs.readFile(filePath, "utf8");

  // Parse raw data
  const rawEssays: Omit<Essay, "excerpt" | "readTime" | "wordCount">[] =
    JSON.parse(fileContents);

  // Map and apply the calculated metrics to each essay
  const essaysWithMetrics: Essay[] = rawEssays.map((essay) => {
    const metrics = calculateMetrics(essay.content);
    return {
      ...essay,
      ...metrics,
    } as Essay;
  });

  return essaysWithMetrics;
};

// Converted to Arrow Function
const EssaysListPage = async () => {
  // 1. Data Fetching on the Server Component
  const essays = await getEssays();

  // 2. Rendering the List
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* 🛑 FIX: EssayList was commented out. It is now active. */}
      <EssayList essays={essays} />
    </div>
  );
};

export default EssaysListPage;
