/// <reference types="cypress" />
/**
 * Alert Command Branch Interface
 *
 * Yields Basic Alert Commands
 */
export declare interface AlertChainable {
  /**
   * Clears Alert
   *
   * @param option defaults to 'Ok'
   */
  clear(option?: string): AlertChainable;
  /**
   * Checks Alert text
   */
  check(text: string): AlertChainable;
  /**
   * Exits Branched Command Chain
   *
   */
  exit?(): Cypress.Chainable;
}
