/// <reference types="cypress" />

describe("User Management E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the initial list of users", () => {
    cy.get("[data-cy=user-list]").children().should("have.length", 2);
    cy.get("[data-cy=user-list]").should("contain", "Alice");
    cy.get("[data-cy=user-list]").should("contain", "Bob");
  });

  it("should add a new user", () => {
    cy.get("[data-cy=name-input]").type("Charlie");
    cy.get("[data-cy=email-input]").type("charlie@example.com");
    cy.get("[data-cy=add-user-button]").click();

    cy.get("[data-cy=user-list]").children().should("have.length", 3);
    cy.get("[data-cy=user-list]").should("contain", "Charlie (charlie@example.com)");
  });
});

describe("User Details View E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display user details when clicking on 'View Details'", () => {
    // Click on 'View Details' for Alice (assumed to have id=1)
    cy.get("[data-cy=view-user-1]").click();

    // Check if details are displayed correctly
    cy.get("[data-cy=user-details]").should("contain", "Name: Alice");
    cy.get("[data-cy=user-details]").should("contain", "Email: alice@example.com");
  });
});

