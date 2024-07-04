class ReveleerHomePage {
    elements = {
        loginUserName: () => cy.xpath("//platform-account-menu//div[@class='username__container']"),
        retrievalMenuButton: () => cy.xpath("//div[text()='Retrieval']/parent::li"),
        callCenterRepButton: () => cy.xpath("//span[text()='Call Center Rep']/parent::a"),
        emrButton: () => cy.xpath("//span[text()='EMR']/parent::a"),
        ftButton: () => cy.xpath("//span[text()='Field Tech Scheduling']/parent::a"),
        thirdPartyButton: ()=> cy.xpath("//span[text()='3rd Party Copy Center']/parent::a"),
        runQueryButton: () => cy.xpath("//span[text()='Run Query']/parent::button"), //Click
        DocQAButton: () => cy.xpath("//span[text()='Document QA']/parent::a"),
        runQueryButton: () => cy.xpath("//span[text()='Run Query']/parent::button"), //Click
        retrievalPends: () => cy.xpath("//span[text()='Retrieval Pends']/parent::a"),
        docIntakeButton: () => cy.xpath("//span[text()='Document Intake']/parent::a"),
        clinicalMenuButton: () => cy.xpath("//div[text()='Clinical']/parent::li"),
        mrrMenuButton: () => cy.xpath("//span[text()='Medical Record Review']/parent::a"),
    }
    clickOnRetrievalMenuButton() {
        this.elements.retrievalMenuButton().click()
    }
    clickOnCallCenterRepButton() {
        cy.wait(1000)
        this.elements.callCenterRepButton().click()
    }
    clickOnEMRButton() {
        cy.wait(1000)
        this.elements.emrButton().click()
    }
    clickOnFTButton() {
        cy.wait(1000)
        this.elements.ftButton().click()
    }
    clickOnThirdPartyButton()
    {
        cy.wait(1000)
        this.elements.thirdPartyButton().click()

    }
    clickOnRunQueryButton()
    {
        this.elements.runQueryButton().click()
    }
    clickOnRetrievalPends1() {
        this.elements.retrievalPends().click()
    }
    clickonDocQAButton() {
        this.elements.DocQAButton().click()
    }
    clickOnDocIntakeButton() {
        this.elements.docIntakeButton().click()
    }
    clickOnClinicalMenuButton() {
        this.elements.clinicalMenuButton().click()
    }
    clickOnMrrMenuButton() {
        this.elements.mrrMenuButton().click()
    }
}
module.exports = new ReveleerHomePage()