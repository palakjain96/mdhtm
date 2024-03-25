// Import the convertHeaders function from its module path. This function is expected
// to handle the conversion of Markdown headers (marked by # symbols) into their
// equivalent HTML header tags (<h1>, <h2>, etc.), possibly including an id attribute.
const convertHeaders = require("../../src/makeHtml/headers");

// The describe block defines a test suite named "Header Conversion".
// Inside this suite, we organize tests related to converting Markdown headers
// into HTML format. This approach helps in grouping relevant tests together,
// improving readability and maintainability of the test code.
describe("Header Conversion", () => {
  // Define a single test case within the suite.
  // This particular test checks if the convertHeaders function properly converts
  // a Markdown header that uses one '#' symbol (indicating an <h1> tag in HTML) into
  // the correct HTML format.
  test("converts # header correctly", () => {
    // The markdown variable holds the Markdown format string to be converted.
    // Here, it simulates a header level 1 in Markdown.
    const markdown = "# Header";

    // The expectedHtml variable defines the correct HTML conversion output
    // for the given Markdown input. The expected output is an <h1> element
    // with an id attribute and the text content "Header".
    // This string specifies the success criteria for the test.
    const expectedHtml = '<h1 id="header">Header</h1>';

    // The expect function tests the output of convertHeaders when it's given the markdown input.
    // .toContain is used here to verify that the conversion result includes the expected HTML string.
    // If convertHeaders successfully returns a string containing the expected HTML, the test passes,
    // indicating the function correctly handles conversion of a level 1 header.
    // If not, the test fails, highlighting a potential issue in the conversion logic or implementation.
    expect(convertHeaders(markdown)).toContain(expectedHtml);
  });
});
