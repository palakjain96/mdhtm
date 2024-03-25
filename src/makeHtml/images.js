/**
 * This function converts Markdown image syntax to corresponding HTML <img> tags.
 */
function convertImages(markdown) {
  // Initialize converted with the input markdown string.
  let converted = markdown;

  /*
     Convert Markdown images to HTML <img> tags.
     The regex /\!\[([^\[]+)\]\(([^\)]+)\)/gim matches Markdown image syntax globally (g),
     case-insensitively (i), and across multiple lines (m).

     The pattern breaks down as follows:
     \!\[               - Matches the literal characters "![", indicating the start of an image in Markdown.
        ([^\[]+)        - Matches and captures the alt text of the image, which is any character except "[" one or more times (+).
                    \]      - Matches the closing "]" of the alt text.
                      \(    - Matches the literal "(", the start of the URL/link part.
                       ([^\)]+) - Matches and captures the URL/link of the image, which is any character except ")" one or more times (+).
                             \) - Matches the closing ")" of the URL/link part.

     The replacement string '<img src="$2" alt="$1" />' constructs an HTML <img> tag where
     $2 is the captured group for the image URL/link, and
     $1 is the captured group for the image alt text.
    */
  converted = converted.replace(
    /\!\[([^\[]+)\]\(([^\)]+)\)/gim,
    '<img src="$2" alt="$1" />',
  );

  // Return the converted string with Markdown images replaced by HTML <img> tags.
  return converted;
}

// Export the convertImages function to make it available for use in other files.
module.exports = convertImages;
