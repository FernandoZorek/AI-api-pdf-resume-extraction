
const ResumeProcessor = require('./resumeProcessor');
const DatabaseManager = require('./bd/mongodb/databaseManager');
const PdfParser = require('./pdfParser'); 
const AiEnhancer = require('./ai/aiEnhancer'); 
const fs = require('fs')
const fsPromises = require('fs/promises')
const chokidar = require('chokidar')


module.exports = (async () => { 

  console.log('Searching for files *.pdf...')
  const PATH_FILES = './files'
  const sendToQueue = async (fileBuffer, filename) => {
    const pdfFilePath = './' + filename;
    console.log('Find file: ', pdfFilePath)
    const pdfParser = new PdfParser();
    const aiEnhancer = new AiEnhancer();
    const resumeProcessor = new ResumeProcessor(pdfParser, aiEnhancer);
    const normalizedData = await resumeProcessor.processResume(pdfFilePath);
    const databaseManager = new DatabaseManager();
    await databaseManager.save(normalizedData);
    const renameFile = fsPromises.rename;
    await renameFile(pdfFilePath, pdfFilePath + '.old');
  }

  const watchedFolderLoteFiles = chokidar.watch(PATH_FILES, {
    ignoreInitial: false,
    ignored: '*.old'
  })

  const filterFileListByExtension = (files, extension) => {
    const { extname, basename } = require('path')
    return files.filter(f => extname(basename(f)) === extension)
  }

  watchedFolderLoteFiles.on('ready', () => console.log(`Waiting for files in volume ${PATH_FILES}`))

  watchedFolderLoteFiles.on('add', (path) => {
    if (filterFileListByExtension([path], '.pdf').length > 0) {
      return sendToQueue(fs.readFileSync(path), path)
    }
  })

  watchedFolderLoteFiles.on('error', (error) => {
    logger.fatal(error)
    process.exit(1)
  })

  console.log('...Finished AI Process!')
  })