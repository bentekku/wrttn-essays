import { notFound } from "next/navigation";
import EssayDetail from "@/components/EssayDetail";
import { getAllEssays, getEssayById } from "@/libs/essays";

/**
 * generateStaticParams tells Next.js which pages to pre-render at build time.
 * It now uses the filenames (slugs) from your /content folder.
 */
export const generateStaticParams = async () => {
  const essays = await getAllEssays();

  return essays.map((essay) => ({
    id: essay.id, // e.g., "sharpening-the-axe"
  }));
};

/**
 * The Page Component
 */
const EssayPage = async (props: { params: Promise<{ id: string }> }) => {
  // 1. Unwrap params (required in newer Next.js versions)
  const { id } = await props.params;

  // 2. Fetch the essay data using our new file-reader utility
  const essay = await getEssayById(id);

  // 3. If the .md file doesn't exist, show the 404 page
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
