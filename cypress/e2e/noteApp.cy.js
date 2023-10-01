describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "kiran",
      username: "kushal",
      password: "kafle",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("");
  });

  it("front page can be opened", () => {
    cy.contains("Notes");
  });

  it("login form can be opened", function () {
    cy.contains("login").click();
    cy.get("#username").type("kushal");
    cy.get("#password").type("kafle");
    cy.get("#login-button").click();

    cy.contains("kiran logged in");
  });

  it("login fails with wrong password", function () {
    cy.contains("login").click();
    cy.get("#username").type("kushal");
    cy.get("#password").type("basnet");
    cy.get("#login-button").click();

    cy.get(".error").should("contain", "wrong credentials");

    cy.get("html").should("not.contain", "kiran logged in");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.login({ username: "kushal", password: "kafle" });
    });

    it("a new note can be created", function () {
      cy.contains("new note").click();
      cy.get("input").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });

    describe("a new note exist", function () {
      beforeEach(function () {
        cy.createNote({
          content: "another note cypress",
          important: true,
        });
      });

      it("it can be made important", function () {
        // ...
      });
    });
  });
});
