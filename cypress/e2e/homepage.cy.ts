/// <reference types="cypress" />

/**
 * Cypress tests for the home page (/)
 */

describe('homepage', () => {
    beforeEach(() => {
        cy.intercept({
                method: 'GET',
                url: 'https://api.spacexdata.com/v4/company'
            },
            {
                fixture: 'company.json'
            });
        cy.intercept({
                method: 'GET',
                url: 'https://api.spacexdata.com/v4/crew'
            },
            {
                fixture: 'crew.json'
            });
        cy.visit('http://localhost:3000/')
    });

    it('should show nav bar and footer', () => {
        cy.get('[data-cy="nav"]').should('be.visible');
        cy.get('[data-cy="footer"]').should('be.visible');
    });

    it('should fetch company data', () => {
        cy.get('[data-cy="company-name"]').should('be.visible');
    });

    it('should show 3 crew members on initial load', () => {
        cy.get('[data-cy="crew-members"]').should('be.visible');
        cy.get('[data-cy="crew-member"]').should('be.visible');
        cy.get('[data-cy="crew-member"]').should('have.length', 3);
    });

    it('should show more crew members on load-more-button', () => {
        cy.get('[data-cy="load-more-crew"]').click();
        cy.get('[data-cy="crew-member"]').its('length').should('be.at.least', 6);
    });
});