// Import the convertBold function from its module path. This function is presumably
// responsible for converting markdown bold syntax (text enclosed in ** or __) into
// the corresponding HTML <b> tag.
const convertBold = require("../../src/makeHtml/bold");

// Describe block defines a test suite named "Bold Text Conversion".
// This suite is a collection of test cases related to the conversion of bold text from
// Markdown to HTML format. It's a way to organize tests that apply to a specific
// functionality within the application.
describe("Bold Text Conversion", () => {
  // A single test case is defined within the suite.
  // This test checks if the convertBold function correctly converts markdown syntax for bold text (**) into HTML <b> tags.
  test("converts **bold** text correctly", () => {
    // Define a string variable 'markdown' holding the markdown syntax for bold text to be tested.
    const markdown = "**bold**";

    // Define the expected HTML output that should result from converting the markdown syntax.
    // The expected result is a string with the text wrapped in HTML <b> tags.
    const expectedHtml = "<b>bold</b>";

    // The 'expect' statement invokes the convertBold function with the markdown syntax as its argument,
    // then checks if the returned string contains the expected HTML output using the .toContain matcher.
    // If the function's output includes the expected HTML, the test will pass, indicating the convertBold function
    // works as expected for this case. Otherwise, the test will fail, signaling an issue with the function's conversion logic.
    expect(convertBold(markdown)).toContain(expectedHtml);
  });
});
