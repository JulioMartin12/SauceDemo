describe('Login Sauce Demo', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  //1.0
  it('Login exitoso', () => {
   // cy.log('test 1')
   cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.url().should('include', '/inventory.html')
   cy.get('.app_logo').should('have.text', 'Swag Labs')
  })

    //2.0
  it('Login con contraseña incorrecta', () => {
   // cy.log('test 2')
     cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret')
   cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
    .and('contain','Epic sadface: Username and password do not match any user in this service')
  })

    //3.0
  it('Login con campos vacíos', () => {
   // cy.log('test 2')
    
   cy.get('[data-test="login-button"]').click()
   
   cy.get('[data-test="error"]').should('be.visible')
   .and('contain','Epic sadface: Username is required')
  })

  //4.0
  it('Login con usuario bloqueado', ()=> {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Epic sadface: Sorry, this user has been locked out.') 
  })

  //5.0
  it('Logout desde el menú hamburgesas', () => { 
     cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').should('be.visible').click()
   cy.get('[data-test=logout-sidebar-link]').should('be.visible').click()
   cy.url().should('include', 'https://www.saucedemo.com/')
   cy.get('[data-test="login-button"]').should('be.visible')
  })
})