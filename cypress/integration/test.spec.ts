describe('Branch Command Demo', () => {
  it('should nav home', () => {
    cy.nav(); // .home();
  });

  it('should create and clear alert', () => {
    cy.nav().home();

    cy.get('ion-button').contains('Alert').click();

    cy.alert().check('This is an alert').clear();
  });

  it('should carry subject through chain', () => {
    cy.get('body').nav().home().exit().as('body');

    cy.log('subject', cy.get('@body'));
  });

  it('should navigate to sub page', () => {
    cy.nav().home().menu('Outbox');
    cy.checkUrl('Outbox');
  });
});
