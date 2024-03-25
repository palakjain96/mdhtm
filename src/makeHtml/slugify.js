/**
 * The `slugify` function transforms a given piece of text into a "slug," which is a more URL-friendly string.
 * Slugs are typically used in URLs to represent the title or name of an article, page, or post in a readable,
 * SEO-friendly manner. This function processes the input text by making it lowercase, replacing spaces with hyphens,
 * removing non-word characters, and ensuring that hyphens are used consistently without duplication or leading/trailing positions.
 */
function slugify(text) {
  return (
    text
      // Convert the input text to a string to ensure methods applicable to strings can be used.
      .toString()
      // Convert all characters in the text to lowercase to maintain URL case consistency.
      .toLowerCase()
      // Replace spaces (one or more) with a single dash (-).
      // This step makes the text more URL-readable by using dashes as word separators.
      .replace(/\s+/g, "-")
      // Remove all characters that are not alphanumeric or dashes.
      // This includes special characters and punctuations which are not typically used in URLs.
      .replace(/[^\w\-]+/g, "")
      // Replace multiple consecutive dashes with a single dash.
      // This avoids the appearance of long, unwieldy dashes in the slug.
      .replace(/\-\-+/g, "-")
      // Trim dashes from the start of the text.
      // Leading dashes can result from the previous replacement steps and are not desirable in URLs.
      .replace(/^-+/, "")
      // Trim dashes from the end of the text.
      // Like leading dashes, trailing dashes are also trimmed for cleaner, more readable URLs.
      .replace(/-+$/, "")
  );
}

// Export the slugify function to make it available for use in other JavaScript files.
// This allows it to be easily imported and utilized wherever URL slugs are needed.
module.exports = slugify;
