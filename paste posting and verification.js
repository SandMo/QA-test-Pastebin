describe('My First Test', () => {
    
    it('creates "New Paste"', () => {
        cy.visit('https://pastebin.com')

        cy.get('#postform-text')
        .type('Hello, World')
        cy.get('form').submit()

        cy.get('textarea')
        .should('contain', 'Hello, World')


      })
     
})