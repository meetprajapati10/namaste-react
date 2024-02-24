import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const logInButton = screen.getByRole("button");

  expect(logInButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart Item - 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart Item Flexible(like 0, 1, 2, ...)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});

it("Should Login Logout Toggle Button Clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn);

  const afterClickingLoginBtn = screen.getByText("Logout");

  expect(afterClickingLoginBtn).toBeInTheDocument();

  fireEvent.click(afterClickingLoginBtn);

  const afterClickingLogoutBtn = screen.getByText("Login");

  expect(afterClickingLogoutBtn).toBeInTheDocument();
});
