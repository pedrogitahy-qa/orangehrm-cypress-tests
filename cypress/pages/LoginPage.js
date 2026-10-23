class LoginPage {
  visit() {
    cy.visit('/auth/login')
  }

  login(username, password) {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
  }

  submitLogin() {
    cy.get('button[type="submit"]').click()
  }

  getErrorMessage() {
    return cy.get('[role="alert"]')
  }
}

export default LoginPage