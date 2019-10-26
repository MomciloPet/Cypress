class ProductPage
{

checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

}

getProductName()
{
    return cy.get(':nth-child(1) > .col-sm-8 > .media > .media-body > h4.media-heading > a')


}









}
export default ProductPage;








