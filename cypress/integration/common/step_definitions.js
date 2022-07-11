
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonMethod from '../../support/CommonMethod'

const responseDelete = { response: '' }
const responseOrgId = { response: '' }

/////////////////////Login to application with valid user credentials/////////////////////////////////////////
Given('User navigate to Wellcertified page', function () {
    cy.visit(this.data.url)
    cy.contains('Log in to your account').should('be.visible')
 })
 When('User enters username and password', function () {
    cy.xpath(this.locator.username).type(this.data.email)
    cy.xpath(this.locator.password).type(this.data.password)
 })
 And('User clicks on Sign IN button', function () {
    cy.xpath(this.locator.loginBtn).click()
 })
 Then('User login must be successful', () => {
    cy.contains('Dashboard').should('be.visible')
 })
 /////////////////Login to application with Invalid user credentials/////////////////////////////////////////////////////////////////
 
 When('User verifies login page fields', function () {
    cy.xpath(this.locator.username).should('be.visible')
    cy.xpath(this.locator.password).should('be.visible')
    cy.xpath(this.locator.loginBtn).should('be.visible')
 })
 And('User enters invalid username and password', function () {
    cy.xpath(this.locator.username).type(this.data.invalidemail)
    cy.xpath(this.locator.password).type(this.data.invalidpass)
 })
 Then('User verifes the error message for invalid credentials', () => {
    cy.contains('There was an error logging you in').should('be.visible')
    cy.contains('Invalid email or password.').should('be.visible')
 })
 And('User login must be unsuccessful', () => {
    cy.contains('Dashboard').should('not.exist')
 })
 ////////////common login////////////////////////////////////////////////////////////////////////////////
 Given('User logged in to the WELL certified account', function () {
   CommonMethod.loginpage()
   cy.wait(2000)
   cy.contains('Dashboard').should('be.visible')
})
////////////////////////// Terms Conditions////////////////////////
And('User verifies fields on the Terms Conditions page', function () {
   cy.xpath(this.locator.Yesbutton).scrollIntoView().should('be.visible')
   cy.xpath(this.locator.Nobutton).should('be.visible')
   cy.xpath(this.locator.termsndconditionscheckbox).should('be.visible')
   cy.xpath(this.locator.termsndconditionsbckbtn).should('be.visible')
   cy.xpath(this.locator.termsndconditionscntbtn).should('be.visible')
})
////////////////////Billing/////////////////////////////////////////////////////////////////////////////////
When('User clicks on Billing tab', function () {
   cy.wait(3000)
   cy.contains('Billing').click()
   cy.wait(2000)
})
And('User clicks on pay now button', function () {
   cy.wait(2000)
   cy.xpath(this.locator.payNow).should('be.visible')
   cy.xpath(this.locator.payNow).click({ force: true })
})
//////////////////Card payment///////////////////////////////////////////////////////////////////////////
And('User enters the Card Details', function () {
   cy.xpath(this.locator.cardholdername).type(this.data.cardHolderName)
   cy.wait(2000)
   cy.get('.__PrivateStripeElement:eq(0) > iframe').then(function ($ele) {
       const iframe = $ele.contents().find('body')
       cy.wrap(iframe).click().type(this.data.cardNumber)
   })
   cy.get('.__PrivateStripeElement:eq(1) > iframe').then(function ($ele) {
       const iframe = $ele.contents().find('body')
       cy.wrap(iframe).click().type(this.data.month)
   })
   cy.get('.__PrivateStripeElement:eq(2) > iframe').then(function ($ele) {
       const iframe = $ele.contents().find('body')
       cy.wrap(iframe).click().type(this.data.cvcNumber)
   })
})
//////////////////////Document//////////////////////////////////////////////////////////////////
Given('User navigate to the Document page', function () {
   cy.wait(2000)
   cy.contains('Document').should('be.visible')
   cy.wait(3000)
})
When('User clicks on Document tab', function () {
   cy.wait(2000)
   cy.contains('Document').should('be.visible').click({ force: true })
})
///////////////////Review//////////////////////////////////////////////////////////////////////
When('User clicks on Reviews button', function () {
   cy.wait(4000)
   cy.contains('Reviews').should('be.visible').click({ force: true })
})
Then('User will be redirected to Reviews page', function () {
   cy.wait(2000)
   cy.contains('Reviews').should('be.visible')
})
And('User clicks on view button', function () {
   cy.wait(5000)
   cy.xpath(this.locator.viewbtn).click({ force: true })
})
//////////////////////////Promotions/////////////////////////////////////////////
When('User clicks on Promotions tab', function () {
   cy.wait(4000)
   cy.contains('Promotion').click({ force: true })
})
///////////////////Edit///////////////////////////////////////////////////////////////
When('User clicks on Edit tab', function () {
   cy.wait(4000)
   cy.contains('Edit').should('be.visible').click({ force: true })
   cy.wait(2000)
})
////////////////Profile///////////////////////////////////////////////////////////////
When('User clicks on Profile from the left menu', function(){
   cy.contains("Profile").should('be.visible').click({ force: true })
   cy.contains("Profile").should('be.visible')
})
Given('User navigates to the Profile page', function () {   
   cy.contains("Profile").should('be.visible').click({ force: true })
})

///////////////////DeleteMembership////////////////////////////////////////////////////////////////
Given('User gets the authenticated user Token and store into json file', function () {
   cy.request({
       method: 'POST',
       url: 'https://test-v2-api.wellcertified.com/api/authenticate',
       body: {
           'email': this.data.email,
           'password': this.data.password
       }
   }).then((response) => {

       var token = response.body.token
       var authtoken = "Bearer " + token

       cy.readFile('cypress/fixtures/Header.json').then((obj) => {
           obj.token = authtoken

           cy.writeFile('cypress/fixtures/Header.json', obj)
       })
   })
})
When('User gets the authenticated user Organisation Id and store into json file', function () {
   cy.request({
       method: 'GET',
       url: 'https://test-v2-api.wellcertified.com/api/membership/subscribe',
       headers: {
           'Authorization': this.dataHeader.token
       }
   }).then((response) => {
       responseOrgId.response = response
       var orgId = response.body.id
       if (orgId >= 3) {
           cy.readFile('cypress/fixtures/Organizationid.json').then((obj) => {
               obj.OrgId = orgId
               cy.writeFile('cypress/fixtures/Organizationid.json', obj)
           })
       }
   })
})

And('User gets the admin user token and store into json file', function () {
   cy.request({
       method: 'POST',
       url: 'https://test-v2-api.wellcertified.com/api/authenticate',
       body: {
           'email': this.data.adminUsername,
           'password': this.data.adminPassword
       }
   }).then((response) => {

       var token = response.body.token
       var authtoken = "Bearer " + token

       cy.readFile('cypress/fixtures/Header.json').then((obj) => {
           obj.adminToken = authtoken

           cy.writeFile('cypress/fixtures/Header.json', obj)
       })
   })
})
Then('User delete Membership by user Organisation Id', function () {
   cy.wait(3000)
   const orgId =  responseOrgId.response.body.id
   cy.request({
       method: 'DELETE',
       url: 'https://test-v2-api.wellcertified.com/api/membership/' + orgId,
       headers: {
           'Authorization': this.dataHeader.adminToken
       }
   }).then((resdelete) => {
       responseDelete.response = resdelete
   })
})

And('User verifies deleted Membership by status code 200 in response', function () {
   expect(responseDelete.response.status).to.eq(200)
   expect(responseDelete.response.body.msg).to.eq("success")
})
