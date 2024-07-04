
let projectID
let projectDuration
let projectDuration1
let globalRandomName
let projectID4
class adminProject1{
    elements={
        adminProjectButton: () => cy.xpath("//span[text()='Projects']/parent::a"),
        totalProjectCount:()=>cy.get(':nth-child(1) > .font-size-2'),
        adminMenuButton: () => cy.xpath("//div[text()='Admin']/parent::li"),
        gridCount:()=>cy.xpath("//div[@class='grid__menu__item grid__menu__item--paging ng-star-inserted']"),
        projectFilter:()=>cy.xpath("//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        selectProject:()=>cy.xpath("//span[normalize-space()='2022 HEDIS 05102021']"),
        gridproject:()=>cy.xpath("//div[normalize-space()='2022 HEDIS 05102021']"),
        adminProjectName:()=>cy.xpath('//a[contains(@href, "/project/")]'),
        adminProject2:()=>cy.xpath('(//a[contains(@href, "/project/")])[1]'),
        adminProject4:()=>cy.xpath('(//a[contains(@href, "/project/")])[5]'),
        grid:()=>cy.get("[class='ui-selectable-row ng-star-inserted']"),
        status:()=>cy.xpath("//span[@class='ui-tabview-title ng-star-inserted'][normalize-space()='Status']"),
        inactive:()=>cy.xpath("//label[text()='Inactive']"),
        gridStatus:()=>cy.xpath("//span[text()='Inactive']"),
        gridStatus1:()=>cy.xpath("//span[text()='Active']"),
        active:()=>cy.xpath("//label[text()='Active']"),
        project2:()=>cy.xpath("//span[normalize-space()='2022 QRTZ IVA-BY2021']"),
        projectStatusToggle:()=>cy.xpath("(//span[@class='ui-inputswitch-slider'])[1]"),
        save:()=>cy.xpath("//span[normalize-space()='Save']"),
        sucessToast:()=>cy.xpath("//div[@class='ui-toast-detail']"),
        close:()=>cy.xpath("//span[normalize-space()='Close']"),
        exportAll:()=>cy.xpath("//span[normalize-space()='Export All']"),
        projectId:()=>cy.xpath("(//span[@class='ui-column-value ng-star-inserted'])[1]"),
        projectId4:()=>cy.xpath("(//span[@class='ui-column-value ng-star-inserted'])[33]"),
        filterProjectId:()=>cy.xpath("//span[normalize-space()='Project Id']"),
        projectIdSearchBox:()=>cy.get("[id='ProjectId']"),
        activeCheckBox:()=>cy.xpath("//div[@class='ui-radiobutton-box ui-widget ui-state-default ui-state-active']"),
        cancel:()=>cy.xpath("//span[normalize-space()='Cancel']"),
        activeDialog:()=>cy.get("[role='dialog']"),
        retrievalGetNext:()=>cy.xpath("//label[@title='Enable Retrieval Get Next']"),
        clinicalGetNext:()=>cy.xpath("//label[@title='Enable Clinical Get Next']"),
        retrievalToggel:()=>cy.xpath("(//span[@class='ui-inputswitch-slider'])[2]"),
        clinicalToggel:()=>cy.xpath("(//span[@class='ui-inputswitch-slider'])[3]"),
        clinicalSwitch:()=>cy.xpath("(//input[@role='switch'])[3]"),
        retrievalSwitch:()=>cy.xpath("(//input[@role='switch'])[2]"),
        milestoneButton:()=>cy.xpath("(//div[normalize-space()='Milestones'])[3]"),
        rerievalMileStone:()=>cy.xpath("//h3[normalize-space()='RETRIEVAL MILESTONES']"),
        startDate:()=>cy.get("[title='Start Date:']"),
        endDate:()=>cy.xpath("(//label[@title='End Date:'])[1]"),
        startDateConstiner:()=>cy.get('#startDate'),
        endDateConstiner:()=>cy.get('#endDate'),
        hedisProject:()=>cy.xpath("//span[normalize-space()='2022 HEDIS 05102021']"),
        duration:()=>cy.xpath("(//td[@class='hdvi-gridcol hdvi-gridcol-projectDuration ng-star-inserted'])[1]"),
        hedisProject1:()=>cy.xpath("//span[normalize-space()='2022 HEDIS CA and SH']"),
        eveSetting:()=>cy.xpath("//div[contains(text(),'EVE Settings')]"),
        everAbstraction:()=>cy.xpath("//label[@title='EVE for Abstraction']"),
        eveConfig:()=>cy.xpath("//h3[normalize-space()='Abstraction Configurations']"),
        createNewProject:()=>cy.xpath("//span[normalize-space()='Create New Project']"),
        projectType:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[3]"),
        projectDopDown:()=>cy.contains('li','HEDIS'),
        projectDopDown1:()=>cy.contains('li','RISK'),
        measurementYear1:()=>cy.get("[title='Measurement Year']"),
        reportingYear:()=>cy.get("[title='Reporting Year']"),
        lineofbusiness:()=>cy.get("[title='Line Of Business']"),
        codingmodal:()=>cy.get("[title='Coding Model']"),
        reviewPeriodFromDate:()=>cy.xpath("(//button[@type='button'])[1]"),
        reviewPeriodThruDate:()=>cy.xpath("(//button[@type='button'])[2]"),
        startDate:()=>cy.xpath("(//a[@draggable='false'])[18]"),
        endDate5:()=>cy.xpath("(//a[@draggable='false'])[10]"),
        projectDate:()=>cy.xpath("(//a[@draggable='false'])[10]"),
        projectDate2:()=>cy.xpath("(//a[@draggable='false'])[18]"),
        errorFromDate:()=>cy.xpath("//div[@title='Please select a From Date that is before the Thru Date']"),
        projectStartDate:()=>cy.get("[id='projectStartDate']"),
        projectEndDate:()=>cy.get("[id='projectEndDate']"),
        endDateErrorMSg:()=>cy.xpath("//div[@title='Project end date can not be less than Project start date']"),
        dualAssignment:()=>cy.xpath("//label[@title='Enable Dual Role Assignment']"),
        dualAssignmentToggle:()=>cy.xpath("(//span[@class='ui-inputswitch-slider'])[4]"),
        dualToggle:()=>cy.get("[id='dualRoleChaseAssignmentEnabled']"),
        abstractionToggle:()=>cy.xpath("//body//app-root//div[@class='container-body']//div//div[1]//div[1]//div[1]//form-factory[1]//div[1]//form-switch[1]//div[1]//div[2]//p-inputswitch[1]//div[1]//span[1]"),
        overreadToggle:()=>cy.xpath("//div[@class='bot-container']//div[3]//div[1]//div[1]//form-factory[1]//div[1]//form-switch[1]//div[1]//div[2]//p-inputswitch[1]//div[1]//span[1]"),
        eveForOverread:()=>cy.get("[title='EVE for Overread']"),
        abstractionPopup:()=>cy.get('[class="risk-bot-settings"]'),
        conitinue:()=>cy.xpath("//span[normalize-space()='Continue']"),
        disabledToggle:()=>cy.get("[name='firstPassBotEnabled']"),
        retrievalMilestone:()=>cy.xpath("//h3[normalize-space()='RETRIEVAL MILESTONES']"),
        startDate1:()=>cy.xpath("//label[@title='Start Date:']"),
        endDate1:()=>cy.xpath("//label[@for='endDate']"),
        abstractionContainer:()=>cy.get("[class='risk-bot-settings']"),
        totalAbstractedChart:()=>cy.xpath("//input[@id='totalChartsBotDataEnteredValue']"),
        totaEveChart:()=>cy.xpath("//label[@title='Total Charts EVE has Abstracted']"),
        disabledToggle5:()=>cy.get("[name='firstPassBotEnabled']"),
        overreadContainer:()=>cy.get("[class='risk-bot-settings']"),
        overreadTotalChart:()=>cy.get('[title="Total Charts EVE has Overread"]'),
        overreadChartContainer:()=>cy.xpath("//input[@id='totalChartsBotOverreadValue']"),
        overreadConfiguration:()=>cy.xpath("//h3[normalize-space()='Overread Configurations']"),
        overreadCofigConatiner:()=>cy.get("[class='complaince-config']"),
        abstractionMeasure:()=>cy.xpath("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[1]"),
        warningMsg:()=>cy.xpath("//div[@class='ui-toast-detail']"),
        hedisSetting:()=>cy.xpath("//div[contains(text(),'HEDIS Settings')]"),
        feedbackToolToggle:()=>cy.xpath("(//label[@title='Active'])[6]"),
        inactiveActive:()=>cy.xpath("(//input[@name='overreadFeedbackEnabled'])[1]"),
        projectName:()=>cy.get("[id='projectName']"),
        projectOwner:()=>cy.xpath("//span[normalize-space()='Select Project Owner']"),
        projectType:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[3]"),
        productType:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[5]"),
        group:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[6]"),
        projectGroup:()=>cy.contains('li','02:50:44'),
        measurementYear:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[7]"),
        measurementDropdown:()=>cy.contains('li','2023'),
        reportingYear:()=>cy.xpath("(//div[@class='ui-dropdown-label-container'])[8]"),
        reportingDropDOwn:()=>cy.contains('li','2023'),
        projectOwnerDropDown:()=>cy.contains('li','1mmrr manager'),
        saveCOnfigureButton:()=>cy.xpath("//span[normalize-space()='Save And Configure']"),
        productTypeDropDown:()=>cy.contains('li','Retrieval and Data Entry (MY2023 HEDIS)'),
        projectConfigName:()=>cy.get("[id='projectConfigurationName']"),
        projectContainer:()=>cy.xpath('(//div[@class="control control--input control--checkbox-group ng-untouched ng-pristine ng-valid"])[1]'),
        providerPacket:()=>cy.xpath("//div[contains(text(),'Provider Packet')]"),
        coverLetterTitle:()=>cy.get("[title='Cover Letter Template']"),
        //coverLetterDropDown:()=>cy.xpath("(//p-dropdown[@dropdownicon='pi pi-caret-down'])[10]"),
        coverLetterDropDown:()=>cy.get('div.form-container > form-factory.ng-pristine > .ng-untouched > app-dropdown.ng-star-inserted > .control > .ui-inputwrapper-filled > .control__input'),
        coverLetterField:()=>cy.contains('li','Initial Request'),
        coverLetterField1:()=>cy.contains('li','Follow Up'),
        coverLetterField2:()=>cy.contains('li','Past Due'),
        invoices:()=>cy.xpath("//div[@class='description'][normalize-space()='Invoices']"),
        invoicesConfig:()=>cy.xpath("//h3[normalize-space()='INVOICE CONFIGURATION']"),
        thirdPartyVendor:()=>cy.get('app-server-grid > p-table > .ui-table > .ui-table-wrapper > table > .ui-table-tbody > :nth-child(1)'),
        thirParty:()=>cy.xpath("(//label[@for='vendorName'])[1]"),
        invoiceType:()=>cy.xpath("(//label[@for='invoiceTypeName'])[2]"),
        invoiceField:()=>cy.xpath("(//input[@id='invoiceTypeName'])[2]"),
        approveButton:()=>cy.xpath("(//span[contains(text(),'Approve')])[1]"),
        denyButton:()=>cy.xpath("(//span[contains(text(),'Deny')])[1]"),
        yesButton:()=>cy.xpath("//span[normalize-space()='Yes']"),
        reporting:()=>cy.xpath("//div[@class='description'][normalize-space()='Reporting']"),
        expectedChaseCount:()=>cy.get("[title='Expected Chase Count:']"),
        ecpectedChaseCountSearchBar:()=>cy.get("[id='expectedChaseCount']"),
        expectedSampleReceiptDate:()=>cy.get("[title='Expected Sample Receipt Date:']"),
        expectedSampleReceiptDateSearchBar:()=>cy.get("[id='expectedSampleFeedReceiptDate']"),
        targetLoadDate:()=>cy.get("[title='Target Load Date:']"),
        targetLoadDateSearchBar:()=>cy.get("[id='targetLoadDate']"),
        initialSampleReceiptDate:()=>cy.get("[title='Initial Sample Receipt Date:']"),
        initialSampleReceiptDateSearchBox:()=>cy.get("[id='initialSampleFeedReceiptDate']"),
        finalSampleRecepitDate:()=>cy.get("[title='Final Sample Receipt Date:']"),
        finalSampleRecepitDateSearchBox:()=>cy.get("[id='finalSampleFeedReceiptDate']"),
        dataExtract:()=>cy.xpath("(//div[@class='item ng-star-inserted'])[3]"),
        dataExtractType:()=>cy.get("[title='Data Extract Type']"),
        dataExtractTypeDropdown:()=>cy.xpath('//label[text()="Data Extract Type"]/ancestor::div[contains(@class,"ng-valid")]/descendant::p-dropdown'),
        dataExtractTypeDropdownConatiner:()=>cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Reveleer Standard HEDIS Extract']"),
        setDays:()=>cy.get("[title='Set Day:']"),
        setDaysContainer:()=>cy.get("[class='ui-listbox-list-wrapper']"),
        mondays:()=>cy.xpath("//li[@aria-label='Monday']"),
        tuesday:()=>cy.xpath("//li[@aria-label='Tuesday']"),
        wednesday:()=>cy.xpath("//li[@aria-label='Wednesday']"),
        thursday:()=>cy.xpath("//span[normalize-space()='Thursday']"),
        friday:()=>cy.xpath("//li[@aria-label='Friday']"),
        saturday:()=>cy.xpath("//li[@aria-label='Saturday']"),
        sunday:()=>cy.xpath("//li[@aria-label='Sunday']"),
        setHour:()=>cy.xpath("//label[@title='Set Hour:']"),
        period:()=>cy.xpath("//label[@title='Period']"),
        setTimeZOne:()=>cy.xpath("//label[@title='Set time zone:']"),
        endDate:()=>cy.get("[title='End Date:']"),
        setHourContainer:()=>cy.xpath("//div[@class='ui-dropdown-label-container'][24]"),
        periodContainer:()=>cy.xpath("//div[@class='ui-dropdown-label-container'][25]"),
        setTimeZOneContainer:()=>cy.xpath("//div[@class='ui-dropdown-label-container'][26]"),
        endDateContainer:()=>cy.xpath("//input[@id='schedulerEndDate']"),
        dataEntryCheckList:()=>cy.xpath("(//div[@class='button'])[9]"),
       abstraction:()=>cy.xpath("//span[normalize-space()='Abstraction']"),
       overread:()=>cy.xpath("//span[normalize-space()='Overread']"),
       overread2:()=>cy.xpath("//span[normalize-space()='Overread2']"),
       addNewButton:()=>cy.get('#cdk-drop-list-0 > .add-btn > p-button > .ui-button > .ui-button-text'),
       addnNewField:()=>cy.xpath("(//input[@placeholder='Enter text here'])[1]"),
       deleteOption:()=>cy.xpath("//i[@class='fa fa-times']"),
       measureYear:()=>cy.get("[title='Measure Year']"),
       reportingYear1:()=>cy.get("[title='Reporting Year']"),
       enableDataExtractScheduler:()=>cy.get("[title='Enable Scheduler']"),
       enableDataExtractSchedulerAssert:()=>cy.get("[id='dataTransferEnableSchedule']"),
       supportTextContainer:()=>cy.get('#ui-tabpanel-5 > .project-checklist > .project-checklist__title'),
       riskProject:()=>cy.xpath("//span[normalize-space()='2021-2022 RISK 2.0 Test 06022022']"),
       riskSetting:()=>cy.xpath("//div[contains(text(),'RISK Settings')]"),
       disclaimerText:()=>cy.get("[class='disclaimer-text text__danger']"),
       deficiencyBox:()=>cy.xpath('//div[@class="risk"]//div[2]//div[3]//div[2]//input[1]'),
       errorMsg:()=>cy.xpath("//div[@class='errorMessage ng-star-inserted']"),
       warningMsg:()=>cy.get("[class='label']"),
       or2:()=>cy.get(':nth-child(3) > .ng-star-inserted > :nth-child(2) > #deficientchases0'),
       hedisProject2:()=>cy.xpath("//span[normalize-space()='2021 HEDIS 1']"),
       dateEndField:()=>cy.get("[id='schedulerEndDate']"),
       dateWarningToast:()=>cy.xpath("//div[@class='ui-toast-detail']"),
       projectSettingActive:()=>cy.xpath("//label[@for='projectConfigurationStatus'][normalize-space()='Active']"),
       backwarning:()=>cy.xpath("//div[@role='dialog']"),
       backArrow:()=>cy.xpath("//app-icon[@class='fas fa-arrow-left']"),
       cancel2:()=>cy.xpath("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']//span[@class='ui-button-text ui-clickable'][normalize-space()='Cancel']"),
       projectStatusAssert:()=>cy.get("[name= 'projectConfigurationStatus']"),
       dontSave:()=>cy.get('p-footer > :nth-child(2) > :nth-child(1) > .secondary > .ui-button > .ui-button-text'),
       saveChanges:()=>cy.xpath("//span[normalize-space()='Save Changes']"),
       clearButton:()=>cy.xpath("//span[normalize-space()='Clear']"),
       warningToast1:()=>cy.xpath("//div[@class='ui-toast-detail']"),
        









    }
    clickOnAdminButton()
    {
       this.elements.adminMenuButton().click()
       this.elements.adminProjectButton().click()
    }
    clickOnGridCount() {
        let globalCountText; 
        this.elements.gridCount()
            .invoke('text')
            .then((text) => {
                const countText = text.split('of')[1].trim();
                globalCountText = countText.replace('>', '').trim(); 
                cy.log(globalCountText);
                this.elements.totalProjectCount().should('includes.text', globalCountText);

               
            });
            
    }
    clickOnFilter()
    { 
        cy.wait(3000)
        this.elements.projectFilter().click()
    }
    clickOnProject()
    {
        this.elements.selectProject().click()
    }
    verifySelectedProject() 
    {
        this.elements.gridproject().should('include.text', '2022 HEDIS 05102021');
        this.elements.grid().should('be.visible')
        this.elements.adminProjectName().should('include.text', '2022 HEDIS 05102021');
    }
    clickOnStatus()
    {
        this.elements.status().click()
    }
    clickOnInActive()
    {
        this.elements.inactive().click()
        cy.wait(3000)
    }
    clickOnGridStatus()
    {
        cy.wait(5000)
        this.elements.gridStatus().should('includes.text','Inactive')
    }
    clickOnActive()
    {
        this.elements.active().click()
    }
    clickOnGridStatus1()
    {
        cy.wait(5000)
        this.elements.gridStatus1().should('includes.text','Active')
    }
    clickOnProject2()
    {
        
        this.elements.project2().click()

    }
    clickOnAdminProject()
    {
        cy.wait(5000)
        this.elements.adminProjectName().click({force:true})
    }
    clickOnProjectToggle()
    {
        cy.wait(10000)
        this.elements.projectStatusToggle().click()
        cy.wait(5000)
        this.elements.close().click()
        cy.wait(5000)
        this.elements.save().click()
        this.elements.sucessToast().should('includes.text','Project config saved.')
        this.elements.save().click()
    }
    clickOnProjectToggle2()
    {
        cy.wait(10000)
        this.elements.projectStatusToggle().click()
        cy.wait(5000)
    }
    clickOnExportAll()
    {
        cy.wait(7000)
        this.elements.exportAll().click()
    }
    logProjectId()
    {
        cy.wait(5000)
   this.elements.projectId()
   .invoke('text')
            .then((text) => {
                cy.log(text);
                projectID = text;
            })
    
}
clickOnProjectID()
{
    this.elements.filterProjectId().click()
    this.elements.projectIdSearchBox().click().type(projectID)
}
clickOnAdminProject4()
{
    cy.wait(5000)
    this.elements.adminProject2().click({force:true})
}
clickOnstatus()
{
    this.elements.status().click()
}
verifyActiveCheckBox()
{
this.elements.activeCheckBox().should('have.attr', 'aria-checked', 'true');
this.elements.cancel().click()
}
activeModalWarning()
{
    this.elements.activeDialog().should('includes.text','Once you save your Project Settings, you will be deactivating and disabling all the chases, processes, activities and reporting related to this project.')
    this.elements.close().click()
}
inactiveModalWarning()
{
    this.elements.activeDialog().should('includes.text','WARNING Once you save your Project Settings, you will be activating and enabling all the chases, processes, activities and reporting related to this project. Close')
    this.elements.close().click()
}
verifyRetrievalGetNext()
{
    this.elements.retrievalGetNext().scrollIntoView().should('includes.text','Enable Retrieval Get Next')
}
verifyretrievalGetNextToggel()
{
    this.elements.retrievalToggel().scrollIntoView().should('be.visible')
}
verifyClinicalGetNext()
{
    this.elements.clinicalGetNext().scrollIntoView().should('includes.text','Enable Clinical Get Next')
}
verifyClinicalGetNextToggle()
{
    this.elements.clinicalToggel().scrollIntoView().should('be.visible')
}
clinicalToggelEnabledDisabled()
{
    cy.wait(5000)
    this.elements.clinicalToggel().scrollIntoView().click()
    this.elements.clinicalSwitch().should('have.attr', 'aria-checked', 'false');
    cy.wait(5000)
    this.elements.clinicalToggel().scrollIntoView().click()
    this.elements.clinicalSwitch().should('have.attr', 'aria-checked', 'true');

}
retrievalToggelEnabledDisabled()
{
    cy.wait(5000)
    this.elements.retrievalToggel().scrollIntoView().click()
    this.elements.retrievalSwitch().should('have.attr', 'aria-checked', 'true');
    cy.wait(5000)
    this.elements.retrievalToggel().scrollIntoView().click()
    this.elements.retrievalSwitch().should('have.attr', 'aria-checked', 'false');
}
clickOnMilestone()
{
    this.elements.milestoneButton().click()
    this.elements.rerievalMileStone().should('be.visible').should('includes.text','RETRIEVAL MILESTONES')
    this.elements.startDate().should('be.visible').should('includes.text','Start Date:')
    this.elements.endDate().should('be.visible').should('includes.text','End Date:')
}
selectHaidesProject()
{
    this.elements.hedisProject1().click()
}
selectHaidesProject2()
{
    this.elements.hedisProject2().click()
}
logprojectDuration() {
    this.elements.duration()
        .invoke('text')
        .then((text) => {
            cy.log(text);

            // Extract the front side date (assuming it's always in the format "Duration<date> - <date>")
            const dateRange = text.split(' - ')[0]; // Split at the first ' - ' to get the front side date
            const trimmedDate = dateRange.replace('Duration', '').trim();

            cy.log(trimmedDate);
            projectDuration = trimmedDate;
        })
}
logprojectDuration1() {
    this.elements.duration()
        .invoke('text')
        .then((text) => {
            cy.log(text);

            
            const dateParts = text.split(' - ');

            const backsideDate = dateParts[1].trim();

            cy.log(backsideDate);
            projectDuration1 = backsideDate;
        })
}


verifyStartDateAndEndDate()
{
    this.elements.milestoneButton().click()
    this.elements.startDateConstiner().should('have.value',projectDuration)
    this.elements.endDateConstiner().should('have.value',projectDuration1)
}
clickOnEveSetting()
{
    this.elements.eveSetting().click()
    this.elements.everAbstraction().should('be.visible').should('includes.text','Eve For Abstraction')
    //this.elements.eveConfig().should('be.visible').should('includes.text','Abstraction Configurations')
}
clickOncreateNew()
{
    this.elements.createNewProject().click()
}
clickOnProjectType()
{
    this.elements.projectType().click()
    this.elements.projectDopDown().click()
}
clickOnProjectType1()
{
    this.elements.projectType().click()
    this.elements.projectDopDown1().click()
}
verifyprojectDropDown()
{
    this.elements.measurementYear1().should('be.visible').should('includes.text','Measurement Year')
    this.elements.reportingYear().should('be.visible').should('includes.text','Reporting Year')
}
verifyprojectDropDown1()
{
    this.elements.lineofbusiness().should('be.visible').should('includes.text','Line Of Business')
    this.elements.codingmodal().should('be.visible').should('includes.text','Coding Model')
}
verifyFromDate()
{
    cy.wait(5000)
    this.elements.reviewPeriodFromDate().click({force:true})
    cy.wait(3000)
    this.elements.startDate().click()
}
verifyThruDate()
{
    cy.wait(5000)
    this.elements.reviewPeriodThruDate().click()
    cy.wait(3000)
    this.elements.endDate5().click()
}
veirfyErrorMsg()
{
    this.elements.errorFromDate().should('includes.text','Please select a From Date that is before the Thru Date')
}
verifyStartDate()
{
    cy.wait(5000)
    this.elements.projectStartDate().scrollIntoView().click({force:true})
    cy.wait(3000)
    this.elements.startDate().click()
}
verifyEndDate()
{
    cy.wait(3000)
    this.elements.projectEndDate().click()
    cy.wait(3000)
    this.elements.endDate5().click()
}
verifyEndDateErrorMsg()
{
    this.elements.endDateErrorMSg().should('includes.text','Project end date can not be less than Project start date')
}
verifyDualAssignmentToggle()
{
    this.elements.dualAssignment().scrollIntoView().should('be.visible').should('includes.text','Enable Dual Role Assignment')
    this.elements.dualAssignmentToggle().scrollIntoView().should('be.visible')
}
verifyDualToggleEnabledDisabled()
{
    cy.wait(5000)
    this.elements.dualAssignmentToggle().click()
    cy.wait(5000)
    this.elements.dualToggle().should('have.attr', 'aria-checked', 'true')
    this.elements.dualAssignmentToggle().click()
    cy.wait(5000)
    this.elements.dualToggle().should('have.attr', 'aria-checked', 'false')
}
verifyAbstractionToggle()
{
    this.elements.abstractionToggle().should('be.visible')
}
verifyEveForOverread()
{
    this.elements.eveForOverread().scrollIntoView().should('be.visible').should('includes.text','Eve For Overread')
    this.elements.overreadToggle().scrollIntoView().should('be.visible')
}
clickOnAbstractionToggle()
{
    cy.wait(5000)
    this.elements.abstractionToggle().click()
}
clickOnAbstractionToggle2()
{
    cy.wait(5000)
    this.elements.abstractionToggle().click()
}
verifyAbstractionPopup()
{
    this.elements.abstractionPopup().should('includes.text','You are deactivating EVE for Abstraction for project2022 HEDIS CA and SHNew medical record charts will not be coded by EVE. Charts that are currently with EVE will continue through the coding process.')
}
verifyAbstractionPopup2()
{
    this.elements.abstractionPopup().should('includes.text','You are enabling EVE for Abstraction for project2022 HEDIS CA and SHAll legible/readable medical record charts will automatically be coded by EVE.')
}
clickOnContinue()
{
    this.elements.conitinue().click()
}
verifyDisabledToggle()
{
    this.elements.disabledToggle().should('have.attr', 'aria-checked', 'false')
}
clickOnMilestone()
{
    this.elements.milestoneButton().click()
    this.elements.startDate1().should('be.visible').should('includes.text','Start Date')
    this.elements.endDate1().should('be.visible').should('includes.text','End Date:')
    this.elements.retrievalMilestone().should('be.visible').should("includes.text",'RETRIEVAL MILESTONES')
}
clickOnEVESetting()
{
    this.elements.eveSetting().click()
}
verifyEnablingPopup()
{
    this.elements.abstractionToggle().click()
    cy.wait(3000)
    this.elements.conitinue().click()
    cy.wait(3000)
    this.elements.abstractionToggle().click()
    this.elements.abstractionContainer().should('includes.text','You are enabling EVE for Abstraction for project2022 HEDIS CA and SHAll legible/readable medical record charts will automatically be coded by EVE.')

}
verifyDisabledToggel1()
{
    this.elements.abstractionToggle().click()
    cy.wait(3000)
    this.elements.conitinue().click()
    cy.wait(3000)
    this.elements.totalAbstractedChart().should('not.be.visible')
    cy.wait(3000)
    this.elements.totaEveChart().should('not.be.visible')
    cy.wait(3000)
    this.elements.disabledToggle5().should('have.attr', 'aria-checked', 'false')
}
verifyOverreadAttentionPop()
{
    this.elements.overreadToggle().click()
    this.elements.overreadContainer().should('includes.text','You are deactivating EVE for Overread for project2022 HEDIS CA and SHNew medical record charts will not be coded by EVE. Charts that are currently with EVE will continue through the coding process.')
    
}
verifyOverreadTotalCharts()
{
   this.elements.overreadToggle().click()
   cy.wait(3000)
   this.elements.conitinue().click()
   cy.wait(3000)
   this.elements.overreadToggle().click()
   cy.wait(3000)
   this.elements.conitinue().click()
   this.elements.overreadTotalChart().should('be.visible')
   this.elements.overreadChartContainer().should('be.visible')
   this.elements.overreadConfiguration().should('be.visible')
   this.elements.overreadCofigConatiner().scrollIntoView().should('be.visible')
}
clickOnAbstractionMeasure()
{
    this.elements.abstractionMeasure().click()
    this.elements.warningToast1().should('be.visible').should('includes.text','You cannot select the same measure for both abstraction and overread.')
}
clickOnHedisSetting()
{
    this.elements.hedisSetting().click()
}
verifyfeedbackToggle()
{
    cy.wait(3000)
    this.elements.feedbackToolToggle().click({force:true})
    cy.wait(3000)
    this.elements.inactiveActive().should('have.attr', 'aria-checked', 'false')
    cy.wait(3000)
    this.elements.feedbackToolToggle().click({force:true})
    cy.wait(3000)
    this.elements.inactiveActive().should('have.attr', 'aria-checked', 'true')
}
clickOnAdminproject8()
{
    cy.wait(5000)
    this.elements.adminProject4().click({force:true})
}
fillProjectForm()
{
    const labelname = Math.random().toString(36).replace(/[^a-z]+/g, '');
   let  randomname = labelname;
    this.elements.projectName().click().type(randomname)
    cy.wait(10000)
    this.elements.projectOwner().click()
    cy.wait(3000)
    this.elements.projectOwnerDropDown().click()
    cy.wait(3000)
    this.elements.projectType().click()
    cy.wait(3000)
    this.elements.projectDopDown().click()
    cy.wait(3000)
    this.elements.productType().click()
    cy.wait(3000)
    this.elements.productTypeDropDown().click()
    cy.wait(3000)
    this.elements.group().click()
    cy.wait(3000)
    this.elements.projectGroup().click()
    cy.wait(3000)
    this.elements.measurementYear().click()
    cy.wait(3000)
    this.elements.measurementDropdown().click()
    cy.wait(3000)
    this.elements.reportingYear().click()
    cy.wait(3000)
    this.elements.reportingDropDOwn().click()
    cy.wait(3000)
    this.elements.projectStartDate().click({force:true})
    cy.wait(3000)
    this.elements.projectDate().click()
    cy.wait(3000)
    this.elements.projectEndDate().click()
    cy.wait(3000)
    this.elements.projectDate2().click()
    cy.wait(3000)
    this.elements.saveCOnfigureButton().click()
    cy.wait(3000)

}

editProjectConfig() {
    const labelname = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let randomname = labelname;

    this.elements.projectConfigName().clear();
    this.elements.projectConfigName().type(randomname);
    this.elements.projectConfigName()
    .invoke('val')
            .then((value) => {
                cy.log(value);
                globalRandomName = value;
            })
    this.elements.save().click();
    this.elements.sucessToast().should('include.text', 'Project config saved.');
}
verifyProjectName()
{
    this.elements.projectContainer().should('contain',globalRandomName)
}
clickOnProviderPacket()
{
    this.elements.providerPacket().click()
}
VerifyCoverLetterField()
{
    this.elements.coverLetterTitle().scrollIntoView().should('be.visible').should('includes.text','Cover Letter Template')
    this.elements.coverLetterDropDown().scrollIntoView().should('be.visible')
}
VerifyCoverLetterFieldlist()
{
    this.elements.coverLetterDropDown().scrollIntoView().should('be.visible').click()
    this.elements.coverLetterField()
    this.elements.coverLetterField1()
    this.elements.coverLetterField2()
}
clickOnInvoices()
{
    this.elements.invoices().click()
    this.elements.invoicesConfig().should('be.visible').and('includes.text','INVOICE CONFIGURATION')
}
verifyVendorDetails()
{  
    this.elements.thirParty().should('be.visible').should('includes.text','3RD PARTY VENDOR')
    this.elements.thirdPartyVendor().should('be.visible')
    this.elements.invoiceType().should('be.visible').should('includes.text','INVOICE TYPE')
    this.elements.invoiceField().should('exist').and('have.value','NET30')
    this.elements.approveButton().scrollIntoView().should('be.visible').should('includes.text','Approve')
    this.elements.denyButton().scrollIntoView().should('be.visible').should('includes.text','Deny')
}
verifyAprroveVendor()
{
    this.elements.denyButton().click()
    cy.wait(3000)
    this.elements.yesButton().click()
    cy.wait(3000)
    this.elements.approveButton().click()
    this.elements.sucessToast().should("includes.text",'Invoice configuration updated.')
    
}
verifyDenyVendor()
{
    this.elements.approveButton().click()
    cy.wait(3000)
    this.elements.denyButton().click()
    this.elements.yesButton().click()
    this.elements.sucessToast().should("includes.text",'Invoice configuration updated.')
  
   
    
}
clickOnReporting()
{
  this.elements.reporting().click()
  this.elements.expectedChaseCount().should('be.visible')
  this.elements.ecpectedChaseCountSearchBar().should('be.visible')
  this.elements.expectedSampleReceiptDate().should('be.visible')
  this.elements.expectedSampleReceiptDateSearchBar().should('be.visible')
  this.elements.targetLoadDate().should('be.visible')
  this.elements.targetLoadDateSearchBar().should('be.visible')
  this.elements.initialSampleReceiptDate().should('be.visible')
  this.elements.initialSampleReceiptDateSearchBox().should('be.visible')
  this.elements.finalSampleRecepitDate().should('be.visible')
  this.elements.finalSampleRecepitDateSearchBox().should('be.visible')
}
clickOnDataExtract()
{
    cy.wait(10000)
    this.elements.dataExtract().click()
}
verifyDataExtractdropDown()
{
    this.elements.dataExtractType().should("be.visible")
    cy.wait(3000)
    this.elements.dataExtractTypeDropdown().should("be.visible").click()
    cy.wait(3000)
    this.elements.dataExtractTypeDropdownConatiner().should('includes.text','Reveleer Standard HEDIS Extract')
}
verifySchedularParameter()
{
    this.elements.setDays().should('be.visible')
    this.elements.setDaysContainer().should('be.visible')
    this.elements.mondays().should('be.visible')
    this.elements.tuesday().should('be.visible')
    this.elements.wednesday().should('be.visible')
    this.elements.thursday().should('be.visible')
    this.elements.friday().should('be.visible')
    this.elements.saturday().should('be.visible')
    this.elements.sunday().should('be.visible')

    
}
verifySchedularTime()
{
    this.elements.setHour().scrollIntoView().should('be.visible')
    this.elements.period().scrollIntoView().should('be.visible')
    this.elements.setTimeZOne().scrollIntoView().should('be.visible')
    this.elements.endDate().should('be.visible')
   
}
clickOnDataEntryCheckList()
{
    cy.wait(10000)
    this.elements.dataEntryCheckList().click()
    this.elements.abstraction().should('be.visible')
    this.elements.overread().should('be.visible')
    this.elements.overread2().should('be.visible')

}
VerifyAddnew()
{ 
    cy.wait(5000)
    this.elements.addNewButton().click()
    this.elements.addnNewField().click().type('overread')
    this.elements.save().click()
    this.elements.sucessToast().should('includes.text','Project config saved.')
    this.elements.addnNewField().should('exist')
    this.elements.deleteOption().click()
    this.elements.save().click()
    cy.wait(3000)

}
verifyDeleteOption()
{ 
    cy.wait(5000)
    this.elements.addNewButton().click()
    this.elements.addnNewField().click().type('overread')
    this.elements.save().click()
    this.elements.sucessToast().should('includes.text','Project config saved.')
    this.elements.addnNewField().should('exist')
    this.elements.deleteOption().click()
    this.elements.save().click()
    this.elements.sucessToast().should('includes.text','Project config saved.')
    this.elements.addnNewField().should('not.exist')

}
verifyhaideesSetting()
{
    this.elements.measureYear().should('be.visible')
    this.elements.reportingYear1().should('be.visible')
}
verifyDataExtractSchedular()
{ 
    cy.wait(3000)
    this.elements.enableDataExtractScheduler().scrollIntoView().click()
    this.elements.save().click()
    this.elements.sucessToast().should('includes.text','Project config saved.')
    this.elements.enableDataExtractSchedulerAssert().should('have.attr', 'aria-checked', 'true')
    this.elements.enableDataExtractScheduler().click()
    this.elements.save().click()
}
verifyDataExtractSchedular1(date)
{ 
    cy.wait(3000)
    this.elements.enableDataExtractScheduler().scrollIntoView().click()
    this.elements.dateEndField().click().clear().type(date)
    this.elements.save().click()
    this.elements.dateWarningToast().should('includes.text','Extract scheduler end date should not be more than 180 days from todays date.')
   
}
verifySupprtText()
{
    this.elements.supportTextContainer().should('includes.text','Create a custom checklist to appear at the end of the data entry screen and a drop-down menu for entering data entry checklist results. Click "Add new" to begin.')
}
clickOnRiskProject()
{
    this.elements.riskProject().click()
}
clickOnRiskSetting()
{
    cy.wait(5000)
    this.elements.riskSetting().click()
}
verifyDisclaimerText()
{
    this.elements.disclaimerText().should("includes.text","* If deficient chase values are set to anything less than 100%, some pursuits will not get generated and there's a chance invalid chases will be submitted to delivery.")
}
verifyNoField(number)
{
    this.elements.deficiencyBox().click().clear().type(number)
    this.elements.disclaimerText().click()
}
verifyNoField1(number1)
{
    this.elements.deficiencyBox().click().clear().type(number1)
    this.elements.disclaimerText().click()
}
verifyNoField2(number1)
{
    this.elements.or2().scrollIntoView().click().clear().type(number1)
    this.elements.disclaimerText().click()
}
verifyErrorMsg()
{
    this.elements.errorMsg().scrollIntoView().should('includes.text','Percentage must be between 0 - 100')
}

verifyWarningMsg()
{
    this.elements.warningMsg().should('includes.text',"If the deficient chase values are set to anything less than 100%,some pursuits will not be generated and there's a chance invalid chases will be submitted to delivery.")
}
verifyBackWarning()
{
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    this.elements.backArrow().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.cancel2().click()
    cy.wait(3000)
    cy.go('back')
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.cancel2().click()
    cy.wait(3000)
    this.elements.adminMenuButton().click()
    this.elements.adminProjectButton().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
}
Verifyurl()
{
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    this.elements.backArrow().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.cancel2().click()
    cy.url().should('include', 'https://uat.reveleer.com/project')
    cy.wait(3000)
    cy.go('back')
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.cancel2().click()
    cy.url().should('include', 'https://uat.reveleer.com/project')
    cy.wait(3000)
    this.elements.adminMenuButton().click()
    this.elements.adminProjectButton().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    cy.url().should('include', 'https://uat.reveleer.com/project')
    this.elements.cancel2().click()
    cy.url().should('include', 'https://uat.reveleer.com/project')
}
backarrowforProject()
{
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    this.elements.backArrow().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.dontSave().click()
    cy.wait(3000)
    cy.url().should('include', 'https://uat.reveleer.com/admin/projects')
    this.elements.adminProject2().click()
    this.elements.projectStatusAssert().should('have.attr', 'aria-checked', '1')

}
browserbackarrow()
{
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    cy.go('back')
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.dontSave().click()
    cy.wait(3000)
    cy.url().should('include', 'https://uat.reveleer.com/admin/projects')
    this.elements.adminProject2().click()
    this.elements.projectStatusAssert().should('have.attr', 'aria-checked', '1')
}
submenus()
{
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    this.elements.adminMenuButton().click()
    this.elements.adminProjectButton().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.dontSave().click()
    cy.wait(3000)
    cy.url().should('include', 'https://uat.reveleer.com/admin/projects')
    this.elements.adminProject2().click()
    this.elements.projectStatusAssert().should('have.attr', 'aria-checked', '1')
}
logProjectId5()
    {
        cy.wait(5000)
   this.elements.projectId4()
   .invoke('text')
            .then((text) => {
                cy.log(text);
                projectID4 = text;
            })
}
clickOnProjectID5()
{
    this.elements.filterProjectId().click()
    this.elements.projectIdSearchBox().click().type(projectID4)
}
verifySavechangesbutton()
{
    cy.wait(5000)
    this.elements.projectSettingActive().click()
    this.elements.close().click()
    this.elements.backArrow().click()
    this.elements.backwarning().should('includes.text','WARNING You have unsaved changes. Are you sure you want to leave this page?')
    this.elements.saveChanges().click()
    cy.url().should('include', 'https://uat.reveleer.com/admin/projects')
}
clickOnClear()
{
    this.elements.clearButton().click()
}
verifyChangesSaved()
{
    cy.wait(5000)
    this.elements.projectStatusAssert().should('have.attr', 'aria-checked', '1')
}





}
export default adminProject1