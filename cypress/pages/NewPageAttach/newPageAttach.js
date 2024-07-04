class newPageAttach{
    elements={

        ClinicalTab: () => cy.xpath("//div[@class='navigation']//child::ul//li[@class='navigation__menuItem']//div[contains(text(),'Clinical')]"),
        ORTab: () => cy.get('span').contains('Overread'),
        hedisProject: (ProjectName) => cy.get('span').contains(ProjectName),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        firstChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']"),
        pageNo: () => cy.get('div[class="command-bar__item"]>span'),
        documentIntakeSubMenu: () => cy.xpath("//span[text()='Document Intake']/parent::a"),
        retrievalMenuButton: () => cy.xpath("//div[text()='Retrieval']/parent::li"),
        firstFileName: () => cy.get("[class='ui-column-value ng-star-inserted']").eq(0),
        searchedChaseId: () => cy.get('.hdvi-gridcol-chaseID > .ui-column-value'),
        thisPageIsPartOfAChaseButton: () => cy.get("[text='This Page Is Part Of A Chase']"),
        chaseStartPageField: () => cy.get("[id='chaseBegPage']"),
        chaseEndPageField: () => cy.get("[id='chaseEndPage']"),
        chaseIdField: () => cy.get("[id='assignChaseId']"),
        acceptButton: () => cy.get("[text='ACCEPT']"),
        commitChaseAssignmentButton: () => cy.get("app-button[class='document-page-assignment__buttons--commit-chase text-right'] span[class='ui-button-text ui-clickable']"),
        globalSearch:()=>cy.get('[id="globalSearchInput"]'),
        searchIcon: () => cy.get("[class='fas fa-play fa-search ui-clickable ui-button-icon-left ng-star-inserted']").eq(0),
        autoApproveButton:()=>cy.xpath("//label[@class='ui-radiobutton-label ng-star-inserted'][normalize-space()='Automatically Approve']"),
        adminMenuButton: () => cy.xpath("//div[text()='Admin']/parent::li"),
        adminProjectButton: () => cy.xpath("//span[text()='Projects']/parent::a"),
        filterIcon:()=>cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        projectName:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-projectName ng-star-inserted']"),
        sucessToastMesssage:()=>cy.get("[class='ui-toast-detail']"),
        saveButton:()=>cy.get('[text="SAVE"]'),
        backArrow:()=>cy.get('.v2-header__member-info__personal > .far'),
        chaseTitle:()=>cy.get("div[class='chase-detail-v2__footer'] div:nth-child(2) a:nth-child(1) div:nth-child(1) div:nth-child(1)"),
        pursuitChase:()=>cy.get('[href*="/members/clientoverread/chase"]'),
        clientOverreadTab: () => cy.xpath("//platform-navigation[1]/div[2]/app-menu[1]/p-menu[1]/div[1]/ul[1]/li[6]/a[1]/span[2]"),
        approvalsMenutButton:()=>cy.xpath("//div[text()='Approvals']/parent::li"),
        documentSubmenuButton:()=>cy.xpath("//span[text()='Documents']/parent::a"),
        originalChaseIdFilter:()=>cy.xpath("//span[@class='ui-tabview-title ng-star-inserted'] [normalize-space()='Original Chase Id']"),
        chaseIdField1:()=>cy.get('[id="chaseId"]'),
        threeDotButton:()=>cy.get(':nth-child(1) > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
        denyButton:()=>cy.get('.action-template-container > :nth-child(3) > p-button > .ui-button > .ui-button-text'),
        approveButton:()=>cy.get('.action-template-container > :nth-child(2) > p-button > .ui-button > .ui-button-text'),
        approveAttentionpopUp:()=>cy.get('[role="dialog"]'),
        yesButton:()=>cy.get("footer span[class='ui-button-text ui-clickable']"),
        originalChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        closeButton:()=>cy.get("p-button[class='secondary'] span[class='ui-button-text ui-clickable']"),
        childChase:()=>cy.get("div[class*='ui-dialog-content ui-widget-content'] a[class='ng-star-inserted']"),
        pursuitContainer:()=>cy.get('.chase-detail-info__pursuit-item > a'),
        noButton:()=>cy.get("app-button[class='ng-star-inserted'] span[class='ui-button-text ui-clickable']"),
    }
    clickOnclinicalTab()
    {
        this.elements.ClinicalTab().click()
    }
    clickOnOrTab()
    {
        this.elements.ORTab().click()
    }
    clickOnHedisProject(ProjectName)
    {
        this.elements.hedisProject(ProjectName).click()
    }
    clickOnRunQuerryButton()
    {
        this.elements.runQueryButton().click()
        
    }
    logFirstChaseId()
    {
        this.elements.firstChaseId().eq(0).invoke('text').invoke('replace', 'Chase ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('captureChaseId'));
    }
    clickOnFirstChaseId()
    {
        this.elements.firstChaseId().eq(0).click()
    }
    logPageNo()
    {
        this.elements.pageNo().invoke('text').invoke('replace', 'Of', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('capturePageNo'));
    }
    clickOnretrievalMenuButton()
    {
        this.elements.retrievalMenuButton().click()
    }
    clickOndocumentIntake()
    {
        this.elements.documentIntakeSubMenu().click()
    }
    clickOnFirstFileName()
    {
        this.elements.firstFileName().click()
    }
    clickOnThisPageIsPartOfChaseButton() {
        this.elements.thisPageIsPartOfAChaseButton().click()
    }
    typeInChaseStartPageField(chaseStartPage) {
        this.elements.chaseStartPageField().type(chaseStartPage)
    }
    typeInChaseEndPageField(chaseEndPage) {
        this.elements.chaseEndPageField().type(chaseEndPage)
    }
    typeInChaseIdField() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.chaseIdField().type(captureChaseId)
        })
    }
    clickOnAcceptButton() {
        this.elements.acceptButton().click()
    }
    clickOnCommitChaseAssignmentButton() {
        this.elements.commitChaseAssignmentButton().scrollIntoView().click()
        cy.wait(120000)
        cy.reload()
    }
    typeInGlobalSearch()
    {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.globalSearch().type(captureChaseId)
        })   
    }
    clickOnSearchIcon()
    {
        this.elements.searchIcon().click()
    }
    clickOnSearchedChaseId()
    {
        this.elements.searchedChaseId().click()
    }
    VerifyThePageIsAttached()
    {
        cy.wait(3000)
        cy.get('@capturePageNo').then(capturePageNo => {
            this.elements.pageNo().should('not.contain',capturePageNo)
        })
    }
    clickOnAutoApproveButton()
    {
        this.elements.autoApproveButton().click()
    }
    clickOnAdminButton()
    {
       this.elements.adminMenuButton().click()
       this.elements.adminProjectButton().click()
    }
    clickOnFilterIcon()
    {
        this.elements.filterIcon().click()
    }
    clickOnProjectName()
    {
        this.elements.projectName().click()
    }
    clickOnSaveButton()
    {
        this.elements.saveButton().click()
        this.elements.sucessToastMesssage().should('includes.text','Project config saved.')
    }
    clickOnBackArrow()
    {
        this.elements.backArrow().click()
    }
    clickOnChaseTitle()
    {
        this.elements.chaseTitle().click()
    }
    clickOnPursuitChase()
    {
        this.elements.pursuitChase().click()
    }
    clickOnClientOverread()
    {
        this.elements.clientOverreadTab().click()
    }
    clickOnDocumentSubMenuButton()
    {
        this.elements.documentSubmenuButton().click()
    }
    clickOnOriginalChaseIdFilter()
    {
        this.elements.originalChaseIdFilter().click()
    }
    typeInOriginalChaseIdField()
    {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.chaseIdField1().type(captureChaseId)
        })
    }
    verifyApprovalDocument()
    {
        cy.get('@captureChaseId').then(captureChaseId => {
        this.elements.firstChaseId().should('contain',captureChaseId)
        })
    }
    clickOnCommitChaseAssignmentButton1() {
        this.elements.commitChaseAssignmentButton().scrollIntoView().click()
    }
    clickOnApprovalMenuButton()
    {
        this.elements.approvalsMenutButton().click()
    }
    clickOnThreeDotButton()
    {
        this.elements.threeDotButton().click()
    }
    clickOnDenyButton()
    {
        this.elements.denyButton().click()
        this.elements.sucessToastMesssage().should('be.visible').and('includes.text','Approval Denied')
    }
    clickOnApproveButton()
    {
        this.elements.approveButton().click()
        this.elements.approveAttentionpopUp().should('be.visible').and('includes.text',' By approving this document these pages will be added to a child chase.Do you want to continue? ')
    }
    clickOnApproveButton1()
    {
        this.elements.approveButton().click()
        this.elements.approveAttentionpopUp().should('be.visible').and('includes.text',' By approving this document these pages will be added to a child chase.Do you want to continue? ')
        this.elements.yesButton().click()
        this.elements.approveAttentionpopUp().should('be.visible').and('includes.text','Pages successfully added to child chase')
    }
    logOriginalChaseId()
    {
        this.elements.originalChaseId().eq(0).invoke('text').invoke('replace', 'ORIGINAL CHASE ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('originalcaptureChaseId'));
    }
    typeInGlobalSearch1()
    {
        cy.get('@originalcaptureChaseId').then(originalcaptureChaseId => {
            this.elements.globalSearch().type(originalcaptureChaseId)
        })   
    }
    clickOnCloseButton()
    {
        this.elements.closeButton().click()
    }
    logChildChase() {
        this.elements.childChase().invoke('text').as('capturechildChase')
            .then((text) => {
                cy.wrap(text).as('capturedText');
                cy.log(text);
            });
    }
    
    verifyPursuitIsCreated() {
        cy.get('@capturedText').then((capturedText) => {
            this.elements.pursuitContainer().should('contain', capturedText);
        });
    }
    clickOnApproveButton2()
    {
        this.elements.approveButton().click()
        this.elements.approveAttentionpopUp().should('be.visible').and('includes.text',' By approving this document these pages will be added to a child chase.Do you want to continue? ')
        this.elements.noButton().click()
        this.elements.approveAttentionpopUp().should('not.exist')
    }
}

export default newPageAttach