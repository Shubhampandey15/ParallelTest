// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import 'cypress-iframe';
import 'cypress-wait-until';

Cypress.Commands.add('waitUntil', conditionFn => {
  return cy.waitUntil(conditionFn, { timeout: 10000, interval: 500 });
});



Cypress.Commands.add('fetchingFutureDate',function(){
    const currentDateTime = new Date();
    const currentDay = currentDateTime.getDate();
    const currentMonth = currentDateTime.getMonth() + 1; // Months are zero-based, so add 1
    const currentYear = currentDateTime.getFullYear();
    const formattedDay = currentDay.toString().padStart(2, '0');
    const formattedMonth = currentMonth.toString().padStart(2, '0');

    // Format the date in the same format as your date picker (e.g., "mm/dd/yy")
    const formattedDate = `${formattedMonth}/${formattedDay}/${currentYear}`;
    cy.log(formattedDate);
    cy.wait(3000)
    cy.get("[class='ui-button-icon-left ui-clickable pi pi-calendar']").eq(0).should('be.visible',{timeout:5000})
    cy.get("[class='ui-button-icon-left ui-clickable pi pi-calendar']").eq(0).click({force:true})
    cy.get('[class*="ui-state-default ng-tns-"]').contains(currentDay).should('be.visible',{timeout:5000})
    cy.get('[class*="ui-state-default ng-tns-"]').contains(currentDay).dblclick()
    cy.wait(3000)
    cy.get("input[placeholder='Date']").eq(0).invoke('val').then((value) => {
        cy.log(value); 
        const date = value.split(' ')[0];
        cy.log(date)
        cy.wait(2000)
      expect(date).to.equal(formattedDate);
    })
    
  })
  Cypress.Commands.add('fetchingFutureDate1',function(){
    const currentDateTime = new Date();
    const currentDay = currentDateTime.getDate();
    const currentMonth = currentDateTime.getMonth() + 1; // Months are zero-based, so add 1
    const currentYear = currentDateTime.getFullYear();
    const formattedDay = currentDay.toString().padStart(2, '0');
    const formattedMonth = currentMonth.toString().padStart(2, '0');

    // Format the date in the same format as your date picker (e.g., "mm/dd/yy")
    const formattedDate1 = `${formattedMonth}/${formattedDay}/${currentYear}`;
    cy.log(formattedDate1)
    cy.wait(3000)
    cy.get("[class='ui-button-icon-left ui-clickable pi pi-calendar']").eq(1).should('be.visible',{timeout:5000})
    cy.get("[class='ui-button-icon-left ui-clickable pi pi-calendar']").eq(1).click({force:true})
    cy.get('[class*="ui-state-default ng-tns-"]').contains(currentDay).should('be.visible',{timeout:5000})
    cy.get('[class*="ui-state-default ng-tns-"]').contains(currentDay).dblclick()
    cy.get("input[placeholder='Date']").eq(1).invoke('val').then((value) => {
        cy.log(value); // Log the text
        const date = value
        cy.log(date)
      expect(date).to.equal(formattedDate1);
    })
    
  })
  const logFileName = 'failedTests.log';
let isInitialMessageWritten = false;

// Custom Cypress Commands
Cypress.Commands.add('deleteFileIfExists', (filePath) => {
  cy.exec(`rm -rf ${filePath}`, { log: false, failOnNonZeroExit: false });
});

Cypress.Commands.add('setupTestRun', () => {
  if (!isInitialMessageWritten) {
    cy.task('clearLogFolder');

    // Get the current date in the Indian time zone
    const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const initialMessage = `Test run started at ${currentDate}\n\n`;
    cy.writeFile(`cypress/logs/${logFileName}`, initialMessage, { flag: 'a+' });

    isInitialMessageWritten = true;
  }
});

Cypress.Commands.add('visitAndSetViewport', () => {
  cy.visit('https://uat.reveleer.com/login');
  cy.viewport(1200, 760);
});

Cypress.Commands.add('logFailedTest', () => {
  if (Cypress.mocha.getRunner().test.parent.tests.some(test => test.state === 'failed')) {
    const currentTest = Cypress.mocha.getRunner().test;
    const testName = currentTest.fullTitle();
    const failureMessage = currentTest.err.message;

    // Get the current date in the Indian time zone
    const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const logMessage = `${testName} failed at ${currentDate} with Error: ${failureMessage}\n`;

    cy.writeFile(`cypress/logs/${logFileName}`, logMessage, { flag: 'a' });
  }
});
Cypress.Commands.add('fileExists', (filePath) => {
  return fs.existsSync(filePath);
});
// Cypress.Commands.add('clickElement', (locator) => {
//   cy.get(locator).should('be.visible',{timeout:150000})
//   cy.get(locator).click({force:true});
// });
Cypress.Commands.add('clickElement', (locator) => {
  // Check if the locator starts with '//' to determine if it's an XPath
  if (locator.startsWith('//')) {
    cy.xpath(locator)
      .should('exist')
      .and('be.visible')
      .click();
  } else {
    // Otherwise, assume it's a CSS selector
    cy.get(locator)
      .should('exist')
      .and('be.visible')
      .click();
  }
});
Cypress.Commands.add('typeInElement', (locator, text) => {
  cy.get(locator).should('be.visible',{timeout:150000})
  cy.get(locator).type(text);
});
Cypress.Commands.add('verifyElementVisible', (locator) => {
  cy.get(locator)
    .should('be.visible'); 
});
Cypress.Commands.add('verifyElementTextIncludes', (locator, expectedText) => {
  cy.get(locator)
    .should('include', expectedText); 
});


