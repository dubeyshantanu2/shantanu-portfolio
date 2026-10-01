const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('public/resume.pdf'));
doc.fontSize(16).text('Shantanu Dubey - Resume', { align: 'center' });
doc.fontSize(12).moveDown().text('Bengaluru, Karnataka, India | dubeyshantanu2@gmail.com');
doc.moveDown().text('Please see the full markdown version at /resume.md or upload your original PDF here.');
doc.end();
