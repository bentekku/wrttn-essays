/**
 * Calculates word count, estimated read time, and a short excerpt for content.
 * Average reading speed is generally accepted as 200 words per minute (WPM).
 * @param content The full text content of the essay.
 * @returns An object with calculated metrics.
 */
export const calculateMetrics = (content: string) => {
  // Use a regex to split the string by any whitespace character
  const wordCount = content.split(/\s+/).length;

  // Calculate read time based on an average of 200 WPM
  const readTimeInMinutes = Math.ceil(wordCount / 200);

  // Generate an excerpt (first 150 characters, trimmed, with ellipsis)
  const excerpt = content.substring(0, 150).trim() + "...";

  return {
    wordCount,
    readTime: `${readTimeInMinutes} min read`,
    excerpt,
  };
};
