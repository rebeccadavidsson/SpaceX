/// <reference types="cypress" />

/**
 * Cypress tests for the /crew page
 */

describe('hcy.interomepage', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: 'https://api.spacexdata.com/v4/crew'
        },
        {
            fixture: 'crew.json'
        });
        cy.visit('http://localhost:3000/crew')
    });

    it('should show nav bar and footer', () => {
        cy.get('[data-cy="nav"]').should('be.visible');
        cy.get('[data-cy="footer"]').should('be.visible');
    });

    it('should show a selection on search lastname', () => {
        cy.get('[data-cy="search"]').should('be.visible');
        cy.get('[data-cy="search"]').type('Hopkin');
        cy.get('[data-cy="crew-member"]').should('have.length', 1);
    });

    it('should show a selection on search firstname', () => {
        cy.get('[data-cy="search"]').type('Rober');
        cy.get('[data-cy="crew-member"]').should('have.length', 1);
    });

    it('should be able to like a crew-member', () => {
        cy.get('[data-cy="search"]').type('Rober');
        cy.get('[data-cy="crew-member"]').click();
    });
});