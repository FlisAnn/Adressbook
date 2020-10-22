describe('user can create a contact', () => {
    it('test if user can reach the site', () => {
        cy.visit('http://localhost:3001') //go to and find localhost
        cy.get('#add-contact').click() //find button called add-contact
    })
})