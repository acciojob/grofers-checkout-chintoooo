describe('Grofers Checkout Test', () => {
  it('edits prices and calculates total 410', () => {
    cy.visit('http://localhost:3000/');

    const newPrices = [55, 75, 100, 130, 50];

    cy.get('.price').each(($el, index) => {
      cy.wrap($el)
        .invoke('attr', 'contenteditable', 'true')
        .then(() => {
          cy.wrap($el)
            .type('{selectall}{backspace}', { force: true }) // clear existing
            .type(`${newPrices[index]}`, { force: true });
        });
    });

    cy.get('button').click();
    cy.get('#ans').should('contain', '410');
  });

  it('edits prices and calculates total 333', () => {
    cy.visit('http://localhost:3000/');

    const newPrices = [20, 33, 0, 70, 210];

    cy.get('.price').each(($el, index) => {
      cy.wrap($el)
        .invoke('attr', 'contenteditable', 'true')
        .then(() => {
          cy.wrap($el)
            .type('{selectall}{backspace}', { force: true }) // clear existing
            .type(`${newPrices[index]}`, { force: true });
        });
    });

    cy.get('button').click();
    cy.get('#ans').should('contain', '333');
  });
});
