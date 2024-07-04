class EMRGridPage
{
    elements = { 
        assignedToTabButton: () => cy.xpath("//span[text()='Assigned To']/parent::a"), // click
        assignedToUserTextBox: () => cy.get("#AssignedToUserId"), // sendkey        
        selectUserFromList: (user) => cy.xpath("//span[text()='"+user+"']/parent::li"), //Click
        gridAID:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'masterDocumentSourceID')]/a)["+entryCountNumber+"]"), // click
        
        assignedToGridText: () => cy.xpath("//*[contains(@class,'hdvi-gridcol-assignedTo')]/span[@class='ui-column-value ng-star-inserted']"), //Click
        addressId: (aid) => cy.xpath("//span[./text()='AID']/following-sibling::a[./text()='"+aid+"']"), //click
        gridThreeDotButton:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'ng-star-inserted')]/app-button/p-button/button)["+entryCountNumber+"]"), // click
        scheduleThreeDotButton: () => cy.xpath("(//span[./text()='Schedule']/parent::button)[2]"), //Click
        assignedAddressThreeDotButton: () => cy.xpath("(//span[./text()='Assign Address']/parent::button)[2]"), //Click
        assignedToUserTextBox2: () => cy.get("#assignToUsers"),
        selectUserFromList: (user) => cy.xpath("//span[text()='"+user+"']/parent::li"), //Click 
        assignButton: () => cy.xpath("//span[text()='Assign']/parent::button"), //click     
        assignButton2: () => cy.xpath("(//span[text()='Assign']/parent::button)[2]"), //click       
        availableUsers: () => cy.xpath("//input[@placeholder='Select User']"),
        saveButton: () => cy.xpath("//span[text()='Save']/parent::button"),
        appointmentDateTextBox: () => cy.xpath("//p-calendar[@placeholder='Date']"),
        appointmentDate: (day) => cy.xpath("//a[./text()='"+day+"']"),
        appointmentNotes: () => cy.get("#appointmentNotes"),
        okButton: () => cy.xpath("//span[./text()='Ok']/parent::button"),
        successfulMessage: (message) => cy.xpath("//div[./text()='"+message+"']"),
        addressId: (aid) => cy.xpath("//span[./text()='AID']/following-sibling::a[./text()='"+aid+"']"), //click
        aID: ()=>cy.get('tr').eq(1).get('td').eq(1),

        //Schedule
        scheduleTabButton: () => cy.xpath("//div[./text()='Schedule']/parent::div/parent::a"),
        emrUsersGrid: () => cy.xpath("//h3[./text()='EMR USERS']/parent::div/following-sibling::app-basic-grid"), 
        emrAppointmentsGrid: () => cy.xpath("//h3[./text()='EMR APPOINTMENTS']/following-sibling::app-server-grid"), 
        
        gridAID:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'masterDocumentSourceID')]/a)["+entryCountNumber+"]"), // click
        gridThreeDotButton:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'ng-star-inserted')]/app-button/p-button/button)["+entryCountNumber+"]"), // click
        gridPSRAIDCheckbox:(entryCountNumber) => cy.xpath("(//p-tablecheckbox)["+entryCountNumber+"]"), // click
        gridPSRAIDCheckbox:(entryCountNumber) => cy.xpath("(//p-tablecheckbox)["+entryCountNumber+"]"), // click
        
        gridprovider:(entryCountNumber) => cy.xpath("(//td[contains(@class, 'masterDocumentSourceID')]/a)["+entryCountNumber+"]"), // click)
        gridproviderCheckbox:(entryCountNumber) => cy.xpath("//retrieval-address-detail-info-grids//tr["+entryCountNumber+"]//p-tablecheckbox["+entryCountNumber+"]"), // click
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
    clickOnAddressId(aid)
    {
        this.elements.addressId(aid).click()
    }
    clickonAID(){
        this.elements.aID().click()
    }
    clickOnGridThreeDotButton(entryCountNumber)
    {
        this.elements.gridThreeDotButton(entryCountNumber).click()
    }
    clickOnScheduleThreeDotButton()
    {
        this.elements.scheduleThreeDotButton().click()
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
    selectAvailableUsers(assignedToUser)
    {
        this.elements.availableUsers().type(assignedToUser)
        this.elements.selectUserFromList(assignedToUser).click()        
    }
    selectAppointmentDate(day)
    {        
        this.elements.appointmentDateTextBox().click()
        this.elements.appointmentDate(day).click()
    }
    enterAppointmentNotes(notes)
    {
        this.elements.appointmentNotes().type(notes)
    }
    clickOnSaveButton()
    {
        this.elements.saveButton().click()
    }
    clickOnOKButton()
    {
        this.elements.okButton().click()
    }
    verifySuccessfulMessage(message)
    {
        this.elements.successfulMessage(message).should("be.visible")
    }
    clickOnAddressId(aid)
    {
        this.elements.addressId(aid).click()
    }
    clickOnScheduleTabButton()
    {
        this.elements.scheduleTabButton().click()
    }
    verifyEmrUsersGrid()
    {
        this.elements.emrUsersGrid().should("be.visible")
    }
    verifyEmrAppointmentGrid()
    {
        this.elements.emrAppointmentsGrid().scrollIntoView()
        this.elements.emrAppointmentsGrid().should("be.visible")
    }
    clickOnAssignAddressButton()
    {
        this.elements.assignedAddressButtonForGrid().click()
    }
    ClickOnFirstProvider(entryCountNumber){
       // this.elements.
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
module.exports = new EMRGridPage()