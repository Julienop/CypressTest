describe("Tests de l'application Counter", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Visite de l'URL avant chaque test
  });

  it("devrait afficher un compteur initial de 0", () => {
    cy.get("#counter").should("have.text", "count is 0");
  });

  it('devrait incrémenter de 1 lors du clic', () => {
    cy.get("#counter").click();
    cy.get("#counter").should("have.text", "count is 1");
  })

  it('devrait augmenter de 2 lors de 2 clic', () => {
    cy.get("#counter").dblclick();
    cy.get("#counter").should("have.text", "count is 2");
  })

  it('devrait gérer plusieurs augmentation correctement', () => {
    cy.get("#counter").click();
    cy.get("#counter").dblclick();
    cy.get("#counter").should("have.text", "count is 3");
  })

  it('logos et liens corrects', () => {
    cy.get(".logo").should("have.length",2);
    cy.get(".logo").should("exist");
    cy.get(".logo").should("be.visible");
    cy.get(".logo").eq(0).parents('a').should("have.attr","href","https://vitejs.dev");
  })

})