// Include the convertStrikethrough function from its location within the project.
// This function is specifically tasked with converting Markdown syntax for strikethrough text
// (text enclosed in double tildes) into the corresponding HTML, which uses the <s> tag.
const convertStrikethrough = require("../../src/makeHtml/strikethrough");

// Start a test suite named 'Strikethrough Conversion' with the describe function.
// This suite is dedicated to grouping tests that examine the conversion of Markdown
// strikethrough syntax into HTML, ensuring that this formatting feature is handled correctly.
// Organizing tests into named suites helps maintain structured and readable code, especially
// as more tests are added or modified.
describe("Strikethrough Conversion", () => {
  // Within this suite, a single test is defined to assess if the conversion function
  // correctly transforms Markdown strikethrough syntax to HTML.
  // This test focuses on verifying the functionality of converting the specific markup
  // for strikethrough text.
  test("converts ~~strikethrough~~ text correctly", () => {
    // The markdown variable holds a string that is a minimal example of Markdown
    // formatted as strikethrough text, serving as the input for the test.
    const markdown = "~~strikethrough~~";

    // Define the expected HTML output that should result from converting
    // the Markdown input, which is the strikethrough text wrapped in <s> tags.
    // This establishes the benchmark for correct conversion by the function.
    const expectedHtml = "<s>strikethrough</s>";

    // The expect function, used here with toContain, asserts that the function's output
    // when processing the given markdown includes the expected HTML string.
    // Successfully including the expected output indicates that the function accurately
    // handles the transformation of Markdown strikethrough syntax. If the output matches,
    // the test is passed; otherwise, it fails, signaling an issue in the conversion process
    // that might require debugging or adjustment to the function's logic or implementation.
    expect(convertStrikethrough(markdown)).toContain(expectedHtml);
  });
});
