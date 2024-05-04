# Node.js Application for PDF-based Resume Data Extraction with AI Integration
## _AI-api-pdf-resume-extraction_

> This project provides a Node.js application
> that utilizes PDF parsing and AI integration
> to extract and normalize resume data from PDF files.
> It leverages the pdf.js library for PDF processing,
> an AI API (e.g., ChatGPT or Gemini) for data enhancement,
> and a database (e.g., MongoDB) for data storage.

## Features

- Extracts resume data from PDF files
- Enhances extracted data using AI APIs
- Normalizes and structures resume data
- Saves normalized data to a database

## Tech

This project uses several open source projects to function correctly::

- [Docker] - Platform for developing, shipping, and running applications using containerization;
- [Node.js] - JavaScript runtime built on Chrome’s V8 JavaScript engine;
- [Openai] - The fastest and most powerful platform for building AI products. Build transformative AI experiences powered by industry-leading models and tools;
- [fs-js] - A native module for effectively working with files built on top of Node's famous fs module;
- [pdf-parse] - Pure javascript cross-platform module to extract texts from PDFs;
- [MongoDB] - MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.;

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v20+ to run.

Install the dependencies and devDependencies and start the server.

```bash
yarn
```
### Configure environment variables:

```sh
Replace YOUR_CHATGPT_API_KEY with your actual ChatGPT API key in docker-compose file.
Replace DB_URL, DB_NAME, DB_COLLECTION, DB_ROOT_USERNAME and DB_ROOT_PASSWORD with your database connection details in docker-compose file.
```

### Provide the PDF file path:

```sh
Replace resume.pdf with the actual PDF file path in index.js.
```

### Start the app

```bash
docker-compose up
```

### Usage
##### Data Normalization:

The extracted and enhanced resume data is normalized and structured into a consistent format before being saved to the database. The specific data structure can be customized based on your requirements.

##### Database Integration:

The normalized resume data is saved to a database (e.g., MongoDB) for persistence and further analysis. You can modify the database connection details and data storage logic according to your chosen database.

##### AI Integration:

The application integrates with an AI API (e.g., ChatGPT or Gemini) to enhance the extracted resume data. The AI API can provide additional insights, summarizations, or structured data from the resume.

##### Dockerization:

For a more streamlined deployment, you can use the provided docker-compose.yml file to build and run the application in a Docker container.

##### Customization:

This project serves as a foundation for building your own resume data extraction and management system. You can further customize it by:

- Integrating with different AI APIs
- Implementing additional data extraction and enrichment techniques
- Using a different database or data storage mechanism
- Developing a user interface for interacting with the application


## License

MIT
**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
[Docker]: <https://docs.docker.com/>
[Openai]: <https://openai.com/api>
[Node.js]: <https://nodejs.org/docs/latest/api/>
[fs-js]: <https://www.npmjs.com/package/fs-js>
[pdf-parse]: <https://www.npmjs.com/package/pdf-parse>
[MongoDB]: <https://www.mongodb.com/>

