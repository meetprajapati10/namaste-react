import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All the test cases!");
  // });

  // beforeEach(() => {
  //   console.log("Before EACH of the test cases!");
  // });

  // afterAll(() => {
  //   console.log("After All the test cases!");
  // });

  // afterEach(() => {
  //   console.log("After EACH of the test cases!");
  // });

  test("Should load Contact Us Component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact Component", () => {
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 Input inside Contact Component", () => {
    render(<Contact />);

    // Querying
    //  const inputName = screen.getByPlaceholderText("name");
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes);

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
