describe('template spec', () => {

  
  it('passes', () => {

    cy.fixture('example.json').then((data) => {
      
    const email = data.email
    const password = data.password
    cy.visit('https://magento.nublue.co.uk/')
    cy.get('.panel > .header > .link > a').click()
    cy.get('#email').click().type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    
  })
    


  })
})