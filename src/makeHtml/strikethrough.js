/**
 * The `convertStrikethrough` function is designed to convert Markdown strikethrough syntax into corresponding HTML <s> tags.
 * Markdown syntax for strikethrough text involves enclosing the text within double tildes (~~). This function scans the markdown
 * text for such patterns and replaces them with HTML <s> tags, thereby formatting the text with a strikethrough effect in the HTML output.
 */
function convertStrikethrough(markdown) {
  // Start with the original markdown text as input for conversion.
  let converted = markdown;

  /**
   * Perform the replacement of Markdown strikethrough syntax with HTML <s> tags.
   * The regex pattern /~~(.*)~~/gim is used for this purpose and is broken down as follows:
   * - The double tildes ~~ mark the beginning and end of the strikethrough text in Markdown.
   * - (.*) is a capturing group that matches any character (.), zero or more times (*), capturing the text to be struck through.
   *   This pattern is greedy, meaning it will match as much text as possible, which includes text across multiple tildes
   *   until it reaches the last pair of ~~ in the string. Although this works well for single instances, it may lead to
   *   unintended results when multiple strikethrough sections are present. An improvement might be using a non-greedy match (.*?),
   *   however, for simplicity and based on the usage context, it remains as is.
   * - The flags used in the regex are:
   *    - g (global): Ensures that all occurrences of the pattern in the string are replaced, not just the first.
   *    - i (case-insensitive): This flag is included by convention, though it is not necessary in this context as the pattern
   *      does not involve letter cases.
   *    - m (multiline): This flag allows the pattern to match the start (^) and end ($) of each line within the text, but
   *      given the nature of this specific regex, its impact is minimal here. It is more about consistency in the usage of flags.
   *
   * The replacement string '<s>$1</s>' wraps the captured text (represented by $1) in HTML <s> tags. This HTML tag is used
   * to apply the strikethrough styling, visually indicating that the text is considered deleted or irrelevant.
   */
  converted = converted.replace(/~~(.*)~~/gim, "<s>$1</s>");

  // After processing the markdown to detect and convert strikethrough syntax, return the converted text with HTML formatting.
  return converted;
}

// Export the convertStrikethrough function to make it available for use in other JavaScript files or as part of a larger markdown-to-HTML conversion tool.
module.exports = convertStrikethrough;
