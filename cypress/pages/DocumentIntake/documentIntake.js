let globalTrimmedNumber;
class documentIntake {
    retrievalMenuButton = '[src="assets/icons/arrow-from-left.svg"]'

    elements = {
       
        documentIntakeSubMenu: () => cy.xpath("//span[text()='Document Intake']/parent::a"),
        thirdPartyCopyCenterSubMenuButton: () => cy.xpath("//span[text()='3rd Party Copy Center']/parent::a"),
        clinicalMenuButton: () => cy.xpath("//div[text()='Clinical']/parent::li"),
        mrrSubMenuButton: () => cy.xpath("//span[text()='Medical Record Review']/parent::a"),
        statisticsContainer: () => cy.get("[class='item-container ng-star-inserted']"),
        exportAllButton: () => cy.get("[id='export']"),
        gridColumn: () => cy.get("[class='ui-table-thead']"),
        sortingArrow: () => cy.get("[class='ui-sortable-column-icon pi pi-fw pi-sort-amount-up-alt']"),
        fileNameHeader: () => cy.get("[title='File Name']"),
        firstFileName: () => cy.get("[class='ui-column-value ng-star-inserted']").eq(0),
        filterIcon: () => cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        filterContainer: () => cy.get("[role='dialog']"),
        threeDotButton: () => cy.get("[class='fas fa-ellipsis-v ui-clickable ui-button-icon-left ng-star-inserted']").eq(0),
        assignTo: () => cy.get("[text='Assign To']"),
        assignUserField: () => cy.get("[id='assignToUsers']"),
        assignUserDropDownField: () => cy.contains('li', '@Me'),
        assignButton: () => cy.get("[text='ASSIGN']"),
        assignToGrid: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-assignedTo ng-star-inserted']").eq(0),
        searchField: () => cy.get("[id='SearchPhrase']"),
        commentField: () => cy.get("[placeholder='Type here to reply.']"),
        commentab: () => cy.xpath("(//div[normalize-space()='Comments'])[1]"),
        sendMessageButton: () => cy.get("[text='SEND MESSAGE']"),
        messageBody: () => cy.get("[class='othercomment-body']").eq(0),
        timelineContainer: () => cy.get("[class='timeline-home-container']"),
        timeLineHeader: () => cy.get("[class='button']").eq(2),
        addTagLogo: () => cy.get("[class='far fa-plus-circle fa-far fa-plus-circle']"),
        tagField: () => cy.get("[id='tags']"),
        tagDropDown: () => cy.contains('li', 'A1 MJ'),
        addTagComment: () => cy.get("[class='chase-timeline-container chase-timeline-container__first']").eq(0),
        chartHeader: () => cy.get("[class='button']").eq(0),
        createdtag: () => cy.get("[class='ui-chips-token-label']"),
        crossButton: () => cy.get("[class='ui-chips-token-icon pi pi-fw pi-times fa-ui-chips-token-icon ng-star-inserted']"),
        chartPage: () => cy.get("[class='command-bar__item']"),
        ignoreThispageButton: () => cy.get("[text='IGNORE THIS PAGE']"),
        startPageField: () => cy.get("[id='ignoreBegPage']"),
        endPageField: () => cy.get("[id='ignoreEndPage']"),
        SucessFulToastForIgnorePages: () => cy.get("[class*='ui-messages ui-widget']"),
        acceptButton: () => cy.get("[text='ACCEPT']"),
        workingGridData: () => cy.get("[title='Ignore']"),
        workingGridData2: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-startPage ng-star-inserted']").eq(0),
        unassignedPage: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-startPage ng-star-inserted']").eq(1),
        commitedPageRange: () => cy.get(':nth-child(5) > p-table > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > .ui-selectable-row > .hdvi-gridcol-startPage > .ng-star-inserted'),
        disabledStateAcceptButton: () => cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']").eq(0),
        pageRangeErrorMessage: () => cy.get("[class='control__header__error ng-star-inserted']"),
        runQuerryButton: () => cy.xpath("//span[normalize-space()='Run Query']"),
        firstChase: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        secondChase: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(1),
        chaseStartPageField: () => cy.get("[id='chaseBegPage']"),
        thisPageIsPartOfAChaseButton: () => cy.get("[text='This Page Is Part Of A Chase']"),
        chaseEndPageField: () => cy.get("[id='chaseEndPage']"),
        chaseIdField: () => cy.get("[id='assignChaseId']"),
        commitChaseAssignmentButton: () => cy.get("app-button[class='document-page-assignment__buttons--commit-chase text-right'] span[class='ui-button-text ui-clickable']"),
        chaseIdHeader: () => cy.xpath("(//span[@class='header-container__text'][normalize-space()='Chase ID'])[2]"),
        chaseIdHeader2: () => cy.xpath("(//span[@class='header-container__text'][normalize-space()='Chase ID'])[1]"),
        chaseId: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']"),
        chaseIdPages: () => cy.xpath("//a[normalize-space()='(1 - 1)']"),
        workingpageContainer: () => cy.get("tbody[class='ui-table-tbody']"),
        searchChaseContainer: () => cy.get("[class='chase-search-container']"),
        searchButton: () => cy.get("[text='Search']"),
        aidBox: () => cy.get('[id="addressId"]'),
        firstNameBox: () => cy.get('[id="memberFirstName"]'),
        lastNameBox: () => cy.get('[id="memberLastName"]'),
        providerNameBox: () => cy.get('[id="providerName"]'),
        tableRadioButton: () => cy.get('[class="ui-radiobutton ui-widget"]'),
        workingGridPage: () => cy.get("[class='documents-section']"),
        sortingIcon: () => cy.get("[class='ui-sortable-column-icon pi pi-fw pi-sort-amount-up-alt']").eq(0),
        threeDotIcon: () => cy.get("[class='fas fa-ellipsis-v ui-clickable ui-button-icon-left ng-star-inserted']").eq(0),
        goToButton: () => cy.xpath("//span[normalize-space()='Go To']"),
        currentPageNo: () => cy.get("[id='CurrentPageNumber']"),
        unassignedthreeDotIcon: () => cy.get(':nth-child(2) > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
        commitPagesThreeDot: () => cy.get(':nth-child(5) > p-table > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > .ui-selectable-row > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
        removeOption: () => cy.xpath("//span[normalize-space()='Remove']"),
        pageNo: () => cy.get('div[class="command-bar__item"]>span'),
        sucessToast: () => cy.get("div[class='ui-toast-detail']"),
        sucessToast1: () => cy.get('.ui-toast-detail'),
        removePopUp: () => cy.get('footer > app-button > .secondary > .ui-button > .ui-button-text'),
        firstChaseId: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        globalSearch: () => cy.get("[id='globalSearchInput']"),
        searchIcon: () => cy.get("[class='fas fa-play fa-search ui-clickable ui-button-icon-left ng-star-inserted']"),
        searchedChaseId: () => cy.get(':nth-child(1) > .hdvi-gridcol-chaseID > .ui-column-value'),
        backArrow: () => cy.get("[iconname='arrow-left']"),
        selectProject: () => cy.get("li[aria-label='2022 HEDIS Co-Retrieval Dataload Test_Edited'] span[class='ng-star-inserted']"),
        filterIcon: () => cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        threeDotIconWorkingGrid: () => cy.get(':nth-child(3) > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
        disabledCommitButton: () => cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']"),
        commitedPageHover: () => cy.get("[iconname='info-circle']").eq(1),
        commitmentPageHeader: () => cy.xpath("//div[normalize-space()='COMMITTED PAGES']"),
        alertMessage: () => cy.get('[role="alert"]'),
        invalidChaseIdContainer:()=>cy.get('.ui-dialog-content'),
        partOfAnInvoiceButton: () => cy.get("[text='THIS PAGE IS PART OF AN INVOICE']"),
        invoiceContainer: () => cy.get("[class='identification-form-fields-container ng-star-inserted']"),
        invoiceStartPage: () => cy.get("[id='invoiceBegPage']"),
        invoiceEndPage: () => cy.get("[id='invoiceEndPage']"),
        invoiceChaseIdField: () => cy.get("[id='invoiceChaseId']"),
        projectFilter: () => cy.xpath("//a[normalize-space()='Project(s)']"),
        firstAid: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-masterDocumentSourceID ng-star-inserted']").eq(0),
        aidChaseId: () => cy.get(':nth-child(1) > .hdvi-gridcol-chaseID > app-chase-grid-chase-id.ng-star-inserted > .ng-star-inserted'),
        changeVendor: () => cy.get("[text='CHANGE VENDOR']"),
        yesOption: () => cy.get("app-button[class='confirm-btn'] span[class='ui-button-text ui-clickable']"),
        changeVendorField: () => cy.get("[id='vendorInput']"),
        vendorAssignButton: () => cy.get("[text='Assign']").eq(1),
        viewInvoice: () => cy.xpath("//span[normalize-space()='View Invoice']"),
        validateButton: () => cy.get("[text='VALIDATE']"),
        invoiceAmount: () => cy.get("[id='invoiceAmount']"),
        invoiceReceivedDate: () => cy.get("[id='invoiceReceivedDate']"),
        continueButton: () => cy.get("[text='Continue']"),
        removeConitueButton: () => cy.get("footer span[class='ui-button-text ui-clickable']"),
        chaseIdFilter: () => cy.xpath("//span[normalize-space()='Chase Id']"),
        chaseIdField2: () => cy.get("[id='ChaseId']"),
        dialogueBox: () => cy.get("[role='dialog']"),
        cancelButton: () => cy.get('.secondary > .ui-button'),
        partOfAPendButton: () => cy.get('[text="THIS PAGE IS PART OF A PEND"]'),
        pendStartPage: () => cy.get('[id="pendBegPage"]'),
        pendEndPage: () => cy.get('[id="pendEndPage"]'),
        pendCodeBox: () => cy.xpath("(//div[normalize-space()='Select...'])[1]"),
        pendCodeDropDown: () => cy.get(':nth-child(2) > .ui-dropdown-item'),
        pendChaseIdField: () => cy.get('[id="assignPendChaseId"]'),
        commitedGridContainer: () => cy.get("[class='ui-table-tbody']").eq(1),
        pendCodeDropDownContainer: () => cy.get("[class='ui-dropdown-items-wrapper']"),
        pendDropDownlist: () => cy.get("li[role='option']"),
        enabledAcceptButton: () => cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']").eq(6),
        documentIdHeader: () => cy.get("[class='container-title']"),
        submitAndGetNextButton: () => cy.get("[text='SUBMIT & GET NEXT']"),
        yesButton: () => cy.get("footer span[class='ui-button-text ui-clickable']"),
        submitAndGetNextDropDownArrow: () => cy.get("[class='ui-button-icon-left ui-clickable pi pi-chevron-down']").eq(0),
        submitDropDown: () => cy.contains('li', 'SUBMIT'),
        holdAndGetNextButton: () => cy.get("[text='HOLD & GET NEXT']"),
        documentReason: () => cy.xpath("//span[normalize-space()='Hold Reason']"),
        holdStatusDropDown: () => cy.contains('li', 'Approval Needed'),
        submitButton: () => cy.get("[text='Submit']"),
        documentIdFilter: () => cy.xpath("//span[normalize-space()='Document Id']"),
        documentIdField: () => cy.get("[id='documentId']"),
        documenntIdGrid: () => cy.get('.hdvi-gridcol-documentId'),
        holdAndGetNextDropDownArrow: () => cy.get("[class='ui-button-icon-left ui-clickable pi pi-chevron-down']").eq(1),
        holdDropDown: () => cy.contains('li', 'HOLD'),
        onHoldStats: () => cy.get("[class='clearAssignedTo']").eq(3),
        removeAndGetNextButton: () => cy.get("[text='REMOVE & GET NEXT']"),
        archiveTab: () => cy.xpath("//span[normalize-space()='Archive']"),
        removeStats: () => cy.get("[class='users-land-stats-item bold']").eq(1),
        removeAndGetNextDropDownArrow: () => cy.get("[class='ui-button-icon-left ui-clickable pi pi-chevron-down']").eq(2),
        RemoveDropDown: () => cy.contains('li', 'REMOVE'),
        documentAidId: () => cy.get("[class='ui-column-value ng-star-inserted']").eq(1),
        archieveContainer: () => cy.get("[class='item-container ng-star-inserted']"),
        pdfFile:()=>cy.get('[class="hdvi-gridcol hdvi-gridcol-fileName ng-star-inserted"]'),
        secondChase: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(8),
        overLappingWarningMessage:()=>cy.get('.ui-messages'),
        timelineContainer2:()=>cy.get(':nth-child(2) > app-timeline-detail-item > .chase-timeline-container > .container > :nth-child(2)'),
        assignButton:()=>cy.get('[text="Assign"]'),
        firstCheckBox:()=>cy.get("[class='grid-body__selection-mode ng-star-inserted']").eq(0),
        gridAssignButton:()=>cy.xpath("//span[normalize-space()='Assign']"),
        userAssignfield:()=>cy.get("[id='assignToUsers']"),
        assignUserDropDown:()=>cy.contains("li","@Me"),
        signOut: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Sign Out')]"),
        alreadyLoggeduser: () => cy.xpath("//span[@class='username__container--loginName']"),
        loginuserName: () => cy.get("#username"),
        password: () => cy.get("#password"),
        login: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Login')]"),
        processingTab:()=>cy.xpath("//span[normalize-space()='Processing']"),
        statCount:()=>cy.get('.activeAssignedTo'),
        processingContainer:()=>cy.get('.users-land-stats-keyItem > :nth-child(1)'),
        tableList:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-fileName ng-star-inserted']"),
        fileNameList:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-fileName ng-star-inserted']"),
        documentIdList:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-documentId ng-star-inserted']"),
        firstFile:()=>cy.get('[class="hdvi-gridcol hdvi-gridcol-fileName ng-star-inserted"]').eq(0),
        documentContainer:()=>cy.get("[class='headerDetail']"),
        documentIntakePageHeader:()=>cy.get("[class='ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all ng-star-inserted']"),
        filterModal:()=>cy.get("[class='ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-left']"),
        filterCancelButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Cancel')]"),
        FilterclearButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Clear')]"),
        documentIntakeTable:()=>cy.get("[class='ui-column-value ng-star-inserted']"),
        filterStatus:()=>cy.xpath("//span[@class='ui-tabview-title ng-star-inserted'][normalize-space()='Status']"),
        selectAllButton:()=>cy.get("p-button[class='small'] button[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'] span[class='ui-button-text ui-clickable']"),
        threeDotActionList:()=>cy.get("[class='ui-overlaypanel-content']"),
        removeButton:()=>cy.get("app-button[text='Remove'] span[class='ui-button-text ui-clickable']"),
        removeHeader:()=>cy.get("cy.get('.activeAssignedTo')").eq(0),
        unassigned:()=>cy.get("[class='ui-column-value ng-star-inserted']"),
        documentThreeDot:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-state-disabled']").eq(0),
        pagination:()=>cy.get("[class='ng-tns-c39-36 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted']"),
        tableGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-fileName ng-star-inserted']"),
        assignButtonDetailPage:()=>cy.get('[text="ASSIGN"]'),
        container:()=>cy.get("[class*='ng-trigger ng-trigger-overlayAnimation']"),
        dropDownArrow:()=>cy.get("[class*='ui-autocomplete-dropdown']"),
        unHoldOptions:()=>cy.contains('li','UNHOLD'),
        unholdDropDownArrow:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-chevron-down']").eq(1),
        activeNonHoldTab:()=>cy.get(':nth-child(4) > .users-land-stats-item > .clearAssignedTo'),
        unHoldNotes:()=>cy.get("[id='note']"),
        filterContainer:()=>cy.get('app-tab-menu.ng-star-inserted > p-tabview > .ui-tabview > .ui-tabview-nav'),
        disabledFilter:()=>cy.get("[class='ui-state-default ui-corner-left ui-state-disabled ng-star-inserted']"),
        assignedToFilter:()=>cy.get("[class='ui-state-default ui-corner-left ng-star-inserted']").eq(1),
        fileNameField:()=>cy.get('[id="fileName"]'),
        projectFilter9:()=>cy.get('#ui-tabpanel-13-label > .ui-tabview-title')
        






    }
    clickOnRetrievalMenuButton() {
        cy.clickElement(this.retrievalMenuButton)
    }
    clickOnDocumentIntake() {
        this.elements.documentIntakeSubMenu().click()
    }
    verifyUrl() {
        cy.url().should('include', 'https://uat.reveleer.com/retrieval/review')
    }
    verifyStatisticContainer() {
        this.elements.statisticsContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['Total Documents', 'Assigned', 'Unassigned', 'Active (Non-Hold)', 'On Hold'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    clickOnExportAllButton() {
        this.elements.exportAllButton().click()
    }
    verifyGridColumn() {
        this.elements.gridColumn().scrollIntoView().each(($element) => {
            const textsToVerify = ['File Name', 'Document ID', 'Retrieval Method', 'Captured Date', 'Available Date', 'Pages', 'Last Updated By', 'Assigned To', 'Note', 'Status', 'Tags'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    clickOnSortingArrow() {
        this.elements.fileNameHeader().realHover()
        this.elements.sortingArrow().click()
    }
    logFirstFileName() {
        this.elements.firstFileName().invoke('text').as('captureFileName')
            .then(($e1) => {
                cy.wrap($e1)
            })
    }
    verifySorting() {
        cy.get('@captureFileName').then($e1 => {
            this.elements.firstFileName().should('not.contain', $e1)
        })
    }
    clickOnFirstFile() {
        this.elements.firstFileName().click()
    }
    verifyUrl2() {
        cy.url().should('include', 'https://uat.reveleer.com/retrieval/review/intake')
    }
    clickOnFilterIcon() {
        this.elements.filterIcon().click()
    }
    clickOnFilterIcon() {
        this.elements.filterIcon().click()
    }
    verifyFilterContainer() {
        this.elements.filterContainer().should('be.visible')
    }
    clickOnThreeDotButton() {
        this.elements.threeDotButton().click()
    }
    clickOnAssignTo() {
        this.elements.assignTo().click()
    }
    typeOnAssignUserField() {
        this.elements.assignUserField().type("@Me")
    }
    clickOnAssignUserDropDown() {
        this.elements.assignUserDropDownField().click()
    }
    clickOnAssignButton() {
        this.elements.assignButton().click()
    }
    verifyAssignToGrid() {
        this.elements.assignToGrid().should('be.visible').and('includes.text', 'Automation uat')
    }
    verifySearchFied() {
        this.elements.searchField().should('be.visible')
    }
    clickOnCommentTab() {
        this.elements.commentab().click()
    }
    typeIncommentTab(comment) {
        this.elements.commentField().type(comment)
    }
    clickOnSendMessage() {
        this.elements.sendMessageButton().click()
        cy.wait(1000)
    }
    verifyComment(comment) {
        this.elements.messageBody().should('be.visible').and('includes.text', comment)
    }
    clickOnTimelineHeader() {
        this.elements.timeLineHeader().click()
    }
    verifyTimeLineContainer() {
        this.elements.timelineContainer().should('be.visible')
    }
    clickOnTagLogo() {
        this.elements.addTagLogo().click()
    }
    clickOnTagField(tags) {
        this.elements.tagField().type(tags)
    }
    clickOnTagDropDown() {
        this.elements.tagDropDown().click()
    }
    verifyAddTagInTimeLine() {
        this.elements.addTagComment().should('be.visible').and('includes.text', 'Tag A1 MJ added to document')
    }
    clickOnChartHeader() {
        this.elements.chartHeader().click()
    }
    clickOnCreatedTag() {
        this.elements.createdtag().click()
    }
    clickOnCrossButton() {
        this.elements.crossButton().click()
    }
    verifyChartPage() {
        this.elements.chartPage().should('be.visible')
    }
    clickOnIgnoreThispageButton() {
        this.elements.ignoreThispageButton().click()
    }
    typeInStartPageField(startPage) {
        this.elements.startPageField().type(startPage)
    }
    typeInEndPageField(endPage) {
        this.elements.endPageField().type(endPage)
    }
    clickOnAcceptButton() {
        this.elements.acceptButton().click()
    }
    verifyIgNorePageSucessMessage(IgnoreToastMessage) {
        this.elements.SucessFulToastForIgnorePages().should('be.visible').and('includes.text', IgnoreToastMessage)
    }
    verifyWorkingGridData() {
        this.elements.workingGridData().should('be.visible').and('includes.text', 'Ignore')
    }
    verifyWorkingGridData2() {
        this.elements.workingGridData2().should('be.visible').and('includes.text', '(1 - 2)')
    }
    verifyPageRangeErrorMessage() {
        this.elements.pageRangeErrorMessage().should('be.visible')
    }
    verifyAcceptButtonIsDisabled() {
        this.elements.disabledStateAcceptButton().should('have.class', 'ui-state-disabled', 'disabled')
    }
    clickOnCLinicalButton() {
        this.elements.clinicalMenuButton().click()
    }
    clickOnMrrButton() {
        this.elements.mrrSubMenuButton().click()
    }
    clickOnRunQuerry() {
        this.elements.runQuerryButton().click()
    }
    logFirstFirstChase() {
        this.elements.firstChase().scrollIntoView().invoke('text')
            .then(text => {
                // Remove the 'Chase ID' and any parentheses and their content
                const trimmedAid = text.replace(/Chase ID|\([^)]*\)/g, '').trim();

                // Update the alias with the trimmed value
                cy.wrap(trimmedAid).as('captureChaseId');
            });


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
    clickOnThisPageIsPartOfChaseButton() {
        this.elements.thisPageIsPartOfAChaseButton().click()
    }
    clickOnCommitChaseAssignmentButton() {
        this.elements.commitChaseAssignmentButton().scrollIntoView().click()
    }
    clickOnChasIdHeader() {
        this.elements.chaseIdHeader().scrollIntoView().click()
    }
    verifyChaseId() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.commitedGridContainer().should('be.visible').and('includes.text', captureChaseId)
        })
    }
    verifyChaseIdPages() {
        this.elements.chaseIdPages().should('be.visible').and('includes.text', '(1 - 1)')
    }
    clickOnChaseHeader2() {
        this.elements.chaseIdHeader2().click()
    }
    verifyChaseInWorkingPage() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.workingpageContainer().should('includes.text', captureChaseId)
        })
    }
    verifySearchContainer() {
        this.elements.searchChaseContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['AID', 'First Name', 'Last Name', 'DOB', 'Provider Name'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    clickOnSearchButton() {
        this.elements.searchButton().click()
    }
    enterAid(AID) {
        this.elements.aidBox().type(AID)
    }
    enterFirstName(FirstName) {
        this.elements.firstNameBox().type(FirstName)
    }
    enterLastName(LastName) {
        this.elements.lastNameBox().type(LastName)
    }
    enterProviderName(ProviderName) {
        this.elements.providerNameBox().type(ProviderName)
        this.elements.searchButton().eq(0).click()
        cy.wait(1000)
        this.elements.tableRadioButton().should('be.visible')
    }
    verifyWorkingGridPage() {
        this.elements.workingGridPage().should('be.visible').and('includes.text', 'WORKING PAGES')
    }
    clickOnSortingIcon() {
        this.elements.sortingIcon().click()
    }
    logPageNo() {
        this.elements.workingGridData2().invoke('text').invoke('replace', 'Page Range', '')
            .then(trimmedAid => cy.wrap(trimmedAid).as('capturePageNo'));
    }
    verifySorting2() {
        cy.get('@capturePageNo').then(capturePageNo => {
            this.elements.workingGridData2().should('not.contain', capturePageNo)
        })
    }
    logPageNo2() {
        this.elements.workingGridData2().invoke('text')
            .then(text => {
                // Use a regular expression to capture the desired result
                const match = text.match(/\(([^-]+)\s*-\s*\d+\)/);

                // Extract the captured result or use the original text if no match is found
                const trimmedAid = match ? match[1].trim() : text.trim();

                // Log the result
                cy.log(trimmedAid);

                // Assign the result to an alias if needed
                cy.wrap(trimmedAid).as('capturePageNo1');
            })

    }
    clickOnThreeDotIcon() {
        this.elements.threeDotButton().click()
    }
    clickOnGoToButton() {
        this.elements.goToButton().scrollIntoView().click()
    }
    verifyCurrentPageNo() {
        cy.get('@capturePageNo1').then(capturePageNo1 => {
            this.elements.currentPageNo().should('have.value', capturePageNo1)
        })
    }
    logUnassignedPage() {
        this.elements.unassignedPage().invoke('text')
            .then(text => {
                // Use a regular expression to capture the desired result
                const match = text.match(/\(([^-]+)\s*-\s*\d+\)/);

                // Extract the captured result or use the original text if no match is found
                const trimmedAid = match ? match[1].trim() : text.trim();

                // Log the result
                cy.log(trimmedAid);

                // Assign the result to an alias if needed
                cy.wrap(trimmedAid).as('capturePageNo2');
            })
    }
    verifyCurrentPageNoForUnassignedPage() {
        cy.get('@capturePageNo2').then(capturePageNo2 => {
            this.elements.currentPageNo().should('have.value', capturePageNo2)
        })
    }
    clickOnUnassignedThreeDotIcon() {
        this.elements.unassignedthreeDotIcon().scrollIntoView().click()
    }
    clickOnCommitChaseThreeDot() {
        this.elements.commitPagesThreeDot().scrollIntoView().click()
    }
    clickOnRemoveOption() {
        this.elements.removeOption().should('be.visible').and('includes.text', 'Remove')
        this.elements.removeOption().click()
    }
    logPageNo3() {
        this.elements.pageNo().invoke('text').invoke('replace', 'Of', '')
            .then(trimmedAid => cy.wrap(trimmedAid).as('capturePageNo4'));
    }
    verifyPageIsdeleted() {
        cy.wait(3000)
        cy.get('@capturePageNo4').then(capturePageNo4 => {
            this.elements.pageNo().should('not.contain', capturePageNo4)
        })
    }
    verifySucessToastForDeletion(deletionToastMessage) {
        this.elements.sucessToast().should('be.visible').and('includes.text', deletionToastMessage)
    }
    clickOnRemovePopUp() {
        this.elements.removePopUp().click()
    }
    clickOnfirstChaseId() {
        this.elements.firstChaseId().click()
    }
    clickOnSearchIcon() {
        this.elements.searchIcon().click()
    }
    clickOnGobalSearch() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.globalSearch().type(captureChaseId)
        })
    }
    clickOnChaseId() {
        cy.wait(1000)
        this.elements.searchedChaseId().click()
    }
    clickOnBackArrow() {
        this.elements.backArrow().click()
    }
    clickOnSelectProject() {
        this.elements.selectProject().click()
    }
    clickOnFilterIcon() {
        this.elements.filterIcon().click()
    }
    clickOnWorkingGridThreeDot() {
        this.elements.threeDotIconWorkingGrid().scrollIntoView().click()
    }
    verifyChaseInWorkingPage1() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.workingpageContainer().should('not.contain', captureChaseId)
        })
    }
    verifyCommitDisabledButton() {
        this.elements.disabledCommitButton().scrollIntoView().should('have.class', 'ui-state-disabled', 'disabled')
    }
    verifyRemoveOption() {
        this.elements.removeOption().should('not.exist')
    }
    verifyPageIsAdded() {
        cy.wait(3000)
        cy.get('@capturePageNo4').then(capturePageNo4 => {
            this.elements.pageNo().should('not.contain', capturePageNo4)
        })
    }
    clickOnCommitedPageHover() {
        this.elements.commitedPageHover().realHover().should('be.visible', 'Commited Pages is where you can see all pages attached to Chases,Pends and Invoices.')
    }
    verifyCommitPageHeader() {
        this.elements.commitmentPageHeader().should('be.visible').and('includes.text', 'COMMITTED PAGES')
    }
    logCommittedPageNo() {
        cy.wait(1000)
        this.elements.commitedPageRange().scrollIntoView().invoke('text')
            .then(text => {
                // Use a regular expression to capture the desired result
                const match = text.match(/\(([^-]+)\s*-\s*\d+\)/);

                // Extract the captured result or use the original text if no match is found
                const trimmedAid = match ? match[1].trim() : text.trim();

                // Log the result
                cy.log(trimmedAid);

                // Assign the result to an alias if needed
                cy.wrap(trimmedAid).as('capturePageNo5');
            })

    }
    verifyCurrentPageNoForCommittedPage() {
        cy.get('@capturePageNo5').then(capturePageNo5 => {
            this.elements.currentPageNo().should('have.value', capturePageNo5)
        })
    }
    verifyAlertMessage(alertMessage) {
        this.elements.alertMessage().should('be.visible').and('have.text', alertMessage)
    }
    verifySuccessToast(successMessage) {
        this.elements.sucessToast().should('be.visible').and('have.text', successMessage)
    }
    clickOnPartOfAnInvoiceButton() {
        this.elements.partOfAnInvoiceButton().click()
    }
    verifyInvoiceContainer() {
        this.elements.invoiceContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['Start Pg', 'End Pg', 'Chase ID'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    verifyTheTextInInvoice(text) {
        this.elements.invoiceContainer().should('contain.text', text)
    }
    typeInInvoiceStartPage(invoicestartPage) {
        this.elements.invoiceStartPage().type(invoicestartPage)
    }
    typeInInvoiceEndPage(invoiceEndPage) {
        this.elements.invoiceEndPage().type(invoiceEndPage)
    }
    typeInInvoiceChaseIdField() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.invoiceChaseIdField().type(captureChaseId)
        })
    }
    typeInvalidCHaseId(InvalidChaseId) {
        this.elements.invoiceChaseIdField().type(InvalidChaseId)
    }
    verifyAlertMessageForInvalidChaseId(invalidChaseIdErrorMessage) {
        this.elements.alertMessage().should('be.visible').and('have.text', invalidChaseIdErrorMessage)
    }
    clickOnThirdPartyCopyCenterSubMenuButton() {
        this.elements.thirdPartyCopyCenterSubMenuButton().click()
    }
    clickOnProjectFilter() {
        this.elements.projectFilter().click()
    }
    clickOnFirstAid() {
        this.elements.firstAid().click()
    }
    verifySuccessToastForInvoice(invoiceSuccessMessage) {
        this.elements.sucessToast().should('be.visible').and('have.text', invoiceSuccessMessage)
    }
    logAidChaseId() {
        this.elements.aidChaseId().scrollIntoView().invoke('text').as('captureAIdChaseId')
            .then(($e1) => {
                cy.wrap($e1)
            })
    }
    typeInInvoiceChaseIdField1() {
        cy.get('@captureAIdChaseId').then($e1 => {
            this.elements.invoiceChaseIdField().type($e1)
        })
    }
    clickOnChangeVendor() {
        this.elements.changeVendor().click()
    }
    clickOnYesOption() {
        this.elements.yesOption().click()
    }
    clickOnChangeVendorField() {
        const originalFileNames1 = ["AutomationCOD(COD)", "cizfwnmn(COD)", "dhqowhhzbc (NET30,Chart: $25,CNR: $35)", "csyngg (NET30,Chart: $50,CNR: $100)", "dds (NET30,Chart: $1,CNR: $1)", "DevDemoMng (MANAGED,Chart: $30.00,CNR: $7.00)"];
        const randomIndexFile1 = Cypress._.random(0, originalFileNames1.length - 1);
        const randomFileName1 = originalFileNames1[randomIndexFile1];
        this.elements.changeVendorField().type('a')
        cy.get("[role='option']").contains(randomFileName1).click();
    }
    clickOnVendorAssignButton() {
        this.elements.vendorAssignButton().click()
    }
    verifyChaseId1() {
        cy.get('@captureAIdChaseId').then($e1 => {
            this.elements.chaseId().should('be.visible').and('includes.text', $e1)
        })
    }
    verifyGoToButton() {
        this.elements.goToButton().should('be.visible').and('includes.text', 'Go To')
    }
    verifyViewInvoice() {
        this.elements.viewInvoice().should('be.visible').and('includes.text', 'View Invoice')
    }
    clickOnViewInvoice() {
        this.elements.viewInvoice().should('be.visible').click()
    }
    verifyUrl3() {
        cy.url().should('include', 'https://uat.reveleer.com/invoices/add/')
    }
    clickOnValidateButton() {
        this.elements.validateButton().click()
    }
    typeInInvoiceAmountField() {
        const randomNumber6 = Math.floor(Math.random() * 1000) + 1;
        this.elements.invoiceAmount().type(randomNumber6)
    }
    typeInInvoiceDateField(InvoiceDate) {
        this.elements.invoiceReceivedDate().type(InvoiceDate)
    }
    clickOnContinueButton() {
        this.elements.continueButton().click()
    }
    clickOnChaseIdFilter() {
        this.elements.chaseIdFilter().click()
    }
    typeInChaseIdField2() {
        cy.get('@captureAIdChaseId').then($e1 => {
            this.elements.chaseIdField2().type($e1)
        })
    }
    verifyErrorMessageForInvoice(errorMessage) {
        this.elements.dialogueBox().should('be.visible').and('includes.text', errorMessage)
    }
    verifyCancelButton() {
        this.elements.cancelButton().should('be.visible').and('includes.text', 'Cancel')
    }
    clickOnPartOfAPend() {
        cy.wait(2000)
        this.elements.partOfAPendButton().click()
    }
    clickOnPendCodeBox() {
        this.elements.pendCodeBox().click()
    }
    clickOnPendCodeDropDown() {
        this.elements.pendCodeDropDown().click()
    }
    typeInPendChaseField() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.pendChaseIdField().type(captureChaseId)
        })
    }
    typeInPendStartPage(pendStartPage) {
        this.elements.pendStartPage().type(pendStartPage)
    }
    typeInPendEndPage(pendEndPage) {
        this.elements.pendEndPage().type(pendEndPage)
    }
    verifyPendSucessToast(PendToastMessage) {
        this.elements.sucessToast1().should('be.visible').and('contain', PendToastMessage)
    }
    verifyPendCodeDropDownContainer() {
        this.elements.pendCodeDropDownContainer().should('be.visible')
        this.elements.pendDropDownlist().should('be.visible')
    }
    typeInPendChaseField2(InvalidPendChaseId) {
        this.elements.pendChaseIdField().type(InvalidPendChaseId)
    }
    verifyAcceptButtonIsEnabled() {
        this.elements.enabledAcceptButton().should('not.have.class', 'disabled')
    }
    logDocumentId() {
        this.elements.documentIdHeader().invoke('text').as('captureDocumentId')
            .then(($e1) => {
                cy.wrap($e1)
            })
    }
    clickOnSubmitANdGetNextButton() {
        this.elements.submitAndGetNextButton().click()
    }
    clickOnYesButton() {
        this.elements.yesButton().click()
    }
    verifyNextDocIsLoaded() {
        cy.get('@captureDocumentId').then($e1 => {
            this.elements.documentIdHeader().should('not.contain', $e1)
        })
    }
    verifyNextDocIsLoaded1() {
        cy.get('@captureDocumentId').then(Id => {
            this.elements.documentIdHeader().should('not.contain', Id)
        })
    }
    clickOnSubmitAndGetNextDropDownArrow() {
        this.elements.submitAndGetNextDropDownArrow().click()
    }
    clickOnSubmitButton1() {
        this.elements.submitDropDown().click()
    }
    clickOnHoldAndGetNextButton() {
        this.elements.holdAndGetNextButton().click()
    }
    clickOnDocumentReason() {
        cy.wait(2000)
        this.elements.documentReason().click()
    }
    selectHoldStatusDropDown() {
        this.elements.holdStatusDropDown().click()
    }
    clickOnSubmitButton() {
        this.elements.submitButton().click()
    }
    logDocumentId2() {
        this.elements.documentIdHeader().invoke('text').as('captureDocumentId')
            .then(($e1) => {
                const fullText = $e1.text || $e1;
                // Assuming "DOCUMENT ID: " and "(UNDEFINED)" are static parts
                const trimmedDocumentId = fullText.replace('DOCUMENT ID: ', '').replace('(UNDEFINED)', '').trim();
                cy.log(trimmedDocumentId);
                cy.wrap(trimmedDocumentId).as('Id');
            });
    }
    clickOnDocumentIdFilter() {
        this.elements.documentIdFilter().click()
    }
    typeOnDocumetField() {
        cy.get('@Id').then(Id => {
            this.elements.documentIdField().type(Id)
        })
    }
    verifyDcoucmentIdGrid() {
        cy.get('@Id').then(Id => {
            this.elements.documenntIdGrid().should('contain', Id)
        })
    }
    clickOnHoldAndGetNextDropDownArrow() {
        this.elements.holdAndGetNextDropDownArrow().click()
    }
    clickOnHoldButton() {
        this.elements.holdDropDown().click()
    }
    clickOnOnHoldStats() {
        this.elements.onHoldStats().click()
    }
    clickOnRemoveAndGetNextButton() {
        this.elements.removeAndGetNextButton().click()
    }
    clickOnRemoveContinueButton() {
        this.elements.removeConitueButton().click()
    }
    clickOnArchieveTab() {
        this.elements.archiveTab().click()
    }
    clickOnRemoveStats() {
        this.elements.removeStats().click()
    }
    clickOnRemoveAndGetNextButtonDropDown() {
        this.elements.removeAndGetNextDropDownArrow().click()
    }
    clickOnRemoveDropDown() {
        this.elements.RemoveDropDown().click()
    }
    logDocumentAid3() {
        this.elements.documentAidId().invoke('text').as('captureAidDocumentId')
            .then(($e1) => {
                cy.log($e1)
                cy.wrap($e1).as('captureAidDocumentId')
            })
    }
    typeOnDocumetField1() {
        cy.get('@captureAidDocumentId').then($e1 => {
            this.elements.documentIdField().type($e1)
        })
    }
    verifyDcoucmentIdGrid1() {
        cy.get('@captureAidDocumentId').then($e1 => {
            this.elements.documenntIdGrid().should('contain', $e1)
        })
    }
    verifyArchieveContainer() {
        this.elements.archieveContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['Completed', 'Removed'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    verifyFilename() 
    {
       this.elements.pdfFile()
       .should('exist')
       .invoke('text')  
       .should('include', '.pdf');
    }
    logPursuitChase() {
        this.elements.secondChase().scrollIntoView().invoke('text')
            .then(text => {
                // Remove the 'Chase ID' and any parentheses and their content
                const trimmedAid = text.replace(/Chase ID|\([^)]*\)/g, '').trim();

                // Update the alias with the trimmed value
                cy.wrap(trimmedAid).as('captureChaseId7');
            });
    }
    clickOnpursuitChaseId() {
        this.elements.secondChase().click()
    }
    typeInChaseIdField7() {
        cy.get('@captureChaseId7').then(captureChaseId7 => {
            this.elements.chaseIdField().type(captureChaseId7)
        })
    }
    clickOnGobalSearch3() {
        cy.get('@captureChaseId7').then(captureChaseId7 => {
            this.elements.globalSearch().type(captureChaseId7)
        })
    }
    typeInChaseStartPageField9(chaseStartPage) {
        this.elements.chaseStartPageField().clear().type(chaseStartPage)
    }
    typeInChaseEndPageField9(chaseEndPage) {
        this.elements.chaseEndPageField().clear().type(chaseEndPage)
    }
    typeInChaseIdField9() {
        cy.get('@captureChaseId7').then(captureChaseId7 => {
            this.elements.chaseIdField().clear().type(captureChaseId7)
        })
    }
    verifyOverLappingWarningMessage(Overlappingmessage)
    {
        this.elements.overLappingWarningMessage().should('be.visible').and('includes.text',Overlappingmessage)
    }
    verifyTimeContainer2(timelineComment)
    {
        this.elements.timelineContainer2().should('be.visible').and('includes.text',timelineComment)
    }
    verifyAssignButton()
    {
        this.elements.assignButton().should('be.visible').and('includes.text','Assign')
    }
    clickOnFirstCheckBox()
    {
        this.elements.firstCheckBox().click()
    }
    verifyGridAssignButton()
    {
        this.elements.gridAssignButton().should('be.visible').and('includes.text','Assign')
    }
    typeInUserAssignField(assignUser)
    {
        this.elements.assignUserField().type(assignUser)
    }
    clickOnUserAssignDropDown()
    {
        this.elements.assignUserDropDown().click()
    }
    verifySucessToastForAssignedUser(userAssignedToastMessage)
    {
        this.elements.sucessToast().should('be.visible').and('includes.text',userAssignedToastMessage)
    }
    clickOnAssignButton()
    {
        this.elements.assignButton().click()
    }
    verifywithManagerAndLeadRoles(userroles,password)
    {
        this.elements.alreadyLoggeduser().scrollIntoView().click()
        this.elements.signOut().click()
        this.elements.loginuserName().type(userroles)
        this.elements.password().type(password)
        this.elements.login().click()
    }
    verifyProcessingTab()
    {
        this.elements.processingTab().should('be.visible').and('includes.text','Processing')
    }
    clickOnProcessingTab()
    {
        this.elements.processingTab().click()
    }
    verifyStatCount()
    {
        this.elements.statCount().should('be.visible').and('not.be.empty')
    }
    verifyprocessingContainer() {
        this.elements.processingContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['Processing'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    logstatCount() {
        this.elements.statCount().invoke('text').as('captureStatCount')
            .then(($e1) => {
                cy.log($e1)
                cy.wrap($e1).as('captureProcessingStatCount')
            })
    }
    verifyTableList() 
    {
        cy.wait(5000)
        this.elements.tableList().should('be.visible').then(($options) => {
            const numberOfElements = $options.length;
            cy.log(`Number of elements: ${numberOfElements}`);

            // Extract the number from the log message
            const matches = /(\d+)/.exec(`Number of elements: ${numberOfElements}`);
            if (matches && matches[1]) {
                const trimmedNumber = parseInt(matches[1]);
                globalTrimmedNumber = trimmedNumber; // Store the trimmed number globally
                cy.log(`Trimmed number: ${globalTrimmedNumber}`);

                // Log only the trimmed number
                cy.log(globalTrimmedNumber.toString());
                cy.get('@captureProcessingStatCount').then(captureProcessingStatCount => {
                expect(globalTrimmedNumber.toString()).to.equal(captureProcessingStatCount.toString());
                })
            }
        });

    }
    verifyGridColumn2() {
        this.elements.gridColumn().scrollIntoView().each(($element) => {
            const textsToVerify = ['File Name', 'Document ID', 'Retrieval Method','Captured Date', 'Pages','AID','Confirmation Number'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    verifyFileNameisReadOnlyView()
    {
        this.elements.fileNameList().should('not.have.attr', 'href')
    }
    verifyDocumentIdIsNotClickable()
    {
        this.elements.documentIdList().should('not.have.attr', 'href')
    }
    logFirstFile() 
    {
        this.elements.firstFile().invoke('text').invoke('replace', 'File Name', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('captureFirstFileName'));
    }
    verifyDownloadedFileName()
    {
        const downloadFolderPath = 'cypress/downloads/download.csv'
        cy.get('@captureFirstFileName').then((capturedFileName) => {
            const filePath = `cypress/downloads/download.csv`
            cy.task('readFile', filePath).then((fileContent) => {
              expect(fileContent).to.include(capturedFileName);
            });
          });
    }
    verifyAidHeaderIsNotPresent()
    {
        this.elements.documentContainer().should('be.visible').and('not.contain','AID')
    }
    logsecondChase() {
        this.elements.firstChase().scrollIntoView().invoke('text')
            .then(text => {
                // Remove the 'Chase ID' and any parentheses and their content
                const trimmedAid = text.replace(/Chase ID|\([^)]*\)/g, '').trim();

                // Update the alias with the trimmed value
                cy.wrap(trimmedAid).as('captureChaseId');
            });


    }
    verifyActiveANdAchiveTab() {
        this.elements.documentIntakePageHeader().scrollIntoView().each(($element) => {
            const textsToVerify = ['Active','Archive'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    verifyFilterModal()
    {
        this.elements.filterIcon().click()
        this.elements.filterModal().should('be.visible')
    }
    verifyFilterCancelButton()
    {
        this.elements.filterCancelButton().click()
        this.elements.filterModal().should('not.exist')
    }
    verifyClearButton()
    {
        this.elements.documentIntakeTable().should('be.visible')
        this.elements.filterIcon().click()
        this.elements.filterStatus().click()
        this.elements.FilterclearButton().click()
        this.elements.runQuerryButton().click()
        this.elements.documentIntakeTable().should('not.exist')
    }
    verifyRunQueryButton()
    {
        this.elements.filterIcon().click()
        this.elements.filterStatus().click()
        this.elements.selectAllButton().click()
        this.elements.runQuerryButton().click()
        this.elements.documentIntakeTable().should('be.visible')
    }
    verifyThreeDotActionButtonList()
    {
        this.elements.threeDotButton().click()
        this.elements.threeDotActionList().scrollIntoView().each(($element) => {
            const textsToVerify = ['Assign To', 'Download', 'Remove'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    logDocumentId3()
    {
        this.elements.documentIdList().eq(0).invoke('text').invoke('replace', 'Document ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('doucmentId1'));
    
    }
    clickOnRemoveOption()
    {
        this.elements.threeDotButton().click()
        this.elements.removeButton().click()
        cy.wait(1000)
        cy.get('@doucmentId1').then(doucmentId1 => {
            this.elements.documentIdList().should('not.contain',doucmentId1)
        })
    }
    typeOnDocumetField4() {
        cy.get('@doucmentId1').then(doucmentId1 => {
            this.elements.documentIdField().type(doucmentId1)
        })
    }
    verifyDcoucmentIdGrid4() {
        cy.get('@doucmentId1').then(doucmentId1 => {
            this.elements.documenntIdGrid().should('contain', doucmentId1)
        })
    }
    typeInChaseIdField3(invalidChaseId) 
    {
            this.elements.chaseIdField().type(invalidChaseId)  
    }
    verifyAlertMessageForInvalidChaseId1(invalidChaseIdErrorMessage) {
        this.elements.invalidChaseIdContainer().should('be.visible').and('have.text', invalidChaseIdErrorMessage)
    }
    verifyThreeDotActionButtonListInWorkingPage()
    {
        this.elements.threeDotButton().click()
        this.elements.threeDotActionList().scrollIntoView().each(($element) => {
            const textsToVerify = ['Go To', 'Remove'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    clickOnRemoveButton()
    {
        this.elements.removeButton().click()
    }
    verifyUnassigned()
    {
        this.elements.unassigned().should('be.visible').and('includes.text','Unassigned')
    }
    RemoveOptionIsNotVisible() {
        this.elements.removeOption().should('not.exist')
        
    }
    logPagination()
    {
        this.elements.pagination().invoke('text').as('capturepaginationNo')
        .then(($e1) => {
            cy.wrap($e1)
        })
    }
    verifyPagination()
    {
        cy.wait(5000)
        this.elements.tableGrid().then(($options) => {
            const numberOfElements = $options.length;
            cy.log(`Number of elements: ${numberOfElements}`);
    
            // Extract the number from the log message
            const matches = /(\d+)/.exec(`Number of elements: ${numberOfElements}`);
            if (matches && matches[1]) {
                const trimmedNumber = parseInt(matches[1]);
                globalTrimmedNumber = trimmedNumber; // Store the trimmed number globally
                cy.log(`Trimmed number: ${globalTrimmedNumber}`);
    
                // Log only the trimmed number
                cy.log(globalTrimmedNumber.toString());
                cy.get('@capturepaginationNo').then($e1=>{
                expect(globalTrimmedNumber.toString()).to.equal($e1.toString());
                })
            }
        });
    }
    verifyAssignButtonDetailedPage()
    {
        this.elements.assignButtonDetailPage().click()
        this.elements.assignUserField().type("@Me")
        this.elements.assignUserDropDownField().click()
        this.elements.continueButton().click()
        this.elements.sucessToast().should('be.visible').and('includes.text','Assignment Successful')

    }
    verifyDocumentIntake()
    {
        this.elements.container().should('be.visible').and('not.contain','Document Intake')
    }
    verifyAssignButtonDetailedPage1()
    {
        this.elements.assignButtonDetailPage().click()
        this.elements.dropDownArrow().click()
        this.elements.container().eq(1).should('be.visible').and('includes.text','aarti employeedocintake')

    }
    clickOnUnHoldOption(notes)
    {
        this.elements.unholdDropDownArrow().click()
        this.elements.unHoldOptions().click()
        this.elements.unHoldNotes().type(notes)
        this.elements.submitButton().click()
    }
    clickOnActiveNonHoldTab()
    {
        this.elements.activeNonHoldTab().click()
    }
    verifyFilterContainer()
    {
        this.elements.filterContainer().scrollIntoView().each(($element) => {
            const textsToVerify = ['File Name', 'Document Id','Retrieval Method','Confirmation Number','Aid'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    VerifyDisabledFilter()
    {
        this.elements.assignedToFilter().click()
        this.elements.disabledFilter().eq(0).should('have.class','ui-state-disabled')
        this.elements.disabledFilter().eq(1).should('have.class','ui-state-disabled')
        this.elements.disabledFilter().eq(2).should('have.class','ui-state-disabled')
    }
    typeInFileNameField()
    {
        cy.get('@captureFileName').then((captureFileName) => {
        this.elements.fileNameField().type(captureFileName)
        this.elements.runQuerryButton().click()
        this.elements.firstFile().should('be.visible').and('includes.text',captureFileName)
        })
    }
    verifyAidHeaderIsPresent()
    {
        this.elements.documentContainer().should('be.visible').and('contain','AID')
    }
    clickOnProjectFilter9()
    {
        this.elements.projectFilter9().click()
    }


  














}
export default documentIntake