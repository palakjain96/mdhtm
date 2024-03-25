# Markdown to HTML Converter

Transform your Markdown files into HTML and automatically display them in your default web browser with ease. This utility provides a simple way to preview Markdown files in HTML format without any manual conversion. Just run the script, and your Markdown content springs to life in your browser.

## Features

- **Simple Integration**: Easily integrates into any Node.js project.
- **Instant Previews**: Converts and displays Markdown files in the default web browser immediately.
- **Error Handling**: Validates file paths and ensures only Markdown (.md) files are processed.

## Getting Started

To get started with this Markdown to HTML converter, ensure you have Node.js and npm (Node Package Manager) installed on your machine. Follow the steps below to set it up in your project.

### Prerequisites

- Node.js (Download and install from [Node.js official website](https://nodejs.org/))
- A text editor or IDE of your choice

### Installation

1. **Add dependency in package.json**

   ```json
   {
     "name": "",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "dependencies": {
       "mdhtm": "1.0.0"
     },
     "author": "",
     "license": "ISC"
   }
   ```

2. **Install Dependencies**

   Navigate to the project's root directory and install the required npm packages:

   ```bash
   cd path/to/root/
   npm install
   ```

3. **Usage**

   To convert a Markdown file to HTML and view it in your browser, simply call the `displayMarkdownInBrowser()` function with the path to your Markdown file as its argument.

   Sample index.js file.

   ```javascript
   const { displayMarkdownInBrowser } = require("mdhtm"); // Use the correct path

   async function displayMark(filePath) {
     try {
       await displayMarkdownInBrowser(filePath);
       console.log("Markdown displayed in browser successfully.");
     } catch (error) {
       console.error("Failed to display markdown in browser:", error.message);
     }
   }

   displayMark("example.md"); // Use a valid file path
   ```

### Error Handling

The script includes basic error handling for file existence and file format verification. If the specified file does not exist or is not a Markdown file, the script will throw an error.
