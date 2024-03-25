/**
 * This function converts Markdown link syntax to corresponding HTML <a> tags.
 * Markdown link syntax is denoted by [link text](URL). This function processes
 * the markdown text, replacing this syntax with HTML <a> tags, making the links
 * clickable in an HTML document. Additionally, it differentiates between internal
 * (or anchor) links and external links, applying appropriate attributes to the
 * latter to improve security and usability.
 */
function convertLinks(markdown) {
  // Start with the original markdown text as input.
  let converted = markdown;

  /**
   * Convert Markdown links to HTML links using a regex pattern and replacement function.
   * The regex pattern /\[([^\[]+)\]\(([^\)]+)\)/gim captures the link text and the URL/href in two different groups:
   * - \[([^\[]+)\] matches the squared brackets containing the link text.
   *   [^\[]+ captures one or more characters until the next square bracket, representing the link text.
   * - \(([^\)]+)\) matches the parentheses containing the link URL/href.
   *   [^\)]+ captures one or more characters until the next parenthesis, representing the link URL/href.
   * - Flags used in the regex are:
   *    - g (global) to match all instances of the pattern in the input text,
   *    - i (case-insensitive) to ensure the pattern matches regardless of letter case,
   *    - m (multiline) to allow the start (^) and end ($) position matching across multiple lines.
   *
   * The replacement function dynamically generates an HTML <a> tag based on whether the link is internal or external.
   * - If the URL/href (p2) starts with '#', it's considered an internal (anchor) link and is treated differently
   *   from external links to maintain page navigation without opening a new tab/window.
   * - For external links, additional attributes (target="_blank" rel="noopener noreferrer") are added to secure
   *   the link and to ensure it opens in a new tab/window, keeping the original page accessible to the user.
   */
  converted = converted.replace(
    /\[([^\[]+)\]\(([^\)]+)\)/gim,
    (match, p1, p2) => {
      if (p2.startsWith("#")) {
        // For internal links, generate a simple <a> tag with the href attribute pointing to the anchor within the same page.
        return `<a href="${p2}">${p1}</a>`;
      }

      // For external links, generate an <a> tag with attributes to open the link in a new tab securely.
      return `<a href="${p2}" target="_blank" rel="noopener noreferrer">${p1}</a>`;
    },
  );

  // After processing the link syntax, return the converted markdown as HTML with links.
  return converted;
}

// Export the convertLinks function to make it available for use in other JavaScript files.
module.exports = convertLinks;
