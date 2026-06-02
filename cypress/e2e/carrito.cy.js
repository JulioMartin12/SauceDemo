describe('Invertario Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })

    //10.0
    it('Agregar productos al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('#remove-sauce-labs-onesie').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '1')
    })

})



