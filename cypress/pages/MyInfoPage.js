class MyInfoPage {
  visit() {
    cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click()
    cy.location('pathname')
      .should('include', '/web/index.php/pim/viewPersonalDetails')
  }

  openContactDetails() {
    cy.contains('a', 'Contact Details').click()
    cy.location('pathname')
      .should('include', '/web/index.php/pim/contactDetails')
  }

  updatePersonalDetails(firstName, lastName) {
    cy.get('input[name="firstName"]').clear().type(firstName)
    cy.get('input[name="lastName"]').clear().type(lastName)
  }

  savePersonalDetails() {
    cy.get('form.oxd-form')
      .filter(':has(input[name="firstName"])')
      .find('button[type="submit"]')
      .click()
  }

}

export default MyInfoPage