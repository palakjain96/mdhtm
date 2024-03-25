/**
 * This function is designed to convert Markdown italic syntax to corresponding HTML <i> tags.
 * Markdown offers two syntaxes to denote italic text: either using underscores (_) or asterisks (*).
 * This function processes the markdown text to replace both syntactical forms with HTML <i> tags,
 * thus formatting the text as italic in the HTML output.
 */
function convertItalic(markdown) {
  // Begin with the original markdown text as the input to start the conversion.
  let converted = markdown; // gim is explained as follows:

  /**
   * Convert asterisk-based Markdown italic syntax to HTML <i> tags.
   * The regex pattern /\*(.*)\*/ /**  - \* matches the literal '*' character, which is one way to denote italics in Markdown.
   * - (.*) is a capturing group that matches any character (.), zero or more times (*), in a greedy manner,
   *   capturing all characters until the next '*' character. This group represents the text that should be italicized.
   * - \* matches the second literal '*' character, marking the end of the italic text segment in Markdown.
   * - Flags used in the pattern are:
   *    - g (global): Ensures all matches in the string are converted, not just the first one.
   *    - i (case-insensitive): Included by convention, though it has no effect in this specific pattern.
   *    - m (multiline): Allows the pattern to match start (^) and end ($) positions in each line,
   *      enabling the pattern to work across multiple lines.
   * - The replacement string '<i>$1</i>' utilizes the captured text ($1) and surrounds it with HTML <i> tags,
   *   converting the Markdown italic syntax into an HTML format suitable for displaying italic text.
   */
  converted = converted.replace(/\*(.*)\*/gim, "<i>$1</i>"); // Process asterisk-based italic syntax

  /**
   * Convert underscore-based Markdown italic syntax to HTML <i> tags, following the same logic as for asterisks.
   * The pattern /_(.*)_/gim matches text enclosed in underscores (_), which is another Markdown syntax for italics.
   * Using the same replacement function, it wraps the captured text in HTML <i> tags, ensuring both Markdown
   * syntaxes for italic text are uniformly converted to HTML.
   */
  converted = converted.replace(/_(.*)_/gim, "<i>$1</i>"); // Process alternative markdown italic syntax using underscores

  // After processing both patterns, return the markdown text converted to include HTML <i> tags for italic text.
  return converted;
}

// Export the convertItalic function, allowing it to be imported and used in other JavaScript files.
module.exports = convertItalic;
