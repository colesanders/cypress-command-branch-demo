import { CommandSchema } from './schema.model';

const registerCommandName = (schema: CommandSchema) =>
  Cypress.Commands.add(schema.name, { prevSubject: 'optional' }, (Subject) => {
    return cy.wrap(Subject, { log: false });
  });

const registerProps = (props: {}, fn: string) =>
  Cypress.Commands.add(fn, { prevSubject: 'optional' }, (...args) => {
    props[fn](...args.slice(1));
    return cy.wrap(args[0], { log: false });
  });

export const register = (schema: CommandSchema) => {
  registerCommandName(schema);

  Object.keys(schema.props).forEach((fn) => registerProps(schema.props, fn));
};
