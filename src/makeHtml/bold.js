// This function converts markdown bold syntax to HTML <b> tags.
function convertBold(markdown) {
  // Initialize converted with the input markdown string.
  let converted = markdown;

  /** Convert markdown bold syntax using asterisks to HTML <b> tags. */
  // The regex /\*\*(.*)\*\*/gim matches the pattern **text** globally (g), case-insensitively (i), and across multiple lines (m).
  // The replacement string '<b>$1</b>' replaces the matched pattern with <b> tags where $1 is the captured group (.*) which represents the bold text.
  converted = converted.replace(/\*\*(.*)\*\*/gim, "<b>$1</b>");

  // Convert markdown bold syntax using underscores to HTML <b> tags.
  // This does the same as the above but for the __text__ pattern.
  converted = converted.replace(/__(.*)__/gim, "<b>$1</b>"); // Alternative syntax

  // Return the converted string with markdown bold syntax replaced by HTML <b> tags.
  return converted;
}

// Export the convertBold function to make it available for use in other files.
module.exports = convertBold;
