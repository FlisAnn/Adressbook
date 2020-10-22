describe('user can create a contact', () => {
    beforeEach('test if user can reach the site', () => {
        cy.visit('http://localhost:3001') //go to and find localhost
        cy.get('#add-contact').click() //find button called add-contact
        cy.get('#name').type('Pip')
        cy.get('#email').type('pip@pipan.se')
        cy.get('#phone').type('070 123123')
        cy.get('#company').type('Pip & Mio')
        cy.get('#notes').type('Awesome cat')
        cy.get('#twitter').type('@pipan')
        cy.get('#submit').click()
    })
    it('displays a name of the new contact', () => {
        cy.get('#contact-list').should('contain', 'Pip')
    })
    it('displays the phone number of the new contact', () => {
        cy.get('#contact-list').should('contain', '070 123123')
    })
})