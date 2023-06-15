import React from "react";
import { mount } from "@cypress/react18";
import Signin from "./Signin";
import { BrowserRouter as Router } from "react-router-dom";

describe("Signin", () => {
  beforeEach(() => {
    mount(
      <Router>
        <Signin />
      </Router>
    );
  });

  it("displays error message with invalid inputs", () => {
    cy.get('input[name="email"]').type("not an email");
    cy.get('input[name="password"]').type("short");
    cy.get('button[type="submit"]').click();
  });

  it("does not display error messages with valid inputs", () => {
    cy.get('input[name="email"]').type("john@example.com");
    cy.get('input[name="password"]').type("mypassword");
    cy.get('button[type="submit"]').click();
  });

  it("valid routing to next page", ()=> {
    cy.intercept({
      method: "GET",
      url: "users/*"
    })
  }) 
});
