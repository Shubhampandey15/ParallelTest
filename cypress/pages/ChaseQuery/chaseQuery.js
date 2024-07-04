let chase1;
let aid;
let chase2;
let firstChase1;
let chaseID3;
let pagination1;
let globalTrimmedNumber;
let retrievedNumber;
let chaseKeyLog;
let clientMemberIdLog;
class chaseQuery{

    elements={
        queriesMenuButton:()=>cy.xpath("//div[text()='Queries']/parent::li"),
        retrievalMenuButton:()=>cy.xpath("//div[text()='Retrieval']/parent::li"),
        chaseQueryButton:()=>cy.xpath("//span[text()='Chase Query']/parent::a"),
        callCenterRep:()=>cy.xpath("//span[text()='Call Center Rep']/parent::a"),
        retrievalPends:()=>cy.xpath("//span[text()='Retrieval Pends']/parent::a"),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        createNewChase:()=>cy.contains('Create A New Chase'),
        getStarted:()=>cy.contains('Get Started'),
        selectProject:()=>cy.xpath("//span[normalize-space()='Select Project']"),
        project:()=>cy.contains("li","Risk 2.0 Training Project 2"),
        selectProduct:()=>cy.xpath("//span[normalize-space()='Select Product']"),
        product:()=>cy.contains('li','Affinity Medicare'),
        chaseKey:()=>cy.get("[id='chaseKey']"),
        nextStep:()=>cy.contains("Next Step"),
        cancelButton:()=>cy.contains("Cancel"),
        noOption:()=>cy.xpath("//form-factory[@class='member-search_existing-member ng-untouched ng-pristine ng-valid']//div//label[@class='ui-radiobutton-label ng-star-inserted'][normalize-space()='No']"),
        clientMemberId:()=>cy.get("[id='clientMemberId']"),
        selectMeasure:()=>cy.xpath("//span[normalize-space()='Select a Measure']"),
        measure:()=>cy.contains('li','ABA'),
        memberFirstName:()=>cy.get("[id='memberFirstName']"),
        memberLastName:()=>cy.get("[id='memberLastName']"),
        membersDob:()=>cy.get("[id='memberDateOfBirth']"),
        selectGender:()=>cy.xpath("//span[normalize-space()='Select Gender']"),
        gender:()=>cy.contains('li','Male'),
        addMember:()=>cy.get("[text='ADD MEMBER']"),
        noOption2:()=>cy.xpath("(//label[normalize-space()='No'])[3]"),
        addAddress:()=>cy.get("[id='address1']"),
        phoneNumber:()=>cy.get("[id='phone']"),
        selectRetrieval:()=>cy.xpath("//span[normalize-space()='Select From List']"),
        retireival:()=>cy.contains('li','Reveleer'),
        addAddressButton:()=>cy.xpath("//span[normalize-space()='Add Address']"),
        noOption3:()=>cy.xpath("(//label[normalize-space()='No'])[4]"),
        npi:()=>cy.get("[id='npId']"),
        firstName:()=>cy.get("[id='firstName']"),
        lastName:()=>cy.get("[id='lastName']"),
        clientProvider:()=>cy.get("[id='clientProviderId']"),
        addProviderButton:()=>cy.xpath("//span[normalize-space()='Add Provider']"),
        claimId:()=>cy.get("[formcontrolname='claimId']"),
        selectprovider2:()=>cy.xpath("//span[normalize-space()='Select Provider']"),
        provider2:()=>cy.contains('li','ADAM SMITH'),
        enCounter:()=>cy.xpath("//span[normalize-space()='Select Encounter Type']"),
        enounterDropDown:()=>cy.contains("li"," Inpatient Hospital Admission"),
        encounterServiceDateForm:()=>cy.get("[formcontrolname='encounterServiceDateFrom']"),
        encounterServiceDateThru:()=>cy.get("[formcontrolname='encounterServiceDateThru']"),
        diagNosis1:()=>cy.xpath("(//p-autocomplete[@formcontrolname='diagnosisCode'])[1]"),
        diagnosis1DropDown1:()=>cy.contains("li","A150 Tuberculosis of lung"),
        diagnosisStartDate:()=>cy.xpath("(//input[@formcontrolname='diagnosisServiceDateFrom'])[1]"),
        diagnosisThruDate:()=>cy.xpath("(//input[@formcontrolname='diagnosisServiceDateThru'])[1]"),
        diagNosis2:()=>cy.xpath("(//p-autocomplete[@formcontrolname='diagnosisCode'])[2]"),
        diagNosis2DropDown:()=>cy.contains("li","A156 Tuberculous pleurisy"),
        diagnosisStartDate1:()=>cy.xpath("(//input[@formcontrolname='diagnosisServiceDateFrom'])[2]"),
        diagnosisThruDate1:()=>cy.xpath("(//input[@formcontrolname='diagnosisServiceDateThru'])[2]"),
        //nextStep2:()=>cy.xpath("(//span[normalize-space()='Next Step'])[3]"),
        nextStep2:()=>cy.get(':nth-child(2) > .ui-md-4 > p-button > .ui-button > .ui-button-text'),
        nextStep3:()=>cy.xpath("(//span[normalize-space()='Next Step'])[2]"),
        finalize:()=>cy.xpath('//span[normalize-space()="Finalize"]'),
        chase:()=>cy.get('.chase-detail > a'),
        crossButton:()=>cy.get('.ui-messages-close > .pi'),
        chaseIdValue:()=>cy.get('span[class="v2-header__member-info__other--required"]').last(),
        encounterTab:()=>cy.xpath('//span[normalize-space()="ENCOUNTERS"]'),
        existingMemberYes:()=>cy.xpath("(//label[normalize-space()='Yes'])[2]"),
        search:()=>cy.xpath("//span[normalize-space()='Search']"),
        searchedUser:()=>cy.get("[class='ui-column-value ng-star-inserted']").eq(0),
        congratsMsg:()=>cy.get('app-create-new-chase-success-confirmation'),
        aidList:()=>cy.get(':nth-child(1) > .hdvi-gridcol-masterDocumentSourceID > .ui-column-value'),
        providerYes:()=>cy.xpath("(//label[normalize-space()='Yes'])[3]"),
        providerYes1:()=>cy.xpath("(//label[normalize-space()='Yes'])[2]"),
        addressAid:()=>cy.get("[id='retrievalLocationId']"),
        enabledNextButton:()=>cy.xpath("(//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'])[14]"),
        disbaledNextButton:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']").eq(0),
        claimIdPlusSign:()=>cy.get('[formarrayname="encounter"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .button-container'),
        claimID2:()=>cy.get("[formcontrolname='claimId']").eq(1),
        secondEncounterDate:()=>cy.get("[formcontrolname='encounterServiceDateFrom']").eq(1),
        secondEncounterThruDate:()=>cy.get("[formcontrolname='encounterServiceDateThru']").eq(1),
        thirdDiagnosis:()=>cy.get("[placeholder='Enter Diagnosis']").eq(5),
        multipleDiagnosisStartDate:()=>cy.get("[formcontrolname='diagnosisServiceDateFrom']").eq(2),
        multipleDiagnosisThruDate:()=>cy.get("[formcontrolname='diagnosisServiceDateThru']").eq(2),
        providerDropDown:()=>cy.xpath('//span[normalize-space()="Select Provider"]'),
        providerDropDown1:()=>cy.xpath('//span[normalize-space()="Select Provider"]').eq(1),
        dropDownValue:()=>cy.contains('li','ADAM SMITH'),
        providerDropDown1:()=>cy.xpath('//span[normalize-space()="ADAM SMITH"]'),
        selectedEncountervalue:()=>cy.xpath("//span[normalize-space()='01 - Inpatient Hospital Admission']"),
        selectedEncountervalue1:()=>cy.xpath("//span[normalize-space()='01 - Inpatient Hospital Admission']").eq(1),
        warningMsg:()=>cy.get("[class='ellipsis text-danger']").eq(0),
        warningMsg1:()=>cy.get("[class='ellipsis text-danger']").eq(1),
        diagnosis5:()=>cy.get("[placeholder='Enter Diagnosis']").eq(1),
        skipStepButton:()=>cy.xpath("//span[normalize-space()='Skip Step']"),
        resetButton:()=>cy.xpath('(//span[normalize-space()="Reset"])[1]'),
        memberReset:()=>cy.xpath('(//span[normalize-space()="Reset"])[2]'),
        aidResetButton:()=>cy.xpath('(//span[normalize-space()="Reset"])[3]'),
        providerReset:()=>cy.xpath('(//span[normalize-space()="Reset"])[4]'),
        encounterReset:()=>cy.xpath('(//span[normalize-space()="Reset"])[5]'),
        resetDiagnosisFieldStart:()=>cy.get("[formcontrolname='diagnosisServiceDateFrom']").eq(0),
        resetDiagnosisFieldThru:()=>cy.get("[formcontrolname='diagnosisServiceDateFrom']").eq(0),
        resetDiagnosis:()=>cy.get("[placeholder='Enter Diagnosis']").eq(3),
       secondDiagnosisStartDate:()=>cy.get("[formcontrolname='diagnosisServiceDateFrom']").eq(1),
       secondtDiagnosisFieldThru:()=>cy.get("[formcontrolname='diagnosisServiceDateFrom']").eq(1),
       claimIdErrorMessage:()=>cy.get("[class='errorMessage ng-star-inserted']").eq(0),
       firstCheckBox:()=>cy.get("[class='grid-body__selection-mode ng-star-inserted']").eq(0),
       secondheckBox:()=>cy.get("[class='grid-body__selection-mode ng-star-inserted']").eq(1),
       thirdheckBox:()=>cy.get("[class='grid-body__selection-mode ng-star-inserted']").eq(2),
       projectSelection:()=>cy.xpath("//span[normalize-space()='2022 HEDIS New Measures Test']"),
       selectNewAction:()=>cy.contains("Select Next Action"),
       export:()=>cy.contains('li','Export Chase(s)'),
       goButton:()=>cy.contains('Go'),
       assignedTo:()=>cy.contains("Assigned To"),
       assignedDropdown:()=>cy.contains("li",'Testing Admin'),
       assgnedToUser:()=>cy.get("[id='AssignedToUserId']"),
       assignedField:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-assignedTo ng-star-inserted']").eq(0),
       assignedField1:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-assignedTo ng-star-inserted']").eq(1),
       assignedField2:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-assignedTo ng-star-inserted']").eq(1),
       pendChase:()=>cy.contains('li','Pend Chase(s)'),
       pendCodeBox: () => cy.get('[id="pendTypeId"]'),
       pendStatusBox: () => cy.xpath("(//label[@title='Status']//following::p-dropdown[@dropdownicon='pi pi-caret-down'])[1]"),
       resolvedButton:()=>cy.xpath("//li[@aria-label='Resolved']"),
       additionalNotes: () => cy.get("#notes"),
       pendSave: () => cy.xpath("//span[normalize-space()='Save']"),
       pendYesButton: () => cy.contains('Yes'),
       pendCodeDropdown: () => cy.xpath("//label[./text()='Pend Code']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
       pendCodeDropDown2:()=>cy.contains('li','PC302-DOB is incomplete or missing'),
       pendCodeDropDown4:()=>cy.contains('li','PC100-Provider Refusal'),
       pendCodeDropDown3:()=>cy.contains("li","PC300-Clinical Overread 2 Ticket"),
       pendStatus1:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-reportingStatusName ng-star-inserted']").eq(0),
       pendCodeNo:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-pendCode ng-star-inserted']").eq(0),
       pendCodeNo1:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-pendCode ng-star-inserted']"),
       assignUser:()=>cy.contains('li','Assign Chase(s)'),
       user:()=>cy.get("[id='assignToUsers']"),
       assignDropDown:()=>cy.contains('li','@Me'),
       continueButton:()=>cy.xpath("//span[normalize-space()='Continue']"), 
       sucessToast:()=>cy.xpath("//div[@class='ui-toast-detail']"),  
       unAssignedUser:()=>cy.contains("li","Unassign Chase(s)") ,
       project2:()=>cy.xpath("//span[normalize-space()='2022 HEDIS CA and SH']"),
       severityDropDown: () => cy.xpath("//label[./text()='Severity']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
       severityOption: () => cy.xpath("//ul[contains(@class,'ui-dropdown-items') and @role='listbox']/descendant::p-dropdownitem/li/span[.='Error - Non Critical']"),
       downloadChart:()=>cy.contains('Download Chart'),
       jobQue:()=>cy.get("[class='jobsqueue']"),
       jobChase:()=>cy.get("[class='bold']").eq(0),
       notification:()=>cy.get("[class='info']").eq(0),
       firstChase:()=>cy.xpath('//a[contains(@href, "/members/chase/")]').eq(0),
       filter:()=>cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
       clientChase:()=>cy.contains('Chase Id / Client Chase Key'),
       chaseKeyField:()=>cy.get("[id='ChaseIdAndClientChaseKey']"),
       measure:()=>cy.contains("Measures"),
       selectMeasures:()=>cy.xpath("//span[normalize-space()='CCS']"),
       measureGrid:()=>cy.get("[class='ui-column-value ng-star-inserted']").eq(1),
       client:()=>cy.get('#ui-tabpanel-3-label > .ui-tabview-title'),
       clientField:()=>cy.get('#ClientId'),
       clientDropDown:()=>cy.contains("li","Testing Client 1"),
       clientName:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-clientName ng-star-inserted']"),
       projectField:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-projectName ng-star-inserted']"),
       members:()=>cy.contains('Member'),
       memberName:()=>cy.get("[id='MemberFirstName']"),
       firstNameField:()=>cy.get(':nth-child(1) > .hdvi-gridcol-memberFirstName'),
       address:()=>cy.contains('Address'),
       aidField:()=>cy.get("[id='AddressId']"),
       aidGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-masterDocumentSourceId ng-star-inserted']"),
       pendCode:()=>cy.contains("Pend Codes"),
       pendCodesNumber:()=>cy.xpath("//span[normalize-space()='PC100']"),
       chaseCompliance:()=>cy.contains('Chase Compliance'),
       complianceNo:()=>cy.get("p-listbox[id='ComplianceCodes'] li[aria-label='NC'] span[class='ng-star-inserted']"),
       complianceGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseComplianceCode ng-star-inserted']"),
       lastCodedBy:()=>cy.contains('Last Coded By'),
       lastCodedField:()=>cy.get("[id='LastCoderUserID']"),
       lastCodedGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-lastCoderUserName ng-star-inserted']"),
       pendStatus:()=>cy.contains('Pend Status'),
       penStatusNo:()=>cy.get("li[aria-label='New'] span[class='ng-star-inserted']"),
       pendStatusGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-pendStatus ng-star-inserted']"),
       pendStatusGrid1:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-pendStatus ng-star-inserted']").eq(0),
       dateAssigned:()=>cy.contains("Date Assigned"),
       dateAssignedSearchBox:()=>cy.get("input[id='DateAssigned']"),
       dateAssignedGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-dateAssigned ng-star-inserted']"),
       risk:()=>cy.contains("Risk"),
       dosConfirmed:()=>cy.xpath('(//label[normalize-space()="Yes"])[1]'),
       hccDescreprncy:()=>cy.xpath('(//label[normalize-space()="Yes"])[2]'),
       dosGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-encounterFound ng-star-inserted']"),
       hccGrid:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-hccDiscrepency ng-star-inserted']"),
       parentChaseBracket:()=>cy.get("app-chase-grid-chase-id div"),
       parentChase:()=>cy.xpath("//label[normalize-space()='Parent Chases']"),
       pursuitChase:()=>cy.get('.ui-overlaypanel-content'),
       pursuitChase1:()=>cy.get('.chase-id__related-chases-popover-container > :nth-child(2) > a'),
       hedisProject:()=>cy.contains('li','QAAutomation_HEDIS_TEST'),
       measureDropDown:()=>cy.contains('li','ABA'),
       createNewChaseButton:()=>cy.xpath("//span[normalize-space()='Create A New Chase']"),
       chaseIdContainer:()=>cy.get('.container-title'),
       pageDropDown: () => cy.get('.ui-paginator-left-content > .ui-inputwrapper-filled > .ui-dropdown > .ui-dropdown-trigger'),
       pageDropDownValue: () => cy.xpath("(//span[normalize-space()='10'])[2]"),
      // pagination: () =>cy.get('.ui-dropdown-label-container > .ng-tns-c39-105'),
       pagination:()=>cy.get('.ui-dropdown-label-container > .ng-tns-c39-33'),
       tableList:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']"),
       createNewView:()=>cy.xpath("//span[normalize-space()='Create New View']"),
       selectChaseIdCheckBox:()=>cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Chase ID']"),
       saveButton:()=>cy.xpath("//span[normalize-space()='Save']"),
       enterTitle:()=>cy.get('[id="name"]'),
       createdView:()=>cy.xpath("//app-grid-view[normalize-space()='Testing 11']"),
       chaseIdTableField:()=>cy.xpath("//span[@class='header-container__text']"),
       hoverClick: () => cy.xpath("//div[@class='pi pi-cog button ng-star-inserted']"),
       deleteButton:()=>cy.xpath("//span[normalize-space()='Delete']"),
       yesButton:()=>cy.xpath("//span[normalize-space()='Yes']"),
       chaseKeyCheckBox:()=>cy.xpath("//span[normalize-space()='Chase Key']"),
       secondColumn:()=>cy.get("[class='header-container__text']").eq(1),
       differentView:()=>cy.get("[class='item item--link ng-star-inserted']").eq(2),
       lob:()=>cy.xpath('//span[normalize-space()="Select Line Of Business"]'),
       commercial:()=>cy.get('li[aria-label="Commercial"] span[class="ng-star-inserted"]'),
       medicaid:()=>cy.contains('li','Medicaid'),
       medicare:()=>cy.contains('li','Medicare'),
       moveBackReason:()=>cy.xpath("(//span[normalize-space()='Move Back Reason'])[1]"),
       commentView:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseCommentFormatted ng-star-inserted']").eq(0),
       commentTab:()=>cy.get("th[title='Comments'] span[class='header-container__text']"),
       userNameComment:()=>cy.get("[class='user bold']"),
       commentTimeStamp:()=>cy.get("[class='timestamp']"),
       commentBody:()=>cy.get("[class='othercomment-body']"),
       selectOptionDropDownDisabledState:()=>cy.get("[class='ui-dropdown-item ui-corner-all ui-state-disabled']"),
       exportDropDown:()=>cy.get("[class='ui-dropdown-item ui-corner-all']"),
       goButtonDisabledState:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']"),
       goButtonEnabledState:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']").eq(1),
       tinColumn:()=>cy.xpath('//span[normalize-space()="TIN"]'),
       selectRetriever:()=>cy.xpath("//span[normalize-space()='Select From List']"),
       clientRetriever:()=>cy.contains('li','Client'),
       productFilter:()=>cy.contains('li','Products'),
       selectLob:()=>cy.get("[class='ui-dropdown-label-container']").eq(3),
       lobDropDown:()=>cy.get('li[aria-label="Commercial"] span[class="ng-star-inserted"]'),
       selectProduct1:()=>cy.get("[id='Product']"),
       productDropDown:()=>cy.xpath("(//span[normalize-space()='Commercial'])[2]"),
       commercialTable:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-product ng-star-inserted']"),
       productDropDown1:()=>cy.xpath("//span[normalize-space()='Affinity Medicare']"),
       ivaProject:()=>cy.contains('li','_2022 BY2021 IVA Test'),
       providerNo:()=>cy.xpath("(//label[normalize-space()='No'])[2]"),
       providerNo1:()=>cy.xpath("(//label[normalize-space()='No'])[3]"),
       projectDropDownList:()=>cy.get("[class='ui-dropdown-items-wrapper']"),
       pursuitOption:()=>cy.get("[for='pursuitInput']"),
       dataLoad:()=>cy.get("[id='lineOfBusiness']"),
       nextStepDisabled:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']").eq(0),
       nextStepIsEnabled:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']").eq(1),
       chaseKeyDefaultText:()=>cy.get("[id='chaseKey']"),
       chaseFieldErrorMessage:()=>cy.get("[title='Enter between 1 and 9 digits']"),
       defaultMeasureValue:()=>cy.get("[id='measure']"),
       measureDisabled:()=>cy.get("[class*='ui-dropdown ui-widget ui-state-default ui-corner-all ui-state-disabled']").eq(1),
       existingMemberYesButton:()=>cy.xpath("(//label[normalize-space()='Yes'])[1]"),
       existingMemberSearchResult:()=>cy.get("[class='ui-table ui-widget ui-table-responsive ui-table-resizable ui-table-resizable-fit ui-table-hoverable-rows']").eq(0),
       searchCheckBox:()=>cy.get(':nth-child(1) > .grid-body__selection-mode > .ng-star-inserted > .ui-radiobutton'),
       nextStep0:()=>cy.get("app-button[class='button'] button[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'] span[class='ui-button-text ui-clickable']"),
       enrollId:()=>cy.get("[id='enrolleeId']"),
       threeDigitErrorMessage:()=>cy.get("[title='Enrollee Id can not be less than 3 character.']"),
       fortyOneDigitErrorMessage:()=>cy.get("[title='Enrollee Id can not be more than 40 character.']"),
       aidSearchResult:()=>cy.get("[class='ui-table-tbody']").eq(1),
       aidNextButton:()=>cy.get('.ui-md-8.text-right > .button > p-button > .ui-button > .ui-button-text'),
       providerAddress:()=>cy.get("[title='IS THIS AN EXISTING PROVIDER?']"),
       providerYes3:()=>cy.xpath("(//label[normalize-space()='Yes'])[3]"),
       providerSearchResult:()=>cy.get("[class='grids-display']").eq(0),
       providerNextButton:()=>cy.get('.ui-md-8 > .button > p-button > .ui-button > .ui-button-text'),
       addProvider:()=>cy.xpath("(//span[normalize-space()='Add Provider'])[1]"),
       encounterNextButton:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-disabled']").eq(0),
       enbaleEncounterNextButton:()=>cy.get("[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']"),
       threeDOt:()=>cy.get(':nth-child(1) > [style="text-align: right;"] > app-button > .transparent > .ui-button > .fas'),
       threeDotPend:()=>cy.xpath("//span[normalize-space()='Pend Chase(s)']"),
       pendResolvedWarning:()=>cy.get("[role='dialog']").eq(1),
       pendClosedWarning:()=>cy.get("[role='dialog']").eq(1),
       pendNoButton:()=>cy.xpath("//span[@class='ui-button-text ui-clickable'][normalize-space()='No']"),
       closedPend:()=>cy.contains('li','Closed'),
       pendNewStatus:()=>cy.xpath("//span[normalize-space()='New']"),
       retirevalChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
       pursuit:()=>cy.get("[title='Pursuit']"),
       pursuitYes:()=>cy.xpath("(//label[normalize-space()='Yes'])[1]"),
       pursuitNo:()=>cy.xpath("(//label[normalize-space()='No'])[1]"),
       pursuitNoDefaultState:()=>cy.get("[class='ui-radiobutton-box ui-widget ui-state-default ui-state-active']"),
       clientChaseKeyAidPage:()=>cy.get(':nth-child(10) > .summary-value'),
       chaseDeatilPage:()=>cy.xpath("(//div[normalize-space()='Chase'])[1]"),
       chaseDeatilPage2:()=>cy.get(':nth-child(2) > .link > .button > .description'),
       aidClientMemberKey:()=>cy.get(':nth-child(14) > .summary-value'),
       statusFilter:()=>cy.xpath("(//span[normalize-space()='Status'])[1]"),
       dataEntryFilter:()=>cy.xpath("//span[normalize-space()='Data Entry']"),

       







       



    }
   clickOnQueries()
    {
       this.elements.queriesMenuButton().click()    
    }
    clickOnChaseQueries()
    {
        this.elements.chaseQueryButton().click()
        this.elements.cancelButton().click()
    }
    clickOnCreateNewChase()
    {
        this.elements.createNewChase().click()
    }
    clickOnGetStarted()
    {
        this.elements.getStarted().click()
    }
    clickOnProjectSelect()
    {
        this.elements.selectProject().click()
    }
    clickOnDropDownProject()
    {
        this.elements.project().scrollIntoView().click()
    }
    clickOnDropDownProject1()
    {
        this.elements.hedisProject().scrollIntoView().click()
    }
    clickOnSelectProduct()
    {
        this.elements.selectProduct().click()
        this.elements.product().click()
    }
    clickOnChaseKey()
    {
        const randomNumber =  Math.floor(100000 + Math.random() * 900000);
        this.elements.chaseKey().type(randomNumber)
    }
    clickOnChaseKey1()
    {
        //const randomNumber = Math.floor(Math.random() * 900000) + 100000; 
        this.elements.chaseKey().type(`${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9) + 1}`);

    }
    clickOnSelectMeasure()
    {
        this.elements.selectMeasure().click()
    }
    clickOnDropDownMeasure()
    {
        this.elements.measure().click()
    }
    clickOnNextStep()
    {
        this.elements.nextStep().click()
    }
    clickOnNoOption()
    {
        this.elements.noOption().click()
    }
    clickOnClientMemberId()
    {
        const randomNumber1 =  Math.floor(100000 + Math.random() * 900000);;
        this.elements.clientMemberId().type(randomNumber1)
    }
    clickOnFirstName(firstName)
    {
        this.elements.memberFirstName().type(firstName)
    }
    clickOnLastName(lastName)
    {
        this.elements.memberLastName().type(lastName)
    }
    clickOnMembersDob(Dob)
    {
        this.elements.membersDob().type(Dob)
    }
    clickOnGender()
    {
        this.elements.selectGender().click()
    }
    clickOnGenderDropDown()
    {
        this.elements.gender().click()
    }
    clickOnAddMember()
    {
        this.elements.addMember().click()
    }
    clickOnNoOption2()
    {
        this.elements.noOption2().click()
    }
    clickOnpProviderNoOption2()
    {
        this.elements.providerNo().click()
    }
    clickOnpProviderNoOption3()
    {
        this.elements.providerNo1().click()
    }

    clickOnAddAddress(Address)
    {
        this.elements.addAddress().type(Address)
    }
    clickOnPhoneNumber(phno)
    {
        this.elements.phoneNumber().type(phno)
    }
    clickOnSelectRetriever()
    {
        this.elements.selectRetrieval().click()
    }
    clickOnRetrievalDropDown()
    {
        this.elements.retireival().click()
    }
    clickOnAddAddressButton()
    {
        this.elements.addAddressButton().click()
    }
    clickOnNoOption3()
    {
        this.elements.noOption3().click()
    }
    clickOnNpi()
    {
        const randomNumber3 = Math.floor(1000000000 + Math.random() * 9000000000);
        this.elements.npi().type(randomNumber3)
    }
    clickOnFirstName1(firstName1)
    {
        this.elements.firstName().type(firstName1)
    }
    clickOnLastName1(lastName1)
    {
        this.elements.lastName().type(lastName1)
    }
    clickOnProviderId()
    {
        const randomNumber4 = Math.floor(Math.random() * 1000) + 1;
        this.elements.clientProvider().type(randomNumber4)
    }
    clickOnAddProvider()
    {
        this.elements.addProviderButton().click()
    }
    clickOnClaimid()
    {
        const randomNumber5 = Math.floor(Math.random() * 1000) + 1;
        this.elements.claimId().type(randomNumber5)
    }
    clickOnSelectProvider2()
    {
        this.elements.selectprovider2().click()
    }
    clickOnSelectProvider2DropDown()
    {
        this.elements.provider2().click()
    }
    clickOnEncounter()
    {
        this.elements.enCounter().click()
    }
    clickOnEncounterDropDown()
    {
        this.elements.enounterDropDown().click()
    }
    clickOnEncounterServiceDateFrom(serviceDateFrom)
    {
        this.elements.encounterServiceDateForm().type(serviceDateFrom)
    }
    clickOnEncounterServiceDateThru(serviceDateThru)
    {
        this.elements.encounterServiceDateThru().type(serviceDateThru)
    }
    clickOnDiagnosis1(diagnosis1)
    {
        this.elements.diagNosis1().type(diagnosis1)
        this.elements.diagnosis1DropDown1().click()
    }
    clickOnDiagnosisStartDate(diagnosis1startDate)
    {
        this.elements.diagnosisStartDate().type(diagnosis1startDate)
    }
    clickOnDiagnosisThruDate(diagnosis1thruDate)
    {
        this.elements.diagnosisThruDate().type(diagnosis1thruDate)
    }
    clickOnDiagnosis2(diagnosis2)
    {
        this.elements.diagNosis2().type(diagnosis2)
        this.elements.diagNosis2DropDown().click()
    }
    clickOnDiagnosisStartDate1(diagnosis1startDate)
    {
        this.elements.diagnosisStartDate1().type(diagnosis1startDate)
    }
    clickOnDiagnosisThruDate1(diagnosis1thruDate)
    {
        this.elements.diagnosisThruDate1().type(diagnosis1thruDate)
    }
    clickOnNextStep2()
    {
        this.elements.nextStep2().click()
    }
    clickOnFinalize()
    {
        this.elements.finalize().click()
    }
    logChase()
    {
        this.elements.chase().invoke('text')
        .then(($e1) => {
            cy.log($e1);
          
            chase1 =  $e1.trim()
         
        })
    }
    clickOnChase()
    { 
        this.elements.congratsMsg().should('be.visible').and("includes.text","congrats!you've successfully created a new ChaseYour New Chase ID is")
        this.elements.chase().click()
    }
    verifyCongratsMessage()
    { 
        this.elements.congratsMsg().should('be.visible').and("includes.text","congrats!you've successfully created a new ChaseYour New Chase ID is")
        this.elements.chase().should('be.visible')
    }
    clickOncrossButton()
    {
        this.elements.crossButton().click()
    }
    verifyChaseId()
    {
        this.elements.chaseIdValue().invoke('text')
        .then((text) => {
            const match = text.match(/\d+/); // Use a regular expression to match digits
            if (match) {
                const numericValue = match[0]; // Extract the matched numeric value
                cy.log(numericValue); // Log the numeric value
                chase2 = numericValue; // Assign it to the chase2 variable
                expect(chase2).to.equal(chase1);
            }
        })
    }
    verifyEncounterTab()
    {
        this.elements.encounterTab().should('be.visible').and('includes.text','ENCOUNTERS')
    }
    clickOnNextStep3()
    {
        this.elements.nextStep3().click()
    }
    clickOnSearchedUser()
    {
        this.elements.searchedUser().click()
    }
    clickOnSearch()
    {
        this.elements.search().click()
    }
    clickOnExistingMemberYes()
    {
        this.elements.existingMemberYes().click()
    }
    clickOnRunQuerryButton()
    {
        this.elements.runQueryButton().click()
    }
    clickOnRetrievalMenuButton()
    {
        this.elements.retrievalMenuButton().click()
    }
    clickOnCallCenterRep()
    {
        this.elements.callCenterRep().click()
    }
    logAid()
    {
        this.elements.aidList().invoke('text')
        .then((text) => {
            cy.log(text);
          
            aid = text
        })
    }
    clickOnProviderYes()
    {
        this.elements.providerYes().click()
    }
    clickOnProviderYes5()
    {
        this.elements.providerYes1().click()
    }
    clickOnAddressAid()
    {
        this.elements.addressAid().type(aid)
    }
    verifyDisabledNextButton()
    {
        this.elements.disbaledNextButton().should('have.class', 'ui-state-disabled','disabled')
    }
    verifyEnabledNextButton()
    {
        this.elements.enabledNextButton() .should('not.have.class', 'disabled')
    }
    clickOnPlusSignOfClaimID()
    {
        this.elements.claimIdPlusSign().click()
    }
    clickOnClaimid2()
    {
        const randomNumber6 = Math.floor(Math.random() * 1000) + 1;
        this.elements.claimID2().type(randomNumber6)
    }
    clickOnSecondEncounterDate(serviceDateFrom1)
    {
        this.elements.secondEncounterDate().type(serviceDateFrom1)
    }
    clickOnSecondEncounterThruDate(serviceDateThru1)
    {
        this.elements.secondEncounterThruDate().type(serviceDateThru1)
    }
    clickOnMultipleDiagnosis(diagnosis3)
    {
        this.elements.thirdDiagnosis().type(diagnosis3)
        this.elements.diagnosis1DropDown1().click()
    }
    clickOnMultipleDiagnosisStartDate(diagnosis1startDate1)
    {
        this.elements.multipleDiagnosisStartDate().type(diagnosis1startDate1)
    }
    clickOnMultipleDiagnosisThruDate(diagnosis1thruDate1)
    {
        this.elements.multipleDiagnosisThruDate().type(diagnosis1thruDate1)
    }
    clickOnProviderDropDown()
    {
        this.elements.providerDropDown().click()
        this.elements.dropDownValue().should('be.visible').and('includes.text','ADAM SMITH').click()
        this.elements.providerDropDown1().should('be.visible').and('includes.text','ADAM SMITH')
    }
    verifySelectedEncounterValue()
    {
        this.elements.selectedEncountervalue().should('be.visible').and('includes.text','01 - Inpatient Hospital Admission')
    }
    verifySelectedEncounterValue1()
    {
        this.elements.selectedEncountervalue1().click()
        this.elements.enounterDropDown().should('be.visible').and('includes.text','01 - Inpatient Hospital Admission').click()
        this.elements.selectedEncountervalue1().should('be.visible').and('includes.text','01 - Inpatient Hospital Admission')
    }
    verifyWarningMessage()
    {
        this.elements.warningMsg().should('be.visible').and('includes.text','Encounter start and through dates must be within project review period')
        this.elements.warningMsg1().should('be.visible').and('includes.text','Diagnosis start and through dates must be within project review period')
    }
    clickOnSkipStep()
    {
        this.elements.skipStepButton().click()
    }
    clickOnResetButton()
    {
        this.elements.resetButton().click()
    }
    verifyProjectFieldsGetReset()
    {
        this.elements.selectProject().should('not.contain','Risk 2.0 Training Project 2')
        this.elements.selectProduct().should('not.contain','Affinity Medicare')
    }
    verifyMemberpageGetReset()
    {
        this.elements.memberFirstName().should('not.contain','Qa automation')
        this.elements.memberLastName().should('not.contain','Testing')
        this.elements.membersDob().should('not.contain','03/15/1997')
    }
    verifyProviderAddressPageGetsReset()
    {
        this.elements.addAddress().should('not.contain','newyork')
        this.elements.phoneNumber().should('not.contain','8746536763')
        this.elements.selectRetrieval().should('not.contain','Reveleer')
    }
    clickOnMemberReset()
    {
        this.elements.memberReset().click()
    }
    clickOnAidReset()
    {
        this.elements.aidResetButton().click()
    }
    clickOnProviderReset()
    {
        this.elements.providerReset().click()
    }
    verifyProviderPageGetsReset()
    {
        this.elements.firstName().should('not.contain','Qa automation')
        this.elements.lastName().should('not.contain','Testing1')
    }
    clickOnEncounterResetButton()
    {
        this.elements.encounterReset().click()
    }
    verifyEncounterPageGetsReset()
    {
        this.elements.selectprovider2().should('not.contain','Qa automation1 Testing1')
        this.elements.enCounter().should('not.contain','01 - Inpatient Hospital Admission')
        this.elements.encounterServiceDateForm().should('not.contain','01/01/2021')
        this.elements.encounterServiceDateThru().should('not.contain','01/01/2021')
        this.elements.diagnosis5().should('not.contain','A150 Tuberculosis of lung')
        this.elements.resetDiagnosisFieldStart().should('not.contain','01/01/2021')
        this.elements.resetDiagnosisFieldThru().should('not.contain','01/01/2021')
        this.elements.resetDiagnosis().should('not.contain','A156 Tuberculous pleurisy')
        this.elements.secondDiagnosisStartDate().should('not.contain','01/01/2021')
        this.elements.secondtDiagnosisFieldThru().should('not.contain','01/01/2021')
    }
    clickOnClaimid5()
    {
        this.elements.claimId().type('123')
    }
    clickOnClaimid4()
    {
        this.elements.claimID2().type('123')
    }
    verifyClaimIdErrorMessage()
    {
        this.elements.claimIdErrorMessage().should('be.visible').and('includes.text','Claim Id must be unique.')
    }
    clickOnChaseQueries1()
    {
        this.elements.chaseQueryButton().click()
    }
    selectProjectFilter()
    {
        this.elements.projectSelection().click()
    }
    selectStatustFilter()
    {
        this.elements.statusFilter().click()
        this.elements.dataEntryFilter().click()
    }
    clickOnSelectNextOption()
    {
        this.elements.selectNewAction().click()
    }
    clickOnExportChase()
    {
    this.elements.export().click()
    }
    clickOnGoButton()
    {
        this.elements.goButton().click()
    }
    clickOnAssignedTo()
    {
        this.elements.assignedTo().click()
    }
    clickOnAssignedToUser(assignedUser)
    {
        this.elements.assgnedToUser().type(assignedUser)
        this.elements.assignedDropdown().click()
    }
    verifyGridisLoadedAsPerFilter()
    {
        this.elements.assignedField().should('includes.text','Testing Admin')
    }
    clickOnPendChase()
    {
        this.elements.pendChase().click()
    }
    pendChase()
    {
        cy.wait(2000)
        this.elements.pendCodeBox().then(($element) => {
            if ($element.is(':disabled')) {
                this.elements.pendStatusBox().click()
                this.elements.resolvedButton().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
                this.elements.pendYesButton().click()
                cy.wait(2000)
                this.elements.firstCheckBox().scrollIntoView().click()
                this.elements.selectNewAction().click()
                this.elements.pendChase().click()
                this.elements.goButton().click()
                this.elements.pendCodeBox().click({force:true})
                cy.wait(2000)
                this.elements.pendCodeDropdown().click()
                this.elements.pendCodeDropDown2().click()
                this.elements.severityDropDown().click()
                this.elements.severityOption().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
            }
            else {
                cy.wait(2000)
                this.elements.pendCodeBox().click({force:true})
                this.elements.pendCodeDropdown().click()
                this.elements.pendCodeDropDown2().click()
                this.elements.severityDropDown().click()
                this.elements.severityOption().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
              
                
            }
        })
    }
    clickOnFirstCheckBox()
    {
        this.elements.firstCheckBox().click()
    }
    verifyPendStatus()
    {
        this.elements.pendStatus1().should('be.visible').and('includes.text','Pended')
    }
    verifyPendCodeno()
    {
        this.elements.pendCodeNo().should('be.visible').and('includes.text','Pend CodePC100')
    }
    clickOnassignUser()
    {
        this.elements.assignUser().click()
    }
    assigntoUser()
    {
        this.elements.user().type("@Me")
        this.elements.assignDropDown().click()
        this.elements.continueButton().click()
        this.elements.sucessToast().should('be.visible').and("includes.text",'Assigned Successfully.')
    }
    verifyUserIsassigned()
    {
        this.elements.assignedField().should("includes.text","Automation uat")
    }
    unassignedUser()
    { 
        this.elements.sucessToast().should('be.visible').and("includes.text",'Unassigned Successfully.')
        this.elements.assignedField().should("not.contain","Automation uat")
    }
    clickOnUnassign()
    {
        this.elements.unAssignedUser().click()
        this.elements.goButton().click()
    }
    clickOnSecondCheckBox()
    {
        this.elements.secondheckBox().click()
    }
    verifyMultipleAssignedUser()
    {
        this.elements.assignedField().should('includes.text','Assigned ToAutomation uat')
        this.elements.assignedField2().should('includes.text','Assigned ToAutomation uat')
    }
    pendChase1()
    {
        cy.wait(2000)
        this.elements.pendCodeBox().then(($element) => {
            if ($element.is(':disabled')) {
                this.elements.pendStatusBox().click()
                this.elements.resolvedButton().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
                this.elements.pendYesButton().click()
                cy.wait(2000)
                this.elements.firstCheckBox().scrollIntoView().click()
                this.elements.thirdheckBox().scrollIntoView().click()
                this.elements.selectNewAction().click()
                this.elements.pendChase().click()
                this.elements.goButton().click()
                this.elements.pendCodeBox().click({force:true})
                cy.wait(2000)
                this.elements.pendCodeDropdown().click()
                this.elements.pendCodeDropDown3().click()
                this.elements.severityDropDown().click()
                this.elements.severityOption().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
               
            }
            else {
                cy.wait(2000)
                this.elements.pendCodeBox().click({force:true})
                this.elements.pendCodeDropdown().click()
                this.elements.pendCodeDropDown3().click()
                this.elements.severityDropDown().click()
                this.elements.severityOption().click()
                this.elements.additionalNotes().type('test')
                this.elements.pendSave().click()
                
              
                
            }
        })
    }
    clickOnThirdCheckBox()
    {
        this.elements.thirdheckBox().click()
    }
    pendToastMessage()
    {
        this.elements.sucessToast().should('be.visible').and('includes.text','Pend saved successfully')
    }
    selectProject2()
    {
        this.elements.project2().click()
    }
    clickOnDownloadChart()
    {
        this.elements.downloadChart().click()
    }
    clickOnJobQue()
    {
        this.elements.jobQue().click()
    
    }
    jobChase() {
        this.elements.notification().should('be.visible');
        cy.window().document().then(function (doc) {

            doc.addEventListener('click', () => {

                setTimeout(function () { doc.location.reload() }, 40000)

            })
        this.elements.jobChase().click()
    })
      }
      logFirstChase()
      {
        this.elements.firstChase().invoke('text')
        .then(($e1) => {
            cy.log($e1);
          
            firstChase1 =  $e1.trim()
        })
      }
      clickOnFilter()
      {
        this.elements.filter().click()
      }
      clickOnClientChase()
      {
        this.elements.clientChase().click()
      }
      clickOnChaseKeyField()
      {
        this.elements.chaseKeyField().type(firstChase1)
      }
      clickOnChaseKeyField1()
      {
        this.elements.chaseKeyField().type(retrievedNumber)
      }
      verifyGridLoad()
      {
        this.elements.firstChase().should('contain',firstChase1)
      }
      clickOnMeasures()
      {
        this.elements.measure().click()
      }
      selectMeasures()
      {
        this.elements.selectMeasures().click()
      }
      verifyMeasureGrid()
      {
        this.elements.measureGrid().should('includes.text','CCS')
      }
      clickOnClient()
      {
        this.elements.client().click()
      }
      clickOnClientField()
      {
        this.elements.clientField().type('Testing Client 1')
      }
      clickOnClientDropdown()
      {
        this.elements.clientDropDown().click()
      }
      verifyClientName()
      {
        this.elements.clientName().should('includes.text','Testing Client 1')
      }
      verifyProjectField()
      {
        this.elements.projectField().should("includes.text","2022 HEDIS CA and SH")
      }
      clickOnMember()
      {
        this.elements.members().click()
      }
      clickOnFirstMemberName()
      {
        this.elements.memberName().type("johnTwelve")
      }
      verifyFirstNameField()
      {
        this.elements.firstNameField().should("includes.text","First NameJohnTwelve")
      }
      clickOnAddress()
      {
        this.elements.address().click()
      }
      serachAid()
      {
        this.elements.aidField().type(aid)
      }
      verifyAidGrid()
      {
        this.elements.aidGrid().should('contain',aid)
      }
      clickOnPendCode()
      {
        this.elements.pendCode().click()
      }
      clickOnPendNumber()
      {
        this.elements.pendCodesNumber().click()
      }
      verifyPendCodeGrid()
      {
        this.elements.pendCodeNo1().should('contain','PC100')
      }
      clickONChaseComliance()
      {
        this.elements.chaseCompliance().click()
      }
      clickOnComplianceNo()
      {
        this.elements.complianceNo().click()
      }
      veirfyComplianceGrid()
      {
        this.elements.complianceGrid().should('contain','NC')
      }
      clickOnLastCodedBy()
      {
        this.elements.lastCodedBy().click()
      }
      clickOnLastCodedField()
      {
        this.elements.lastCodedField().type("@me")
        this.elements.assignDropDown().click()
      }
      verifyLastCodedGrid()
      {
        this.elements.lastCodedGrid().should('contain','Automation uat')
      }
      clickOnPendStatus()
      {
        this.elements.pendStatus().click()
      }
      clickOnPendStatusNo()
      {
        this.elements.penStatusNo().click()
      }
      verifyPendStatusGrid()
      {
        this.elements.pendStatusGrid().should('includes.text','New')
      }
      clickOnDateAssigned()
      {
        this.elements.dateAssigned().click()
      }
      clickOnDateAssignedSearchBox()
      {
        this.elements.dateAssignedSearchBox().type("12/21/2021")
      }
    verifyDateAssignedGrid()
    {
        this.elements.dateAssignedGrid().should("contain","12/21/2021")
    }
    clickOnRisk()
    {
        this.elements.risk().click()
    }
    clickOnDosCOnfirmed()
    {
        this.elements.dosConfirmed().click()
    }
    clickOnHCCDescrepency()
    {
        this.elements.hccDescreprncy().click()
    }
    verifyRiskGrid()
    {
        this.elements.dosGrid().should('contain','Yes')
        this.elements.hccGrid().should('contain','Yes')
    }
    clickOnParentChase()
    {
        this.elements.parentChase().click()
    }
    verifyParentChaseBracket()
    {
        this.elements.parentChaseBracket().should('exist')
    }
    verifyPursuitChase()
    {
        cy.wait(3000)
        this.elements.parentChaseBracket().realHover()
        this.elements.pursuitChase().should('exist')
    }
    clickOnChildChase()
    {
        this.elements.pursuitChase1().scrollIntoView().click({force:true})
    }
    verifyUrl()
    {
        cy.url().should('include', 'https://uat.reveleer.com/members/chase')
    }
    verifyUnassigned1()
    {
        this.elements.assignedField1().should('not.contain','Testing Admin')
    }
    clickOnMeasureDropDOwn()
    {
        this.elements.measureDropDown().click()
    }
    verifyCreateNewChase()
    {
    this.elements.createNewChaseButton().should('be.visible')
    }
    verifyChaseId3() {
        this.elements.chaseIdContainer().invoke('text')
            .then((text) => {
                const numericPart = text.match(/\d+/);
                if (numericPart) {
                    chaseID3 = numericPart[0];
                    cy.log(chaseID3);
                    expect(chaseID3).to.equal(chase1);
                }
            })
    }
    clickOnPaginationDropDown() {
        this.elements.pageDropDown().click()
        cy.wait(5000)
        this.elements.pageDropDownValue().click()
        cy.wait(5000)
        this.elements.pageDropDownValue().click()
    }
    verifyPagination() {
        this.elements.pagination()
            .invoke('text')
            .then((text) => {
                cy.log(text);
                pagination1 = text;

            })
    }
    verifyTableList() {
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
                expect(globalTrimmedNumber.toString()).to.equal(pagination1.toString());
            }
        });

    }
    verifyCreateNewView()
{
    this.elements.createNewView().should('be.visible').and('includes.text','Create New View')
}
clickOnCreateNewView()
{
    this.elements.createNewView().click()
}
clickOnenterTitile(name)
{
    this.elements.enterTitle().type(name)
}
clickOnChaseIdCheckBox()
{
    this.elements.selectChaseIdCheckBox().click()
}
clickOnSaveButton()
{
    this.elements.saveButton().scrollIntoView().click()
}
clickOncreateView1()
{
    this.elements.createdView().click()
}
verifyCreatedViewTable()
{
    this.elements.chaseIdTableField().should('be.visible').and('includes.text','Chase ID')
}
deletCreatedView()
{
    this.elements.createNewView().scrollIntoView().realHover()
    cy.wait(2000)
    this.elements.hoverClick().scrollIntoView().click({force:true})
    this.elements.deleteButton().scrollIntoView().click()
    this.elements.yesButton().click()
    cy.wait(1000)
}
editcreatedView()
{
    this.elements.createNewView().scrollIntoView().realHover()
    this.elements.hoverClick().scrollIntoView().click()
    this.elements.chaseKeyCheckBox().click()
    this.elements.saveButton().scrollIntoView().click()
    cy.wait(3000)
    cy.reload()
    this.elements.createdView().click()
    this.elements.secondColumn().should('be.visible').and('includes.text','Chase Key')   
}
verifyCreatedViewIsDeleted()
{
    this.elements.createdView().should('not.exist')
}
verifyDifferentViewNotSelected()
{
  this.elements.differentView().should('not.have.css', 'text-decoration', 'underline');

}
clickOnDifferentView()
{
    this.elements.differentView().click()
    cy.wait(2000)
}
verifyDifferentViewSelected()
{
    this.elements.differentView().should('have.css', 'text-decoration', 'underline solid rgb(49, 57, 63)');
}
verifyLineOfBusiness()
{
    this.elements.lob().should('be.visible').and('includes.text','Select Line Of Business')
}
verifyLobDropDOwn()
{
    cy.wait(2000)
    this.elements.lob().click()
    this.elements.commercial().should('includes.text','Commercial').and('be.visible')
    this.elements.medicaid().should('includes.text','Medicaid').and('be.visible')
    this.elements.medicare().should('includes.text','Medicare').and('be.visible')
}
verifyLineOfBusinessIsNotDisplayed()
{
    this.elements.lob().should('not.exist')
}
verifyMoveBackReason()
{
    this.elements.moveBackReason().scrollIntoView().should("be.visible").and("includes.text","Move Back Reason")
}
clickOnCommentView()
{
    this.elements.commentView().click()
}
verifyCommentTab()
{
    this.elements.commentTab().should('be.visible').and('includes.text','Comments')
}
verifyCommentView()
{
    this.elements.userNameComment().should('be.visible')
    this.elements.commentTimeStamp().should('be.visible')
    this.elements.commentBody().should('be.visible')
}
verifyDisabledDropDown()
{
    this.elements.exportDropDown().should('not.have.class','disabled')
    this.elements.selectOptionDropDownDisabledState().should('have.class', 'ui-state-disabled')
    this.elements.goButtonDisabledState().should('have.class', 'ui-state-disabled')
}
verifyGoButtonIsEnabled()
{
    this.elements.goButtonEnabledState().should('not.have.class','disabled')
}
verifyTinTable()
{
    this.elements.tinColumn().scrollIntoView().should('be.visible').and('includes.text','TIN')
}
clickOnSelectRetriever1()
{
    this.elements.selectRetriever().click()
}
verifySelectRetriever()
{
    this.elements.selectRetriever().should('be.visible')
}
verifyRetrievalDropDown()
{
    this.elements.selectRetriever().click()
    this.elements.retireival().should('be.visible').and('includes.text','Reveleer')
    this.elements.clientRetriever().should('be.visible').and('includes.text','Client')
}
clickOnProduct()
{
    this.elements.productFilter().click()
}
clickOnLob()
{
    this.elements.selectLob().click()
}
selectLobDropDown()
{
    this.elements.lobDropDown().click()
}
clickOnSelectProductDropDown()
{
    this.elements.selectProduct1().click()
}
clickOnSelectProductDropDown1()
{
    this.elements.productDropDown().scrollIntoView().click()
}
verifyCommercialTable()
{
    this.elements.commercialTable().should('includes.text','Commercial')
}
clickOnMultipleDropDown()
{
    this.elements.productDropDown().scrollIntoView().click()
    this.elements.productDropDown1().scrollIntoView().click()
}
verifyMultipleResult()
{
    this.elements.commercialTable().should('be.visible').should(($element) => {
        const textToCheck = ['Commercial', 'Affinity Medicare',]; 
        textToCheck.forEach((text) => {
          expect($element.text()).to.include(text);
        });
      });
}
selectIvaProject()
{
    this.elements.ivaProject().click()
}
selectIvaProject1()
{
    this.elements.ivaProject().should('be.visible').and('includes.text','_2022 BY2021 IVA Test')
}

verifyProjectDropDownList()
{
    this.elements.projectDropDownList().should('be.visible')
}
verifyPursuitIsVisible()
{
    this.elements.pursuitOption().should('be.visible')
}
verifyPursuitIsNotVisible()
{
    this.elements.pursuitOption().should('not.exist')
}
verifyDataLoadField()
{
    this.elements.dataLoad().should('have.attr', 'disabled')
    this.elements.dataLoad().should('have.attr', 'aria-label', 'Commercial')
}
verifyNextStepIsDisabled()
{
    this.elements.nextStepDisabled().should('have.class', 'ui-state-disabled','disabled')
}
verifyNextStepIsEnabled()
{
    this.elements.nextStepIsEnabled().should('not.have.class', 'disabled')
}
verifyChaseKeyFieldDefaultValue()
{
    this.elements.chaseKeyDefaultText().should('have.value','HST-MN-')
}
verifyErrorMessage()
{
    this.elements.chaseKeyDefaultText().type('100')
    this.elements.chaseFieldErrorMessage().should('includes.text','Enter between 1 and 9 digits')
}
verifyDefaultMeasureValue()
{
    this.elements.defaultMeasureValue().should('have.attr', 'aria-label', 'HST')
}
verifyMeasureFieldIsDisabled()
{
    this.elements.measureDisabled().should('have.class', 'ui-state-disabled','disabled')
}
clickOnExistingMemberYes1()
{
    this.elements.existingMemberYesButton().click()
}
verifyExistingMemberSearchResult()
{
    this.elements.existingMemberSearchResult().should("be.visible")
}
searchCheckBox()
{
    this.elements.searchCheckBox().click()
}
veirfyNextButtonNotvisible()
{
    this.elements.nextStep0().should('not.exist')
}
verifyNextButtonIsVisible()
{
    this.elements.nextStep0().should('be.visible')
}
verifyThreeDigitErrorMessage()
{
    this.elements.enrollId().type('1')
    this.elements.threeDigitErrorMessage().should('includes.text','Enrollee Id can not be less than 3 character.')

}
verify41DigitErrorMessage()
{
    const randomNumber41 = Array.from({ length: 41 }, () => Math.floor(Math.random() * 10)).join('');
    this.elements.enrollId().type(randomNumber41)
    this.elements.fortyOneDigitErrorMessage().should('includes.text','Enrollee Id can not be more than 40 character.')
}
verifyAidSearchResult()
{
    this.elements.aidSearchResult().scrollIntoView().should('exist')
}
verifyAIdNextButton()
{
    this.elements.aidNextButton().should('not.exist')
}
verifyAIdNextButton1()
{
    this.elements.aidNextButton().should('exist')
}
verifyProvider()
{
    this.elements.providerAddress().should('be.visible')
}
clickOnExistingProviderYes()
{
    this.elements.providerYes3().click()
}
verifyProviderSearchResult()
{
    this.elements.providerSearchResult().should("be.visible")
}
verifyProviderNextButton()
{
    this.elements.providerNextButton().should('not.exist')
}
verifyProviderNextButton1()
{
    this.elements.providerNextButton().should('exist')
}
addNewProvider()
{
    this.elements.addProvider().click()
}
verifyNextEncounterButton()
{
    this.elements.encounterNextButton().should('have.class', 'ui-state-disabled','disabled')
}
enbaledENconterNextButton()
{
    this.elements.enbaleEncounterNextButton().should('not.have.class', 'disabled')
}
pendChase5()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown2().click()
            this.elements.severityDropDown().click()
            this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
          
            
        }
    })
}
clickOnThreeDot()
{
    this.elements.threeDOt().click()
    this.elements.threeDotPend().click()
}
pendResolvedChase()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
            this.elements.pendYesButton().click()
            this.elements.sucessToast().should('be.visible').and('includes.text','Pend saved successfully')
            cy.wait(2000)
            this.elements.pendStatusGrid1().should('includes.text','Resolved')
            
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown2().click()
            this.elements.severityDropDown().click()
            this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
            this.elements.pendYesButton().click()
            this.elements.sucessToast().should('be.visible').and('includes.text','Pend saved successfully')
            cy.wait(2000)
            this.elements.pendStatusGrid1().should('includes.text','Resolved')
          
            
        }
    })
    
}
pendNoOption()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
            this.elements.pendNoButton().click()
            cy.wait(2000)
            this.elements.pendStatusGrid1().should('includes.text','New')
            
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown4().click()
            // this.elements.severityDropDown().click()
            // this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendResolvedWarning().should('includes.text','Resolving the Pend(s) will let work continue on the Chase(s). This should be done once the obstacle preventing the Chase(s) from advancing has been resolved. Do you want to proceed?')
            this.elements.pendNoButton().click()
            cy.wait(2000)
            this.elements.pendStatusGrid1().should('includes.text','New')
          
            
        }
    })
}
clickOnRetrievalPends()
{
    this.elements.retrievalPends().click()
}
clickOnPendStatus()
{
    this.elements.pendStatus().click()
}
clickOnPendNewStatus()
{
    this.elements.pendNewStatus().click()
}
logRetrievalChase()
{
    this.elements.retirevalChaseId().invoke('text')
        .then((text) => {
            const match = text.match(/\d+/); 
            if (match) {
                 retrievedNumber = match[0];
                cy.log(retrievedNumber);
            }
        })
}
pendCloseChase()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown2().click()
            this.elements.severityDropDown().click()
            this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
          
            
        }
    })
}
pendNoChase1()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
            this.elements.pendNoButton().click()
            this.elements.pendStatusGrid().should('includes.text','New')
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown2().click()
            this.elements.severityDropDown().click()
            this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
            this.elements.pendNoButton().click()
            this.elements.pendStatusGrid().should('includes.text','New')
            
        }
    })
}
pendYesChase1()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
            this.elements. pendYesButton().click()
            this.elements.pendStatusGrid().should('includes.text','Closed')
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown2().click()
            this.elements.severityDropDown().click()
            this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            cy.wait(5000)
            this.elements.threeDOt().click()
            this.elements.threeDotPend().click()
            cy.wait(3000)
            this.elements.pendStatusBox().click()
            this.elements.closedPend().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendClosedWarning().should('includes.text','Closing the Pend(s) will also close the associated Chase(s). Those chases will no longer continue to be worked. Do you want to proceed?')
            this.elements. pendYesButton().click()
            this.elements.pendStatusGrid().should('includes.text','Closed')
            
        }
    })
}
verifyPursuit()
{
    this.elements.pursuit().should('be.visible').and ('includes.text','Pursuit')
    this.elements.pursuitYes().should('be.visible').and ('includes.text','Yes')
    this.elements.pursuitNo().should('be.visible').and ('includes.text','No')
}
verifyPursuitDefaultState()
{
    this.elements.pursuitNoDefaultState().should('have.attr','aria-checked','true')
}
logChaseKey()
{
    this.elements.chaseKey().invoke('val')
    .then((val) => {
        cy.log(val);
      
        chaseKeyLog = val
    })
}
verifyClientAidChaseKey()
{
    this.elements.clientChaseKeyAidPage().should('includes.text',chaseKeyLog)
}
clickOnChaseOfChaseDetailPage()
{
    this.elements.chaseDeatilPage().click()
}
clickOnChaseOfChaseDetailPage1()
{
    this.elements.chaseDeatilPage2().click()
}
logClientMemberId()
{
    this.elements.clientMemberId().invoke('val')
    .then((val) => {
        cy.log(val);
      
        clientMemberIdLog = val
    })
}
verifyAidClientMemberKey()
{
    this.elements.aidClientMemberKey().should('includes.text',clientMemberIdLog)
}
pendChase7()
{
    cy.wait(2000)
    this.elements.pendCodeBox().then(($element) => {
        if ($element.is(':disabled')) {
            this.elements.pendStatusBox().click()
            this.elements.resolvedButton().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
            this.elements.pendYesButton().click()
            cy.wait(2000)
            this.elements.firstCheckBox().scrollIntoView().click()
            this.elements.selectNewAction().click()
            this.elements.pendChase().click()
            this.elements.goButton().click()
            this.elements.pendCodeBox().click({force:true})
            cy.wait(2000)
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown4().click()
            // this.elements.severityDropDown().click()
            // this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
        }
        else {
            cy.wait(2000)
            this.elements.pendCodeBox().click({force:true})
            this.elements.pendCodeDropdown().click()
            this.elements.pendCodeDropDown4().click()
            // this.elements.severityDropDown().click()
            // this.elements.severityOption().click()
            this.elements.additionalNotes().type('test')
            this.elements.pendSave().click()
          
            
        }
    })
}




    
    

   



}
export default chaseQuery