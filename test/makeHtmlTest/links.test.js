// Import the convertLinks function from its location within the project.
// This function is responsible for converting Markdown link syntax into HTML <a> tags.
// Markdown link syntax typically looks like "[link text](URL)".
const convertLinks = require("../../src/makeHtml/links");

// Begin a test suite named 'Link Conversion' using describe.
// This suite is intended to group together tests that verify the accurate conversion
// of Markdown links into HTML links, ensuring that different types of link usages
// in Markdown are appropriately handled.
describe("Link Conversion", () => {
  // Define the first test case within the suite.
  // This test checks the function's ability to convert external links —
  // ones that lead to other websites — from Markdown to HTML format.
  test("converts [anchor](http://example.com) links correctly", () => {
    // The markdown variable holds a string formatted in Markdown syntax,
    // representing an external link. This serves as our test input.
    const markdown = "[anchor](http://example.com)";

    // Define the expected HTML conversion for the given input.
    // The expected output includes not just the conversion to an <a> tag
    // but also specifies attributes like 'target' and 'rel' to ensure
    // the link opens in a new tab securely.
    const expectedHtml =
      '<a href="http://example.com" target="_blank" rel="noopener noreferrer">anchor</a>';

    // Assert that when the convertLinks function processes the markdown input,
    // its output includes the expected HTML string. This helps verify that
    // the function correctly handles conversion of external Markdown links.
    // If the result contains the expected HTML, the test passes.
    expect(convertLinks(markdown)).toContain(expectedHtml);
  });

  // Define a second test case focused on internal links conversion.
  // Internal links usually point to other sections within the same document.
  test("converts internal links correctly", () => {
    // Here, the markdown input simulates an internal link in Markdown syntax,
    // pointing to a document section labeled 'heading'.
    const markdown = "[Heading](#heading)";

    // The expected HTML representation for internal links. Unlike external links,
    // these do not open in a new tab, so 'target' and 'rel' attributes are absent.
    const expectedHtml = '<a href="#heading">Heading</a>';

    // Test if the convertLinks function's output for the given markdown input
    // correctly matches the expected HTML for internal links.
    // The inclusion of the expected HTML in the function's output signals
    // correct processing and conversion of internal Markdown links.
    expect(convertLinks(markdown)).toContain(expectedHtml);
  });
});
