const { should } = require("chai")

class EMRAddressDetailsPage {
    elements = {
        assignedToOnDetailsPage: () => cy.xpath("(//div[@class='info-item-template'])[3]/app-info-item-container/div/div/div[./text()='Assigned To:']/following-sibling::div"),
        assignedToUserToChaseTextBox: () => cy.get("#assignToUsers"), // sendkey
        successfulMessage: (message) => cy.xpath("//div[./text()='" + message + "']"),
        editAddressButton: () => cy.xpath("(//span[./text()='Edit']/parent::button)[1]"), //type
        editAddressGroupNameTextBox: () => cy.get("#groupName"), //type
        editAddressPhoneTextBox: () => cy.get("#phone"), //type
        editAddressFaxTextBox: () => cy.get("#fax"), //type
        editAddressEmailTextBox: () => cy.get("#email"), //type
        editAddress1: () => cy.get("#address1"), //type
        editAddressApplyEditsButton: () => cy.xpath("//span[./text()='Apply Edits']/parent::button"), // click
        addressGroupName: () => cy.xpath("//div[./text()='Group Name:']/following-sibling::div"),
        addressPhoneNumber: () => cy.xpath("//div[./text()='Phone:']/following-sibling::div"),
        addressFaxNumber: () => cy.xpath("//div[./text()='Fax:']/following-sibling::div"),
        addressEmailId: () => cy.xpath("//div[./text()='Email:']/following-sibling::div"),
        address1: () => cy.xpath("//div[./text()='Address:']/following-sibling::div"),
        QueuedForSendingMsg: (type) => cy.xpath("//div[./text()='" + type + " Queued for Sending.']"),

        //Filter
        filterBystatus: () => cy.xpath("//ul//li[5]//span[contains(text(),'Status')]"),
        filterByaidstatus: () => cy.xpath("//ul//li[7]//span[contains(text(),'Status')]"),
        filterStatusUnscheduled: () => cy.xpath("//div[@class='ui-listbox-list-wrapper']//span[contains(text(),'Unscheduled')]"),
        filterStatusScheduled: () => cy.xpath("//div[@class='ui-listbox-list-wrapper']//span[contains(text(),'Scheduled')]"),
        filterStatusPastDue: () => cy.xpath("//div[@class='ui-listbox-list-wrapper']//span[contains(text(),'Past Due')]"),
        basicViewButton: () => cy.xpath("//app-grid-view[contains(text(),'Basic')]"),
        filterbyTobecontacted:()=> cy.get('.ui-listbox-list-wrapper').eq(1).find('span').eq(1).should('have.text','To Be Contacted'),
        filterbyscheduled:()=> cy.get('.ui-listbox-list-wrapper').eq(1).find('span').eq(7).should('have.text','Scheduled'),
       // filterbypastdue:()=> cy.get('.ui-listbox-list-wrapper').eq(1).find('span').should('have.text','Past Due'),
        runquerybutton:()=> cy.get('footer').find('button').get('span').contains('Run Query'),


        //Communication
        clickOnBasicViewButton: () => cy.xpath("//app-grid-view[contains(text(),'Basic')]"),
        allChaseCheckbox: () => cy.xpath("(//p-tableheadercheckbox)[2]"),
        outreachButton: () => cy.xpath("//span[./text()='Outreach']/parent::button"),

        communicationTypeDropdown: () => cy.xpath("//label[./text()='Communication Type']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
        communicationTypeOption: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),


        coverLetterDropdown: () => cy.xpath("//label[./text()='Cover Letter']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
        coverLetterOption: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),

        confirmButton: () => cy.xpath("//span[./text()='Confirm']/parent::button"),
        filtericon: () => cy.xpath("//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        AIDfilterTab: () => cy.xpath("//ul/li[1]//a//span[contains(text(),'Aid')]"),
        AIDfilterTextBox: () => cy.xpath("//input[@id='Id']"),

        // Pending chases

        pendStatusHeader: () => cy.xpath("//th[@title='Pend Status']"),
        pendId: (chaseId, owner, status) => cy.xpath("//a[./text()='" + chaseId + "']/parent::td/preceding-sibling::td/span[./text()='" + owner + "']/parent::td/preceding-sibling::td/span[./text()='" + status + "']/parent::td/preceding-sibling::td/span[./text()='Pend ID']/following-sibling::a"),
        pendId: () => cy.xpath("//span[text()='Pend ID']/following-sibling::a"),
        pendFilters: (count) => cy.xpath("(//ul[@role='tablist']/li/child::a/child::span)[" + count + "]"), //verify
        filterButton: () => cy.xpath("//app-button[@icon='filter']"),
    
        pendFiltersPendStatus: () => cy.xpath("//span[./text()='Pend Status']/parent::a/parent::li"), //click
        pendFiltersPendStatusOption: (option) => cy.xpath("//li[@aria-label='" + option + "']/child::div/child::div/child::span"), //click

        pendFiltersPendId: () => cy.xpath("//span[./text()='Pend Id']/parent::a/parent::li"), //click
        pendFiltersPendIdTextbox: () => cy.get("#chasePendId"), //type

        pendGridAllEntries: () => cy.xpath("//retrieval-address-detail-info-grids-pends/app-basic-grid/child::p-table/div/div/table/tbody/tr"), //verify

        chaseId: (chaseIdCount) => cy.xpath("(//app-chase-grid-chase-id)[" + chaseIdCount + "]/a"),

        chaseIdThreeDotOption: (chaseIdCount) => cy.xpath("(//span[./text()='Chase ID']/parent::td/parent::tr)[" + chaseIdCount + "]/td/following-sibling::td[@class='ng-star-inserted']/app-button/p-button/button"),

        pendChasesButton: () => cy.xpath("//span[./text()='Pend Chase(s)']/parent::button[not(@disabled)]"),


        //pendCodeDropdown: () => cy.xpath("//label[./text()='Pend Code']/parent::div/following-sibling::p-dropdown/child::div/div[@class='ui-dropdown-label-container']"),
        //pendCodeDropdown: () => cy.xpath("(//div[@class='ui-dropdown-trigger ui-state-default ui-corner-right'])[4]"), //click
        pendCodeDropdown: () => cy.xpath("//label[./text()='Pend Code']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
        dropdownOptionForAllListBox: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),

        statusDropdown: () => cy.xpath("//label[./text()='Status']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),

        ownerDropdown: () => cy.xpath("//label[./text()='Owner']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),

        assignedToPendDropdown: () => cy.xpath("//label[./text()='Assigned To']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),

        additionalNotes: () => cy.get("#notes"),
        saveButton: () => cy.xpath("//span[./text()='Save']/parent::button"),
        yesButtonResolvePend: () => cy.xpath("//footer//span[contains(text(),'Yes')]"),
        yesbuttontoresolve: () => cy.get('button').find('span').contains('Yes'),
        pendSaveToastmessage: () => cy.get('.ui-toast-message-text-content').find('.ui-toast-summary').get('.ui-toast-detail').should('have.text','Pend saved successfully'),
        pendsTabLink: () => cy.xpath("//div[./text()='Pends']/parent::div/parent::a"),
        chasesTabLink: () => cy.xpath("//div[./text()='Chases']/parent::div/parent::a"),
        resolvependtext: () => cy.contains('div', 'Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?'),
        assignChasesButton: () => cy.xpath("//span[./text()='Assign Chases']/parent::button"),

        // comment
        commentsTabLink: () => cy.xpath("//a[contains(@href,'comments')]"), // click
        commentBox: () => cy.xpath("(//textarea[contains(@class,'address-detail-comments-container')])[1]"), // type
        addCommentsButton: () => cy.xpath("//span[./text()='Add Comments']/parent::button"), // click
        recentCommentTimeStamp: () => cy.xpath("(//span[@class='timestamp'])[1]"), // getText
        recentCommentBody: () => cy.xpath("(//div[@class='othercomment-body'])[1]"), // getText

        //TimeLine
        timelineTabLink: () => cy.xpath("(//a[contains(@href,'timeline')])[1]"), // click
        recentCommentBodyInTimeLine: () => cy.xpath("(//div[contains(@class,'chase-timeline-container__first')]/child::div/child::div/following-sibling::div)[1]"), // getText
        recentCommentTimeStampInTimeLine: () => cy.xpath("(//div[contains(@class,'chase-timeline-container__first')]/child::div/child::div/following-sibling::div)[3]"), // getText

        //Change retrieval method
        changeRetrievalDownArrow: () => cy.xpath("//button[contains(@class,'ui-splitbutton-menubutton')]"), // click
        changeRetrievalOption: (option) => cy.xpath("//span[./text()='" + option + "']/parent::a"), // click
        retrievalAssignmentNote: () => cy.get("#retrievalAssignmentNote"), //sendkey
        changeRetrievalAssignButton: () => cy.xpath("(//span[./text()='Assign']/parent::button)[2]"), // click
        changeRetrievalUnAssignedMsg: () => cy.xpath("//div[./text()='Chases(s) have been unassigned.']"), //should visible
        changeRetrievalRetrievalType: () => cy.xpath("//div[./text()='Retrieval Type:']/following-sibling::div"), //getText and verify equal

        // Pending chases
        // chaseIdCheckbox: (chaseIdCount) => cy.xpath("//div[@class='chase-grid-container']//span[./text()='Chase ID']["+chaseIdCount+"]/parent::td/preceding-sibling::td/child::p-tablecheckbox"),
        chaseIdCheckbox: (chaseIdCount) => cy.xpath("//div[@class='chase-grid-container']//tr[1]//td[" + chaseIdCount + "]"),
        chaseStatusOnAIDdetails: () => cy.xpath("//div[@class='chase-grid-container']//tr[1]//td[9]//span[2]"),
        printButton: () => cy.xpath("(//app-button[@type='fa']/child::p-button/child::button)[2]"),
        printRequestPopup: () => cy.xpath("//span[./text()='PRINT REQUEST']/parent::div/parent::div[@role='dialog']"),
        labelthischaseisalreadypended:()=> cy.xpath("//app-toast//p-toastitem//div[contains(text(),'This chase is already Pended.')]"),
        selectTemplateDropdown: () => cy.xpath("//label[./text()='Select Template']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
        selectTemplateOption: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),
        submitButton: () => cy.xpath("(//span[./text()='Submit']/parent::button)[2]"),
        totalChasesInTable: () => cy.xpath("//div[@class='chase-grid-container']/child::app-basic-grid/child::p-table/div/div/table/tbody/tr"),
        chaseInfoTab: () => cy.xpath("//div[./text()='Chase']/parent::div/parent::a"),
        assingToOnChaseInfo: () => cy.xpath("//div[./text()='Assigned To']/following-sibling::div"),
        goBackButton: () => cy.xpath("//app-back-button[@text='Go Back']"),

        //File upload
        uploadButton: () => cy.xpath("//span[./text()='Upload']/parent::button"), // click
        chaseRadioButton: (buttonCount) => cy.xpath("(//div[contains(@class,'ui-radiobutton-box')])[" + buttonCount + "]"), // click
        selectAllYesButton: () => cy.xpath("//div[contains(@aria-label,'Select All: YES')]"), // click
        // selectAllYesButtonActive: () => cy.xpath("//div[@class='ui-button ui-widget ui-state-default ui-button-text-only ng-star-inserted ui-state-active' and @aria-label='Select All: YES']"), // 
        selectAllYesButtonActive: () => cy.xpath("//div[@aria-pressed='true' and @aria-label ='Select All: YES']"), // active 
        yesButtonActive: () => cy.xpath("//div[@class='ui-button ui-widget ui-state-default ui-button-text-only ng-star-inserted ui-state-active' and @aria-label='Yes']"), // 
        selectAllNoButton: () => cy.xpath("//div[contains(@aria-label,'Select All: NO')]"), // click
        // selectAllNoButtonActive: () => cy.xpath("//span[./text()='Select All: NO']/parent::div[@class='ui-button ui-widget ui-state-default ui-button-text-only ng-star-inserted ui-state-active']"), // 
        selectAllNoButtonActive: () => cy.xpath("//div[@aria-pressed='true' and @aria-label ='Select All: NO']"), // active
        noButtonActive: () => cy.xpath("//span[./text()='No']/parent::div[@class='ui-button ui-widget ui-state-default ui-button-text-only ng-star-inserted ui-state-active']"), // 
        fileUploadButton: () => cy.xpath("//span[contains(text(),'Upload')]/preceding-sibling::input"), // fileUpload
        uploadedFileLabel: () => cy.xpath("//div[contains(text(),'test-pdf-upload.pdf')]"), // should be
        uploadedFileLabel2: () => cy.xpath("//div[contains(text(),'test-pdf-upload2.pdf')]"), // should be
        cancelUploadedFile: () => cy.xpath("//button[contains(@icon,'pi pi-times')]"), // click

        pendThisChaseButton: () => cy.xpath("//span[./text()='Pend This Chase']/parent::button"),
        createPendPopup: () => cy.xpath("//app-create-pend-modal//span[./text()='Create Pend']/parent::div/parent::div[@role='dialog']"),

        //commintmentDate
        commintmentDateButton: () => cy.xpath("//span[./text()='Commitment Date']/parent::button"),
        commintmentDateCalendarButton: () => cy.xpath("//input[@placeholder='Date']/following-sibling::button"),
        commintmentDate: (date) => cy.xpath("//a[./text()='" + date + "']"),
        submitComDateButton: () => cy.xpath("(//span[./text()='Submit']/parent::button)[2]"),
        commintmentDateTextbox: () => cy.xpath("//input[@placeholder='Date']"),
        commintmentDateThreeDotOptionButton: () => cy.xpath("//span[./text()='Commitment Date']/parent::button[not(@disabled)]"),

        // Access information
        accessInformationLabel: () => cy.xpath("//h3[./text()='ACCESS INFORMATION']"),
        accessInformationEditButton: () => cy.xpath("//h3[./text()='ACCESS INFORMATION']/following-sibling::app-button/child::p-button/button"),
        adminContactNameTextbox: () => cy.get("#accessAdminContact"), // type
        adminPhoneNumberTextbox: () => cy.get("#accessAdminPhone"), // type
        itContactNameTextbox: () => cy.get("#accessITContact"), // type
        itPhoneNumberTextbox: () => cy.get("#accessITPhone"), // type
        emrSystemTextbox: () => cy.get("#accessEmrSystem"),
        editNotesTextbox: () => cy.get("#accessEditNotes"),
        // clickOnSaveButton()
        // verifySuccessfulMessage(Access Information successfully edited.)
        adminContactNameText: () => cy.xpath("//div[./text()='Admin Contact:']/following-sibling::div"), // getText verify .should("have.text",contactName)
        adminPhoneNumberText: () => cy.xpath("//div[./text()='Admin Phone:']/following-sibling::div"), // // getText verify
        itContactNameText: () => cy.xpath("//div[./text()='IT Contact:']/following-sibling::div"), // getText verify
        itPhoneNumberText: () => cy.xpath("//div[./text()='IT Phone:']/following-sibling::div"), // getText verify
        emrSystemText: () => cy.xpath("//div[./text()='EMR System:']/following-sibling::div"), // getText verify
        editNotesText: () => cy.xpath("//div[./text()='NOTES:']/following-sibling::div"), //getText verify

        credentialsStatusDropdown: () => cy.xpath("//input[@id='credentialStatus']/parent::div/parent::div/parent::p-dropdown"), //click
        credentialsStatusOption: (option) => cy.xpath("//p-dropdownitem/li[@aria-label='" + option + "']"), //click
        credentialsStatusText: () => cy.xpath("//div[./text()='Credential Status:']/following-sibling::div"), //getText

        // Access information Upload file
        accessFormsUploadButton: () => cy.xpath("//span[./text()='Upload']/preceding-sibling::input"), // click and file upload
        divLabel: (labelText) => cy.xpath("//div[contains(text(),'" + labelText + "')]"), // test-pdf-upload.pdf verify .should("be.visible")
        fileUploadCloseButton: () => cy.xpath("//div[contains(@class,'ui-fileupload-row ng-star-inserted')]/child::div/child::button"), // click
        submitBtn: () => cy.xpath("//p-fileupload//span[contains(text(),'Submit')]"),
        // pend grid
        pendGridChaseIdColumnValues: () => cy.xpath("//span[contains(text(),'Chase ID')]/following-sibling::a"),
        // verifyPendGridChaseIdColumnText()
        // {
        //     this.elements.pendGridChaseIdColumnValues().each((item,index,list)=>{
        //         expect(Cypress.$(item).text()).not.to.be.empty
        //         cy.wrap(item).should('not.have.value', '')
        //     })
        // }
        // Pends tab Headers
        pendIdHeader: () => cy.xpath("//th[contains(@title,'Pend ID')]/div"), // .should("be.visible")
        pendCodeHeader: () => cy.xpath("//th[contains(@title,'Pend Code')]"), // .should("be.visible")
        measureHeader: () => cy.xpath("//th[contains(@title,'Measure')]"), // .should("be.visible")
        pendStatusHeader: () => cy.xpath("//th[contains(@title,'Pend Status')]"), // .should("be.visible")
        pendOwnerHeader: () => cy.xpath("//th[contains(@title,'Pend Owner')]"), // .should("be.visible")
        chaseIDHeader: () => cy.xpath("//th[contains(@title,'Chase ID')]"), // .should("be.visible")
        projectHeader: () => cy.xpath("//th[contains(@title,'Project')]"), // .should("be.visible")
        creationDateHeader: () => cy.xpath("//th[contains(@title,'Creation Date')]"), // .should("be.visible")
        lastUpdatedHeader: () => cy.xpath("//th[contains(@title,'Last Updated')]"), // .should("be.visible")
        retrieverHeader: () => cy.xpath("//th[contains(@title,'Retriever')]"), // .should("be.visible")
        pendfiltericon:()=> cy.xpath("//app-basic-grid[@filterheadertext='Pend Query']//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        // provider grid header
        providerTabButton: () => cy.xpath("//div[./text()='Providers']/parent::div[@class='button']"), // click
        providerNameHeader: () => cy.xpath("//th[@title='Provider Name']"), // .should("be.visible")
        npiHeader: () => cy.xpath("//th[@title='NPI']"), // .should("be.visible")
        groupHeader: () => cy.xpath("//th[@title='Group']"), // .should("be.visible")
        specialityHeader: () => cy.xpath("//th[@title='Speciality']"), // .should("be.visible")
        taxIdHeader: () => cy.xpath("//th[@title='Tax ID']"), // .should("be.visible")
        addressesHeader: () => cy.xpath("//th[@title='Addresses']"), // .should("be.visible")
        validationHeader: () => cy.xpath("//th[@title='Validation']"), // .should("be.visible")

        providerTabCheckbox: () => cy.xpath("(//retrieval-address-detail-info-grids-providers/app-basic-grid/p-table/div/div/table/tbody/tr)[1]/td/p-tablecheckbox"), //click
        moveProviderButton: () => cy.xpath("//span[./text()='Move Provider']/parent::button"), // .should("be.visible")
        addressSearchPopup: () => cy.xpath("//span[./text()='ADDRESS SEARCH']/parent::div/parent::div"), // .should("be.visible")

        isValid: () => cy.xpath("//label[./text()='Is Valid']/parent::p-checkbox"), //click
        validateIsValidCheckbox: (booleanValue) => cy.xpath("//label[./text()='Is Valid']/parent::p-checkbox/child::div/child::div/following-sibling::div[@aria-checked='" + booleanValue + "']"), //.should("be.visible")

        // Pursuits tab Headers
        pursuitsTabButton: () => cy.xpath("//div[./text()='Pursuits']/parent::div[@class='button']"), // click
        pursuitsChaseIdHeader: () => cy.xpath("//th[contains(@title,'Chase ID')]"), // .should("be.visible")
        pursuitsFirstNameHeader: () => cy.xpath("//th[contains(@title,'First')]"), // .should("be.visible")
        pursuitsLastNameHeader: () => cy.xpath("//th[contains(@title,'Last')]"), // .should("be.visible")
        pursuitsDobHeader: () => cy.xpath("//th[contains(@title,'DOB')]"), // .should("be.visible")
        pursuitsGenderHeader: () => cy.xpath("//th[contains(@title,'M/F')]"), // .should("be.visible")
        pursuitsProviderNameHeader: () => cy.xpath("//th[contains(@title,'Provider Name')]"), // .should("be.visible")
        pursuitsProjectHeader: () => cy.xpath("//th[contains(@title,'Project')]"), // .should("be.visible")
        pursuitsMeasureHeader: () => cy.xpath("//th[contains(@title,'Measure')]"), // .should("be.visible")
        pursuitsDocRequestIDHeader: () => cy.xpath("//th[contains(@title,'Doc Request ID')]"), // .should("be.visible")
        pursuitsStatusHeader: () => cy.xpath("//th[contains(@title,'Status')]"), // .should("be.visible")
        pursuitsCommitHeader: () => cy.xpath("//th[contains(@title,'Commit')]"), // .should("be.visible")
        pursuitsPendHeader: () => cy.xpath("//th[contains(@title,'Pend')]"), // .should("be.visible")
        pursuitsPendStatusHeader: () => cy.xpath("//th[contains(@title,'Pend Status')]"), // .should("be.visible")

        // Hide timeline option
        timelineContainerOpen: () => cy.xpath("//div[contains(@class,'timeline-container timeline-container--open')]"),
        hideTimelineButton: () => cy.xpath("//span[contains(text(),'Hide Timeline')]/parent::button"),
        timelineContainerClose: () => cy.xpath("//div[contains(@class,'timeline-container timeline-container--close')]"),
        addressTimelineButton: () => cy.xpath("//span[contains(text(),'Address Timeline')]/parent::button"),

        // schedule appointment
        scheduleAppointmentButton: () => cy.xpath("//span[./text()='Schedule Appointment']/parent::button"), // click
        scheduleAppointmentUserDropdown: () => cy.xpath("//input[@placeholder='Select User']/following-sibling::button"), //click
        scheduleAppointmentUserTextbox: () => cy.xpath("//input[@placeholder='Select User']"), //type
        scheduleAppointmentUserSearchedUser: () => cy.xpath("(//input[@placeholder='Select User']/following-sibling::div/child::ul/child::li)[1]"), // click

        appointmentDateCalendar: () => cy.xpath("//input[@placeholder='Date']/parent::span/parent::p-calendar"), // click
        appointmentDate: (date) => cy.xpath("//a[./text()='" + date + "']"), // click
        appointmentNotes: () => cy.get("#appointmentNotes"),

        appointmentEntry: () => cy.xpath("//retrieval-address-detail-info-appointments/child::app-basic-grid/child::p-table/child::div/child::div/child::table/child::tbody/tr"), // .should("be.visible")
        appointmentEntryAssignedTo: (userName) => cy.xpath("//retrieval-address-detail-info-appointments/child::app-basic-grid/child::p-table/child::div/child::div/child::table/child::tbody/tr/td[@title='" + userName + "']"), // .should("be.visible")
        appointmentEntryThreeDotButton: () => cy.xpath("//retrieval-address-detail-info-appointments/child::app-basic-grid/child::p-table/child::div/child::div/child::table/child::tbody/tr/td[@class='ng-star-inserted']/app-button/p-button/button"), // click
        appointmentEntryEditAppointmentButton: () => cy.xpath("//span[./text()='Edit Appointment']/parent::button"), // click
        appointmentEntryCancelAppointmentButton: () => cy.xpath("//span[./text()='Cancel Appointment']/parent::button"), // click
        confirmBackDatedAppointmentPopup: () => cy.xpath("//span[./text()='Confirm Back-Dated Appointment']/parent::div/parent::div"), // .should("be.visible")
        confirmBackDatedAppointmentPopupOkButton: () => cy.xpath("//span[./text()='Ok']/parent::button"), // click
        confirmCancellationAppointmentPopup: () => cy.xpath("//span[./text()='Confirm Cancellation']/parent::div/parent::div"), // .should("be.visible")
        confirmCancellationAppointmentPopupYesButton: () => cy.xpath("//span[./text()='Yes']/parent::button"), // click

        // Export 
        exportButtonEMRGrid: () => cy.xpath("//span[./text()='Export All']/parent::button"),
        exportButtonEMRUsers: () => cy.xpath("(//span[./text()='Export All']/parent::button)[1]"),
        exportButtonEMRAppointments: () => cy.xpath("(//span[./text()='Export All']/parent::button)[2]"),
        
         //filter -AID grid
         projecttabFilter: () => cy.xpath("//ul//li//span[contains(text(),'Project(s)')]"),
         selectprojectname: (projectName) => cy.xpath("//ul//li//span[contains(text(),'" + projectName + "')]"),
         specialhandlingFilter: () => cy.xpath("//ul//li//contains(text(),'Special Handling')"),
         specialHadnlingSelectALL: () => cy.xpath("//label[contains(text(),'Special Handling')]//following::span[contains(text(),'Select All')]"),
         //SH Flag
         shIconinAIDgrid: () => cy.xpath("//app-icon[@iconname='special-assignment-address active']"),
         shICONAIDdetails: () => cy.xpath("//app-icon[@iconname='special-assignment-address']"),
         shICONenabledonDetails: () => cy.xpath("//app-icon[@iconname='special-assignment-address active']"),
 
         //SH Stats
         shstatistics: () => cy.xpath("//div[@class='item ng-star-inserted active']//following::span[contains(text(),'Special Handling')]//following::a[@class='users-land-stats-item bold']"),
         shstatsonaidgrid: () => cy.xpath("//div[@class='item ng-star-inserted'][1]//following::span[contains(text(),'Special Handling')]//following::a[@class='users-land-stats-item bold']"),
         //Enable SH
         enableSHmessage: () => cy.xpath("//app-modal//div[contains(text(),'Are you sure you want to enable Special Handling? This will move the Address into a new workflow called Special Handling.')]"),
         shcontinuebutton: () => cy.xpath("//footer//span[contains(text(),'Continue')]"),
         shcancelbutton: () => cy.xpath("span[contains(text(),'Cancel')]"),
         shdropdownicon: () => cy.xpath("//label[contains(text(),'Reason')]//following::span[@class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']"),
         shreasondropdownlabel: (shreason) => cy.xpath("//p-dropdownitem/li//span[text()='" + shreason + "']"),
         shreasonabanner: () => cy.get('span').contains('SPECIAL HANDLING: Centralized Collection'),
         shbanner: () => cy.get('app-special-handling'),
         additionalnotesvalidationerror: () => cy.xpath("//label[@title='Additional Notes']//following::div[@class='control__header__error ng-star-inserted']"),
         // shreasonbanner:()=>cy.get('.stat-container__item text-ellipse').find('span'),
         shactiveicon: () => cy.xpath("//app-icon[@iconname='special-assignment-address active']"),
         shtimeline: (shreason) => cy.xpath("//div[@class='timeline-container ng-star-inserted'][1]//app-timeline-item//div[@class='container__notes'][contains(text(),'Special handling flag SH " + shreason + " added to address')]"),
         disableSHmessage: () => cy.xpath("//app-modal//div[contains(text(),'Are you sure you want to disable Special Handling? This will move the Address back to its original retrieval workflow.')]"),
         shiconcolumn: () => cy.get("table > tbody > tr > td:nth-child(1)>app-icon"),
         shiconingrid: () => cy.xpath("//app-icon[@iconname='special-assignment-address active']"),
         shadditionalnote: () => cy.get("#specialHandlingNote"),
         enableSHcontinuebutton: () => cy.get('footer').find('span').contains('Continue'),
         Shreasonfield: () => cy.get('.address-detail-sp-field').contains('Reason'),
         Shreasonvalue: (shreason) => cy.get('.address-detail-sp-value').contains(shreason),
         ShadditionalNotesField: () => cy.get('.address-detail-sp-field').contains('Additional Notes'),
         Shadditionalnotevalue: (note) => cy.get('.address-detail-sp-value').contains(note),
         shlastupdatedBy: () => cy.get('..address-detail-sp-field').contains('Last updated by'),
         shlastupdatedByvalue: (user) => cy.get('.address-detail-sp-value').contains(user),
         shbannercontainer: () => cy.get('app-special-handling'),
         shtimelinenote: () => cy.get('.container__notes').contains('Special handling flag SH Centralized Collection added to address. Additional Notes: Automation SH reason'),
         // shactiveflagicon:()=> cy.get('.special-handling-flag'),
         //  shactiveflagicon:()=>cy.xpath("//app-icon[@class='mrcs-icon mrcs-icon-special-assignment-address active ng-star-inserted']"),
         shactiveflagicon: () => cy.xpath("//div[@class='special-handling-flag ng-star-inserted']//app-icon[@iconname='special-assignment-address active']"),
         //SH Edit Special Handling 
         Sheditmodal: () => cy.get('span').contains('Special Handling'),
         shediticon: () => cy.get('.address-detail-sp-row-container').find('img').eq(0),
         shdeleteicon: () => cy.get('.address-detail-sp-row-container').find('img').eq(1),
         shediticononeditmodal: () => cy.get('.address-detail-sp-row-container').find('img').eq(2),
         shdisablemodalheadertext: () => cy.get('span').contains('Disable Special Handling'),
         shdisablewarningtext: () => cy.contains(' Are you sure you want to disable Special Handling? This will move the Address back to its original retrieval workflow. '),
         shremovetimeline: () => cy.get('.container__notes'),
         //shactivehovertext:()=>cy.get('app-icon').find('title').contains('Edit Special Handling'),
         shfirsttimelinenote: () => cy.get('.timeline-container.ng-star-inserted').eq(1).find('div').should('have.class', 'container').find('div').eq(4),
         shupdatedtimelinenote: () => cy.xpath("//div[@class='timeline-container ng-star-inserted'][1]//div[@class='container']//div[@class='container__notes']"),
         sheditreasonmodalheader: () => cy.get('span').contains('Edit Special Handling'),
         sheditreasonmodalinstruction: () => cy.contains(" Please select reason for Special Handling "),
         //shremovetimelinenote:()=>cy.get('.timeline-container.ng-star-inserted').eq(2).find('div').should('have.class','container').find('div').eq(4),
         shremovetimelinenote: () => cy.xpath("//div[@class='timeline-container ng-star-inserted'][2]//div//div[@class='container__notes']"),
 
 
 
         //global search 
         addressdropdownicon: () => cy.xpath("//platform-global-search//span[@class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']"),
         selectaddressoption: () => cy.xpath("//p-dropdownitem//child::li[@role='option']//span[contains(text(),'Address')]"),
         globalsearchinput: () => cy.get('#globalSearchInput'),
         searchicon: () => cy.xpath("//app-button[@icon='play fa-search']//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only']"),
         addressidheader: () => cy.xpath("//th[@title='Address Id']"),
         statusheader: () => cy.xpath("//th[@title='Status']"),
         Chasesidheader: () => cy.xpath("//th[@title='Chases']"),
         addressheader: () => cy.xpath("//th[@title='Address']"),
         cityheader: () => cy.xpath("//th[@title='City']"),
         stateheader: () => cy.xpath("//th[@title='State']"),
         Groupnameheader: () => cy.xpath("//th[@title='Group Name']"),
         Phoneheader: () => cy.xpath("//th[@title='Phone']"),
 
 
         //Address Data on detail page 
 
         addressdata: () => cy.xpath("//div[@class='address-detail special-handling-address']//div[2]"),
         address2data: () => cy.xpath("//app-info-item-template[1]//div[@class='info-item ng-star-inserted'][2]//div[2]"),
         citydata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[1]//div[@class='info-item ng-star-inserted'][3]//div[2]"),
         statedata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[1]//div[@class='info-item ng-star-inserted'][4]//div[2]"),
         zipdata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[1]//div[@class='info-item ng-star-inserted'][5]//div[2]"),
         statusdata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[1]//div[@class='info-item ng-star-inserted'][6]//div[2]"),
         groupnamedata: () => cy.xpath("//app-info-item-template[3]//div[@class='info-item ng-star-inserted'][4]//div[2]"),
         Phonedata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[2]//div[@class='info-item ng-star-inserted'][1]//div[2]"),
         contactdata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[2]//div[@class='info-item ng-star-inserted'][1]//div[2]"),
         faxdata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[2]//div[@class='info-item ng-star-inserted'][3]//div[2]"),
         emaildata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[2]//div[@class='info-item ng-star-inserted'][4]//div[2]"),
         preferredRequestMethoddata: () => cy.xpath("//retrieval-address-detail-info-data//app-info-item-template[2]//div[@class='info-item ng-star-inserted'][5]//div[2]"),
         groupname: () => cy.xpath("//app-info-item-template[3]//div[@class='info-item ng-star-inserted'][4]//div[2]"),
         chasesdata: () => cy.xpath("//div[@class='stat-container__item ng-star-inserted'][1]//span[2]"),
 
         aidcolumn: () => cy.xpath("//tr[1]//td[1]//a"),
         statuscolumn: () => cy.xpath("//tr[1]//td[2]//span[2]"),
         chasescolumn: () => cy.xpath("//tr[1]//td[3]//span[2]"),
         addresscolumn: () => cy.xpath("//tr[1]//td[4]//span[2]"),
         citycolumn: () => cy.xpath("//tr[1]//td[5]//span[2]"),
         statecolumn: () => cy.xpath("//tr[1]//td[6]//span[2]"),
         groupnamecolumn: () => cy.xpath("//tr[1]//td[7]//span[2]"),
         Phonecolumn: () => cy.xpath("//tr[1]//td[8]//span[2]"),
 
         //Move Provider + Move Chase
         moveproviderbutton: () => cy.xpath("//span[contains(text(),'Move Provider')]"),
         
         // Move Chase
         movechasebutton:() => cy.get('span').contains('Move Chase(s)'),
         chasemoveNotesTextarea:()=>cy.get('textarea').should('have.attr','placeholder','Enter Notes for Chase Move.'),
         usethisaddressbutton:()=>cy.get('footer').find('button').find('span').contains('Use This Address'),
         chasemovemodalmessage:()=>cy.get('span').contains('Are you sure you want to move this chase'),
         
         
         //Address search Modal
         addressIdinput: () => cy.get("#retrievalLocationId"),
         groupnameinput: () => cy.get("#group"),
         address1input: () => cy.get('#address1'),
         contactdatainput: () => cy.get("#contactData"),
         address2inout: () => cy.get("#address2"),
         cityinput: () => cy.get('#city'),
         stateinput: () => cy.get('#state'),
         statedropdown: () => cy.xpath("//label[./text()='State']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
         stateoption: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),
 
         zipcodeinput: () => cy.get("#postalCode"),
         Findaddressesbutton: () => cy.xpath("//span[contains(text(),'Find Addresses')]"),
         searchedaddressid: () => cy.xpath("//retrieval-address-search//tr[1]//td[2]//span[2]"),
         noaddressvalidation: () => cy.xpath("//div[contains(text(),'No addresses found matching your search criteria.')]"),
         createnewadddresslink: () => cy.xpath("//span[contains(text(),'Click Here To Create A New Address')]"),
 
         //create address 
         createaddressandMovechasebutton: () => cy.xpath("//span[contains(text(),'Create Address + Move Chase')]"),
         address1requiremessage: () => cy.xpath("//div[contains(text(),'Street1 is required.')]"),
         cityisrequiredmessage: () => cy.xpath("//div[contains(text(),'City is required.')]"),
         stateisrequiredmessage: () => cy.xpath("//div[contains(text(),'State is required.')]"),
         zipisrequiredmessage: () => cy.xpath("//div[contains(text(),'Zip Code is required.')]"),
 
         //move provider modal 
 
         contactnameinput: () => cy.get("#contactData"),
         groupnameinput: () => cy.get("#groupName"),
         emailinput: () => cy.get("#email"),
         phoneinput: () => cy.get("#phone"),
         faxinput: () => cy.get("#fax"),
         //Move provider 
         //  groupnameinout
         preferredRequestMethoddropdown: () => cy.xpath("//label[./text()='Preferred Request Method']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
         preferredRequestMethod: (option) => cy.xpath("//li[@role='option' and @aria-label='" + option + "']"),
         chasemovenotes: () => cy.xpath("//textarea[@placeholder='Enter Notes for Chase Move.']"),
         chasemovebutton: () => cy.xpath("//span[contains(text(),'Move Chases')]"),
         moveproviderheader: () => cy.xpath("//span[contains(text(),'Move provider')]"),
         //   chasemovenotesrequiredmessage:()=>cy.xpath("//div[contains(text(),'Enter Notes for chase move.')]")
         contactNameinputforprovider: () => cy.get("#contactName"),
 
         // Are you sure modal 
         Areyousuremodal: () => cy.xpath("//span[contains(text(),'Are you sure you want to move this provider')]"),
         yesbutton: () => cy.xpath("//footer//span[contains(text(),'Yes')]"),
         viewaddressbutton: () => cy.xpath("//app-modal[2]//app-button[@text='VIEW THIS ADDRESS']"),
         chasemoveviewaddressbutton: () => cy.get('footer').find('span').contains('View This Address'),
         viewemradderss:()=>cy.xpath("//app-modal[1]//footer//span[contains(text(),'View This Address')]"),
         // chasemovetext:()=>cy.xpath("//div[contains(text(),' 1 chase(s) associated with selected provider(s) moved to AID 560619466 ')]"),
         viewaddresstext: () => cy.xpath("//div[@class='ng-tns-c17-2088 ui-dialog-content ui-widget-content']"),
 
         //add note
         contacthistorytab: () => cy.xpath("//div[contains(text(),'Contact History')]"),
         addnotebutton: () => cy.xpath("//span[contains(text(),'Add Note')]"),
         addnotetextfield: () => cy.get("#callNotes"),
         submitnotebutton: () => cy.xpath("//span[contains(text(),'Submit Note')]"),
         contactnotelabel: () => cy.get('.container__title').contains('CONTACT NOTE'),
         contactnoteuser: (user) => cy.xpath("//div[contains(text(),'by Reveleer Test - " + user + "')]"),
         contactnote: () => cy.xpath("//div[@class='contact-history-container']//following::div[@class='ng-star-inserted']//child::div//child::div//child::div[4][contains(text(),'Note:')]"),
 
         // filter by status
         filterbystatusoption: () => cy.xpath("//ul//li//span[contains(text(),'Status')]"),
         filterbyaidstatus: (aidstatus) => cy.xpath("//ul//li//span[contains(text(),'" + aidstatus + "')]"),
         // filterbycontacted:()=>cy.xpath("//ul//li//span[contains(text(),'Contacted')]")
         // aidstatuscolumn:()=>cy.get("table > tr > td:nth-child(11)")
         aidstatuscolumn: () => cy.xpath("//tr//td[10]//span[2]"),
 
         // back arrow 
         backarrowicon: () => cy.get('.chase-upload-container').find('.back-button').find('app-icon').should('have.class', 'fas fa-arrow-left')
     }

    
     filterbyProjectName(projectName) {
        this.elements.selectprojectname(projectName).click()
    }

    verifyAssignedUser(assignedToUser) {
        this.elements.assignedToOnDetailsPage().should("have.text", assignedToUser)
    }
    verifySuccessfulMessage(message) {
        this.elements.successfulMessage(message).should("be.visible")
    }

    // Edit Address
    clickOnEditAddressButton() {
        this.elements.editAddressButton().click()
    }
    enterGroupName(groupName) {
        this.elements.editAddressGroupNameTextBox().clear().type('{selectall}{backspace}{selectall}{backspace}')
        this.elements.editAddressGroupNameTextBox().type(groupName)
    }
    enterPhoneNumber(phoneNo) {
        cy.wait(1000)
        this.elements.editAddressPhoneTextBox().clear().type('{selectall}{backspace}{selectall}{backspace}')
        this.elements.editAddressPhoneTextBox().type(phoneNo)
    }
    enterFaxNumber(fax) {
        cy.wait(1000)
        this.elements.editAddressFaxTextBox().clear().type('{selectall}{backspace}{selectall}{backspace}')
        this.elements.editAddressFaxTextBox().type(fax)

    }
    enterEmailId(email) {
        cy.wait(1000)
        this.elements.editAddressEmailTextBox().clear().type('{selectall}{backspace}{selectall}{backspace}')
        this.elements.editAddressEmailTextBox().type(email)
    }
    enterAddress1(address1) {
        this.elements.editAddress1().clear().type(address1)
    }
    clickOnApplyEditsButton() {
        this.elements.editAddressApplyEditsButton().click()
    }

    // Verify address
    verifyEditAddressSuccessMsg() {
        this.elements.addressDetailsUpdateSuccessMsg().should("be.visible")
    }
    verifyAddressGroupName(groupName) {
        this.elements.addressPhoneNumber().should("have.text", groupName)
    }
    verifyAddressPhoneNumber(phoneNo) {
        this.elements.addressPhoneNumber().should("have.text", phoneNo)
    }
    verifyAddressFaxNumber(fax) {
        this.elements.addressFaxNumber().should("have.text", fax)
    }
    verifyAddressEmailId(email) {
        this.elements.addressEmailId().should("have.text", email)
    }
    verifyAddress1(address1) {
        this.elements.address1().should("have.text", address1)
    }

    // Communication
    clickOnAllChasesCheckbox() {
        this.elements.clickOnBasicViewButton().click()
        this.elements.allChaseCheckbox().click()

    }
    clickOnOutReachButton() {
        this.elements.outreachButton().click()
    }

    selectCommunicationType(option) {
        this.elements.communicationTypeDropdown().click()
        this.elements.communicationTypeOption(option).click()
    }
    selectCoverLetter(option) {
        this.elements.coverLetterDropdown().click()
        this.elements.coverLetterOption(option).click()
    }

    clickOnConfirmButton() {
        this.elements.confirmButton().click()
    }
    verifyQueuedForSendingMsg(type) {
        this.elements.QueuedForSendingMsg(type).should("be.visible")
    }

    // Pend Chase
    clickOnPendsTabLink() {
        this.elements.pendsTabLink().click()
    }

    clickOnChasesTabLink() {
        this.elements.chasesTabLink().click()
    }
    clickOnAssignChases() {
        this.elements.assignChasesButton().click()
    }

    clickOnChaseIdThreeDotOptionButton(chaseIdCount) {
        this.elements.clickOnBasicViewButton().click()
        this.elements.chaseIdThreeDotOption(chaseIdCount).click()
    }
    clickOnPendChasesButton() {


        this.elements.pendChasesButton().click()
    }
    SelectChaseStatusonAIDdetails() {
        this.elements.clickOnBasicViewButton().click()
        let status = this.elements.chaseStatusOnAIDdetails().text();

    }
    clickOnPendCodeDropdown() {
        this.elements.pendCodeDropdown().click()
        //this.elements.pendCodeDropdown().click()
    }
    clickOnDropdownOptionForAllListBox(option) {
        this.elements.dropdownOptionForAllListBox(option).click()
    }
    clickOnStatusDropdown() {
        this.elements.statusDropdown().click()
    }
    clickOnOwnerDropdown() {
        this.elements.ownerDropdown().click()
    }
    clickOnDropdownOptionForPC130() {

        cy.get('.ui-dropdown-label-container').find('span').contains('Client').then(($obj) => {
            expect($obj).to.have.text('Client')
        })
    }
    clickOnAssignedToPendDropdown() {
        this.elements.assignedToPendDropdown().click()
    }
    enterAdditionalNotes(notes) {
        this.elements.additionalNotes().clear().type(notes)
    }
    clickOnSaveButton() {
        this.elements.saveButton().click()
    }
    clickOnYesResolvePend() {
        this.elements.yesButtonResolvePend().click()

    }
    verifyresolvependmessage() {
        this.elements.resolvependtext().should('be.visible')
    }
    verifyclickonyesonresolvepend() {
        this.elements.yesbuttontoresolve().click()

    }
    verifyPendIdInGrid(chaseId, owner, status) {
        this.elements.pendStatusHeader().click()
        this.elements.pendId(chaseId, owner, status).should("be.visible")
    }
    verifyPendIdHyperlinkInGrid() {
        this.elements.pendId().each(($element) => {
            cy.wrap($element)
                .should('have.attr', 'href');
        });
    }
    enterAssignedToUserToChase(assignedToUser) {
        this.elements.assignedToUserToChaseTextBox().type(assignedToUser)
    }
    verifyclickonbackarrow() {
        this.elements.backarrowicon().click()
    }
    verifypendsavetoastmessage() {
        this.elements.pendSaveToastmessage().should("be.visible")
    }
    // Comments
    clickOnCommentsTabLink() {
        this.elements.commentsTabLink().click()
    }
    enterCommentInCommentBox(comment) {
        this.elements.commentBox().clear().type(comment)
    }
    clickOnAddCommentsButton() {
        this.elements.addCommentsButton().click()

    }
    verifyCurrentCommentAndTimeStamp(comment) {

        var date = new Date().toLocaleDateString('en-029', { month: "2-digit", day: "2-digit", year: "numeric" })
        var time = new Date().toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit", seconds: false, hour12: true })
        var dateAndTime = "• " + date  + " " + time.toUpperCase();

        cy.wait(1000)

        this.elements.recentCommentTimeStamp().then(($obj) => {
            //return 

            const str1 = $obj.text()
            expect(str1).to.equal(dateAndTime)

        })
        this.elements.recentCommentBody().then(($obj) => {
            //return 

            const str2 = $obj.text()
            expect(str2).to.contain(comment)

        })

    }
    clickOnTimelineTabLink() {
        this.elements.timelineTabLink().click()
    }
    verifyCurrentCommentAndTimeStampInTimeSpan(comment) {

        var date = new Date().toLocaleDateString('en-029', { month: "2-digit", day: "2-digit", year: "numeric" })
        var time = new Date().toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit", seconds: false, hour12: true })
        var dateAndTime = date  + " " + time.toUpperCase();

      //  cy.wait(1000)

        this.elements.recentCommentTimeStampInTimeLine().then(($obj) => {
            //return 

            const str1 = $obj.text()
            expect(str1).to.equal(dateAndTime)

        })
        this.elements.recentCommentBodyInTimeLine().then(($obj) => {


            //return 

            // const str2 = $obj.text()
            // expect(str2).to.contain(comment)
            const str2 = $obj.text()
            //const newstr2 = str2
           // cy.log(newstr2)
            expect(str2).to.equal(comment + " ")

        })

    }

    clickOnChangeRetrievalDownArrow() {
        this.elements.changeRetrievalDownArrow().click()
    }
    clickOnChangeRetrievalOption(option) {
        this.elements.changeRetrievalOption(option).click()
    }
    enterRetrievalAssignmentNote(note) {
        this.elements.retrievalAssignmentNote().clear().type(note)
    }
    clickOnChangeRetrievalAssignButton() {
        this.elements.changeRetrievalAssignButton().click()
    }
    verifyChangeRetrievalUnAssignedMsgAndNewRetrievalType(retrievalType) {
        this.elements.changeRetrievalUnAssignedMsg().should("be.visible")
        this.elements.changeRetrievalRetrievalType().then(($obj) => {
            //return 

            const str = $obj.text()
            expect(str).to.equal(retrievalType)

        })
    }

    clickOnChaseIdCheckbox(chaseIdCheckboxCount) {
        this.elements.chaseIdCheckbox(chaseIdCheckboxCount).click()
    }
    clickOnChaseInfoTab() {
        this.elements.chaseInfoTab().click()
    }
    verifyAssingToOnChaseInfo(assignedTo) {
        this.elements.assingToOnChaseInfo().then(($obj) => {
            //return 

            const str = $obj.text()
            expect(str).to.equal(assignedTo)

        })
        this.elements.goBackButton().click()
        this.elements.goBackButton().click()
    }
    clickOnPrintButton() {
        this.elements.printButton().click()
    }
    verifyPrintRequestPopup() {
        this.elements.printRequestPopup().should("be.visible")
    }
    selectSelectTemplateToPrintChase(option) {
        cy.wait(2000)
        this.elements.selectTemplateDropdown().trigger("click")
        this.elements.selectTemplateOption(option).click()
        this.elements.submitButton().click()
    }
    clickOnUploadButton() {
        cy.wait(2000)
        this.elements.uploadButton().trigger("click")
    }
    clickOnChaseRadioButton(buttonCount) {
        this.elements.chaseRadioButton(buttonCount).click()
    }
    clickOnSelectAllYesButton() {
        this.elements.selectAllYesButton().click()
    }
    verifySelectAllYesButtonActive() {
        cy.wait(2000)
        this.elements.selectAllYesButtonActive().should("be.visible")
        cy.wait(2000)
        this.elements.yesButtonActive().should("be.visible")
        this.elements.fileUploadButton().should("not.be.disabled")

    }
    uploadPDFSingleFile() {
        const fileName = 'test-pdf-upload.pdf'
        this.elements.fileUploadButton().attachFile(fileName)
    }
    verifyUploadedSingleFileLabel() {
        this.elements.uploadedFileLabel().should("be.visible")
    }
    uploadPDFMultipleFile() {
        const fileName1 = 'test-pdf-upload.pdf'
        const fileName2 = 'test-pdf-upload2.pdf'
        this.elements.fileUploadButton().attachFile([fileName1, fileName2])
    }
    verifyUploadedMultipleFileLabel() {
        this.elements.uploadedFileLabel().should("be.visible")
        this.elements.uploadedFileLabel2().should("be.visible")

    }
    clickOnCancelUploadedFile() {
        this.elements.cancelUploadedFile().click({ multiple: true })
    }
    clickOnSelectAllNoButton() {
        this.elements.selectAllNoButton().click()
    }
    verifySelectAllNoButtonActive() {
        cy.wait(2000)
        this.elements.selectAllNoButtonActive().should("be.visible")
        cy.wait(2000)
        this.elements.noButtonActive().should("be.visible")
        this.elements.fileUploadButton().should("have.attr", "disabled")
    }
    clickOnPendThisChaseButton() {
        this.elements.pendThisChaseButton().click()
    }
    verifyCreatePendPopup() {
        this.elements.createPendPopup().should("be.visible")
    }

    //commintmentDate
    clickOnCommintmentDateButton() {
        this.elements.commintmentDateButton().click()
    }

    clickOnCommintmentDateExpandCalendarButton() {
        this.elements.commintmentDateCalendarButton().click()
    }
    selectTodayCommintmentDate() {
        var currentDate = new Date()
        var day = currentDate.getDate()
        this.elements.commintmentDate(day).click()

    }
    clickOncommintmentDateSubmitButton() {
        this.elements.submitComDateButton().click()
    }
    clickOnCommintmentDateThreeDotOptionButton() {
        this.elements.commintmentDateThreeDotOptionButton().click()
    }
    verifyCommintmentDate() {
        cy.wait(2000)
        this.elements.commintmentDateTextbox().then(($obj) => {
            const d = new Date();
            let date = d.toLocaleDateString('en-029', { month: "2-digit", day: "2-digit", year: "numeric" });

            const str1 = $obj.val()
            expect(date).to.equal(str1)
        })
    }

    // Access information
    clickOnAccessInformationEditButton() {
        this.elements.accessInformationLabel().should("be.visible")
        this.elements.accessInformationEditButton().click()
    }
    enterAccessInformation(adminContact, adminPhone, itContact, itPhone, emrSystem, editNotes) {
        this.elements.adminContactNameTextbox().clear().type(adminContact)
        this.elements.adminPhoneNumberTextbox().clear().type(adminPhone)
        this.elements.itContactNameTextbox().clear().type(itContact)
        this.elements.itPhoneNumberTextbox().clear()
        this.elements.itPhoneNumberTextbox().type(itPhone)
        this.elements.emrSystemTextbox().scrollIntoView()
        this.elements.emrSystemTextbox().clear().type(emrSystem)
        this.elements.editNotesTextbox().clear().type(editNotes)
    }
    verifyAccessInformationLabels(adminContact, adminPhone, itContact, itPhone, emrSystem, editNotes) {
        this.elements.adminContactNameText().should("have.text", adminContact)
        this.elements.adminPhoneNumberText().should("have.text", adminPhone)
        this.elements.itContactNameText().should("have.text", itContact)
        this.elements.itPhoneNumberText().should("have.text", itPhone)
        this.elements.emrSystemTextbox().scrollIntoView()
        this.elements.emrSystemText().should("have.text", emrSystem)
        this.elements.editNotesText().should("have.text", editNotes)
    }
    selectCredentialsStatus(option) {
        this.elements.credentialsStatusDropdown().click()
        this.elements.credentialsStatusOption(option).click()
        cy.wait(1000)
        this.elements.saveButton().click()
        cy.wait(2000)
    }
    verifyCredentialStatus(option) {
        this.elements.credentialsStatusText().then(($obj) => {
            //return 

            const str1 = $obj.text()
            expect(str1).to.equal(option)

        })
        //this.elements.credentialsStatusText().should('have.text', option)
    }
    // Access information Upload file
    uploadPDFFileForAccessInformation() {
        const fileName = 'test-pdf-upload.pdf'
        this.elements.accessFormsUploadButton().attachFile(fileName)
    }
    verifyUploadedFileLabel() {
        const fileName = 'test-pdf-upload.pdf'
        this.elements.submitBtn().click();
        this.elements.divLabel(fileName).should("be.visible")
        // this.elements.fileUploadCloseButton().click()
    }
    
    //filter 

    VerifyClickonFiltericon() {
        this.elements.filtericon().click()


    }
    VerifyAIDtextbox(aid) {
        this.elements.AIDfilterTextBox().type(aid)
    }
    VerifyClickonAIDfilterTab() {
        this.elements.AIDfilterTab().click()
    }

    // pend grid
    clickOnProviderTabButton() {
        this.elements.providerTabButton().click()
    }
    clickOnPursuitsTabButton() {
        this.elements.pursuitsTabButton().click()
    }
    verifyPendGridChaseId() {
        this.elements.pendGridChaseIdColumnValues().each((item, index, list) => {
            expect(Cypress.$(item).text()).not.to.be.empty
            cy.wrap(item).should('not.have.length', 0)
        })
    }
    verifyPendGridColumnHeaderText() {
        this.elements.pendIdHeader().scrollIntoView().should("be.visible")
        this.elements.pendCodeHeader().should("be.visible")
        this.elements.measureHeader().should("be.visible")
        this.elements.pendStatusHeader().should("be.visible")
        this.elements.pendOwnerHeader().should("be.visible")
        this.elements.chaseIDHeader().should("be.visible")
        this.elements.projectHeader().should("be.visible")
        this.elements.creationDateHeader().should("be.visible")
        this.elements.lastUpdatedHeader().should("be.visible")
        this.elements.retrieverHeader().should("be.visible")
    }
    verifyProviderTabGridColumnsHeaderText() {
        this.elements.providerNameHeader().should("be.visible")
        this.elements.npiHeader().should("be.visible")
        this.elements.groupHeader().should("be.visible")
        this.elements.specialityHeader().should("be.visible")
        this.elements.taxIdHeader().should("be.visible")
        this.elements.addressesHeader().should("be.visible")
        this.elements.validationHeader().should("be.visible")
    }
    verifyUserCanMarkProviderAsValid() {
        this.elements.isValid().click()
        this.elements.validateIsValidCheckbox(true).should("be.visible")
        this.elements.isValid().click()
        this.elements.validateIsValidCheckbox(false).should("be.visible")
    }
    verifyPursuitsTabGridColumnsHeaderText() {
        this.elements.pursuitsChaseIdHeader().should("be.visible")
        this.elements.pursuitsFirstNameHeader().should("be.visible")
        this.elements.pursuitsLastNameHeader().should("be.visible")
        this.elements.pursuitsDobHeader().should("be.visible")
        this.elements.pursuitsGenderHeader().should("be.visible")
        this.elements.pursuitsProviderNameHeader().should("be.visible")
        this.elements.pursuitsProjectHeader().should("be.visible")
        this.elements.pursuitsMeasureHeader().should("be.visible")
        this.elements.pursuitsDocRequestIDHeader().should("be.visible")
        this.elements.pursuitsStatusHeader().should("be.visible")
        this.elements.pursuitsCommitHeader().should("be.visible")
        this.elements.pursuitsPendHeader().should("be.visible")
        this.elements.pursuitsPendStatusHeader().should("be.visible")
    }

    verifyTimelineContainerOpenVisible() {
        this.elements.timelineContainerOpen().should("be.visible")
    }
    clickOnHideTimelineButton() {
        this.elements.hideTimelineButton().click()
    }
    verifyTimelineContainerrOpenNotVisible() {
        this.elements.timelineContainerOpen().should('not.exist')
    }
    clickOnAddressTimelineButton() {
        this.elements.addressTimelineButton().click()
    }
    clickOnScheduleAppointmentButton() {
        this.elements.scheduleAppointmentButton().click()
    }
    selectAvailableUser(userName) {
        this.elements.scheduleAppointmentUserDropdown().click()
        this.elements.scheduleAppointmentUserTextbox().clear()
        this.elements.scheduleAppointmentUserTextbox().type(userName)
        cy.wait(1000)
        this.elements.scheduleAppointmentUserSearchedUser().click()
    }
    selectFutureScheduledDate() {
        this.elements.appointmentDateCalendar().click()
        var currentDate = new Date()
        var day = currentDate.getDate() + 2
        this.elements.appointmentDate(day).click()
    }
    enterAppointmentNotes(comment) {
        this.elements.appointmentNotes().clear().type(comment)
    }
    verifyScheduleAppointmentEntry(username) {
        this.elements.appointmentEntry().should("be.visible")
        this.elements.appointmentEntryAssignedTo(username).should("be.visible")
    }
    clickOnScheduleAppointmentThreeDotButton() {
        this.elements.appointmentEntryThreeDotButton().click()
    }
    clickOnCancelAppointment() {
        this.elements.appointmentEntryCancelAppointmentButton().click()
    }
    clickOnEditAppointment() {
        this.elements.appointmentEntryEditAppointmentButton().click()
    }
    verifyAndCofirmBackDatedAppointmentPopup() {
        this.elements.confirmBackDatedAppointmentPopup().should("be.visible")
        this.elements.confirmBackDatedAppointmentPopupOkButton().click()
    }
    verifyAndCofirmCancellationAppointmentPopup() {
        this.elements.confirmCancellationAppointmentPopup().should("be.visible")
        this.elements.confirmCancellationAppointmentPopupYesButton().click()
    }
    verifyScheduleAppointmentEntryIsBlank() {
        this.elements.appointmentEntry().should('not.exist')
    }
    clickOnExportAllButtonOnEMRGrid() {
        this.elements.exportButtonEMRGrid().click()
    }
    clickOnExportAllButtonOnEMRUsersScheduleTab() {
        this.elements.exportButtonEMRUsers().click()
    }
    clickOnExportAllButtonOnEMRAppointmentsScheduleTab() {
        this.elements.exportButtonEMRAppointments().scrollIntoView().click()
    }
    //
    uploadPDFFileForAccessInformation() {
        const fileName = 'test-pdf-upload.pdf'
        this.elements.accessFormsUploadButton().attachFile(fileName)
    }

    verifyPendFilters() {
        this.elements.pendFilters(1).should("have.text", "Pend Id")
        this.elements.pendFilters(2).should("have.text", "Pend Codes")
        this.elements.pendFilters(3).should("have.text", "Measures")
        this.elements.pendFilters(4).should("have.text", "Pend Status")
        this.elements.pendFilters(5).should("have.text", "Chase Id")
        this.elements.pendFilters(6).should("have.text", "Projects")
    }
    clickOnPendFilter() {
        this.elements.pendStatusHeader().scrollIntoView()
        this.elements.pendfiltericon().click()
    }
    clickOnPendFilterPendStatus() {
        this.elements.pendFiltersPendStatus().click()
    }

    clickOnPendFiltersPendStatusOption(option) {
        this.elements.pendFiltersPendStatusOption(option).click({ force: true })
    }
    clickOnPendFiltersPendId() {
        this.elements.pendFiltersPendId().click()
    }
    enterPendFiltersPendIdTextbox(pendId) {
        this.elements.pendFiltersPendIdTextbox().clear().type(pendId)
    }
    verifyPendGridAllEntriesAvailbaleOrNot(flag) {
        if (flag == true) {
            this.elements.pendGridAllEntries().should('have.length.greaterThan', 0)
        }
        else if (flag == false) {
            this.elements.pendGridAllEntries().should('have.length', 0)
            //cy.wrap(chaseCount).should('eq', 0);
        }

    }
    clickOnProviderTabCheckbox() {
        this.elements.providerTabCheckbox().click()
    }
    verifyMoveProviderButton() {
        this.elements.moveProviderButton().should("be.visible")
    }
    clickOnMoveProviderButton() {
        this.elements.moveProviderButton().click()
    }
    verifyAddressSearchPopup() {
        this.elements.addressSearchPopup().should("be.visible")
    }

    //Grid Filter -search by Status
    verifyFilterbyStatus() {
        this.elements.filterButton().click()
        this.elements.filterByaidstatus().click()
        this.elements.filterbyTobecontacted().click()
        this.elements.filterbyscheduled().click()
      //  this.elements.filterbypastdue().click()
        this.elements.runquerybutton().click()

    }

        /////// provider tab  ////////
        clickOnProviderTabButton() {
            this.elements.providerTabButton().click()
        }
        clickOnProviderSearchButton() {
            this.elements.providerSearchButton().click()
        }
        verifyProviderSearchButton() {
            cy.wait(1000)
            this.elements.providerSearchButton().should("be.visible")
        }
        verifySearchProviderPopup() {
            cy.wait(1000)
            this.elements.searchProviderPopup().should("be.visible")
        }
        verifySearchProviderCancelButton() {
            this.elements.providerSearchButton().click()
            this.elements.searchProviderCancelButton().click()
            this.elements.searchProviderPopup().should("not.exist")
        }
        verifySearchProviderGridColumns() {
            cy.wait(1000)
            //this.elements.npiSearchProviderHeader().scrollIntoView().should("be.visible")
            this.elements.firstNameSearchProviderHeader().should("be.visible")
            this.elements.lastNameSearchProviderHeader().should("be.visible")
            this.elements.specialtySearchProviderHeader().should("be.visible")
            this.elements.address1SearchProviderHeader().should("be.visible")
            this.elements.address2SearchProviderHeader().should("be.visible")
            this.elements.citySearchProviderHeader().should("be.visible")
            this.elements.stateSearchProviderHeader().should("be.visible")
            this.elements.zipSearchProviderHeader().should("be.visible")
            this.elements.phoneSearchProviderHeader().should("be.visible")
            this.elements.faxSearchProviderHeader().should("be.visible")
        }
        verifyWithValidProviderName(providerFirstName, providerLastName) {
            this.elements.providerNameTextbox().type(providerFirstName + " " + providerLastName)
            this.elements.searchProviderButtonOnPopup().click()
            cy.wait(1000)
            this.elements.firstNameOfProvider(providerFirstName).should("be.visible")
            this.elements.lastNameOfProvider(providerLastName).should("be.visible")
        }
    // SH flag 
    verifyshstats() {
        this.elements.shstatsonaidgrid().click()
    }
    verifySHinAIDgrid() {
        this.elements.shiconcolumn().should("have.class", "mrcs-icon mrcs-icon-special-assignment-address active ng-star-inserted")


    }
    verifyclickonShicon() {
        //  this.elements.shICONAIDdetails().scrollIntoView()
        this.elements.shICONAIDdetails().click()
    }
    verifydisabledSHiconOnAIDdatails() {
        this.elements.shICONAIDdetails().scrollIntoView()
        this.elements.shICONAIDdetails().should('be.visible')
    }
    verifyenableSHModaltext() {
        this.elements.enableSHmessage().should('be.visible')
    }
    verifyselectSHreasondropdown(shreason) {
        this.elements.shdropdownicon().scrollIntoView()
        this.elements.shdropdownicon().click()
        this.elements.shreasondropdownlabel(shreason).click()
    }
    VerifyenteradditionalNotes(notes) {
        this.elements.shadditionalnote().type(notes)
    }
    VerifyenterupdatedadditionalNotes(newnotes) {
        this.elements.shadditionalnote().type(newnotes)
    }
    verifyclickoncontinuebutton() {
        this.elements.shcontinuebutton().click()
    }
    verifyvalidationadditionalnoteerror() {
        this.elements.additionalnotesvalidationerror().then(($obj) => {
            expect($obj).to.have.text('Write a note between 4 - 1000 characters.')
        })

    }
    verifyreasoninheader(shreason) {
        //  cy.wait(2000)
        //  this.elements.shreasonabanner().scrollIntoView()
        this.elements.shreasonabanner().should('be.visible')
    }
    verifyreasonremovedinheader() {
        this.elements.shbanner().should('not.be.visible')
    }
    verifyreasonandnotesintimeline() {
        this.elements.shtimelinenote().should('be.visible')
    }
    verifyremovedtimeline() {
        this.elements.shfirsttimelinenote().then(($obj) => {
            expect($obj).to.have.text('Special handling flag SH Centralized Collection removed from address')
        })
    }
    verifyhoveronSHflagicon() {
        cy.wait(1000)
        this.elements.shactiveflagicon().trigger('mouseover')

        // cy.get('title').should('have.text','Edit Special Handling').should('be.visible')
        cy.contains('Edit Special Handling').should('be.visible')


    }
    verifyclickonSHActiveicon() {
        //   this.elements.shactiveflagicon().scrollIntoView()
        cy.wait(1000)
        this.elements.shactiveflagicon().click()
    }
    verifySHeditmodal() {
        this.elements.Sheditmodal().should('be.visible')
    }
    verifyadditionalnotesintimeline(shreason) {
        this.elements.shtimeline().should('contain', shreason)
    }
    verifyshactiveicon() {
        this.elements.shactiveicon().should('be.visible')

    }
    verifyclickondeleteicon() {
        this.elements.shdeleteicon().click()
    }
    verifyshwarningmodal() {

        this.elements.shdisablemodalheadertext().should('be.visible')
        this.elements.shdisablewarningtext().should('be.visible')
    }
    verifyfirstSHremovenote() {
        this.elements.shfirsttimelinenote().should('have.text', 'Special handling flag SH Other removed from address')
    }
    verifynewupdatednote() {


        this.elements.shupdatedtimelinenote().should('include.text', 'Special handling flag SH Hospital Corporation of America (HCA) added to address')
    }
    verifyremovetimelinenote() {
        this.elements.shremovetimelinenote().should('have.text', 'Special handling flag SH Centralized Collection removed from address')
    }
    verifyclickonediticon() {
        this.elements.shediticon().click()
    }
    verifyeditmodalheader() {
        this.elements.sheditreasonmodalheader().should('be.visible')
    }
    verifyeditreasonmodalinstruction() {
        this.elements.sheditreasonmodalinstruction().should('be.visible')
    }
    //gloabal search 

    VerifyClickonglobalsearch() {
        this.elements.addressdropdownicon().click()
    }
    verifyGlobalsearchbyAid() {

        this.elements.selectaddressoption().click()

    }
    verifyglobalsearchinput(aid) {
        this.elements.globalsearchinput().type(aid)
    }
    verifycolumnssearchbyAID() {
        this.elements.addressidheader().should("be.visble")
        this.elements.stateheader().should("be.visible")
        this.elements.chaseIdHeader().should("be.visible")
        this.elements.addressheader().should("be.visible")
        this.elements.cityheader().should("be.visible")
        this.elements.stateheader().should("be.visible")
        this.elements.Groupnameheader().should("be.visible")
        this.elements.Phoneheader().should("be.visible")

    }
    verifyclickonSearchbutton() {
        this.elements.searchicon().click()
    }

    GetAddressdata() {
        cy.wait(2000)
        this.elements.addressdata().then(($obj1) => {
            const str1 = $obj1.text()
            cy.wrap(str1).as('address1')


        })
        this.elements.citydata().then(($obj2) => {
            let str2 = $obj2.text()
            cy.log(str2)
            cy.wrap(str2).as('city')
            //   cy.log($obj2)

        })
        this.elements.statedata().then(($obj3) => {
            const str3 = $obj3.text()
            cy.wrap(str3).as('state')

        })
        this.elements.statusdata().then(($obj4) => {
            const str4 = $obj4.text()
            cy.wrap(str4).as('aidstatus')

        })
        this.elements.groupnamedata().then(($obj5) => {
            const str5 = $obj5.text()
            cy.wrap(str5).as('groupname')

        })
        this.elements.Phonedata().then(($obj6) => {
            const str6 = $obj6.text()
            cy.wrap(str6).as('phone')
            // cy.log(phone)
        })
        cy.get('app-banner-statistics').scrollIntoView().should("be.visible")
        this.elements.chasesdata().then(($obj7) => {

            const str7 = $obj7.text()
            cy.wrap(str7).as('chasedata')
            //  cy.log(chases)
        })

    }
    verifyAIDdata() {
        cy.wait(2000)
        cy.get('@aid').then(aid => {
            cy.log(aid)


            this.elements.aidcolumn().should("have.text", aid)
        })
        cy.get('@city').then(city => {
            cy.log(city)

            this.elements.citycolumn().should("have.text", city)
        })
        cy.get("@state").then(state => {
            this.elements.statecolumn().should("have.text", state)
        })

        cy.get('@aidstatus').then(aidstatus => {


            this.elements.statuscolumn().should("have.text", aidstatus)
        })
        cy.get('@groupname').then(groupname => {
            this.elements.groupnamecolumn().should("have.text", groupname)
        })
        cy.get('@phone').then(phone => {


            this.elements.Phonecolumn().should("have.text", phone)
        })
        cy.get('@chasedata').then(chasedata => {

            this.elements.chasescolumn().should("have.text", chasedata)

        })
    }
    // Move chase + Move Provider 
    
    VerifyclickonProviderbutton() {
        this.elements.moveproviderbutton().click()
    }
   verifyclickonCheckboxChaseMove(){
       this.elements.movechasebutton().click()
   }
   verifychasemoveconfirmationmessage(){
    this.elements.yesbutton().click()
   }
   veriyclickonusethisAddressbutton(){
    this.elements.usethisaddressbutton().click()

   }
    verifyserachbyAIDdata(aid) {

        this.elements.addressIdinput().type(aid)

    }
    verifysearchbyAddressdata() {

        cy.get('@address1').then(address1 => {
            this.elements.address1input().type(address1)
        })
        //    cy.get('@state').then(state=>{
        //       this.elements.stateinput().type(state)
        //   })
        cy.get('@city').then(city => {
            this.elements.cityinput().type(city)
        })
        cy.get('@zip').then(zipcode => {
            this.elements.zipcodeinput().type(zipcode)
        })
        // cy.get('@group').then(groupname=>{
        //     this.elements.groupnameinput().type(groupname)
        // }) 
    }
    verifychasemovenotes(){
        this.elements.chasemoveNotesTextarea().type('Automation : chase Move notes')
    }
    verifyclickonFindAddressesbutton() {
        this.elements.Findaddressesbutton().click()
    }
    verifynoaddressvalidation() {
        this.elements.noaddressvalidation().should('be.visible')
    }
    verifycreatenewaddresslink() {
        this.elements.createnewadddresslink().should('be.visible')
    }
    verifyclickoncreatenewaddresslink() {
        this.elements.createnewadddresslink().click()
    }
    verifyclickoncreateaddressandmovechase() {
        this.elements.createaddressandMovechasebutton().click()
    }
    verifyrequiredfieldvalidationmessage() {
        this.elements.address1requiremessage().should("be.visible")
        this.elements.cityisrequiredmessage().should("be.visible")
        this.elements.stateisrequiredmessage().should("be.visible")
        this.elements.zipisrequiredmessage().should("be.visible")
    }

    verifyenterAddress1(address1) {
        this.elements.address1input().type(address1).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('address1')
        })


    }

    verifyenterAddress2(address2) {
        this.elements.address2input().type(address2).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('address2')
        })
    }
    verifyentercity(city) {
        this.elements.cityinput().type(city).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('city')
        })

    }
    verifyenterstate(option) {
        this.elements.statedropdown().click()
        this.elements.stateoption(option).click().then(($obj) => {

            const str = $obj.text()
            cy.wrap(str).as('state')
        })
    }
    verifyenterzip(zip) {
        this.elements.zipcodeinput().type(zip).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('zip')
        })
    }
    verifyentercontactname(contactname) {
        this.elements.contactnameinput().type(contactname).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('contactname')
        })

    }
    verifymoveproviderheader() {
        this.elements.moveproviderheader().should("be.visible")
    }
    verifyGroupnamerequiredmessage() {
        this.elements.groupnameinput().should("have.css", 'border-color', 'rgb(254, 59, 31)')

    }
    verifycontactNameforProvider(contactName2) {
        this.elements.contactNameinputforprovider().type(contactName2).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('contactname2')
        })
    }
    verifyGroupnameforprovider(groupname) {
        this.elements.groupnameinput().type(groupname).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('groupname')
        })
    }
    verifyemailforprovider(email) {
        this.elements.emailinput().type(email).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('email')
        })
    }
    verifyphoneforprovider(phone) {
        this.elements.phoneinput().type(phone).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('phone')
        })

    }
    verifyfaxforprovider(fax) {
        this.elements.faxinput().type(fax).invoke('val').then(text => {

            const str = text;
            cy.wrap(str).as('fax')
        })
    }
    verifyphonerequiredmessage() {
        this.elements.phoneinput().should("have.class", 'ng-dirty')
    }
    verifypreferredRequestmethod(option) {
        this.elements.preferredRequestMethoddropdown().click()
        this.elements.preferredRequestMethod(option).click().then(($obj) => {

            const str = $obj.text()
            cy.wrap(str).as('requestmethod')
        })
    }
    verifyenterchasemovenotes(chasemoveNotes) {
        this.elements.chasemovenotes().type(chasemoveNotes)
    }
    verifychasemovenotesrequiredmessage() {
        this.elements.chasemovenotesrequiredmessage().should("be.visible")
    }
    verifyclickonMovechases() {
        this.elements.chasemovebutton().click()
    }
    verifyareyousurelabel() {
        this.elements.Areyousuremodal().should("be.visible")
    }
    verifyclickonyesonconfirmationmodal() {
        this.elements.yesbutton().click()
    }
    verifynewaddressdetails() {
        cy.get('@address1').then(address1 => {
            this.elements.addressdata().should("have.text", address1)
        })
        cy.get('@city').then(city => {
            this.elements.citydata().should("have.text", city)
        })
        cy.get('@state').then(state => {
            this.elements.statedata().should("have.text", state)
        })
        cy.get('@zip').then(zip => {
            this.elements.zipdata().should("have.text", 'OH')
        })
        cy.get('@groupname').then(groupname => {
            this.elements.groupnamedata().should("have.text", groupname)
        })
        cy.get('@email').then(email => {
            this.elements.emaildata().should("have.text", email)
        })
        cy.get('@phone').then(phone => {
            this.elements.Phonedata().should("have.text", phone)
        })
        cy.get('@contactname2').then(contact => {
            this.elements.contactdata().should("have.text", contact)
        })
        cy.get('@requestmethod').then(requestmethod => {
            this.elements.preferredRequestMethoddata().should("have.text", requestmethod)
        })

    }
    verifynewaddressdetailsafterchasemove() {
        cy.get('@address1').then(address1 => {
            this.elements.addressdata().should("have.text", address1)
        })
        cy.get('@city').then(city => {
            this.elements.citydata().should("have.text",city)
        })
        cy.get('@state').then(state => {
            this.elements.statedata().should("have.text", state)
        })
        cy.get('@zip').then(zip => {
            this.elements.zipdata().should("have.text", zip)
        })
        
    }
    verifyviewthisaddress() {

        cy.wait(3000)
        this.elements.viewaddressbutton().click()

    }
    verifyviewthisEMRaddress() {

        cy.wait(5000)
      //  cy.get('app-modal').eq(1).find('footer').find('app-button').find('p-button').find('span').contains('View This Address').click()
        this.elements.viewemradderss().click({force:true})
    }
    verifychasemoveviewthisaddress() {

       
        cy.wait(3000)
        this.elements.chasemoveviewaddressbutton().click()

    }
    //Add contact note 
    verifyClickonAddnotebutton() {
        this.elements.addnotebutton().click()
    }
    verifyclickoncontacthistoryTab() {
        this.elements.contacthistorytab().click({force:true})
    }
    verifyaddnote(note) {
        this.elements.addnotetextfield().type(note)
    }
    verifyclickonsubmitonaddnote() {
        this.elements.submitnotebutton().click()
        cy.wait(1000)
    }
    verifyaddednote(note, user) {
        this.elements.contactnotelabel().should("be.visible")
        this.elements.contactnoteuser(user).should("be.visible")
        this.elements.contactnote().should("include.text", note)

    }
    verifyclickonstatusfilteroption(aidstatus) {
        this.elements.filterbystatusoption().click()
        this.elements.filterbyaidstatus(aidstatus).click()

    }
    verifyFilterbyStatusOnAIDgrid(aidstatus) {
        this.elements.basicViewButton().click()
        // this.elements.aidstatuscolumn()
        // .each($el => {
        //   expect($el.text()).to.eq(aidstatus)
        // })
        this.elements.aidstatuscolumn().each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(aidstatus)
            cy.wrap(item).should("have.text", aidstatus)
        })
    }
    // verifyfilterbychaseid(){
    //     this.elements.
    // }


}
module.exports = new EMRAddressDetailsPage()