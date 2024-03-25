// Converter.js
const convertHeaders = require("./makeHtml/headers");
const convertBold = require("./makeHtml/bold");
const convertItalic = require("./makeHtml/italic");
const convertStrikethrough = require("./makeHtml/strikethrough");
const convertLinks = require("./makeHtml/links");
const convertImages = require("./makeHtml/images");
const convertPreformattedText = require("./makeHtml/preformattedText");
const convertInlineCode = require("./makeHtml/inlineCode");
const createParagraphs = require("./makeHtml/paragraphs");
const handleNewlines = require("./makeHtml//newlines");

function markdownToHtml(markdown) {
  let html = markdown;
  html = convertHeaders(html);
  html = convertBold(html);
  html = convertItalic(html);
  html = convertStrikethrough(html);
  html = convertLinks(html);
  html = convertImages(html);
  html = convertPreformattedText(html);
  html = convertInlineCode(html);
  html = createParagraphs(html);
  html = handleNewlines(html);
  return html;
}

module.exports = markdownToHtml;
