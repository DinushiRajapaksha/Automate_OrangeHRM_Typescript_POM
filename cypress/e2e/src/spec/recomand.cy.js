describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5000/')
      cy.wait(1000)
      //cy.get(':nth-child(2) > .nav-link').click()
      cy.contains('Recommend').click({force: true});
      cy.get('.form-control').type('1984')
      cy.wait(1000)
      //cy.get('button').contains('Submit').click()
      cy.get('.btn').click()
    })
  })