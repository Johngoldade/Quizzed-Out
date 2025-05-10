describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('Make sure the button has the proper text on render', () => {
    cy.get('button').contains('Start Quiz')
  })

  it('Click on the start quiz button and make sure that the h2 an 4 buttons display', () => {
    cy.get('button').click()
    cy.get('h2').should('be.visible')
    cy.get('button').should('have.length', 4)
  })

  it('Verify the buttons have the correct number and that when one is clicked, an h2 element and 4 buttons are again displayed', () => {
    cy.get('button').click()
    cy.get('button').contains('1')
    cy.get('button').contains('2')
    cy.get('button').contains('3')
    cy.get('button').contains('4').click()
    cy.get('h2').should('be.visible')
    cy.get('button').should('have.length', 4)
  })

  it('Verify that there are ten questions and that at the end, the completed message, score, and a button to retake the quiz are visible', () => {
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('h2').should('be.visible').contains('Quiz Completed')
    cy.get('div').should('be.visible').contains('Your score:')
    cy.get('button').should('be.visible').contains('Take New Quiz')
  })

  it('Verify that when the button to start a new quiz is clicked, the quiz restarts', () => {
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('Take New Quiz').click()
    cy.get('h2').should('be.visible')
    cy.get('button').should('have.length', 4)
  })
})