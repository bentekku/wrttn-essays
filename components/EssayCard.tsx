import { Essay } from "@/libs/types";

interface EssayCardProps {
  essay: Essay;
}

const EssayCard = ({ essay }: EssayCardProps) => {
  return (
    <article
    // ... (rest of the JSX remains the same) ...
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-neutral-900 transition-colors"></div>
          <time className="text-neutral-500 text-sm uppercase tracking-wider">
            {essay.date}
          </time>
        </div>
        <span className="text-neutral-300">·</span>
        {/* Dynamic data from calculation is used here */}
        <span className="text-neutral-500 text-sm italic">
          {essay.readTime}
          <span className="text-xs ml-1">
            ({essay.wordCount.toLocaleString()} words)
          </span>
        </span>
      </div>

      <h3 className="text-neutral-900 mb-3 md:mb-4 group-hover:text-neutral-600 transition-colors relative inline-block text-xl md:text-2xl font-semibold">
        {essay.title}
        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-neutral-400 transition-all duration-300"></span>
      </h3>

      <p className="text-neutral-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
        {essay.excerpt}
      </p>

      <div className="flex flex-wrap gap-2">
        {essay.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default EssayCard;
