const fs = require("fs");
const path = require("path");
const os = require("os");
const open = require("open");
const markdownToHtml = require("./src/converter");

// Validate the input file path
function validateFilePath(filePath) {
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist.");
  }

  // Check if the file extension is .md
  if (path.extname(filePath).toLowerCase() !== ".md") {
    throw new Error("File is not a Markdown file (.md).");
  }
}

// Function to convert markdown file to HTML and display in default browser
async function displayMarkdownInBrowser(filePath) {
  validateFilePath(filePath); // Validate file path without try-catch block

  // Read the Markdown content
  const markdown = fs.readFileSync(filePath, "utf8");

  // Convert to HTML
  const html = markdownToHtml(markdown);

  // Create a unique temporary HTML file path
  const tempHtmlPath = path.join(os.tmpdir(), `tempOutput-${Date.now()}.html`);
  fs.writeFileSync(tempHtmlPath, html);

  // Open the HTML file in the default browser
  await open(tempHtmlPath);
}

module.exports = { displayMarkdownInBrowser };
