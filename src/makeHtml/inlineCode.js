/**
 * This function is designed to convert Markdown inline code syntax to corresponding HTML <code> tags.
 * Inline code in Markdown is indicated by wrapping the text with backticks (`).
 * This function searches for text enclosed in backticks and replaces it with HTML <code> tags,
 * which is the standard way to represent inline code in HTML documents.
 */
function convertInlineCode(markdown) {
  // Begin with the original markdown text as the input to start the conversion process.
  let converted = markdown;

  /**
   * Convert Markdown inline code to HTML <code> tags.
   * The regex pattern /`(.+?)`/gim is explained as follows:
   * - The backtick ` is used to start and end the inline code in Markdown.
   * - (.+?) is a capturing group that matches any character (.), one or more times (+), as few as possible (?),
   *   effectively capturing the shortest match that comes between two backticks. This ensures that only the text
   *   directly within the backticks is captured, avoiding greedily matching longer portions of the text unnecessarily.
   * - The g (global) flag ensures all matches in the string are converted, not just the first one.
   * - The i (case-insensitive) flag is included by convention, though it doesn't affect the match in this context.
   * - The m (multiline) flag allows the pattern to match start (^) and end ($) positions in each line,
   *   although its effect is minimal in this specific pattern, it's included for consistency with comprehensive
   *   regex practices that might match patterns across multiple lines.
   * - The replacement string '<code>$1</code>' uses the captured text ($1) and wraps it with HTML <code> tags,
   *   converting the markdown inline code syntax into the HTML format for representing inline code.
   */
  converted = converted.replace(/`(.+?)`/gim, "<code>$1</code>");

  // After processing the pattern, return the markdown text converted to include HTML <code> tags for inline code.
  return converted;
}

// Export the convertInlineCode function, making it available for import and use in other JavaScript files.
module.exports = convertInlineCode;
