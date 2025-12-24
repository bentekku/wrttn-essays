/**
 * Removes Markdown syntax from a string to provide clean text.
 */
const stripMarkdown = (content: string): string => {
  return (
    content
      // Remove headers (e.g., ### Title)
      .replace(/#{1,6}\s?/g, "")
      // Remove bold and italic (e.g., **text** or _text_)
      .replace(/[\*_]{1,3}/g, "")
      // Remove blockquotes (e.g., > Quote)
      .replace(/^>\s?/gm, "")
      // Remove links but keep text [text](url) -> text
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
      // Replace multiple newlines/spaces with a single space
      .replace(/\s+/g, " ")
      .trim()
  );
};

/**
 * Calculates word count, estimated read time, and a short excerpt for content.
 * Average reading speed is generally accepted as 200 words per minute (WPM).
 * @param content The full text content of the essay.
 * @returns An object with calculated metrics.
 */
export const calculateMetrics = (content: string) => {
  // Use clean text for the word count and excerpt to avoid counting symbols
  const cleanText = stripMarkdown(content);

  // Use a regex to split the string by any whitespace character
  const words = cleanText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Calculate read time based on an average of 200 WPM
  const readTimeInMinutes = Math.ceil(wordCount / 200);

  // Generate an excerpt from the CLEAN text (first 160 characters)
  const excerpt = cleanText.substring(0, 160).trim() + "...";

  return {
    wordCount,
    readTime: `${readTimeInMinutes} min read`,
    excerpt,
  };
};
