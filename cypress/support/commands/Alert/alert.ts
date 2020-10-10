import { CommandSchema } from '../schema.model';
import { AlertChainable } from './alert.model';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Nav Command Branch.
       *
       * Yields Basic Commands like check(...) and clear(...)
       */
      alert(): AlertChainable;
    }
  }
}

const clear = (option: string = 'Ok') =>
  cy.get('.alert-button').contains(option).parent().should('have.class', 'ion-activatable').click();

const check = (text: string) =>
  cy.get('.alert-wrapper').should('be.visible').should('contain.text', text);

export const alert: CommandSchema = {
  name: 'alert',
  props: {
    clear,
    check,
  },
};

export { AlertChainable } from './alert.model';
