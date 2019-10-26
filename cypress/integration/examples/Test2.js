/// <reference types="Cypress" />

describe('My First Test Suite', function() {

it('My first test', function() {
      

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type('ca')

cy.wait(2000)

cy.get('.products').as('productlocator')

cy.get('@productlocator').find('.product').each(($el, index, $list) => {

    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
        $el.find('button').click()
    }
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.get('Place Order').click()







// fixtures

    } )


  } )