describe('Checkout', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })



    //13.0
    it('Completar checkout con datos válidos', () => {
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include', '/cart.html')
        cy.get('[data-test="cart-list"]').eq(0).should('contain', 'Sauce Labs Backpack')
        cy.get('[data-test="checkout"]').should('be.visible').should('have.text', 'Checkout').click()
        cy.url().should('include', '/checkout-step-one.html')
        cy.get('[data-test="firstName"]').should('have.attr', 'placeholder', 'First Name').type('Juan')
        cy.get('[data-test="lastName"]').should('have.attr', 'placeholder', 'Last Name').type('Pérez')
        cy.get('[data-test="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code').type('5000')
        cy.get('[data-test="continue"]').should('have.value', 'Continue').click()
        cy.get('[data-test="cancel"]').should('have.text', 'Cancel') 
        cy.get('[data-test="finish"]').should('have.text', 'Finish').click()
        cy.url().should('include', '/checkout-complete.html')
        cy.get('.complete-header').should('have.text','Thank you for your order!')
        cy.get('[data-test="back-to-products"]').should('be.visible').should('have.text', 'Back Home')
    
    })
})