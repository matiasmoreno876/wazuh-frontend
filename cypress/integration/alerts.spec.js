/// <reference types="cypress"/>
import React from "react";
import {Link} from "react-router-dom";

describe('<Alerts/>', () => {

    it('Verified <Alerts/> component contains title tag', () => {
        cy.visit('/alerts')

        cy.get('[data-cy=title]')
            .should('exist')
            .invoke(('text'))
            .should('equal', 'List of Alerts')
    })

    it('Verified <Alerts/> component contains an table and five columns', () => {

        cy.get('[data-cy=table]')
            .should('exist')

        cy.get('[data-cy=col-1]')
            .should('exist')
            .invoke('text')
            .should('equal', 'ID')

        cy.get('[data-cy=col-2]')
            .should('exist')
            .invoke('text')
            .should('equal', 'TYPE')

        cy.get('[data-cy=col-3]')
            .should('exist')
            .invoke('text')
            .should('equal', 'INDEX')

        cy.get('[data-cy=col-4]')
            .should('exist')
            .invoke('text')
            .should('equal', 'SCORE')

        cy.get('[data-cy=col-5]')
            .should('exist')
            .invoke('text')
            .should('equal', 'ACTIONS')

        cy.get('[data-cy=row-record]')
            .first()
            .should('exist')

        cy.get('[data-cy="link-record"]')
            .first()
            .should('exist')
            .should('have.attr', 'href')
            .should('include','/alerts/')

    })

    it('Verified <Alerts/> component contains an pagination', () => {
        cy.get('[data-cy=pagination]')
            .should('exist')
    })

    it('Verified <Alert/> component contains an link button', () => {

        cy.get('[data-cy=row-record]')
            .first()
            .should('exist')

        cy.get('[data-cy="link-record"]')
            .first()
            .should('exist')
            .should('have.attr', 'href')
            .should('include','/alerts/')

    })

    it('Verified <AlertsDetail/> component contains title tag', () => {
        cy.visit('/alerts/23Gmr3QB4YtWQbLv1inX')

        cy.get('[data-cy=title]')
            .should('exist')
            .invoke(('text'))
            .should('eq', 'Detail of the alert: 23Gmr3QB4YtWQbLv1inX')
    })

    it('Verified <AlertsDetail/> component contains title for rules, agent and manager', () => {

        cy.get('[data-cy=title-rule]')
            .should('exist')
            .invoke(('text'))
            .should('eq', 'Rule:')

        cy.get('[data-cy=title-agent]')
            .should('exist')
            .invoke(('text'))
            .should('eq', 'Agent:')

        cy.get('[data-cy=title-manager]')
            .should('exist')
            .invoke(('text'))
            .should('eq', 'Manager:')
    })

    it('Verified <AlertsDetail/> component contains an link button', () => {

        cy.get('[data-cy="link-to-list"]')
            .first()
            .should('exist')
            .should('have.attr', 'href')
            .should('eq','/alerts')

    })

})
