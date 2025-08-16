import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { expect, test, afterEach, describe, it } from "vitest";
import Contact from "../components/Contact";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);

describe("To check the Describe Test Cases",()=>{
test("renders the contact page heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it("renders the contact page button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("to check the place holder",()=>{
    render(<Contact />)
    const place=screen.getByPlaceholderText("name");
    expect(place).toBeInTheDocument()
})
})