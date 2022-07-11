import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////////////////////WELL Health Safety page validation////////////////////////////////////////////////////////////////
When('User clicks on WELL Health-Safety from top menu under projects', function () {
    cy.wait(1000)
    cy.xpath(this.locator.projectMenu).click()
    cy.wait(1000)
    cy.xpath(this.locator.Wellhealthsafety).click()
    cy.wait(1000)
    cy.contains('Apply').should('be.visible').click({ force: true })
})
And('User clicks on Start a New Project button', function () {
    cy.xpath(this.locator.Wellhealthstartprojectbtn).click({ force: true })
})
And('User verifies Start a New Project options', function () {
    cy.contains('Enroll Now').should('be.visible')
    cy.contains('Plan Your Journey').should('be.visible')
    cy.contains('Get a Price Estimate').should('be.visible')
})
And('User clicks on Enroll Now button', function () {
    cy.xpath(this.locator.Enrollnowbtn).click({ force: true })
})
Then('User redirects to Enroll now page', function () {
    cy.contains('WELL Health-Safety Rating').should('be.visible')
})
And('User verifies Enroll now page', function () {
    cy.contains('LEARN').should('be.visible')
    cy.contains('ENROLL').should('be.visible')
    cy.contains('DOCUMENT').should('be.visible')
    cy.contains('ACHIEVE').should('be.visible')
    cy.contains('MAINTAIN').should('be.visible')
})
And('User clicks on Enrollnow button', function () {
    cy.xpath(this.locator.Enrollbtn).click({ force: true })
})
And('User verifies Enroll now fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.enrollfield).should('be.visible')
    cy.xpath(this.locator.enrollcheckbox).should('be.visible')
    cy.xpath(this.locator.enrollorg).should('be.visible')
    cy.xpath(this.locator.orgIndustry).should('be.visible')
    cy.xpath(this.locator.enrollcountry).should('be.visible')
    cy.xpath(this.locator.enrollstreet).should('be.visible')
    cy.xpath(this.locator.enrollcity).should('be.visible')
    cy.xpath(this.locator.enrollpostalcode).should('be.visible')
    cy.xpath(this.locator.billaddcheckbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.backtohomepg).should('be.visible')
    cy.xpath(this.locator.enrollcontinuebtn).should('be.visible')
})
And('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.enrollcontinuebtn).click({ force: true })
    cy.contains('Organization Industry* is required.').scrollIntoView().should('be.visible')
    cy.contains('Country is required.').scrollIntoView().should('be.visible')
    cy.contains('Street is required.').scrollIntoView().should('be.visible')
    cy.contains('City is required.').scrollIntoView().should('be.visible')
    cy.contains('Postal Code is required.').scrollIntoView().should('be.visible')
    cy.wait(2000)
})
And('User enter data to Organisation field', function () {
    cy.wait(2000)
    let r = Math.random().toString(36).slice(-5)
    cy.xpath(this.locator.enrollfield).type(this.data.HSRName + r)
})
And('User checks the Owner information checkbox', function () {
    cy.xpath(this.locator.enrollcheckbox).check({ force: true })
})
And('User selects the Organisation', function () {
    cy.xpath(this.locator.enrollorg).click({ force: true })
    cy.xpath(this.locator.enrollorg).type(this.data.ownerOrganization)
    cy.wait(2000)
    cy.xpath(this.locator.enrollorg).type('{enter}')
})
And('User selects the Organisation Industry', function () {
    cy.xpath(this.locator.orgIndustry).select(this.data.orgIndustry, { force: true })
})
And('User enters data to Country, State, Street address, City and Postal Code fields', function () {
    cy.xpath(this.locator.enrollcountry).select(this.data.countryName)
    cy.xpath(this.locator.enrollstate).select(this.data.stateName)
    cy.xpath(this.locator.enrollstreet).type(this.data.streetName)
    cy.xpath(this.locator.enrollcity).type(this.data.cityName)
    cy.xpath(this.locator.enrollpostalcode).type(this.data.postalCode)
})
And('User checks the Billing address is same as owner address checkbox', function () {
    cy.xpath(this.locator.billaddcheckbox).check({ force: true })
})
And('User clicks on continue button', function () {
    cy.xpath(this.locator.enrollcontinuebtn).click({ force: true })
})
And('User will be redirected to Registration page successfully', function () {
    cy.contains('Registration on behalf of Owner').should('be.visible')
})
And('User verifies the added organization data by clicking on back button', function () {
    cy.xpath(this.locator.regonbehalfbackbtn).click()
    cy.xpath(this.locator.enrollcountry).invoke('val').then((countryName) => {
        expect(countryName).to.equal(this.data.countryName)
    })
    cy.xpath(this.locator.enrollstate).invoke('val').then((stateName) => {
        expect(stateName).to.equal(this.data.stateName)
    })
    cy.xpath(this.locator.enrollstreet).invoke('val').then((streetName) => {
        expect(streetName).to.equal(this.data.streetName)
    })
    cy.xpath(this.locator.enrollcity).invoke('val').then((cityName) => {
        expect(cityName).to.equal(this.data.cityName)
    })
    cy.xpath(this.locator.enrollpostalcode).invoke('val').then((postalCode) => {
        expect(postalCode).to.equal(this.data.postalCode)
    })
    cy.wait(2000)
    cy.xpath(this.locator.enrollcontinuebtn).click({ force: true })
})
And('User checks the Registration checkbox', function () {    
    cy.xpath(this.locator.regcheckbox).check({ force: true })
})
And('User selects yes or no for Is the Owner organization an IWBI member', function () {
    cy.xpath(this.locator.Iwbimemberdropdwon).select(this.data.IWBIMember, { force: true })
})
And('User clicks on Registration continue button', function () {
    cy.xpath(this.locator.Regcontinuebtn).click({ force: true })
})
Then('User redirects to Enrollment type page successfully', function () {
    cy.contains('Confirm your enrollment type').should('be.visible')
})
///////////////////////////////////Validating Enrollment type page//////////////////////////////////////////////////////////////
Given('User is on Enrollment type page', function () {
    cy.contains('Confirm your enrollment type').should('be.visible')
})
And('User verifies fields on the Enrollment type page', function () {
    cy.contains('Confirm your enrollment type').should('be.visible')
    cy.contains('Standard Locations').should('be.visible')
    cy.contains('High-volume, multi-use locations').should('be.visible')
    cy.xpath(this.locator.TypeoneEnrollbtn).should('be.visible')
    cy.xpath(this.locator.TypetwoEnrollbtn).should('be.visible')
})
When('User clicks on Type two Enroll now button', function () {
    cy.xpath(this.locator.TypetwoEnrollbtn).click({ force: true })
})
Then('User redirects to locations form page successfully', function () {
    cy.contains('Tell us about your locations').should('be.visible')
})
/////////////////////////////////Validating locations form page///////////////////////////////////////////////////////////////
Given('User is on locations form page', function () {
    cy.contains('Tell us about your locations').should('be.visible')
})
And('User verifies fields on the locations form page', function () {
    cy.contains('Tell us about your locations').should('be.visible')
    cy.xpath(this.locator.locations).should('be.visible')
    cy.xpath(this.locator.locationsSpacetype).should('be.visible')
    cy.xpath(this.locator.locationsize).should('be.visible')
    cy.xpath(this.locator.locationMsize).should('be.visible')
    cy.xpath(this.locator.locationbckbtn).should('be.visible')
    cy.xpath(this.locator.LocContinuebutton).should('be.visible')
    cy.wait(2000)
})
When('User enters size of all enrolling locations field', function () {
    cy.xpath(this.locator.locationsize).type(this.data.areaSize)
})
And('User clicks on continue btn without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.LocContinuebutton).click({ force: true })
    cy.contains('Which of the following best describes your locations?* is required.').should('be.visible')
})
And('User selects describe your locations from the dropdown', function () {
    cy.xpath(this.locator.locationsSpacetype).click({ force: true })
    cy.xpath(this.locator.locationsSpacetype).type(this.data.locationsSpacetype)
    cy.wait(2000)
    cy.xpath(this.locator.locationsSpacetype).type('{enter}')
    cy.wait(5000)
    
})
And('User clicks on locations form page continue button', function () {
    cy.xpath(this.locator.LocContinuebutton).click({ force: true }) 
    cy.wait(2000)
})
 Then('User redirects to Fees Discounts page successfully', function () {
     cy.contains('Confirm your program fees').should('be.visible')
 })
///////////////////////////////////Validating Fees+Discounts page/////////////////////////////////////////////////////////////
Given('User is on Fees Discounts page', function () {
     cy.wait(1000)
     cy.contains('Confirm your program fees').should('be.visible')
})
And('User verifies fields on the Fees Discounts page', function () {
    cy.xpath(this.locator.criteriacheckbx).should('be.visible')
    cy.xpath(this.locator.officialquotedownloadbtn).should('be.visible')
    cy.xpath(this.locator.saveforlaterbtn).should('be.visible')
    cy.xpath(this.locator.feesdiscountbackbtn).should('be.visible')
})
When('User checks the criteria checkbox', function () {
    cy.xpath(this.locator.criteriacheckbx).scrollIntoView().check({ force: true })
})
And('User clicks on continue button for fees and discount', function () {
    cy.xpath(this.locator.feesdiscountcontibtn).click({ force: true })
})
Then('User redirects to Terms Conditions page successfully', function () {
    cy.contains('Review terms and conditions').scrollIntoView().should('be.visible')
})

///////////////////////////////////Validating Terms+Conditions page////////////////////////////////////////////////////////////////////
Given('User is on Terms Conditions page', function () {
    cy.contains('Review terms and conditions').scrollIntoView().should('be.visible')
})
When('User selects Yes or No for Is this participation considered public field', function () {
    cy.xpath(this.locator.Nobutton).click({ force: true })
})
And('User checks the Terms & Conditions checkbox and clicks on continue button', function () {
    cy.xpath(this.locator.termsndconditionscheckbox).check({ force: true })
    cy.xpath(this.locator.termsndconditionscntbtn).click({ force: true })
})
Then('User redirects to Payment page successfully', function () {
    cy.contains('Payment Amount').should('be.visible')
})
////////////////////////////////////////Validating Payment page//////////////////////////////////////////////////////////
Given('User is on Payment page', function () {
    cy.contains('Payment Amount').should('be.visible')
})
And('User verifies invoice form fields', function () {
    cy.contains('Payment Amount').should('be.visible')
    cy.xpath(this.locator.viewbox).should('be.visible')
    cy.xpath(this.locator.saveforlater).should('be.visible')
    cy.xpath(this.locator.paymentbackbtn).should('be.visible')
    cy.xpath(this.locator.wellLogo).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.paymentdiscountcode).should('be.visible')
    cy.xpath(this.locator.paymentApplybtn).should('be.visible')
    cy.xpath(this.locator.Paymentcard).should('be.visible')
    cy.xpath(this.locator.Paymentcheck).should('be.visible')
    cy.xpath(this.locator.Paymentwiretransfer).should('be.visible')
    cy.xpath(this.locator.cardholdername).should('be.visible')
    cy.xpath(this.locator.cardNumber).should('be.visible')
    cy.xpath(this.locator.month).should('be.visible')
    cy.xpath(this.locator.cvcNumber).should('be.visible')
    cy.xpath(this.locator.paynowbtn).should('be.visible')
})
And('User clicks on pay now and complete enrollment button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.paynowbtn).click({ force: true })   
})
//////////////////////////////////////WELL Health Safety Enrollment/////////////////////////////////////////////////////////////
Then('User will be redirected to WELL Health Safety Dashboard page successfully', function () {
    cy.wait(4000)
    cy.contains('Dashboard').should('be.visible')
    cy.wait(4000)
    cy.contains('Dashboard').should('be.visible')
    
})
And('Get the WELL Health-Safety project ID and store into Json', function () {
        cy.get('.text-xs.text-gray-500').eq(0).invoke('text').then((ProjId) => {
            var id = ''
            var str = ProjId
            var stringArray = str.split(': ')
            var id = stringArray[1].trim()
            cy.readFile('cypress/fixtures/HSRId.json').then((obj) => {
                obj.WELLHealthSafety = id
                cy.writeFile('cypress/fixtures/HSRId.json', obj)
            })
            cy.wait(3000)
            cy.reload()
            cy.wait(3000)
        })
    })


