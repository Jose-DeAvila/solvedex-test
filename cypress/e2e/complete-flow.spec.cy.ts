describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  });
  it('should have a title and no city should be visible', () => {
    cy.get('h1').contains('Solvedex Weather App');
    cy.get('[data-test-target="error-message"]').should('exist');
  });
  it('should input a city and get the weather', () => {
    cy.get('[data-test-target="input:city"]').type('London');
    cy.wait(1100);
    cy.get('[data-test-target="error-message"]').should('not.exist');
    cy.get('[data-test-target="weather-info-city:city-name"]').should('exist');
    cy.get('[data-test-target="button:change-unit"]').should('exist');
  });
  it('should change the unit', () => {
    cy.get('[data-test-target="input:city"]').type('London');
    cy.wait(1100);
    cy.get('[data-test-target="button:change-unit"]').click();
    cy.get('[data-test-target="button:change-unit"]').should('contain', '°F');
  });
  it('should show that city is not found', () => {
    cy.get('[data-test-target="input:city"]').type('London');
    cy.wait(1100);
    cy.get('[data-test-target="error-message"]').should('not.exist');
    cy.get('[data-test-target="weather-info-city:city-name"]').should('exist');
    cy.get('[data-test-target="button:change-unit"]').should('exist');
    cy.get('[data-test-target="input:city"]').clear().type('Londonasdasdasd');
    cy.wait(1100);
    cy.get('[data-test-target="error-message"]').should('contain', 'City not found');
  });
})