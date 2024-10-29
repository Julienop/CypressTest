describe("Tests de l'application Calcul", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Visite de l'URL avant chaque test
  });

  it("devrait afficher 2 input", () => {
    cy.get("#firstNumber").should("exist");
    cy.get("#secondNumber").should("exist");
  });

  it("devrait additionner 2 zéros", () => {
    cy.get("#firstNumber").type(0);
    cy.get("#secondNumber").type(0);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",0);
  })

  it("devrait additionner 1 zéro et un autre chiffre", () => {
    cy.get("#firstNumber").type(0);
    cy.get("#secondNumber").type(3);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",3);
  })

  it("devrait additionner normalement", () => {
    cy.get("#firstNumber").type(2);
    cy.get("#secondNumber").type(2);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",4);
  })

  it("devrait additionner des nombres négatifs", () => {
    cy.get("#firstNumber").type(-5);
    cy.get("#secondNumber").type(-4);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",-9);
  })

  it("devrait additionner des nombres à virgule", () => {
    cy.get("#firstNumber").type(0.68);
    cy.get("#secondNumber").type(0.47);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",1.15);
  })

  // Faille => explosion
  // it("devrait additionner des nombres à virgule complexes", () => {
  //   cy.get("#firstNumber").type(0.6868686868686648);
  //   cy.get("#secondNumber").type(0.474747475512);
  //   cy.get("#calculBtn").click();
  //   cy.get("#result").should("have.text",1.1616161623806648);
  // })

  it("devrait additionner des nombres très grand", () => {
    cy.get("#firstNumber").type(123456789);
    cy.get("#secondNumber").type(123456789);
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text",246913578);
  })

  // Faille => explosion
  // it("devrait additionner des input texte", () => {
  //   cy.get("#firstNumber").type(trois);
  //   cy.get("#secondNumber").type(six);
  //   cy.get("#calculBtn").click();
  //   cy.get("#result").should("have.text",9);
  // })


})