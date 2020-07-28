  describe('My First Test', () => {
    
    it('creates "New Paste"', () => {
        cy.visit('https://pastebin.com')

        cy.contains('Sign in').click()

        cy.get('#loginform-username')
        .type('SandMo')
        cy.get('#loginform-password')
        .type('pastebinpastebin{enter}')
    
        
        cy.contains('Create your first paste').click()


        cy.get('#postform-text')
        .type('Hello, World')
        cy.get('form').submit()

        cy.get('textarea')
        .should('contain', 'Hello, World')

      })
     
})

