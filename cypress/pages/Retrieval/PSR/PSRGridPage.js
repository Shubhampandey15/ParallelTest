class PSRGridPage
{
    elements = {        
        assignedToTabButton: () => cy.xpath("//span[text()='Assigned To']/parent::a"), // click
        assignedToUserTextBox: () => cy.get("#AssignedToUserId"), // sendkey
        selectUserFromList: (user) => cy.xpath("//span[text()='"+user+"']/parent::li"), //Click
        assignedToGridText: () => cy.xpath("//*[contains(@class,'hdvi-gridcol-assignedTo')]/span[@class='ui-column-value ng-star-inserted']"), //Click
        assignedToGridButton: (AID) => cy.xpath("//a[./text()='"+AID+"']/parent::td/following-sibling::td[@class='ng-star-inserted']/app-button/p-button/button"), //Click
        assignedAddressThreeDotButton: () => cy.xpath("(//span[./text()='Assign Address']/parent::button)[2]"), //Click
        assignedAddressButtonForGrid: () => cy.xpath("(//span[./text()='Assign Address']/parent::button)[1]"), //Click
        assignedToUserTextBox2: () => cy.get("#assignToUsers"), // sendkey
        globalSearchDropdown: () => cy.xpath("(//div[@class='ui-dropdown-trigger ui-state-default ui-corner-right'])[1]"), //click
        addressId: (aid) => cy.xpath("//span[./text()='AID']/following-sibling::a[./text()='"+aid+"']"), //click
        globalSearchDropdownValue: (value) => cy.xpath("//*[./text()='"+value+"']/parent::li"), // click
        globalSearchTextBox: () => cy.get("#globalSearchInput"), // sendkey
        globalSearchSearchButton: () => cy.xpath("//*[@class='fas fa-play fa-search ui-clickable ui-button-icon-left ng-star-inserted']/parent::button"), // click
        anchorTagUsingInnerHtml:(value) => cy.xpath("//a[./text()='"+value+"']"), // click
        assignButton: () => cy.xpath("//span[text()='Assign']/parent::button"), //click
        assignButtonOnPopup: () => cy.xpath("(//span[text()='Assign']/parent::button)[2]"), //click
        assignedMessage: () => cy.xpath("//div[./text()='Assigned Successfully.']"),
        appLoader: () => cy.xpath("//div[@class='loader fa fa-spinner fa-spin ng-star-inserted']"),
        gridAID:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'masterDocumentSourceID')]/a)["+entryCountNumber+"]"), // click
        gridThreeDotButton:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'ng-star-inserted')]/app-button/p-button/button)["+entryCountNumber+"]"), // click
        gridPSRAIDCheckbox:(entryCountNumber) => cy.xpath("(//p-tablecheckbox)["+entryCountNumber+"]"), // click
        gridPSRAIDCheckbox:(entryCountNumber) => cy.xpath("(//p-tablecheckbox)["+entryCountNumber+"]"), // click
        
        gridprovider:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'masterDocumentSourceID')]/a)["+entryCountNumber+"]"), // click)
        gridproviderCheckbox:(entryCountNumber) => cy.xpath("(//p-tablecheckbox)["+entryCountNumber+"]"), // click
        // AID data 
        gridsecondAID:(entryCountNumber) => cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'masterDocumentSourceID')]/a[1]"),
        gridsecondRowProvider:(entryCountNumber) =>  cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'providerName')]//span[2]"),
        gridsecondRowAddress1:(entryCountNumber)=> cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'address1')]//span[2]"),
        gridsecondRowAddress2:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'address2')]//span[2]"),
        gridsecondRowCity:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'city')]//span[2]"),
        gridsecondRowState:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'state')]//span[2]"),
        gridsecondRowZip:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'postalCode')]//span[2]"),
        gridsecondRowphone:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'phone')]//span[2]"),
        gridsecondRowFax:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'fax')]//span[2]"),
        gridsecondRowgroupname:(entryCountNumber)=>cy.xpath("//tr["+entryCountNumber+"]//td[contains(@class, 'groupname')]//span[2]"),
        //automation view 
        automationview:()=>cy.xpath("//app-grid-view[contains(text(),'QA Automation')]")
    }
    
    clickOnAssignedToTabButton()
    {
        this.elements.assignedToTabButton().click()
    }

    enterAssignedToUser(assignedToUser)
    {
        this.elements.assignedToUserTextBox().type(assignedToUser)
    }

    clickOnSelectUserFromList(user)
    {
        this.elements.selectUserFromList(user).click()
    }

    verifyAssignedToGridText(assignedToUser)
    {
        this.elements.assignedToGridText().each((item,index,list)=>{
            expect(Cypress.$(item).text()).to.eq(assignedToUser)
            cy.wrap(item).should("have.text",assignedToUser)
        })
    }

    clickOnAssignedToGridButton(AID)
    {
        this.elements.assignedToGridButton(AID).click()
    }

    clickOnAssignedAddressThreeDotButton()
    {
        this.elements.assignedAddressThreeDotButton().click()
    }

    enterAndAssignedToUserFromAssignedAddressButton(assignedToUser)
    {
        this.elements.assignedToUserTextBox2().type(assignedToUser)
        this.elements.selectUserFromList(assignedToUser).click()
        this.elements.assignButton().click()
        //this.elements.assignedMessage().should('be:visible')
    }

    clickOnAddressId(aid)
    {
        this.elements.addressId(aid).click()
    }

    searchEntryInGlobalSearch(dropdownOption,AIDNumber)
    {
        this.elements.globalSearchDropdown().click()
        this.elements.globalSearchDropdownValue(dropdownOption).click()
        this.elements.globalSearchTextBox().type(AIDNumber)
        this.elements.globalSearchSearchButton().click()
        this.elements.appLoader().should('not.exist')   
    }

    clickOnAddressIdToOpenDetails(addressId)
    {
        this.elements.anchorTagUsingInnerHtml(addressId).click()
        this.elements.appLoader().should('not.exist')        
    }
    

    clickOnAIDFromGridAndGetAID(entryCountNumber)
    {
        let AID;
        this.elements.gridAID(entryCountNumber).then((x)=>{
            AID = x.text()
            return AID;
        })
        this.elements.gridAID(entryCountNumber).click()

        

    }
    getAddressId(entryCountNumber)
    {
        //var aid =""
        // this.elements.gridAID(entryCountNumber).then(($x)=>{
        //     AID = $x.text()
        // })
        

        this.elements.gridAID(entryCountNumber).then((obj) => { 
            //return 
            cy.log(obj.text())
            //
        })   
        //cy.log(aid)
        //return aid
    }
    
    clickOnGridThreeDotButton(entryCountNumber)
    {
        this.elements.gridThreeDotButton(entryCountNumber).click()
    }

    clickOnPSRAIDCheckbox(entryCountNumber)
    {
        this.elements.gridPSRAIDCheckbox(entryCountNumber).click()
    }

    clickOnAssignAddressButton()
    {
        this.elements.assignedAddressButtonForGrid().click()
    }
    ClickOnFirstProvider(entryCountNumber){
        this.elements.gridproviderCheckbox(entryCountNumber).click()
    }
    getSecondrowAIDData(){
        this.elements.gridsecondAID(entryCountNumber).then((obj)=>{
        cy.log(obj.text())
        })  
      
    }
    getsecondrowProvider(){
        this.elements.gridsecordRowProvider(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowAddress1(){
        this.elements.gridsecondRowAddress1(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowAddress2(){
        this.elements.gridsecondRowAddress2(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    } 
    getsecondrowcity(){
        this.elements.gridsecondRowcity(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowstate(){
        this.elements.gridsecondRowstate(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowzip(){
        this.elements.gridsecondRowZip(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowPhone(){
        this.elements.gridsecondRowphone(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowFax(){
        this.elements.gridsecondRowFax(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    getsecondrowGroupname(){
        this.elements.gridsecondRowgroupname(entryCountNumber).then((obj)=>{
            cy.log(obj.text())
        })
    }
    clickonAutomationview(){
        this.elements.automationview().click()
    }
}
module.exports = new PSRGridPage()