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

    //11.0 
    it('Agregar múltiples productos y verificar contador del carrito', () => {
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"').should('be.visible').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '1')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"').should('be.visible').click()
        cy.get('#remove-sauce-labs-bike-light').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '2')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"').should('be.visible').click()
        cy.get('#remove-sauce-labs-onesie').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '3')
    })

    //12.0
    it('Eliminar un producto desde la página del carrito', () => {
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"').should('be.visible').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '1')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"').should('be.visible').click()
        cy.get('#remove-sauce-labs-bike-light').should('have.text', 'Remove')
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '2')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include', '/cart.html')
        cy.get('[data-test="cart-list"]').eq(0).should('contain', 'Sauce Labs Backpack')
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove').click()
        cy.get('.shopping_cart_badge').should('be.visible').
            and('have.text', '1')


    })

})



