// Import the convertInlineCode function from its location within the project.
// This function is specifically designed to handle the conversion of inline code
// from Markdown syntax (text enclosed in backticks) to HTML, wrapping the text in <code> tags.
const convertInlineCode = require("../../src/makeHtml/inlineCode");

// Describe block begins the definition of a test suite named "Inline Code Conversion".
// This suite groups together tests related to the conversion of Markdown inline code to HTML.
// Organizing tests into suites like this helps maintain clarity and manageability of the test code,
// especially as more related tests are added.
describe("Inline Code Conversion", () => {
  // A single test case is defined using the test function.
  // This test aims to verify that the convertInlineCode function accurately
  // converts Markdown inline code syntax (`inline code`) into the appropriate HTML format.
  test("converts `inline code` correctly", () => {
    // The markdown variable is assigned a string that represents a typical use
    // of Markdown inline code syntax, which is used to highlight code snippets within text.
    const markdown = "`inline code`";

    // The expectedHtml variable defines the correct outcome of the conversion process
    // for the provided Markdown input, which in this case, is the Markdown inline code
    // wrapped within HTML <code> tags.
    const expectedHtml = "<code>inline code</code>";

    // The expect function, together with the toContain matcher, verifies that
    // the output of the convertInlineCode function, when given the markdown input,
    // includes the expected HTML string. If the assertion holds true, the test passes, indicating
    // that the conversion function performed as expected for this input. If the assertion does not hold,
    // the test fails, signaling a potential issue in how the function processes inline code conversion.
    expect(convertInlineCode(markdown)).toContain(expectedHtml);
  });
});
