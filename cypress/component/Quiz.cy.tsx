import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
  it('Verify that the quiz component mounts to the DOM', () => {
    cy.mount(<Quiz/>)
  })
})