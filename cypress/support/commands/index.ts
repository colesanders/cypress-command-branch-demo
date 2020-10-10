import { register } from './command-register';

import { nav } from './Navigation/nav';
import { alert } from './Alert/alert';

const CommandBranches = [nav, alert];

CommandBranches.forEach((schema) => register(schema));

Cypress.Commands.add('exit', { prevSubject: 'optional' }, (Subject) =>
  cy.wrap(Subject, { log: false })
);
