const fs = require('fs');
const pdfParse = require('pdf-parse');

class PdfParser {    
    async parsePdf(filePath) {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      return pdfData.text;
    }

}

module.exports = PdfParser;