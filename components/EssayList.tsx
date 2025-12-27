import Link from "next/link";
import { Essay } from "@/libs/types";
import EssayCard from "@/components/EssayCard";

interface EssayListProps {
  essays: Essay[];
}

const EssayList = ({ essays }: EssayListProps) => {
  // 1. Create a sortable copy of the essays array
  const sortedEssays = essays
    .slice() // Creates a shallow copy to avoid mutating the prop
    .sort((a, b) => {
      // Convert the string dates (e.g., "November 28, 2024") to Date objects for comparison
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Sort in descending order (newest date first: dateB - dateA)
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-20 text-center">
        <div className="inline-block">
          <h2 className="text-neutral-900 mb-4 relative text-3xl font-light">
            Recent Essays
            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          </h2>
        </div>
        <p className="text-neutral-600 max-w-xl mx-auto mt-6 italic">
          Crude, imperfect attempts at thinking clearly, aimed at mastering the
          art of the analytical essay.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* 2. Map over the sorted array */}
        {sortedEssays.map((essay) => (
          // Link component wraps EssayCard for navigation
          <Link
            key={essay.id}
            href={`/essays/${essay.id}`}
            className="block group"
          >
            <EssayCard essay={essay} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EssayList;
