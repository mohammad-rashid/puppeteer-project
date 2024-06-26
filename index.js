const puppeteer = require("puppeteer");

(async () => {
  const htmlContent = `
    <html>
      <head>
        <title>Test HTML to PDF</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>This is a sample HTML content to be converted to PDF.</p>
      </body>
    </html>
  `;

  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Read the HTML file and set its content
  await page.setContent(htmlContent, {
    waitUntil: "networkidle0",
    timeout: 300000,
  });

  // Generate a PDF and save it to a file
  await page.pdf({ path: "output.pdf", format: "A4" });

  // Clean up: close the browser and delete the temporary HTML file
  await browser.close();
})();
