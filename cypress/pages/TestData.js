class TestData1 {
    elements = {
        project: (project) => cy.xpath('//span[normalize-space()="' + project + '"]'),
        successfulToast: (ToastMessage) => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "' + ToastMessage + '")]'),
        noCorrectMemberButton: () => cy.get('[class="no-btn"'),
        clickOnChaseId: () => cy.xpath('//a[contains(@href, "/members/chase")]'),
        mrrAssignButton: () => cy.xpath('//app-button[@text="Assign"]'),
        userSearchBox: () => cy.xpath('//div[@role="dialog"]/descendant::p-autocomplete[@datakey="value"]/span/input[@type="text"]'),
        continueButton: () => cy.xpath("(//span[contains(text(), 'Cancel')]/following::app-button/p-button/button)[1]"),
        reasonDropdown: () => cy.get('[class*="member-validation__container"] p-dropdown'),
        pageNumberBox: () => cy.get('[class*="member-validation__input--page-number"] [id="memberValidationPageNumber"]'),
        submitButton: () => cy.get('[class*="member-validation__submit-btn"]'),
        reason:()=> cy.xpath("//span[contains(text(),'Incorrect Member – Entire Chart')]"),
    }
    selectProject(project) {
        this.elements.project(project).click()
    }
    clickCorrectMemberNoButton() {
        cy.wait(4000)
        this.elements.noCorrectMemberButton().click()
    }
    openPccChaseIdAndAssignToUser(assigntouser, ToastMessage) {
        cy.viewport(1400, 800)
        this.elements.clickOnChaseId().eq(0).click()
        this.elements.mrrAssignButton().click()
        cy.wait(3000)
        this.elements.userSearchBox().click().type(assigntouser)
        cy.contains('li', assigntouser).click()
        this.elements.continueButton().click()
        this.elements.successfulToast(ToastMessage).should('be.visible').and('have.text', ToastMessage)
    }
    clickOnReasonDropdown() {
        this.elements.reasonDropdown().click()
    }
    selectReason() {
        this.elements.reason().click()
    }
    selectPageBoxAndEnterNumber() {
        this.elements.pageNumberBox().click().type('1')
    }
    clickSubmitButton() {
        this.elements.submitButton().click()
    }
}
export default TestData1

