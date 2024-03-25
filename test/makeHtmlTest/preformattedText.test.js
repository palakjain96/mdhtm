// Import the convertPreformattedText function from its file path within the project.
// This function aims to handle the conversion of Markdown syntax for preformatted text blocks
// (typically enclosed in triple backticks) into corresponding HTML. The HTML representation
// usually involves wrapping the text with <pre> tags to preserve both the text formatting and spacing.
const convertPreformattedText = require("../../src/makeHtml/preformattedText");

// Start defining a test suite called 'Preformatted Text Block Conversion' using describe.
// This suite groups together tests that check the correctness of converting Markdown
// preformatted text blocks into their HTML equivalents. Grouping related tests helps with
// organization and clarity, especially for readers or other developers looking to understand
// or modify the testing suite in the future.
describe("Preformatted Text Block Conversion", () => {
  // Define a single test within the suite to assess the function's ability to
  // accurately convert preformatted text blocks from Markdown to HTML.
  test("converts ```preformatted text blocks``` correctly", () => {
    // The markdown variable is initialized with a string that represents a simplified
    // Markdown preformatted text block, enclosed in triple backticks. This serves
    // as a basic example of input that the function should be able to process.
    const markdown = "```code```";

    // Define what the correct HTML output should look like for the given Markdown input.
    // In this case, the expected output is the text "code" wrapped within <pre> tags,
    // which is the standard way to represent preformatted text in HTML, ensuring that
    // whitespace and formatting within the content are preserved.
    const expectedHtml = "<pre>code</pre>";

    // Use the expect function along with the toContain matcher to verify that the
    // output from convertPreformattedText correctly contains the expected HTML string
    // when the function is given the markdown input string. If the function's output
    // includes the expected HTML representation of a preformatted text block, the test passes,
    // indicating that the conversion process works as intended for this type of Markdown syntax.
    // A failure here would indicate a potential issue with the function's handling of
    // Markdown preformatted text blocks, necessitating further examination and possibly a fix.
    expect(convertPreformattedText(markdown)).toContain(expectedHtml);
  });
});
