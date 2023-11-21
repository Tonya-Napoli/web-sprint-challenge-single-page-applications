describe('Pizza Form', () => {
  it('should allow adding text to the name input box', () => {
    cy.visit('http://localhost:3000/pizza')

    const nameInput = cy.get(`#name-input`)
    nameInput.type('John Doe')

    cy.get(`#name-input`).should('have.value', 'John Doe')
  })

  it (`should allow multiple toppings`, () => {
    cy.visit(`http://localhost:3000/pizza`)

    const mushroomCheckbox = cy.get(`#mushroom`)
    mushroomCheckbox.click()

    const jalapenoCheckbox = cy.get(`#jalapeno`)
    jalapenoCheckbox.click()

    cy.get(`#mushroom`).should(`be.checked`)
    cy.get(`#jalapeno`).should(`be.checked`)
  })

it (`should allow form submission`, () => {
  cy.visit(`http://localhost:3000/pizza`)

  const nameInput = cy.get(`#name-input`)
  nameInput.type(`John Doe`)

  const mushroomCheckbox = cy.get(`#mushroom`)
  mushroomCheckbox.click()

  const jalapenoCheckbox = cy.get(`#jalapeno`)
  jalapenoCheckbox.click()

  const submitButton = cy.get(`#order-button`)
  submitButton.click()

  cy.url().should(`include`, `https://reqres.in/api/orders`)
})
})