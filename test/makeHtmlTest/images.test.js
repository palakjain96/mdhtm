// Import the convertImages function from its module path located in the project structure.
// This function is designed to convert Markdown image syntax into the corresponding HTML <img> tag.
// The Markdown syntax for images is ![Alt text](image URL/path).
const convertImages = require("../../src/makeHtml/images");

// Define a test suite named 'Image Conversion' using the describe function.
// A test suite groups together related test cases; in this suite, the focus is on
// ensuring that the conversion of image syntax from Markdown to HTML is correct.
describe("Image Conversion", () => {
  // Within the suite, define a single test case focused on the conversion of images.
  // This test verifies the function's ability to convert the Markdown syntax for images
  // to the appropriate HTML syntax.
  test("converts ![Alt text](image.jpg) images correctly", () => {
    // Define a variable 'markdown' containing a sample Markdown string that includes
    // an image with alt text "Alt text" and a source URL of "image.jpg".
    // This sample serves as the input for the conversion function.
    const markdown = "![Alt text](image.jpg)";

    // Define the expected HTML output for the given Markdown input.
    // For the sample Markdown image, the expected output is an HTML <img> tag
    // with the source URL set to "image.jpg" and the alt attribute set to "Alt text".
    const expectedHtml = '<img src="image.jpg" alt="Alt text" />';

    // Assert that the output from the convertImages function, when passed the sample Markdown,
    // includes the expected HTML string. This is done using the toContain method of the expect function
    // to check that the function's output correctly mirrors the HTML conversion for the given image syntax.
    // If the assertion passes, it means the convertImages function correctly handles the
    // Markdown to HTML conversion for images. If it fails, there might be a flaw in the function's logic
    // or implementation regarding image conversion.
    expect(convertImages(markdown)).toContain(expectedHtml);
  });
});
