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

    
    cy.get('.showcart').click()

    cy.wait(5000)
    cy.get('.checkout-methods-items > :nth-child(1) > .action').click()

    cy.wait(5000)


    cy.get('#JDCHUTJ').click().type("Alabama")
    cy.get('#QCSY20N').click().type("Teste")
    cy.get('#OX9F959').click().type("teste5")
    cy.get('#NO3C8VH').click().type("teste")
    cy.get('#PE5NRDC').click().type("12345-6789")
    cy.get('#K4LHODQ').click().type("555")

    cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
    cy.get('.button').click()
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

    cy.get('.base').contains('Thank you for your purchase!')

  })
    


  })
})