/// <reference types="Cypress" />

describe('Moj prvi test', function() {

it('Prvi test', function() {
      

cy.visit("https://gallery-app.vivifyideas.com")
cy.get(':nth-child(2) > .nav-link').click()
cy.get('#first-name').type('Mom')
cy.get('#last-name').type('Pet')
cy.get('#email').type('momamom@mailinator.com')
cy.get('#password').type('test123')
cy.get('#password-confirmation').type('test123')


cy.get('.btn').click()
cy.get('.alert').each(($el, index, $list) => {
    if($el.text()==="The email has already been taken.")
    {
        $el.click()
    }
})







    } )


  } )