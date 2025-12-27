"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Essay } from "@/libs/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";

interface EssayDetailProps {
  essay: Essay;
}

const EssayDetail = ({ essay }: EssayDetailProps) => {
  const [pdfExists, setPdfExists] = useState(false);

  // Check if PDF exists for this essay
  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch(`/pdfs/${essay.id}.pdf`, {
          method: "HEAD",
        });
        setPdfExists(response.ok);
      } catch (error) {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, [essay.id]);

  const handlePdfDownload = () => {
    window.open(`/pdfs/${essay.id}.pdf`, "_blank");
  };

  return (
    <article className="max-w-2xl mx-auto px-6 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to essays</span>
        </Link>

        {pdfExists && (
          <button
            onClick={handlePdfDownload}
            title="Preview hand-written pdf"
            aria-label="Download essay PDF"
            className="ml-auto p-2 text-neutral-600 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100"
          >
            <Download className="w-5 h-5" />
          </button>
        )}
      </div>

      <header className="mb-8 md:mb-12">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-neutral-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mx-3"></div>
          <div className="h-px flex-1 bg-neutral-200"></div>
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

        <h1 className="text-neutral-900 mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold tracking-tight">
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

      {/* REPLACED: Manual mapping with ReactMarkdown.
          The 'prose' classes come from @tailwindcss/typography 
          to style the rendered HTML.
      */}
      <div
        className="prose prose-neutral prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-neutral-900
                prose-p:text-neutral-800 prose-p:leading-relaxed
                prose-blockquote:border-l-neutral-400 prose-blockquote:italic prose-blockquote:text-neutral-700 prose-blockquote:bg-neutral-100/50 prose-blockquote:py-1 prose-blockquote:pr-4"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {essay.content}
        </ReactMarkdown>
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
