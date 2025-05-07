describe("Book Management E2E Tests", () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit("http://localhost:3000");
  });

  it("should display the initial list of books", () => {
    cy.get("[data-cy=book-list]").children().should("have.length", 2);
    cy.get("[data-cy=book-list]").should("contain", "The Great Gatsby");
    cy.get("[data-cy=book-list]").should("contain", "1984");
  });

  it("should add a new book", () => {
    cy.get("[data-cy=title-input]").type("To Kill a Mockingbird");
    cy.get("[data-cy=author-input]").type("Harper Lee");
    cy.get("[data-cy=add-book-button]").click();

    cy.get("[data-cy=book-list]").children().should("have.length", 3);
    cy.get("[data-cy=book-list]").should(
      "contain",
      "To Kill a Mockingbird by Harper Lee"
    );
  });

  it("should display book details when clicking 'View Details'", () => {
    // Assume book with ID 1 exists and is "The Great Gatsby by F. Scott Fitzgerald"
    cy.get("[data-cy^=view-details-]").first().click();

    cy.get("[data-cy=book-details]").should("exist");
    cy.get("[data-cy=book-details]").should("contain", "Title:");
    cy.get("[data-cy=book-details]").should("contain", "Author:");
  });

});