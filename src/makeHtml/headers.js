/* Import the slugify function from a local module. This function likely converts strings
 * to URL-friendly slugs, which can be used for creating easily navigable and clean URLs. */
const slugify = require("./slugify");

/**
 * This function converts Markdown headers (h1, h2, h3) to corresponding HTML header tags
 * and assigns unique IDs, leveraging slugified titles for potential anchor links or easy referencing.
 */
function convertHeaders(markdown) {
  // Initialize 'converted' with the original markdown string to perform transformations.
  let converted = markdown;

  /*
   * Convert Markdown h3 headers to HTML <h3> elements, with IDs.
   * The regex /^### (.*$)/gim is used to match h3 markdown headers. It looks for lines starting
   * with '### ', capturing the header text that follows for use in replacement.
   * - '^' asserts position at start of a line.
   * - '### ' matches the markdown syntax for h3 headers.
   * - '(.*)' captures any character (except line break) 0 or more times, representing the header text.
   * - '$' asserts position at the end of a line.
   * - The 'gim' flags ensure the expression is applied globally, case-insensitively, and multi-line.
   *
   * The captured header text ('p1') is used to create a corresponding HTML <h3> tag with
   * an ID attribute. This ID is generated by slugifying the header text, making it web-friendly.
   */
  converted = converted.replace(
    /^### (.*$)/gim,
    (match, p1) => `<h3 id="${slugify(p1)}">${p1}</h3>`,
  );

  // Similarly, convert Markdown h2 headers to HTML <h2> elements, with slugified IDs.
  converted = converted.replace(
    /^## (.*$)/gim,
    (match, p1) => `<h2 id="${slugify(p1)}">${p1}</h2>`,
  );

  // Finally, convert Markdown h1 headers to HTML <h1> elements, with slugified IDs.
  converted = converted.replace(
    /^# (.*$)/gim,
    (match, p1) => `<h1 id="${slugify(p1)}">${p1}</h1>`,
  );

  // Return the converted string, with markdown headers now replaced by corresponding HTML elements with IDs.
  return converted;
}

// Export the convertHeaders function to make it available for use in other files.
module.exports = convertHeaders;
