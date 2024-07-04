let Project;
let modifiedVal
let id;
let ids

//let chaseId;
var PendCode;
var pendcode;
const { should } = require("chai");

class DocQaGridPage {

        elements = {

                adminMenuButton: () => cy.xpath("//div[text()='Admin']/parent::li"),
                serviceOrganizationButton: () => cy.xpath("//span[text()='Service Organization']/parent::a"),
                docQaButton: () => cy.xpath("//span[text()='Document QA']/parent::a"),
                retrievalMenuButton: () => cy.xpath("//div[text()='Retrieval']/parent::li"),
                runQuery: () => cy.xpath("//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Run Query')]"),
                createNewView: () => cy.xpath("//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Create New View')]"),
                enterTitle: () => cy.get('#name'),
                checkBox: () => cy.xpath('(//li[@class="ui-listbox-item ui-corner-all ng-star-inserted"])[1]'),
                checkBox2: () => cy.xpath('(//li[@class="ui-listbox-item ui-corner-all ng-star-inserted"])[1]'),
                save: () => cy.xpath("//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Save')]"),
                newView: () => cy.get("[style='text-decoration: none;']"),
                newView1: () => cy.get('[style="text-decoration: underline;"]'),
                chase: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[1]'),
                assigned: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[3]'),
                unAssigned: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[5]'),
                docFilter: () => cy.xpath("//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
                multipleCheckBox: () => cy.xpath("//li[@aria-label='Chase ID']//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']"),
                selectedProject: () => cy.xpath("//div[.=' _Demo Risk Project ']"),
                modify: () => cy.xpath("(//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Modify')])"),
                selectProject2: () => cy.xpath('(//p-listbox[@id="Projects"]/descendant::li)[5]'),
                modifyAssert: () => cy.xpath('(//div[@class="chip__item chip__item--name"]/following-sibling::div[@class="chip__item chip__item--value"])[2]'),


                filter: () => cy.xpath("//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
                selectProject: () => cy.xpath('(//p-listbox[@id="Projects"]/descendant::li)[1]'),
                project4: () => cy.xpath("//span[normalize-space()='HEDISMY2023']"),
                totalCount: () => cy.xpath('//div[@class="grid__menu__item grid__menu__item--paging ng-star-inserted"]'),
                verifySelectedProject: () => cy.xpath('//div[@class="chip__item chip__item--value"]'),
                modifyButton: () => cy.xpath('//app-button[@class="button clear-button--right"]/descendant::span'),
                dialogModal: () => cy.get("div[role='dialog']"),
                cancelButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Cancel')]"),
                clearButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Clear')]"),
                selectChaseID: () => cy.get('.grid-body__selection-mode > .ng-star-inserted'),
                pendChasesButton: () => cy.xpath("//span[./text()='Pend Chase(s)']/parent::button[not(@disabled)]"),
                pendCodeDropdown: () => cy.xpath("//label[./text()='Pend Code']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
                pendCodeOption: () => cy.xpath('(//div[@class="ui-dropdown-items-wrapper"]/descendant::p-dropdownitem)[1]'),
                severityDropDown: () => cy.xpath("//label[./text()='Severity']/parent::div/following-sibling::p-dropdown/child::div/div[@aria-haspopup='listbox']"),
                severityOption: () =>cy.get(':nth-child(1) > .ui-dropdown-item > .p-d-flex > span'),
                saveButton: () => cy.xpath("//span[./text()='Save']/parent::button"),
                verifyPendCode: () => cy.get('td[class="hdvi-gridcol hdvi-gridcol-pendCode ng-star-inserted"]'),
                additionalNotes: () => cy.get("#notes"),
                successToast: () => cy.xpath("//app-toast[@key='app']"),
                hover: () => cy.xpath("//div[@class='pi pi-cog button ng-star-inserted']"),
                deleteButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Delete')]"),
                yesButton: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Yes')]"),
                setDefault: () => cy.xpath("//span[@class='ui-inputswitch-slider']"),
                alreadyLoggeduser: () => cy.xpath("//span[@class='username__container--loginName']"),
                signOut: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Sign Out')]"),
                loginuserName: () => cy.get("#username"),
                password: () => cy.get("#password"),
                login: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Login')]"),
                loginName: () => cy.xpath("//span[@class='username__container--loginName']"),
                verificatiOnView: () => cy.xpath("//app-grid-view[normalize-space()='shubham']"),
                hoverClick: () => cy.xpath("//div[@class='pi pi-cog button ng-star-inserted']"),
                dropDown: () => cy.xpath('(//div[@class="ui-dropdown-items-wrapper"]/descendant::p-dropdownitem)[1]'),
                unAssignedVerification: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[5]'),
                assignedVerification: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[3]'),
                chaseVerification: () => cy.xpath('(//div[@class="clinical-container"]/descendant::span)[1]'),
                penCodeCheckBox: () => cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Pend Code']"),
                clinical: () => cy.xpath("//div[text()='Clinical']/parent::li"),
                selectStatusDropDown: () => cy.xpath('//div[@class="ui-dropdown-label-container"]/span[contains(text(),"Select Status")]'),
                resolvedDropDown: () => cy.xpath('//li[@role="option"]/span[contains(text(),"Resolved")]'),
                notes: () => cy.xpath("//textarea[@placeholder='Long form text...']"),
                updateStatus: () => cy.xpath("//span[contains(text(),'Update Status')]"),
                clinicalThreeDots: () => cy.xpath('(//app-button[@icon="ellipsis-v"]/following::button/span[contains(text(),"ui-btn")])[last()]'),
                //clinicalThreeDots:()=>cy.get(".fas.fa-ellipsis-v.ui-clickable.ui-button-icon-left.ng-star-inserted"),
                paginationArrow: () => cy.xpath("//span[@class='ui-paginator-icon pi pi-step-forward']"),
                clinicalPends: () => cy.xpath("//span[normalize-space()='Clinical Pends']"),
                clinicalFilter: () => cy.xpath("//span[@class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
                clinicalChaseId: () => cy.xpath("//span[normalize-space()='Chase Id']"),
                chaseIdField: () => cy.xpath("//input[@id='ChaseId']"),
                changeStatus: () => cy.xpath('//div[@class="action-template-container ng-star-inserted"]/app-button[@text="Change Status"]'),
                yesButton: () => cy.xpath("//span[normalize-space()='Yes']"),
                penCodeOption2: () => cy.xpath("//div[@class='ui-dropdown-items-wrapper']"),
                checkBox3: () => cy.get("tbody tr:nth-child(1) td:nth-child(1) p-tablecheckbox:nth-child(1)"),
                checkboxChaseId: () => cy.get('p-tablecheckbox:first-of-type'),
                selectProject: () => cy.xpath('(//p-listbox[@id="Projects"]/descendant::li)[22]'),
                assignChaseButton: () => cy.xpath("//span[./text()='Assign Chase(s)']/parent::button"),
                userSearchBox: () => cy.xpath('//p-autocomplete[@datakey="value"]/span/input[@type="text"]'),
                continueButton: () => cy.xpath("//span[contains(text(),'Continue')]"),
                clickChaseId: () => cy.xpath('//app-chase-grid-chase-id[@class="ng-star-inserted"]'),
                comments: () => cy.xpath("//div[contains(text(), 'Comments')]"),
                timeline: () => cy.xpath("//div[contains(text(), 'Timeline')]"),
                textBox: () => cy.get('textarea[placeholder="Type here to reply."]'),
                sendMessageButton: () => cy.xpath("//span[contains(text(), 'Send Message')]"),
                messageBody: () => cy.xpath('( //div[@class="othercomment-body"])[1]'),
                checkboxChaseId: () => cy.get('p-tablecheckbox:first-of-type'),
                timelineContainer: () => cy.get('[class="chase-timeline-container chase-timeline-container__first"]'),
                ocrSearchBox: () => cy.xpath('//input[@id="SearchPhrase"]'),
                highlightedText: () => cy.xpath("//*[contains(@style, 'background-color: rgb(0, 255, 17)')]"),
                chart: () => cy.xpath("//div[contains(text(), 'Chart')]"),
                searchIconOcr: () => cy.get('[class="transparent x-small"]'),
                toastMessageContainer: () => cy.get('[class="ng-tns-c4-0 ui-toast ui-widget ui-toast-top-right"]'),
                downloadButton: () => cy.xpath("//span[contains(text(), 'Download')]"),
                identificationTab: () => cy.get('a[class="ng-star-inserted link"]'),
                partOfChaseButton: () => cy.get('[class="assign chase"]'),
                startPageBox: () => cy.get('[id="chaseBegPage"]'),
                endPageBox: () => cy.get('[id="chaseEndPage"]'),
                errorContainer: () => cy.get('[class="control__header__error ng-star-inserted"]'),
                submitButton: () => cy.xpath('//app-button[@text="SUBMIT"]'),
                memberValidationError: () => cy.get(".ui-messages"),
                alreadyLoggeduser: () => cy.xpath("//span[@class='username__container--loginName']"),
                signOut: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Sign Out')]"),
                usernameInput: () => cy.get("#username"),
                passwordInput: () => cy.get("#password"),
                loginButton: () => cy.xpath("//span[contains(text(),'Login')]/parent::button"),
                clickPendId: () => cy.xpath('(//a[@class="ui-column-value ng-star-inserted"])[1]'),
                clickOnChaseId: () => cy.xpath('//a[contains(@href, "/members/chase")]'),
                crossIcon: () => cy.get('i[class="pi pi-times"]'),
                readOnlyViewButton: () => cy.xpath("//span[contains(text(), 'Read-Only')]"),
                //yesButton: () => cy.xpath("//span[contains(text(), 'Yes')]"),
                threeDotMenuDocQa: () => cy.xpath('(//app-button[@icon="ellipsis-v"]/p-button[@class="transparent small"])[1]'),
                unassignChaseButton: () => cy.xpath('//div[@class="ui-overlaypanel-content"]/descendant::app-button/descendant::span[contains(text(),"Unassign Chase")]'),
                assignButton: () => cy.xpath('//app-button[@text="ASSIGN"]'),
                assignedSuccessfulToast: () => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "Assigned Successful")]'),
                unAssignedSuccessfulToast: () => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "Unassigned Successfully.")]'),
                chaseIdContainer: () => cy.get('[class="container-title"]'),
                submitGetNextButton: () => cy.xpath('//app-button[@text="SUBMIT & GET NEXT"]'),
                chaseIDClick: () => cy.xpath("//app-chase-grid-chase-id[@class='ng-star-inserted']"),
                moveBackButton: () => cy.xpath("(//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Move Back')])"),
                chaseNote: () => cy.get("#chaseNotes"),
                chaseSave: () => cy.xpath("//span[normalize-space()='Save']"),
                searchIcon: () => cy.xpath("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only']//span[@class='fas fa-play fa-search ui-clickable ui-button-icon-left ng-star-inserted']"),
                moveBackButton2: () => cy.xpath("(//span[contains(@class, 'ui-button-text') and contains(@class, 'ui-clickable') and contains(text(), 'Move Back')])"),
                unScheduleValidation: () => cy.xpath("//span[normalize-space()='Unscheduled']"),
                correctMemberYesButton: () => cy.xpath("//span[normalize-space()='Yes']"),
                detailPageAssignButton: () => cy.xpath("//span[normalize-space()='Assign']"),
                timeLine: () => cy.xpath("//div[contains(text(),'Timeline')]"),
                timelineVerification: () => cy.get('[class="chase-timeline-container chase-timeline-container__first"]'),
                assignButtonVerification: () => cy.xpath("//app-button[@class='header-button ng-star-inserted']//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']"),
                chaseIDVerification: () => cy.xpath("//td[@class='hdvi-gridcol hdvi-gridcol-chaseID ng-star-inserted']"),
                clickChase: () => cy.xpath("//div[@class='description'][normalize-space()='Chase']"),
                addressAidClick: () => cy.get("a[href*='/retrieval/addressdetail/']"),
                crossButton: () => cy.xpath("//i[@class='pi pi-times']"),
                moveBackCancelButton: () => cy.xpath("//span[normalize-space()='Cancel']"),
                MemberVerificationToast: () => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "Member Validation Completed")]'),
                assignedSuccessfulToast: () => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "Assigned Successful")]'),
                docSubmitButton: () => cy.xpath("//span[normalize-space()='Submit']"),
                docQaTable: () => cy.xpath("//div[@class='ui-table ui-widget ui-table-responsive ui-table-resizable ui-table-resizable-fit ui-table-hoverable-rows']"),
                inVoicecontent: () => cy.xpath("//span[normalize-space()='This Page Is Part Of An Invoice']"),
                contentVerification: () => cy.xpath("//div[@class='identification-form-fields-container ng-star-inserted']"),
                partOfAPendButton: () => cy.get('[class="assign pend"]'),
                pageShouldBeDeleted: () => cy.get('[class="assign delete ng-star-inserted"]'),
                searchPartOfAPendButton: () => cy.xpath("//span[contains(text(), 'Search')]"),
                aidBox: () => cy.get('[id="addressId"]'),
                firstNameBox: () => cy.get('[id="memberFirstName"]'),
                lastNameBox: () => cy.get('[id="memberLastName"]'),
                providerNameBox: () => cy.get('[id="providerName"]'),
                tableRadioButton: () => cy.get('[class="ui-radiobutton ui-widget"]'),
                startPg: () => cy.xpath("//input[@id='chaseBegPage']"),
                endPg: () => cy.xpath("//input[@id='chaseEndPage']"),
                chasIdBox: () => cy.xpath("//input[@id='assignChaseId']"),
                acceptButton: () => cy.xpath("(//span[contains(text(), 'Accept')])"),
                projectClick1: () => cy.xpath("//li[@aria-label='2022 HEDIS Co-Retrieval Dataload Test_Edited']"),
                projectClick2: () => cy.xpath("//span[normalize-space()='2022 HEDIS New Measures Test']"),
                chaseSucessToast: () => cy.xpath("//div[@class='ui-toast-detail']"),
                deleteStartPage: () => cy.get('[id="deleteBegPage"]'),
                deleteEndPage: () => cy.get('[id="deleteEndPage"]'),
                // workingPageHover:()=>cy.xpath("//app-tool-tip[@text='Working pages is where you can see all pages identified as Chases or to be Ignored. Click the Commit Chase Assignments button to attach these pages to the Chases.']//app-icon[@class='fal fa-info-circle']")
                workingPageHover: () => cy.xpath("//app-icon[@class='fal fa-info-circle'][1]"),
                //serviceCheckBox:()=>cy.xpath("//label[contains(text(),'Yes - Force users to confirm they have reviewed all pages')]"),
                serviceCheckBox: () => cy.contains('Yes - Force users to confirm they have reviewed all pages'),
                serviceSave: () => cy.xpath("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']"),
                serviceSucessToastmsg: () => cy.xpath("//div[@class='ui-toast-detail']"),
                // serviceCheckBox2:()=>cy.xpath("//label[contains(text(),'No - Users will NOT be required to review all pages')]"),
                serviceCheckBox2: () => cy.contains('No - Users will NOT be required to review all pages'),
                serviceValidationMessgae: () => cy.xpath("//span[@class='ui-messages-detail ng-tns-c5-1 ng-star-inserted']"),
                commitedPageHover: () => cy.xpath("//app-tool-tip[@text='Committed Pages is where you can see all pages attached to Chases, Pends, and Invoices.']"),
                chaseIdBox: () => cy.get('[id="assignChaseId"]'),
                chaseAssignedSuccessfulToast: (ToastMessage) => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "' + ToastMessage + '")]'),
                workingPagesTableGrid: () => cy.xpath('(//tbody[@class="ui-table-tbody"])[1]'),
                commitChaseAssignmentsButton: () => cy.xpath("(//span[contains(text(), 'Commit Chase Assignments')])"),
                myWorkMenuButton: () => cy.xpath("//div[text()='My Work']/parent::li"),
                partOfAnInvoiceButton: () => cy.get('[class="assign invoice"]'),
                invoiceStartpage: () => cy.get('[id="invoiceBegPage"]'),
                invoiceEndPage: () => cy.get('[id="invoiceEndPage"]'),
                invoiceChaseIdBox: () => cy.get('[id="invoiceChaseId"]'),
                alertMessage: (AlertMessage) => cy.xpath('//div[text()="' + AlertMessage + '"]'),
                partOfPendChase: () => cy.xpath("//span[normalize-space()='This Page Is Part Of A Pend']"),
                pendDropDown: () => cy.xpath('//label[@title="Pend Code"]/following::p-dropdown/div'),
                dropDownClick: () => cy.xpath("//span[normalize-space()='PC100-Provider Refusal']"),
                pendChaseIDBox: () => cy.xpath("//input[@id='assignPendChaseId']"),
                pendToast: () => cy.xpath('//div[@class="ui-toast-detail" and contains(text(), "Pend created successfully")]'),
                globalSearch: () => cy.xpath("//input[@id='globalSearchInput']"),
                pendChaseIdClick: () => cy.xpath("//a[@class='ui-column-value ng-star-inserted']"),
                editPend: () => cy.xpath("//span[contains(@class, 'ui-button-text ui-clickable') and contains(text(),'Edit Pend')]"),
                pendStatus: () => cy.get('p-dropdown[dropdownicon="pi pi-caret-down"][class*="ng-touched ng-pristine ng-valid ui-inputwrapper-filled"]'),
                pendSave: () => cy.xpath("//span[normalize-space()='Save']"),
                pendSrtpg: () => cy.xpath("//input[@id='pendBegPage']"),
                pendEndPg: () => cy.xpath("//input[@id='pendEndPage']"),
                pendYesButton: () => cy.contains('Yes'),
                clinicalMenuButton: () => cy.xpath("//div[text()='Clinical']/parent::li"),
                medicalRecordReviewButton: () => cy.xpath("//span[text()='Medical Record Review']/parent::a"),
                bannerCrossIcon: () => cy.get('[class="pi pi-times"]'),
                runQueryButton: () => cy.xpath("//span[text()='Run Query']/parent::button"), //Click
                mrrAssignButton: () => cy.xpath('//app-button[@text="Assign"]'),
                continueButton: () => cy.xpath("(//span[contains(text(), 'Cancel')]/following::app-button/p-button/button)[1]"),
                firstProject: () => cy.xpath('(//p-listbox[@id="Projects"]/descendant::li)[4]'),
                threeDotPendChase: () => cy.xpath("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']//span[@class='ui-button-text ui-clickable'][normalize-space()='Pend Chase(s)']"),
                pendStatusBox: () => cy.xpath("(//label[@title='Status']//following::p-dropdown[@dropdownicon='pi pi-caret-down'])[1]"),
                correctMemberYesButton1: () => cy.xpath("(//span[normalize-space()='Yes'])[1]"),
                memberNoButton: () => cy.xpath("(//app-button[@class='no-btn'])[1]"),
                correctMemberNoButton1: () => cy.xpath("//span[normalize-space()='No']"),
                pendCodeBox: () => cy.get('[id="pendTypeId"]'),
                pendStatusBox: () => cy.xpath("(//label[@title='Status']//following::p-dropdown[@dropdownicon='pi pi-caret-down'])[1]"),
                resolvedButton: () => cy.xpath("//li[@aria-label='Resolved']"),
                userDropDown: () => cy.contains('li', '@Me'),
                userDropDown2: () => cy.contains('li', 'Aarti documentqamanager'),
                chaseidAssignButton: () => cy.xpath("//span[normalize-space()='Assign']"),
                userDropDown1: () => cy.contains('li', 'Unassigned'),
                exportAllButton: () => cy.get("[id='export']"),
                minusIcon: () => cy.get("[class='fas fa-minus ui-clickable ui-button-icon-left ng-star-inserted']"),
                plusIcon: () => cy.get("[class='fas fa-plus ui-clickable ui-button-icon-left ng-star-inserted']"),
                documentImage: () => cy.get('.document'),
                reasonDropDownArrow: () => cy.get("[class='ui-dropdown-trigger ui-state-default ui-corner-right']").eq(1),
                dropDownValue: () => cy.get("[role='option']").eq(0),
                memberValidationPageNo: () => cy.get("[id='memberValidationPageNumber']"),
                memberSubmit: () => cy.get('[text="Submit"]').eq(1),
                firstChase:()=>cy.get('.hdvi-gridcol-chaseID > .ui-column-value'),
                chaseTitle:()=>cy.xpath("//div[@class='description'][normalize-space()='Chase']"),
                pendDetailLink:()=>cy.get('a[href*="/pend/detail"]'),
                pendOwner:()=>cy.get("[class='summary-value ng-star-inserted']").eq(8),
                unassignedChase:()=>cy.xpath("//span[normalize-space()='Unassign Chase(s)']"),
                viewSourceButton:()=>cy.get('.commands > div.ng-star-inserted > :nth-child(2) > p-button > .ui-button > .ui-button-text'),
                addTagSymbol:()=>cy.get("[class='far fa-plus-circle fa-far fa-plus-circle']"),
                tagField:()=>cy.get('[id="tags"]'),
                k21Tag:()=>cy.contains('li','K21'),
                createdTag:()=>cy.get("[class='ui-chips-token-label']"),
                tagCrossIcon:()=>cy.get("[class='ui-chips-token-icon pi pi-fw pi-times fa-ui-chips-token-icon ng-star-inserted']"),
                backArrow:()=>cy.get("[iconname='arrow-left']"),
                documentImage2:()=>cy.get("[id='documentsImg']"),
                penIcon:()=>cy.get("[class='far fa-highlighter ui-clickable ui-button-icon-left ng-star-inserted']"),
                rotateRight:()=>cy.get("[class='fas fa-redo-alt ui-clickable ui-button-icon-left ng-star-inserted']"),
                rotateLeft:()=>cy.get("[class='fas fa-undo-alt ui-clickable ui-button-icon-left ng-star-inserted']"),






        }
        correctMemberNoButton1() {
                cy.wait(5000)
                this.elements.correctMemberNoButton1().click()
        }
        clickOnMenmberNoButton() {
                this.elements.memberNoButton().click()
        }
        clickOnFirstProject() {
                this.elements.firstProject().click()
        }
        clickOnpendEndpg(pendendpage) {
                this.elements.pendEndPg().type(pendendpage)
        }
        clickOnpendStrtpg(pendstartpage) {
                this.elements.pendSrtpg().type(pendstartpage)
        }
        clickOnPendSave() {
                this.elements.pendSave().click()
                cy.wait(2000)
        }
        clickOnAdditionalNotes() {
                this.elements.additionalNotes().type("test")
        }
        clickOnPendStatus(Additionalnotes) {
                cy.wait(3000)
                // this.elements.pendStatus().click()
                this.elements.pendStatusBox().click()
                cy.wait(2000)
                this.elements.resolvedButton().click()
                this.elements.additionalNotes().type(Additionalnotes)
                cy.wait(2000)
                this.elements.pendSave().click()
                cy.wait(2000)
                this.elements.pendYesButton().click()
        }
        clickOnEditPend() {
                cy.viewport(1400, 660)
                this.elements.editPend().click()
        }
        clickOnPendChaseIdClick() {
                this.elements.pendChaseIdClick().click()
        }
        clickOnSearchIcon() {
                this.elements.searchIcon().click()
        }
        clickOnGlobalSearch(pendChaseID) {
                this.elements.globalSearch().type(pendChaseID)
        }
        clickOnPendToast() {
                this.elements.pendToast().should('have.text', 'Pend created successfully')
        }
        clickOnPendChaseIdBox(pendChaseID) {
                cy.wait(2000)
                this.elements.pendChaseIDBox().click().type(pendChaseID)
        }
        clickOnDropDownClick() {
                this.elements.dropDownClick().click()
        }

        clickOnPendDropDown() {
                cy.wait(4000)
                this.elements.pendDropDown().click({ force: true })
        }
        clickOnPartOfAPendChase() {
                this.elements.partOfPendChase().click()

        }
        clickOnCommitedPageHover() {
                this.elements.commitedPageHover().realHover().should('be.visible', 'Commited Pages is where you can see all pages attached to Chases,Pends and Invoices.')
        }
        clickOnServiceCheckBox2() {
                this.elements.serviceCheckBox2().scrollIntoView().click({ force: true })
                cy.wait(2000)
                this.elements.serviceCheckBox2().scrollIntoView().click({ force: true })
        }
        clickOnserviceValidationMessage() {
                this.elements.serviceValidationMessgae().should('have.text', 'All Chase Pages must be viewed to SUBMIT')
        }
        clickOnserviceToastMsg() {
                this.elements.serviceSucessToastmsg().should('have.text', 'Organization configuration saved.')
        }
        clickOnServiceSave() {
                this.elements.serviceSave().click()
        }
        clickonServiceCheckbox() {
                this.elements.serviceCheckBox().click()
                cy.wait(2000)
                this.elements.serviceCheckBox().click()


        }
        clickOnServiceOrganizationButton() {
                this.elements.serviceOrganizationButton().click()
        }
        clickOnAdminMenuButton() {
                this.elements.adminMenuButton().click()
        }
        clickOnWorkingPageHover() {
                this.elements.workingPageHover().realHover().should('be.visible', 'Working pages is where you can see all pages identified as Chases or to be Ignored. Click the Commit Chase Assignments button to attach these pages to the Chases')
        }
        clickOnChaseSucessToast() {
                this.elements.chaseSucessToast().should('have.text', 'Chase assign successful')
        }
        clickOnAcceptButton() {
                this.elements.acceptButton().click()
        }
        clickOnChaseIdBox(chaseID) {
                this.elements.chasIdBox().type(chaseID)
        }
        clickOnEndpg() {
                this.elements.endPg().type("1")
        }
        clickOnStartpg() {
                this.elements.startPg().type("1")
        }
        clickOnPartOfAChaseButton() {
                this.elements.partOfChaseButton().click()
        }
        clickOncontentVerification() {
                this.elements.contentVerification().should('have.text', 'Please enter a Chase ID for this Invoice.Multiple Chase IDs can be associated during Invoice Data Entry.Start PgEnd PgChase IDSearchAccept')

        }
        clickOnInVoiceContent() {
                this.elements.inVoicecontent().click()
        }
        clickOnDocQaTable() {
                this.elements.docQaTable().should('contain', ids)
        }
        clickOnDocSubmitButton() {
                cy.wait(2000)
                this.elements.correctMemberYesButton().click()
                this.elements.docSubmitButton().click()
                cy.wait(3000)
        }
        clickOnCrossButton() {
                this.elements.crossButton().click()
        }
        verifyUrl() {
                cy.url().then(url => {
                        const partialUrl = 'https://uat.reveleer.com/retrieval/addressdetail';
                        expect(url).to.include(partialUrl);
                });

        }
        clickOnAddressAid() {
                this.elements.addressAidClick().click({ force: true })
        }
        clickOnClickChase() {
                this.elements.clickChase().click()
        }
        clickOnChaseIDVerification() {
                this.elements.chaseIDVerification().click()
        }
        clickOnAssignButtonVerification() {
                this.elements.assignButtonVerification().should('have.text', 'Assign')
        }
        clickOnTimeLineVerification() {
                this.elements.timelineVerification().should('contain', 'Chase assigned to Automation uat for "Document QA"')
        }
        clickOnTimeLine() {
                this.elements.timeLine().click()
        }
        clickOnDetailPageAssignButton() {
                cy.wait(2000)
                this.elements.detailPageAssignButton().click()
                cy.wait(5000)
                this.elements.userSearchBox().click().type('@Me')
                this.elements.userDropDown().click()
                this.elements.continueButton().click()
        }
        clickOnDetailPageAssignButton1() {
                cy.wait(2000)
                this.elements.detailPageAssignButton().click()
                cy.wait(5000)
                this.elements.userSearchBox().click().type('Unassigned')
                this.elements.userDropDown1().click()
                this.elements.continueButton().click()
        }

        clickOnChaseID() {
                this.elements.chaseIDClick().eq(0).click()
        }
        clickOncorrectMemberYesButton(ToastMessage) {
                this.elements.correctMemberYesButton().click();
                cy.wait(3000);
                this.elements.correctMemberYesButton().click();
                this.elements.MemberVerificationToast().should('include.text', ToastMessage);
        }

        clickOnMoveBackButton2(chaseNotes) {
                this.elements.moveBackButton().click()
                this.elements.chaseNote().type(chaseNotes)
                this.elements.chaseSave().click()
        }
        clickOnMoveBackCancelButton(chaseNotes) {

                this.elements.moveBackButton().click()
                this.elements.moveBackCancelButton().click()
                cy.wait(2000)
                this.elements.moveBackButton().click()
                this.elements.chaseNote().type(chaseNotes)
                this.elements.chaseSave().click()
                const chaseId = Cypress.env("chaseId");
                cy.xpath("//input[@id='globalSearchInput']").type(ids)
                this.elements.searchIcon().click()
                this.elements.unScheduleValidation().should('contain', 'Unscheduled')

        }
        clickOnMoveBackButton(chaseNotes) {
                this.elements.moveBackButton().click()

                this.elements.chaseNote().type(chaseNotes)
                this.elements.chaseSave().click()
                cy.wait(2000)
                const chaseId = Cypress.env("chaseId");
                cy.xpath("//input[@id='globalSearchInput']").type(ids)
                this.elements.searchIcon().click()
                this.elements.unScheduleValidation().should('contain', 'Unscheduled')
        }

        selectChaseIdAndAssignToUser1(assigntouser, ToastMessage) {
                this.elements.checkboxChaseId().eq(0).click({ force: true })
                this.elements.assignChaseButton().click()
                cy.wait(10000)

                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.userDropDown().click()
                this.elements.continueButton().click()
                cy.wait(5000)
                //this.elements.chaseAssignedSuccessfulToast().should('includes.text', ToastMessage)
                // this.elements.assignedSuccessfulToast().should('includes.text', 'Assigned Successful')
                this.elements.chaseIDClick().eq(0).click()
                cy.xpath("//h3[@class='container-title']").invoke('text').then(text => {
                        const regex = /CHASE ID: (\d+)/;
                        const match = text.match(regex);
                        id = match[1];
                        ids = id
                        cy.log(id); // Output the extracted ID to the Cypress log

                        // Use the extracted ID in further Cypress commands if needed
                        // For example:
                        // cy.get('#element-' + id).click(); // Click an element based on the extracted ID
                });







                cy.wait(3000)
        }
        clickOnMultipleCheckBox(multiplecheckBox) {
                const checkboxesToSelect = multiplecheckBox; // Example indices, modify as needed

                // Select the checkboxes
                cy.xpath('//li[@class="ui-listbox-item ui-corner-all ng-star-inserted"]').each(($checkbox, index) => {
                        if (checkboxesToSelect.includes(index)) {
                                cy.wrap($checkbox).click();
                        }
                        //  else {
                        //     cy.wrap($checkbox).unclickCheckbox ();
                        //   }
                })

        }
        clickOnCheckBox3() {
                cy.wait(2000)


                this.elements.checkBox3().click({ force: true })
                cy.wait(2000);
                this.elements.checkBox3().click({ force: true })



        }
        clickOnProject4() {
                this.elements.project4().click()
                this.elements.projectClick1().click()
                this.elements.projectClick2().click()
        }

        clickOnClinical() {
                this.elements.clinical().click()
        }
        clickOnClinicalPends() {
                this.elements.clinicalPends().click()
        }
        clickOnclinicalFilter() {
                this.elements.clinicalFilter()
        }
        clickOnClinicalChaseId() {
                cy.wait(2000)
                this.elements.clinicalChaseId().click()
        }
        clickOnChaseIdField(chaseId) {
                this.elements.chaseIdField().click().type(chaseId)
        }
        clickOnPaginationArrow() {
                this.elements.paginationArrow().click()
                cy.wait(2000)
        }
        clickOnPendCodeCheckBox() {
                this.elements.penCodeCheckBox().click()
        }
        clickOnClinicalThreeDots() {
                this.elements.clinicalThreeDots().click({ force: true });

        }
        clickOnChangeStatus() {
                this.elements.changeStatus().click()
        }
        clickOnSelectStatusDropDown() {
                cy.wait(2000)
                this.elements.selectStatusDropDown().click()
                cy.wait(2000)
        }
        clickOnResolvedDropDown() {
                cy.wait(2000)
                this.elements.resolvedDropDown().click()

        }
        clickOnNotes() {
                this.elements.notes().click().type("Dipashree")
        }
        clickOnUpdateStatus() {
                this.elements.updateStatus().click()
        }
        clickOnYesButton() {
                this.elements.yesButton().click()
                cy.wait(2000)
        }

        clickOnVerificationView() {

                this.elements.verificatiOnView()
                        .should('include.text', 'shubham')
                        .and('have.css', 'text-decoration')

                        .should('include', 'underline')
        }

        clickOnLoginName() {
                this.elements.loginName().should('include.text', 'Priyanka.admin')
        }
        clickOnLogin() {
                this.elements.login().click()
        }
        clickOnPassword() {

                this.elements.password().type('Welcome$2u')
        }
        clickOnUserName() {

                this.elements.loginuserName().type('Priyanka.admin')
        }
        clickOnSignout() {
                this.elements.signOut().click()
                cy.wait(3000)
        }
        clickOnAlreadyLoggedUser() {
                this.elements.alreadyLoggeduser().scrollIntoView().click()


        }
        clickOnSetDefault() {
                this.elements.setDefault().scrollIntoView().click()
        }
        clickOnYesButton() {
                this.elements.yesButton().click()
                cy.wait(2000)
        }
        clickOnDeleteButton() {

                this.elements.deleteButton().scrollIntoView().click()
        }
        clickOnHover() {
                this.elements.newView().should('include.text', 'shubham').realHover()
                cy.wait(1200)

                this.elements.hoverClick().click()

        }

        LogProjectname() {
                cy.xpath('(//p-listbox[@id="Projects"]/descendant::li)[4]').invoke('text')
                        .then((text) => {
                                Project = text;
                                cy.log(Project);
                        })
        }
        clickOnFilter() {
                this.elements.filter().click()
        }
        clickProject() {
                this.elements.firstProject().click()
        }
        verifySelectedProject() {
                this.elements.verifySelectedProject().should('contain', Project)
        }
        clickModifyButton() {
                this.elements.modifyButton().click()
                this.elements.dialogModal().should('be.visible')
                cy.wait(1500)
        }
        clickCancelbutton() {
                this.elements.cancelButton().click()
                //this.elements.dialogModal().should('not.be.visible')
        }
        clickClearButton() {
                this.elements.clearButton().click()
                //this.elements.verifyselectedproject().should('not.be.visible')
        }
        selectChaseIdAndCreatePend(Notes, message) {
                this.elements.selectChaseID().eq(0).click();
                this.elements.pendChasesButton().click().wait(2000);
                cy.wait(2000);
                this.elements.pendCodeBox().then(($element) => {
                        if ($element.is(':disabled')) {
                                this.elements.pendStatusBox().click()
                                // this.elements.pendStatus().click()
                                // cy.contains('New').click()
                                cy.wait(5000)
                                this.elements.resolvedButton().click()
                                //cy.contains('Resolved').click()
                                this.elements.additionalNotes().type(Notes)
                                cy.wait(2000)
                                this.elements.pendSave().click()
                                cy.wait(2000)
                                this.elements.pendYesButton().click()
                                cy.wait(2000)
                                this.elements.selectChaseID().eq(0).click();
                                cy.wait(5000)
                                this.elements.pendChasesButton().click().wait(2000);
                                this.elements.pendCodeDropdown().click()
                                this.elements.pendCodeOption().click();
                                this.elements.dropDown()
                                        .invoke('text')
                                        .then((text) => {
                                                const PendCode = text.split('-')[0].trim(); // Split the text at "-" and take the first part, then remove any leading/trailing spaces
                                                cy.wrap(PendCode);
                                                cy.log(PendCode); // Log the extracted text (e.g., "PC300")
                                                this.elements.severityDropDown().click();
                                                this.elements.severityOption().click();
                                                this.elements.additionalNotes().click().type(Notes);
                                                this.elements.saveButton().click();
                                                this.elements.successToast().should('be.visible').contains(message);
                                                cy.wait(2000)
                                                this.elements.verifyPendCode().first()
                                                        .invoke('text')
                                                        .then((verifypendcodeText) => {
                                                                const pendcode = verifypendcodeText.replace('Pend Code', ''); // Remove the "Pend Code" prefix
                                                                cy.log(pendcode); // Log the extracted Pend Code

                                                                expect(pendcode).to.equal(PendCode);
                                                        });
                                        })

                        }
                        else {
                                this.elements.pendCodeDropdown().click();
                                this.elements.pendCodeOption().click();
                                this.elements.dropDown()
                                        .invoke('text')
                                        .then((text) => {
                                                const PendCode = text.split('-')[0].trim(); // Split the text at "-" and take the first part, then remove any leading/trailing spaces
                                                cy.wrap(PendCode);
                                                cy.log(PendCode); // Log the extracted text (e.g., "PC300")
                                                this.elements.severityDropDown().click();
                                                this.elements.severityOption().click();
                                                this.elements.additionalNotes().click().type(Notes);
                                                this.elements.saveButton().click();
                                                this.elements.successToast().should('be.visible').contains(message);
                                                cy.wait(2000)
                                                this.elements.verifyPendCode().first()
                                                        .invoke('text')
                                                        .then((verifypendcodeText) => {
                                                                const pendcode = verifypendcodeText.replace('Pend Code', ''); // Remove the "Pend Code" prefix
                                                                cy.log(pendcode); // Log the extracted Pend Code

                                                                expect(pendcode).to.equal(PendCode);
                                                        });
                                        });

                        }
                });

        }
        clickOnModifyAssert() {

                this.elements.modifyAssert().should('include.text', '_Demo Risk Project 2')
        }
        Clickonproject2() {
                this.elements.selectProject2().click()
        }
        clickOnModify() {
                this.elements.modify().click()
        }
        clickSelectProject() {
                this.elements.selectedProject().should('include.text', '_Demo Risk Project')
        }
        clickOnSelectProject() {
                this.elements.firstProject().click()
                this.elements.firstProject().then($applicationNo => {
                        let refer = $applicationNo.text()
                        cy.log('' + refer)
                        cy.wrap(refer).as('aid')
                })
        }
        clickOnDocFilter() {
                this.elements.docFilter().click()
                cy.wait(2000)
        }
        clickOnChase() {
                this.elements.chase()
                this.elements.chaseVerification() // Replace 'selector' with the appropriate CSS selector for your element
                        .invoke('text')
                        .should('not.be.empty');
        }
        clickOnAssigned() {
                this.elements.assigned()
                this.elements.assignedVerification() // Replace 'selector' with the appropriate CSS selector for your element
                        .invoke('text')
                        .should('not.be.empty');

        }
        clickOnUnassigned() {
                this.elements.unAssigned()
                this.elements.unAssignedVerification() // Replace 'selector' with the appropriate CSS selector for your element
                        .invoke('text')
                        .should('not.be.empty');
        }
        clickOnNewView() {
                this.elements.newView().should('include.text', 'shubham')
        }
        clickOnSave() {
                this.elements.save().scrollIntoView().click()
        }
        clickOnCheckBox2() {
                this.elements.checkBox2().click()
        }
        clickOnCheckBox() {
                this.elements.checkBox().click()
        }
        clickOnEnterTitle(name) {

                this.elements.enterTitle().click({ force: true }).type(name)
        }
        clickOnCreateNewView() {
                this.elements.createNewView().click({ force: true })
        }
        clickOnRunQuery() {

                this.elements.runQuery().click()
                cy.wait(3000)


        }
        clickOnDocQa() {

                this.elements.docQaButton().click({ force: true })
        }
        clickOnRetrievalMenuButton() {
                cy.wait(5000)
                this.elements.retrievalMenuButton().click()
        }
        ////////////////////////////////////////////////
        clickOnFilter() {
                this.elements.filter().click({ force: true })
        }
        selectProject() {
                this.elements.selectProject().click()
                cy.wait(1000)
        }
        selectChaseIdAndAssignToUser(assigntouser) {

                this.elements.checkboxChaseId().eq(0).click({ force: true })
                this.elements.assignChaseButton().click()
                cy.wait(3000)
                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.userDropDown().click()
                this.elements.continueButton().click()
                this.elements.assignedSuccessfulToast().should('includes.text', 'Assigned Successful')
        }
        clickOnChaseId() {
                cy.wait(2000)
                this.elements.clickChaseId().eq(0).click()
                cy.wait(3000)
        }
        clickOnCommentsTab() {
                this.elements.comments().click()
        }
        addCommentsAndSendMessage(comment) {
                this.elements.textBox().click().type(comment)
                cy.wait(1500)
                this.elements.sendMessageButton().click()
                cy.wait(1500)
        }
        verifyComment(comment) {
                this.elements.messageBody().should('have.text', comment)
        }
        clickOnTimelineTab() {
                this.elements.timeline().click()
                cy.wait(2000)
        }
        verifyTimeline() {
                this.elements.timelineContainer().should('contain', 'This is a system generated comment')
        }
        clickOnChartTab() {
                this.elements.chart().click()
        }
        enterTextInOcrSearchBox(text) {
                cy.wait(2000)
                this.elements.ocrSearchBox().click().type(text)
                this.elements.searchIconOcr().click()
        }
        verifyOcrSearchedText() {
                this.elements.highlightedText().should('be.visible')
        }
        clickDownloadButton() {
                this.elements.downloadButton().click()
        }
        verifySuccessToast(ToastMessage) {
                this.elements.successToast().should('have.text', ToastMessage)
        }
        clickOnIdentificationTab() {

                this.elements.correctMemberYesButton1().click()
                cy.wait(2000)
                cy.contains(' Identification ').click()
                cy.wait(800)
        }
        clickOnChaseIdAssign() {
                this.elements.chaseidAssignButton().click()
                cy.wait(7000)
                this.elements.userSearchBox().click().type('@Me')
                this.elements.userDropDown().click()
                this.elements.continueButton().click({ force: true })
                this.elements.assignedSuccessfulToast().should('be.visible')

        }
        clickOnPartOfChaseButton() {
                this.elements.partOfChaseButton().click()
        }
        enterInStartBoxAndVerifyError(startpage) {
                this.elements.startPageBox().type(startpage)
                this.elements.errorContainer().should('be.visible')
        }
        enterInEndBoxAndVerifyError(endpage) {
                this.elements.endPageBox().type(endpage)
                this.elements.errorContainer().should('be.visible')
        }
        clickSubmitButton() {
                this.elements.submitButton().click()
        }
        verifyErrorMessageForMemberValidation(ErrorMessage) {
                this.elements.memberValidationError().should('be.visible').should('have.text', ErrorMessage)
        }
        loginWithEmployeeId() {
                this.elements.alreadyLoggeduser().click()
                this.elements.signOut().click()
                this.elements.usernameInput().click().type('Priyanka.empccr')
                this.elements.passwordInput().click().type('Welcome$2u')
                this.elements.loginButton().click()
        }
        clickPendIdAndChaseId() {
                this.elements.clickPendId().click()
                cy.wait(2000)
                this.elements.clickOnChaseId().click()
        }
        verifyViewOnlyButton() {
                this.elements.crossIcon().click()
                this.elements.readOnlyViewButton().should('be.visible')
        }
        unassignChase() {
                this.elements.threeDotMenuDocQa().click()
                this.elements.unassignChaseButton().click()
                this.elements.unAssignedSuccessfulToast().should('be.visible')
        }
        verifyReadOnlyLabelIsRemoved() {
                this.elements.readOnlyViewButton().should('be.visible')
                this.elements.assignButton().click()
                cy.wait(1500)
                this.elements.userSearchBox().type('@Me')
                this.elements.userDropDown().click()

                this.elements.continueButton().click({ force: true })
                this.elements.assignedSuccessfulToast().should('be.visible')
        }
        logChaseIdAndSubmitAndGetNext() {
                this.elements.yesButton().click()
                cy.wait(2000)
                let chaseId;
                cy.get('[class="container-title"]')
                        .invoke('text')
                        .then((text) => {
                                cy.log(text);
                                chaseId = text;
                                const CHASEID = chaseId.split(':')[1].trim(); // log the text after ":" as a separate variable
                                cy.log(CHASEID);
                                this.elements.correctMemberYesButton().click()

                                this.elements.submitGetNextButton().click();
                                this.elements.chaseIdContainer().should('not.contain', CHASEID);
                        });
        }
        clickOnPartOfAPendButton() {
                this.elements.partOfAPendButton().click()
        }
        clickOnSearchPartOfAPendButton() {
                this.elements.searchPartOfAPendButton().click()
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
                this.elements.pageShouldBeDeleted().click()
                this.elements.searchPartOfAPendButton().click()
                cy.wait(1000)
                this.elements.tableRadioButton().should('be.visible')
        }
        clickOnPageShouldBeDeleted(startpage, endpage) {
                let totalpage;
                cy.xpath('//div[@class="command-bar__item"]/span')
                        .then(($e1) => {
                                totalpage = $e1.text();
                                cy.log(totalpage);
                                this.elements.pageShouldBeDeleted().click();
                                cy.wait(700);
                                this.elements.deleteStartPage().type(startpage);
                                this.elements.deleteEndPage().type(endpage);
                                this.elements.acceptButton().click();
                                cy.reload()
                                cy.wait(2000)
                                let totalpageNew;
                                cy.xpath('//div[@class="command-bar__item"]/span')
                                        .then(($e2) => {
                                                totalpageNew = $e2.text();
                                                cy.log(totalpageNew);
                                                expect(totalpage).to.not.equal(totalpageNew);
                                        });
                        });

        }
        enterInStartPgBox(startpage) {
                this.elements.startPageBox().type(startpage)
        }
        enterInEndPgBox(endpage) {
                this.elements.endPageBox().type(endpage)
        }
        enterChaseId(ChaseID) {
                this.elements.chaseIdBox().type(ChaseID)
        }
        clickAcceptButton() {
                this.elements.acceptButton().click()
        }
        verifyChaseAssignedSuccessfulToast(ToastMessage) {
                this.elements.chaseAssignedSuccessfulToast(ToastMessage).should('be.visible')
        }
        checkChaseIdINWorkingTableGridIsVisible(ChaseID) {
                this.elements.workingPagesTableGrid().should('contain', ChaseID)
        }
        checkChaseIdINWorkingTableGridIsNotVisible(ChaseID) {
                this.elements.workingPagesTableGrid().should('not.contain', ChaseID)
        }
        clickCommitChaseAssignmentButton() {
                this.elements.commitChaseAssignmentsButton().click()
        }
        verifyAssignButtonIsVisible() {
                this.elements.assignButton().should('be.visible')
                this.elements.alreadyLoggeduser().click()
                this.elements.signOut().click()
        }
        loginWithRetrievalLead(userid, password) {
                this.elements.usernameInput().click().type(userid)
                this.elements.passwordInput().click().type(password)
                this.elements.loginButton().click()
        }
        loginWithDocQaManager(userid, password) {
                this.elements.usernameInput().click().type(userid)
                this.elements.passwordInput().click().type(password)
                this.elements.loginButton().click()
        }
        loginWithDocQaEmployeeId(userid, password) {
                this.elements.alreadyLoggeduser().click()
                this.elements.signOut().click()
                this.elements.usernameInput().click().type(userid)
                this.elements.passwordInput().click().type(password)
                this.elements.loginButton().click()
        }
        clickOnPartOfAnInvoiceButton() {
                this.elements.partOfAnInvoiceButton().click()
        }
        enterInInvoiceStartPageBox(startpage) {
                this.elements.invoiceStartpage().type(startpage)
        }
        enterInInvoiceEndPageBox(endpage) {
                this.elements.invoiceEndPage().type(endpage)
        }
        enterInvoiceChaseId(ChaseID) {
                this.elements.invoiceChaseIdBox().type(ChaseID)
        }
        verifyNotAllowedDialogBoxIsVisible(AlertMessage) {
                this.elements.alertMessage(AlertMessage).should('be.visible')
        }
        clickAssignButtonAndAssignUser(assigntouser, ToastMessage) {
                this.elements.assignButton().click()
                cy.wait(2000)
                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.userDropDown().click()
                this.elements.continueButton().click()
                this.elements.chaseAssignedSuccessfulToast(ToastMessage).should('be.visible')
        }
        clickClinicalAndMrrPage(assigntouser) {
                this.elements.clinicalMenuButton().click()
                this.elements.medicalRecordReviewButton().click()
                this.elements.runQueryButton().click()
                cy.wait(2000)
                this.elements.clickOnChaseId().eq(0).click()
                this.elements.bannerCrossIcon().click()
                cy.wait(1000)
                cy.viewport(1400, 660)
                cy.contains('Assign').click()
                cy.wait(1500)
                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.continueButton().should('be.disabled')
        }
        clickOnthreeDotMenu(Additionalnotes) {
                this.elements.threeDotMenuDocQa().click()
                cy.wait(2000)
                this.elements.threeDotPendChase().click({ force: true })
                cy.wait(2000)
                this.elements.pendStatusBox().click()
                cy.wait(2000)
                this.elements.resolvedButton().click()
                this.elements.additionalNotes().type(Additionalnotes)
                cy.wait(2000)
                this.elements.pendSave().click()
                cy.wait(2000)
                this.elements.pendYesButton().click()
                cy.wait(2000)
        }
        verifydocqaUrl() {
                cy.url().then(url => {
                        const partialUrl = 'https://uat.reveleer.com/retrieval/views/docqa';
                        expect(url).to.include(partialUrl);
                });
        }
        clickOnHover1() {
                this.elements.newView1().should('include.text', 'shubham').realHover()
                cy.wait(1200)

                this.elements.hoverClick().click()

        }
        clickOnExportAllButton() {
                this.elements.exportAllButton().click()
        }
        clickOnPlusSign() {
                this.elements.plusIcon().click()
                cy.wait(2000)
                this.elements.documentImage().should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
        }
        clickOnMinusSign() {
                this.elements.minusIcon().click()
                this.elements.documentImage().should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
        }
        enterMemberNoValidationDeatils(pageno) {
                this.elements.reasonDropDownArrow().click()
                this.elements.dropDownValue().click()
                this.elements.memberValidationPageNo().type(pageno)
                this.elements.memberSubmit().click()
        }
        logChaseId(pageno) {
                let chaseId;
                this.elements.chaseIdContainer().invoke('text')
                        .then((text) => {
                                cy.log(text);
                                chaseId = text;
                                const splitText = chaseId.split(':');
                                if (splitText.length > 1) {
                                        chaseId = splitText[1].trim().split(' ')[0]; // Extract numeric part before space
                                }
                                cy.log(chaseId);
                                this.elements.reasonDropDownArrow().click()
                                this.elements.dropDownValue().click()
                                this.elements.memberValidationPageNo().type(pageno)
                                this.elements.memberSubmit().click()
                                this.elements.globalSearch().type(chaseId)
                                this.elements.searchIcon().click()
                        });


        }
        verifyOwnerIsClient()
        {
                this.elements.firstChase().click()
                this.elements.chaseTitle().click()
                this.elements.pendDetailLink().click()
                this.elements.pendOwner().should('be.visible').and('includes.text','Client')
        }
        selectChaseIdAndAssignToUser4(assigntouser) {
                cy.wait(1000)

                this.elements.checkboxChaseId().eq(0).click({ force: true })
                this.elements.assignChaseButton().click()
                cy.wait(3000)
                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.userDropDown2().click()
                this.elements.continueButton().click()
                this.elements.assignedSuccessfulToast().should('includes.text', 'Assigned Successful')
        }
        unassignChaseHambergerMenu()
        {
                this.elements.checkboxChaseId().eq(0).click({ force: true })
                this.elements.unassignedChase().click()
                this.elements.successToast().should('includes.text', 'Unassigned Successful')

        }
        clickOnViewSource()
        {
                this.elements.viewSourceButton().click()
        }
        addTag()
        {
                this.elements.addTagSymbol().click()
                this.elements.tagField().type('k')
                this.elements.k21Tag().click()
                this.elements.createdTag().should('be.visible').and('includes.text','K21')
        }
        deleteTag()
        {
                this.elements.createdTag().click()
                this.elements.tagCrossIcon().click()
                this.elements.createdTag().should('not.exist')
        }
        addTagtofirstChaseId(assigntouser)
        {
                this.elements.runQueryButton().click()
                this.elements.checkboxChaseId().eq(0).click({ force: true })
                this.elements.checkboxChaseId().eq(1).click({ force: true })
                this.elements.assignChaseButton().click()
                cy.wait(3000)

                this.elements.userSearchBox().click().type(assigntouser)
                this.elements.userDropDown().click()
                this.elements.continueButton().click()
                cy.wait(2000)
                this.elements.chaseIDClick().eq(0).click()
                this.elements.addTagSymbol().click()
                this.elements.tagField().type('k')
                this.elements.k21Tag().click()
                this.elements.createdTag().should('be.visible').and('includes.text','K21')
                this.elements.backArrow().click()
        }
        addTagtoSecondChaseId()
        {
                this.elements.chaseIDClick().eq(1).click()
                this.elements.addTagSymbol().click()
                this.elements.tagField().type('k')
                this.elements.k21Tag().click()
                this.elements.createdTag().should('be.visible').and('includes.text','K21')
                this.elements.backArrow().click()
        }
        deleteTagFromFirstChaseId()
        {
                this.elements.chaseIDClick().eq(0).click()
                this.elements.createdTag().click()
                this.elements.tagCrossIcon().click()
                this.elements.createdTag().should('not.exist')
                this.elements.backArrow().click()
        }
        verifyTagFromSecondChaseIsNotDeleted()
        {
                this.elements.chaseIDClick().eq(1).click()
                this.elements.createdTag().should('be.visible').and('includes.text','K21')
        }
        verifyRotation()
        {
                this.elements.penIcon().click()
                this.elements.rotateRight().click()
                this.elements.documentImage2()
                .should('have.css', 'transform').wait(2000)
                .then(transformValue => {
                  // Check for right rotation matrix value (90 degrees)
                  const isRotatedRight = transformValue.includes('0, 1, -1, 0');
                  
                  // Assert that the image is rotated to the right
                 // expect(isRotatedRight).to.be.true;
                 this.elements.successToast().should('be.visible').and('includes.text','Page Rotation has been updated')
                });
            }
            rotateLeft()
            {
                this.elements.rotateLeft().click()
                this.elements.documentImage2()
                .should('have.css', 'transform')
                .then(transformValue => {
                  const isRotatedLeft = transformValue.includes('0, -1, 1, 0');
                  
                  // Assert that the image is rotated to the left
                 // expect(isRotatedLeft).to.be.true;
                 this.elements.successToast().should('be.visible').and('includes.text','Page Rotation has been updated')
                });
            }
        

}


// module.exports  = new DocQaGridPage()
export default DocQaGridPage