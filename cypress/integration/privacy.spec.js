/// <reference types="Cypress" />

it('Should access "Políticas de Privacidades" page', () => {
    cy.visit('./src/privacy.html')
    cy.get('#title').contains('CAC TAT - Política de privacidade')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    cy.get('#white-background').should('have.css', 'background-color').and('eq', 'rgb(255, 255, 254)')
})