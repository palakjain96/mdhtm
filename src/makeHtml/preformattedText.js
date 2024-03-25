/**
 * The `convertPreformattedText` function is tailored to convert Markdown preformatted text blocks into HTML by wrapping them in <pre> tags.
 * Preformatted text in Markdown is denoted by triple backticks (```) at the beginning and end of the text block. This syntax is used for code blocks,
 * where the text should be displayed in a monospace font, preserving whitespaces and line breaks. The function processes the markdown text to
 * identify these preformatted text blocks and convert them to HTML format, maintaining the text's original formatting in the HTML document.
 */
function convertPreformattedText(markdown) {
  // Begin with the original markdown text, setting it as the starting point for conversion.
  let converted = markdown;

  /**
   * Convert Markdown preformatted text blocks to HTML <pre> tags.
   * The regex pattern /```([\s\S]*?)```/gim is meticulously constructed for this purpose:
   * - The triple backticks ``` are used to mark the beginning and end of a preformatted text block in Markdown.
   * - ([\s\S]*?) is a capturing group that matches any character:
   *    - \s matches any whitespace character (spaces, tabs, line breaks).
   *    - \S matches any non-whitespace character.
   *    - Together, [\s\S] matches any character, including line breaks, which are typically not matched by the dot (.) in regex.
   *    - *? makes the match lazy, ensuring that it captures the shortest block between two sets of triple backticks,
   *      which is necessary to correctly handle multiple preformatted text blocks within the same markdown document.
   * - The flags used in this pattern are:
   *    - g (global) to ensure all preformatted text blocks in the markdown are converted.
   *    - i (case-insensitive), while not necessary for the pattern's functionality, is included by convention.
   *    - m (multiline) to ensure the pattern works across multiple lines, as preformatted text blocks often span several lines.
   *
   * The replacement string '<pre>$1</pre>' uses the captured group ($1) to include the preformatted text within <pre> tags.
   * This operation effectively converts the markdown syntax for preformatted text into its HTML equivalent, preserving
   * the original formatting for display in HTML documents.
   */
  converted = converted.replace(/```([\s\S]*?)```/gim, "<pre>$1</pre>");

  // After processing, return the markdown text with preformatted text blocks converted to HTML <pre> tags.
  return converted;
}

// Export the convertPreformattedText function to make it available for use in other JavaScript files or as part of a larger markdown-to-HTML conversion tool.
module.exports = convertPreformattedText;
