#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const pdfPath = process.argv[2];
const url = process.argv[3];
const x = parseFloat(process.argv[4]) || 20;  // x position (left)
const y = parseFloat(process.argv[5]) || 20;  // y position (bottom)
const width = parseFloat(process.argv[6]) || 80;  // width
const height = parseFloat(process.argv[7]) || 80; // height

if (!pdfPath || !url) {
  console.error('❌ Usage: node add-pdf-link.js <pdf-file> <url> [x] [y] [width] [height]');
  console.error('Example: node add-pdf-link.js ./flyer.pdf "https://cnsdojo.com/schooled" 20 20 80 80');
  process.exit(1);
}

if (!fs.existsSync(pdfPath)) {
  console.error(`❌ File not found: ${pdfPath}`);
  process.exit(1);
}

(async () => {
  try {
    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    const pages = pdfDoc.getPages();
    const lastPage = pages[pages.length - 1];
    const { height: pageHeight } = lastPage.getSize();

    // Add link annotation to the last page (bottom left is typical for QR codes)
    // pdf-lib uses bottom-left origin, so y coordinate is from bottom
    lastPage.node.addAnnot(
      pdfDoc.context.register(
        pdfDoc.context.obj({
          Type: 'Annot',
          Subtype: 'Link',
          Rect: [x, pageHeight - y - height, x + width, pageHeight - y],
          Border: [0, 0, 0],
          A: {
            S: 'URI',
            URI: `(${url})`,
          },
        })
      )
    );

    const outputPath = pdfPath.replace('.pdf', '_linked.pdf');
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);

    console.log('✅ Link added successfully!');
    console.log(`📄 Output: ${outputPath}`);
    console.log(`🔗 URL: ${url}`);
    console.log(`📍 Position: x=${x}, y=${y}, width=${width}, height=${height}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();
