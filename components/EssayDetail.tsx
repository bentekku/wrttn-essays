import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Essay } from "@/libs/types";

interface EssayDetailProps {
  essay: Essay;
}

const EssayDetail = ({ essay }: EssayDetailProps) => {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      {/* 1. Next.js Change: Replace button/onClick with Link to route back to the list */}
      <Link
        href="/"
        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to essays</span>
      </Link>

      <header className="mb-12">
        {/* Decorative line */}
        <div className="flex items-center mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mx-3"></div>
          <div className="h-[1px] flex-1 bg-neutral-200"></div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <time className="text-neutral-500 text-sm uppercase tracking-wider">
            {essay.date}
          </time>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-500 text-sm italic">
            {essay.readTime}
            <span className="text-xs ml-1">
              ({essay.wordCount.toLocaleString()} words)
            </span>
          </span>
        </div>

        <h1 className="text-neutral-900 mb-6 text-4xl font-extrabold tracking-tight">
          {/* Added text size class for proper heading hierarchy */}
          {essay.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {essay.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* The main content area */}
      <div className="prose prose-neutral max-w-none">
        {essay.content.split("\n\n").map((paragraph, index) => (
          // Using <p> within prose for standard markdown paragraph formatting
          <p key={index} className="text-neutral-800 mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-neutral-200">
        <p className="text-neutral-600 italic">
          Thank you for reading. If you enjoyed this essay, you might also be
          interested in exploring the other pieces in the collection.
        </p>
      </footer>
    </article>
  );
};
export default EssayDetail;
