import { CommandSchema } from '../schema.model';
import { NavChainable } from './nav.model';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Nav Command Branch.
       *
       * Exposes Branched Commands For Use
       */
      nav(): NavChainable;
    }
  }
}

const back = () => {
  cy.get('ion-back-button').last().click();
};

const homeButton = () => {
  cy.get(`[data-cy=home-button]`).should('have.class', 'ion-activatable').click();
};

const home = () => {
  cy.safeVisit('/');
  // Wait For Loading Requests Here:
  cy.breathe();
};

const menu = (item: string) => {
  cy.get(`ion-menu-button`).should('have.class', 'ion-activatable').click();

  // Ensures Menu is visible before continuing
  cy.get(`ion-menu`).should('have.class', 'show-menu');

  // Goes to page
  cy.get(`ion-item`)
    .should('have.class', 'ion-activatable')
    .contains(item)
    .ionClick()
    .should('not.be.visible');
};

export const nav: CommandSchema = {
  name: 'nav',
  props: {
    home,
    back,
    homeButton,
    menu,
  },
};

export { NavChainable } from './nav.model';
