import path from "path";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import { Essay } from "@/libs/types";
import EssayDetail from "@/components/EssayDetail";
import { calculateMetrics } from "@/libs/utils";

// Function to get all essays for static generation
const getAllEssays = async (): Promise<Essay[]> => {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "essays.json");

  const fileContents = await fs.readFile(filePath, "utf8");
  const rawEssays = JSON.parse(fileContents);

  return rawEssays.map((essay: any) => {
    const metrics = calculateMetrics(essay.content);
    return { ...essay, ...metrics };
  });
};

// Generate static params for all essays
export const generateStaticParams = async () => {
  const essays = await getAllEssays();
  return essays.map((essay) => ({
    id: essay.id.toString(),
  }));
};

const getEssayById = async (id: number): Promise<Essay | undefined> => {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "essays.json");

  let fileContents = "";
  try {
    fileContents = await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error("Error reading essays.json:", error);
    return undefined;
  }

  const rawEssays = JSON.parse(fileContents);
  const essayData = rawEssays.find((e: { id: number }) => e.id === id);

  if (!essayData) {
    return undefined;
  }

  const metrics = calculateMetrics(essayData.content);
  return {
    ...essayData,
    ...metrics,
  } as Essay;
};

const EssayPage = async (props: { params: any }) => {
  // params may be a Promise in the app router; unwrap it
  const params = await props.params;
  const essayId = parseInt(params.id);

  if (isNaN(essayId)) {
    notFound();
  }

  const essay = await getEssayById(essayId);

  if (!essay) {
    notFound();
  }

  return (
    <div className="py-12">
      <EssayDetail essay={essay} />
    </div>
  );
};
export default EssayPage;
