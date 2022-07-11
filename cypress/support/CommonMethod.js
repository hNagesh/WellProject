const myEnv = Cypress.env("Enviroment")
class CommonMethod {
    static beforeTest() {
        cy.fixture(myEnv).then(function (data) {
            this.data = data
        })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
        })
    }
    static CurrentDate() {
        var newDate = new Date().toDateString();// Jun 27, 2022
        newDate = newDate.split(" ")    
        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
        return newDate
    }
    static CurrentDateCommaSeperation() {
        var today = new Date();//Jun, 27 2024
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = today.toLocaleString('default', { month: 'short' })
        var yyyy = today.getFullYear();
        today = mm + ', ' + dd + ' ' + yyyy;
        document.write(today);
        return today;
    }
    static addMonths(date, monthcount) {
        date.setMonth(date.getMonth() + monthcount);
        date.setDate(date.getDate())
        return date;
    }
    static addingMonth(monthcount){
    var newDate = addMonths(new Date()).toDateString(), monthcount;
    newDate = newDate.split(" ")
    newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
    }

    static loginpage() {
        cy.fixture(myEnv).then(function (data) {
            this.data = data
            cy.visit(this.data.url)
        })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
            cy.wait(2000)
            cy.contains('Log in to your account').should('be.visible')
            cy.xpath(this.locator.username).type(this.data.email)
            cy.xpath(this.locator.password).type(this.data.password)
            cy.xpath(this.locator.loginBtn).click()
        })
    }
    static adminLogin()
     {
        cy.fixture(myEnv).then(function (data) {
            this.data = data
        cy.visit(this.data.url)
       })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
            cy.wait(2000)
     cy.contains('Log in to your account').should('be.visible')
     cy.xpath(this.locator.username).type(this.data.adminUsername)
     cy.xpath(this.locator.password).type(this.data.adminPassword)
     cy.xpath(this.locator.loginBtn).click()  
    })
     }
}
export default CommonMethod;