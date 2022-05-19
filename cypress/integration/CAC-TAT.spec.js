/// <reference types="Cypress" />

describe('Central de atendimento ao Cliente TAT', function(){
    beforeEach(()=>{
        cy.visit('./src/index.html')
    })
    it('should check if the title is in the aplication', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('Should fill in the required fields when submitting form and success message', function(){
        const longText = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,'
        cy.get('#firstName').type(Cypress.env('userFirstName'))
        cy.get('#lastName').type(Cypress.env('userLastName'), {log: false})
        cy.get('#email').type('primeiro@ultimo.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
    it('Should fill in the fields when submitting form with wrong value in email and error message', function(){
        cy.get('#firstName').type('Primeiro')
        cy.get('#lastName').type('Último')
        cy.get('#email').type('pom')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    it('should the phone field should be countinous empty after filled with non-numéric value', function(){
        cy.get('#phone')
        .type('teste')
        .should('have.value', '')
    })
    it('Must the phone field be required after check phone as preference contact and error message', function(){
        cy.get('#firstName').type('Primeiro')
        cy.get('#lastName').type('Último')
        cy.get('#email').type('primeiro@ultimo.com')
        // cy.get('#phone-checkbox').click()
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste')

        cy.contains('button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
    })
    it('should  fill in fields: firstnName, lastName, email and phone and clear after all fields', function(){
        cy.get('#firstName')
        .type('Primeiro')
        .should('have.value', 'Primeiro')
        .clear()
        .should('have.value', '')
        cy.get('#lastName')
        .type('Último')
        .should('have.value', 'Último')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('email@test.com')
        .should('have.value', 'email@test.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('123456')
        .should('have.value', '123456')
        .clear()
        .should('have.value', '')
    })
    it('should submit the form with no values filled', function(){
        cy.get('button[type="submit"]').click()
        
        cy.get('.error').should('be.visible')
    })
    it('should send the form successfuly with custom command', ()=> {
        cy.fillMandatoryFieldsAndSubmit('Maria', 'Silva', 'maria.silva@email.com', 'teste')
        
        cy.get('.success').should('be.visible')
    })
    it('should select Youtube product by the text', ()=> {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })
    it('should select Mentoria product by the value', ()=> {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })
    it('should select Blog product by the índice', ()=> {
        cy.get('#product').select(1).should('have.value', 'blog')
    })
    it('should check Feedback in suport type', ()=> {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })
    it('should check each kind of in suport type', ()=> {
        cy.get('input[type="radio"]').should('have.length', 3).each(option=> 
            cy.wrap(option).check().should('be.checked'))
    })
        
    it('should get all checkbox checked both and the uncheck the last one', ()=> {
        // cy.get('#email-checkbox').check()
        cy.get('input[type="checkbox"]').each(op =>
            cy.wrap(op).check())
            cy.get('input[type="checkbox"]').check().should('be.checked')
           // cy.get('input[type="checkbox"]').uncheck().first().check().should('be.checked')
            cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
    })
    it('should select a file on ChooseFile button using drag and drop', ()=> {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .then(inputFiles => {
            expect(inputFiles[0].files[0].name).to.equal('example.json')
        })
    })
    it('should select a file on ChooseFile button with alias', ()=> {
        cy.fixture('example.json', {encoding: null}).as('exampleFile')
        cy.get('input[type="file"]#file-upload').selectFile('@exampleFile')
        .then(inputFile => {
            expect(inputFile[0].files[0].name).to.equal('example.json')
        })
    })
    it('should select two files on ChooseFile', ()=> {
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile(['./cypress/fixtures/example.json',
                './cypress/fixtures/example.txt'])
                .should(inputFiles => {
                    expect(inputFiles[0].files[0].name).to.equal('example.json')
                    expect(inputFiles[0].files[1].name).to.equal('example.txt')
                })
    })
    it('should be open in a new Tab without click', ()=> {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
    it('should remove  atribut target and click on the link', ()=> {
        cy.get('#privacy a').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target').should('not.have.attr', 'target')
        cy.get('#privacy a').click()
        cy.contains('Talking About Testing')
    })
    it('should remove attribut target and click on the link', ()=> {
        cy.get('#privacy a').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target').should('not.have.attr', 'target')
        cy.get('#privacy a').click()
        cy.contains('Talking About Testing')
    })
})

