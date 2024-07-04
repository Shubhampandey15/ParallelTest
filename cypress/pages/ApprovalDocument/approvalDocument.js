class approvalDocument{
    elements={
        expandedThumbNail:()=>cy.get("[class='thumbnail__toggle']"),
        requestDocument:()=>cy.get("//span[normalize-space()='Request Document']"),
        checkBox:()=>cy.get("[class='ui-chkbox ui-widget ng-star-inserted']"),
        requestButton:()=>cy.get('[text="Request"]'),
        approvalsMenuButton:()=>cy.xpath("//div[text()='Approvals']/parent::li"),
        documentSubmenuButton:()=>cy.xpath("//span[text()='Documents']/parent::a"),
        documentStats:()=>cy.get("[class='users-land-stats-item bold clearStat']"),
        tableHead:()=>cy.get("[class='ui-table-thead']"),
        filterIcon:()=>cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        documentId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-documentQueueId ng-star-inserted']").eq(0),
        documentIdField:()=>cy.get('[id="documentQueueId"]'),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        tableRow:()=>cy.get("[class='ui-selectable-row ng-star-inserted']"),
        documentApproveDialogBox:()=>cy.get('[role="dialog"]'),
        closeButton:()=>cy.get("p-button[class='secondary'] span[class='ui-button-text ui-clickable']"),
        chaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        exportAllButton:()=>cy.get('[id="export"]'),
        threeDotButton:()=>cy.get(':nth-child(1) > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
        viewDocument:()=>cy.xpath("//span[normalize-space()='View Document']"),
        statusFilter:()=>cy.xpath("//span[@class='ui-tabview-title ng-star-inserted'] [normalize-space()='Status']"),
        downloadedFilter:(DownloadStatus)=>cy.get('span').contains(DownloadStatus),
        chaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),


    }
    clickOnExpandedThumbnail()
    {
        this.elements.expandedThumbNail().click()
    }
    clickOnRequestDocument()
    {
        this.elements.requestDocument().click()
    }
    clickOnCheckBox()
    {
        this.elements.checkBox().click()
    }
    clickOnRequestButton()
    {
        this.elements.requestButton().click()
    }
    clickOnApprovalMenuButton()
    {
        this.elements.approvalsMenuButton().click()
    }
    verifyDocumentStat()
    {
        this.elements.documentStats().should('be.visible')
    }
    clickOnDocumentSubMenuButton()
    {
        this.elements.documentSubmenuButton().click()
    }
    verifyGridData()
    {
        this.elements.tableHead().scrollIntoView().each(($element) => {
            const textsToVerify = ['DOCUMENT ID','RETRIEVAL METHOD', 'ORIGINAL CHASE ID','CHASE KEY','MEASURE','ORIGINAL CHASE STATUS','SAMPLE COMPLIANCE','PROJECT','NEW PAGES','UPLOAD DATE'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    logDocumentId()
    {
        this.elements.documentId().invoke('text').invoke('replace', 'DOCUMENT ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('documentId'));
    }
    clickOnFilterIcon()
    {
        this.elements.filterIcon().click()
    }
    typeInDocumentIdField()
    {
        cy.get('@documentId').then(documentId => {
        this.elements.documentIdField().type(documentId)
        })
    }
    clickOnRunQuerryButton()
    {
        this.elements.runQueryButton().click()
        
    }
    verifyFilterResutWithValidData()
    {
        cy.get('@documentId').then(documentId => {
            this.elements.documentId().should('contain',documentId)
        })
    }
    typeInDocumentIdField1()
    {
        
        this.elements.documentIdField().type('12345')
        
    }
    verifyFilterResutWithInValidData()
    {
            this.elements.tableRow().should('not.exist')
    }
    clickOnDocumentId()
    {
        this.elements.documentId().click()
    }
    verifyDocumentIdIsClickAble()
    {
      this.elements.documentApproveDialogBox().should('be.visible')
    }
    clickOnCloseButton()
    {
        this.elements.closeButton().click()
    }
    clickOnChaseId()
    {
        this.elements.chaseId().click()
    }
    verifyUrl()
    {
        cy.url().should('include','https://uat.reveleer.com/members/chasev2')
    }
    clickOnExportAllButton()
    {
        this.elements.exportAllButton().click()
    }
    clickOnThreeDotButton()
    {
        this.elements.threeDotButton().click()
    }
    clickOnViewDocument()
    {
        this.elements.viewDocument().click()
    }
    clickOnDownloadedStatus(DownloadStatus)
    {
        this.elements.downloadedFilter(DownloadStatus).click()
    }
    clickOnStatusFilter()
    {
        this.elements.statusFilter().click()
    }
    logChaseId()
    {
        this.elements.chaseId().invoke('text').invoke('replace', 'Chase ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('chaseId'));
    }
}
export default approvalDocument