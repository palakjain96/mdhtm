/**
 * The `createParagraphs` function is designed to wrap standalone lines in HTML <p> tags to create paragraphs.
 * In converting markdown to HTML, it's essential to identify text that doesn't belong to any specific markdown
 * structure (like headers, lists, code blocks, etc.) and wrap that text in paragraph tags for proper formatting
 * in HTML. This function processes the markdown text, encapsulating standalone lines into <p> tags, unless the
 * line corresponds to specific elements that should not be wrapped in <p> tags.
 */
function createParagraphs(markdown) {
  // Start with the original markdown text as the input for conversion.
  let converted = markdown;

  /**
   * Wrap standalone lines in <p> tags, avoiding lines that are part of HTML elements that should not be wrapped.
   * The regex pattern /^\s*(\n)?(.+)/gim is used to identify standalone lines for wrapping:
   * - ^ asserts position at the start of a line.
   * - \s* matches zero or more whitespace characters at the beginning of the line, allowing for lines that may start with spaces.
   * - (\n)? optionally matches a newline character, accounting for lines that might be separated by empty lines.
   * - (.+) captures one or more characters until the end of the line, representing the standalone line's content.
   * - The flags used in the pattern are:
   *    - g (global): Ensures all matches across the string are found.
   *    - i (case-insensitive): Included by convention, though case does not matter in this pattern.
   *    - m (multiline): Crucial for applying the pattern to the start (^) and end ($) of each line across the input string.
   *
   * A replacement function is used to decide whether a line should be wrapped in <p> tags based on a conditional test:
   * - The /<(\/)?(h\d|pre|code|ul|ol|li|blockquote|img|a)>/.test(m) tests if the matched line 'm'
   *   contains HTML tags that should not be wrapped in paragraphs (e.g., headers, lists, images).
   * - If the condition is true (the line contains such an HTML element), the line 'm' is returned as is.
   * - If the condition is false (the line is a standalone text line), it is wrapped in <p> tags.
   */
  converted = converted.replace(/^\s*(\n)?(.+)/gim, function (m) {
    return /<(\/)?(h\d|pre|code|ul|ol|li|blockquote|img|a)>/.test(m)
      ? m
      : "<p>" + m + "</p>";
  });

  // After processing, return the markdown text with standalone lines wrapped in <p> tags, ready for HTML presentation.
  return converted;
}

// Export the createParagraphs function to make it available for use in other JavaScript files or as part of a larger markdown-to-HTML conversion tool.
module.exports = createParagraphs;
