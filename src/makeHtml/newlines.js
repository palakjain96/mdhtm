/**
 * The `handleNewlines` function is designed to modify markdown text by handling newline characters in paragraphs.
 * In many markdown processors, single newline characters are treated as soft breaks, essentially ignored, or require
 * specific handling since markdown syntax for paragraphs does not include explicit newline characters for line breaks.
 * This function ensures that the markdown text is prepared for subsequent processing or conversion to HTML by removing
 * trailing newline characters that might interfere with the intended formatting or parsing logic.
 */
function handleNewlines(markdown) {
  // Initialize 'converted' with the input markdown string to start the conversion process.
  let converted = markdown;

  /**
   * Remove trailing newline characters from the markdown string.
   * The regex pattern /\n$/gim is explained as follows:
   * - \n matches the newline character, which denotes the end of a line in most text formatting.
   * - $ asserts position at the end of a line, ensuring that only newline characters that are
   *   directly at the end of lines are matched and considered for removal.
   * - Flags used in the regex are:
   *    - g (global) ensures that all instances of the pattern in the string are considered,
   *      not just the first occurrence. This is essential for processing multi-line markdown text.
   *    - i (case-insensitive) is included by convention in regex patterns but doesn't affect the match
   *      in this context since we're matching a special character (newline) rather than letters.
   *    - m (multiline) allows the pattern to match the start (^) and end ($) positions in each line throughout
   *      the text, rather than only at the start or end of the entire string. This is crucial for accurately
   *      identifying and removing newline characters that occur at the end of any line within the markdown text.
   *
   * The replacement is an empty string (''), effectively removing the matched newline characters. This operation
   * cleans up the markdown text, ensuring that unwanted line breaks do not interfere with further processing
   * or conversion to HTML, where precise control over formatting and layout is often necessary.
   */
  converted = converted.replace(/\n$/gim, "");

  // Return the markdown text with trailing newline characters removed, ready for further processing or conversion.
  return converted;
}

// Export the handleNewlines function to make it available for use in other JavaScript files or as part of a larger markdown processing pipeline.
module.exports = handleNewlines;
