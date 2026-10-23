import LoginPage from '../pages/LoginPage'

describe('OrangeHRM | Authentication', () => {
  const loginPage = new LoginPage()

  it('CT-01 | Should authenticate with valid credentials', () => {
    loginPage.visit()
    loginPage.login('Admin', 'admin123')

    cy.location('pathname')
      .should('eq', '/web/index.php/dashboard/index')

    cy.get('.orangehrm-dashboard-grid')
      .should('be.visible')
  })

  it('CT-02 | Should reject invalid credentials', () => {
    loginPage.visit()
    loginPage.login('PedroGitahy_QA', 'invalid-password-2026')

    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Invalid credentials')

    cy.location('pathname')
      .should('eq', '/web/index.php/auth/login')
  })

  it('CT-03 | Should validate required login fields', () => {
    loginPage.visit()
    loginPage.submitLogin()

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2)
      .each(($message) => {
        cy.wrap($message).should('contain.text', 'Required')
      })

    cy.location('pathname')
      .should('eq', '/web/index.php/auth/login')
  })

})