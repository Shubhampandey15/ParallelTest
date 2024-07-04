class ReveleerLoginPage
{
    elements = {
        
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        submitButton: () => cy.xpath("//span[contains(text(),'Login')]/parent::button"),
        usernamelabel:() => cy.xpath("username__container--orgName"),  
        signOutbutton:() => cy.xpath("//span[contains(text(),'Sign Out')]")   
    }

    fillUsername(username)
    {
        this.elements.usernameInput().type(username)
    }

    fillPassword(password)
    {
        this.elements.passwordInput().type(password)
    }

    clickOnLoginButton()
    {
        this.elements.submitButton().click()
    }
    clickOnSignOutButton()
    {
        this.elements.usernamelabel().click()
        this.elements.signOutbutton().click()
    }

}

module.exports = new ReveleerLoginPage()