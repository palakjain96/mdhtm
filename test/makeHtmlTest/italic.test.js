// Import the convertItalic function from its file path within the project.
// This function aims to convert Markdown syntax for italic text (enclosed in single asterisks or underscores)
// into the corresponding HTML representation, typically using <i> or <em> tags.
const convertItalic = require("../../src/makeHtml/italic");

// Start a test suite named 'Italic Text Conversion' using the describe function.
// This suite is dedicated to tests that verify the conversion of italic text from Markdown to HTML.
// Grouping tests into suites helps organize them by functionality or feature, making the test code easier to manage.
describe("Italic Text Conversion", () => {
  // Define a single test case with a descriptive name indicating its purpose.
  // This test checks if the convertItalic function can accurately transform Markdown italic syntax into HTML.
  test("converts *italic* text correctly", () => {
    // In the markdown variable, store a sample string formatted with Markdown syntax for italic text.
    // This represents the input data for the conversion function.
    const markdown = "*italic*";

    // Define the expectedHtml variable to hold the string that is the expected output
    // of the conversion process for the provided Markdown input.
    // Here, the expectation is an HTML <i> tag enclosing the italicized text.
    const expectedHtml = "<i>italic</i>";

    // Use the expect function to assert that the convertItalic function's output
    // includes the expected HTML string when given the markdown input.
    // The .toContain matcher checks if the converted HTML contains the specified expected HTML.
    // If the function works as intended and produces the correct HTML for italic text,
    // the assertion passes, and the test is marked successful. If not, the test fails,
    // indicating an issue in the conversion logic or implementation within convertItalic.
    expect(convertItalic(markdown)).toContain(expectedHtml);
  });
});
