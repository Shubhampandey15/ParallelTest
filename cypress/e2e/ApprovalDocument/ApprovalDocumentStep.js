import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import newPageAttach from "../../pages/NewPageAttach/newPageAttach.js";
import pursuitApproval from "../../pages/ApprovalDocument/approvalDocument.js";
import approvalDocument from "../../pages/ApprovalDocument/approvalDocument.js";
import chaseQuery from "../../pages/ChaseQuery/chaseQuery";
import DocQaGridPage from "../../pages/Retrieval/DocumentQA/documentQAGridPage";





const emrRepPage = require('../../pages/Retrieval/EMR/EMRGridPage.js')
const reveleerHomePage = require('../../pages/reveleerHomePage.js')
const reveleerLoginPage = require('../../pages/reveleerLoginPage.js')
const newPageAttachPage=new newPageAttach()
const approvalDocumentPage= new approvalDocument()
const chaseQuery1=new chaseQuery()
const docqagridpage = new DocQaGridPage()



Before(() => {
    cy.fixture('credentials').then((testdata) => {
        globalThis.testdata = testdata;
        cy.viewport(1280, 720)
        cy.visit('https://uat.reveleer.com/login')
            cy.title().should('eq', testdata.user9.loginPageTitle)
            reveleerLoginPage.fillUsername(testdata.user9.username)
            reveleerLoginPage.fillPassword(testdata.user9.password)
            reveleerLoginPage.clickOnLoginButton()
            reveleerHomePage.elements.loginUserName().should('be.visible')
    })
})
Given("user will go to approval", () => {
    newPageAttachPage.clickOnApprovalMenuButton()
})
When("user will go to document", () => {
    newPageAttachPage.clickOnDocumentSubMenuButton()
})
Then("user will filter by project", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.wait(2000)
        newPageAttachPage.clickOnHedisProject(element.ProjectName)
        newPageAttachPage.clickOnRunQuerryButton()
    })
})
Then("user will log chase id and will click on chase id", () => {
    newPageAttachPage.logFirstChaseId()
    newPageAttachPage.clickOnFirstChaseId()
    cy.wait(3000)
})
When("user will verify the document status", () => {
    approvalDocumentPage.verifyDocumentStat()
})
Then("user will verify Grid data", () => {
    approvalDocumentPage.verifyGridData()
})
Then("user will Verify Grid filters are working fine with valid data", () => {
    approvalDocumentPage.logDocumentId()
    approvalDocumentPage.clickOnFilterIcon()
    approvalDocumentPage.typeInDocumentIdField()
    approvalDocumentPage.clickOnRunQuerryButton()
    approvalDocumentPage.verifyFilterResutWithValidData()
})
Then("user will Verify Grid filters are working fine with invalid data", () => {
    approvalDocumentPage.clickOnFilterIcon()
    approvalDocumentPage.typeInDocumentIdField1()
    approvalDocumentPage.clickOnRunQuerryButton()
    approvalDocumentPage.verifyFilterResutWithInValidData()
})
Then("user will select pagination", () => {
    chaseQuery1.clickOnPaginationDropDown()
})
Then("user will verify table list is as per pagination", () => {
    chaseQuery1.verifyPagination()
    chaseQuery1.verifyTableList()
})
Then("user will click on document id and will verify its clickable", () => {
    approvalDocumentPage.clickOnDocumentId()
    approvalDocumentPage.verifyDocumentIdIsClickAble()
    approvalDocumentPage.clickOnCloseButton()
})
Then("user will click on chase id and will verify its clickable", () => {
    approvalDocumentPage.clickOnChaseId()
    approvalDocumentPage.verifyUrl() 
})
Then("user will click on export all", () => {
    approvalDocumentPage.clickOnExportAllButton()
})
Then("user will verify downloaded file", () => {
    cy.wait(3000)
    cy.verifyDownload('download.csv');
})
Then("user will click on three dot", () => {
    approvalDocumentPage.clickOnThreeDotButton()
})
Then("user will click on view document and will verify document is visible", () => {
    approvalDocumentPage.clickOnViewDocument()
    approvalDocumentPage.verifyDocumentIdIsClickAble()
})
Then("user will click on approve button", () => {
    newPageAttachPage.clickOnApproveButton()
})
Then("user will verify Yes button on popup", () => {
    newPageAttachPage.clickOnApproveButton1()
})
Then("user will Verify No Button on popup", () => {
    newPageAttachPage.clickOnApproveButton2()
})
Then("user will Verify 3 dot action button deny", () => {
    newPageAttachPage.clickOnDenyButton()
})
Then("user will click on plus icon and verify image is zoomed in", () => {
    docqagridpage.clickOnPlusSign()
})
Then("user will click on minus icon and verify image is zoomed out", () => {
    docqagridpage.clickOnMinusSign()
})
Then('user will verify rotation', () => {
    cy.wait(5000)
    docqagridpage.verifyRotation()
    docqagridpage.rotateLeft()
})

