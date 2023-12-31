describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.dsi-ap.com/site_dsi')
    // cy.get('a[href*="/site_dsi/vos-avantages.html"]').first().click()
    // Pour faire un test du click sur "Vos avantages"
    cy.get('a').contains('Vos avantages').click() // Yield el in .nav containing 'About'
    // cy.contains('Hello') // Yield first el in document containing 'Hello'
    // Pour effcetuer un test de l'url
    cy.url('https://www.dsi-ap.com/site_dsi/vos-avantages.html').should('contain', 'https://www.dsi-ap.com/site_dsi/vos-avantages.html') // Yields the current URL as a string
  })
})