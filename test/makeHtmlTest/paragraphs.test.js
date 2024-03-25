// Import the createParagraphs function from its specified location within the project.
// This function is expected to process strings of text and convert them into HTML paragraphs.
// The primary task would typically involve wrapping text that's recognized as a paragraph in Markdown
// with <p> tags in HTML, signifying the start and end of a paragraph block.
const createParagraphs = require("../../src/makeHtml/paragraphs");

// Initiate a test suite named 'Paragraph Conversion'.
// The suite is created using describe, grouping together tests that specifically address
// the conversion of text segments into paragraphs in the context of Markdown to HTML rendering.
// This makes it easier to locate and manage tests related to paragraph processing.
describe("Paragraph Conversion", () => {
  // Within this suite, define a test case aiming to verify the function's ability
  // to correctly wrap single lines of text within <p> (paragraph) HTML tags.
  test("wraps lines correctly inside <p> tags", () => {
    // Here, a variable named markdown is used to store a simple string
    // representing a single line of text. This simulates a basic case of paragraph
    // content that would need to be wrapped in <p> tags upon conversion to HTML.
    const markdown = "A single line of text";

    // The expectedHtml variable defines what the correct HTML output should look like
    // for the given Markdown input—specifically, the text wrapped in opening and closing <p> tags.
    // This output will be used to determine if the createParagraphs function performs as intended.
    const expectedHtml = "<p>A single line of text</p>";

    // The expect function, along with the toContain matcher, assesses whether the output
    // from createParagraphs includes the expected HTML string when the markdown input is provided.
    // A pass here means the function successfully wraps the text in paragraph tags,
    // indicating correct processing for this scenario. Failure would suggest an issue
    // with how the function wraps text in <p> tags, necessitating further investigation and potentially
    // adjustments to the function's logic or implementation.
    expect(createParagraphs(markdown)).toContain(expectedHtml);
  });
});
