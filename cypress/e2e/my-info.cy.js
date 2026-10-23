
import LoginPage from '../pages/LoginPage'
import MyInfoPage from '../pages/MyInfoPage'

describe('OrangeHRM | Personal Information', () => {
  const loginPage = new LoginPage()
  const myInfoPage = new MyInfoPage()


  beforeEach(() => {
    loginPage.visit()
    loginPage.login('Admin', 'admin123')
    cy.location('pathname')
      .should('eq', '/web/index.php/dashboard/index')
    })

  it('CT-04 | Should access personal details', () => {
    myInfoPage.visit()

    cy.get('input[name="firstName"]')
      .should('be.visible')

    cy.get('input[name="lastName"]')
      .should('be.visible')
    })

  it('CT-05 | Should edit personal details fields', () => {
    myInfoPage.visit()


    cy.get('input[name="firstName"]', { timeout: 10000 })
      .should('not.have.value', '')
      .invoke('val')
      .then((firstName) => {

    cy.get('input[name="lastName"]')
      .should('not.have.value', '')
      .invoke('val')
      .then((lastName) => {
        cy.log(`Original name: ${firstName} ${lastName}`)
        myInfoPage.updatePersonalDetails('PedroQA', 'GitahyTest')

    cy.get('input[name="firstName"]')
      .should('have.value', 'PedroQA')

    cy.get('input[name="lastName"]')
      .should('have.value', 'GitahyTest')
     
    })
  })
})

  it('CT-06 | Should validate required personal details fields', () => {
    myInfoPage.visit()

    
    cy.get('input[name="firstName"]')
      .scrollIntoView()
      .clear()

    cy.get('input[name="lastName"]')
      .scrollIntoView()
      .clear()

    cy.get('input[name="firstName"]')
      .closest('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain.text', 'Required')

    cy.get('input[name="lastName"]')
      .closest('.oxd-input-group')
      .find('.oxd-input-field-error-message')
      .should('contain.text', 'Required')
      })


  it('CT-07 | Should access contact details', () => {
    myInfoPage.visit()
    myInfoPage.openContactDetails()

    cy.contains('h6', 'Contact Details')
      .should('be.visible')
      })

   it('CT-08 | Should display contact information fields', () => {
    myInfoPage.visit()
    myInfoPage.openContactDetails()

    cy.contains('label', 'Street 1').should('be.visible')
    cy.contains('label', 'City').should('be.visible')
    cy.contains('label', 'Mobile').should('be.visible')
    cy.contains('label', 'Work Email').should('be.visible')
})

})