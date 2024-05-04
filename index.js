const ResumeProcessor = require('./resumeProcessor');
const DatabaseManager = require('./bd/mongodb/databaseManager');
const PdfParser = require('./pdfParser'); 
const AiEnhancer = require('./ai/aiEnhancer'); 

const pdfFilePath = './files/resume.pdf'; // Replace with actual PDF path

async function main() {
  const pdfParser = new PdfParser();
  const aiEnhancer = new AiEnhancer();
  const resumeProcessor = new ResumeProcessor(pdfParser, aiEnhancer);
  const normalizedData = await resumeProcessor.processResume(pdfFilePath);
  const databaseManager = new DatabaseManager();
  await databaseManager.create();
  await databaseManager.save(normalizedData);
}

main();