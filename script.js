describe('Grofers Checkout Test', () => {
  it('edits prices and calculates correct total', () => {
    cy.visit('http://localhost:3000/');

    const newPrices = [55, 75, 100, 130, 50];

    cy.get('.price').each(($el, index) => {
      cy.wrap($el)
        .invoke('attr', 'contenteditable', 'true')
        .clear({ force: true }) // Clear existing content
        .type(`${newPrices[index]}`, { force: true }); // Type new value
    });

    cy.get('button').click();
    cy.get('#ans').should('contain', '410');
  });
});
