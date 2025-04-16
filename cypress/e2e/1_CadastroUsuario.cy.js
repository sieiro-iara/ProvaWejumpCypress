describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.nublue.co.uk/')

    cy.get('.panel > .header > :nth-child(3) > #id8OxoVcOO').click()

    cy.get('#firstname').click().type('Iara')
    cy.get('#lastname').click().type('Teste')
    cy.get('#email_address').click().type('testecypresswejump@yopmail.com')
    cy.get('#password').click().type('Senha123@')
    cy.get('#password-confirmation').click().type('Senha123@')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

  })
})