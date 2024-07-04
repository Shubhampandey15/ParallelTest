const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');
const { isFileExist } = require('cy-verify-downloads');
const { verifyDownloadTasks } = require('cy-verify-downloads');

const fs = require('fs');

// Initialize the flag to indicate whether the log folder has been cleared
let isLogFolderCleared = false;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        clearLogFolder() {
          // Implementation to clear the log folder
          const logFolderPath = 'cypress/logs';
          if (!isLogFolderCleared) {
            try {
              fs.rmdirSync(logFolderPath, { recursive: true });
            } catch (error) {
              console.error('Error clearing log folder:', error);
            }
            // Update the flag to indicate that the log folder has been cleared
            isLogFolderCleared = true;
          }
          // Return null to indicate that the task was handled
          return null;
        },
        fileExists(filePath) {
          // Implementation to check if a file exists
          return fs.existsSync(filePath);
        },
        readFile(filePath) {
          // Implementation to read the content of a file
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        },
      });

      on('file:preprocessor', cucumber());

      on('task', { isFileExist });
      on('task', verifyDownloadTasks);

      // Other configurations...

      // Return config at the end of the setup
      return config;
    },
    specPattern: 'cypress/e2e/*.feature',
    defaultCommandTimeout: 30000,
    experimentalStudio: true,
    numTestsKeptInMemory: 50,
    videoCompression: false,
    execTimeout: 120000,
    taskTimeout: 120000,
    retries: { runMode: 0, openMode: 0 },
   // chromeWebSecurity: false
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    outputs: true,
    testCaseSwitchClassnameAndName: true,
  },
  projectId: "dntsjv"
  
});





