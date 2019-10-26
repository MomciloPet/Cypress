/// <reference types="Cypress" />

describe('AptusNow', function() {

    beforeEach(() => {
        cy.visit("https://aptus-now.vivifyideas.com/")
      })

it('check shippers page', function() {
//aptus for shippers page
cy.get('.c-header__menu-mobile > .c-btn').click()
cy.get('#menu-item-26').click()
cy.url().should('include', '/shippers/') 
cy.get('.c-header__logo-img').click()
})
it('check carriers page', function() {
//pricing for carriers page
cy.get('.c-header__menu-mobile > .c-btn').click()
cy.get('#menu-item-32').click()
cy.url().should('include', '/pricing-for-carriers/') 
cy.get('.c-header__logo-img').click()
})
it('check carrier login page', function() {
//cariier log in page
cy.get('.c-header__menu-mobile > .c-btn').click()
cy.get('#menu-item-31').click()
cy.url().should('include', '/carrier-log-in/') 
cy.get('.c-header__logo-img').click()
})


it.only('Match up with a carrier', function() {

  cy.get('.c-radio-options__label').contains('Parcel').click()
  cy.get('.c-radio-options__label').contains('LTL').click()
  cy.get('.c-radio-options__label').contains('Truckload').click()

  cy.get('.l-grid-col-4-and-half > .c-box > .c-box__footer > .c-btn').click()
  
  
  // cy.get('.c-radio-options').find('.c-radio-options__label').each(($el, index, $list) => {

  //   const textVeg=$el.find('#match').text()
  //   if(textVeg.includes('Parcel'))
  //   {
  //       $el.find('#match').click()
  //   }
// })






})






  } )