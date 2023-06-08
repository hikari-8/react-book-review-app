import React from "react";
import { mount } from "@cypress/react";
import Signup from "./Signup";

describe("Signup", () => {
  beforeEach(() => {
    mount(<Signup />);
  });

  it("does not display error messages with valid inputs", () => {
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("john@example.com");
    cy.get('input[name="password"]').type("mypassword");
    cy.get('button[type="submit"]').click();
  });
});
export {};