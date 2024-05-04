class ResumeProcessor {
  constructor(pdfParser, aiEnhancer) {
    this.pdfParser = pdfParser;
    this.aiEnhancer = aiEnhancer;
  }

  async processResume(filePath) {
    const resumeText = await this.pdfParser.parsePdf(filePath);
    const enhancedData = await this.aiEnhancer.enhanceResumeData(resumeText);
    return enhancedData;
  }
}

module.exports = ResumeProcessor;