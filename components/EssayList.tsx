import Link from "next/link";
import { Essay } from "@/libs/types";
import EssayCard from "@/components/EssayCard";

interface EssayListProps {
  essays: Essay[];
}

const EssayList = ({ essays }: EssayListProps) => {
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
          Reflections on the intersection of making, thinking, and living
          deliberately.
        </p>
      </div>

      <div className="space-y-12">
        {essays.map((essay) => (
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
