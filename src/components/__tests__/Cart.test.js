import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantsMenu";
import Header from "../Header";
import { act } from "react-dom/test-utils";
import FAKE_FETCH_MENU from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../../Redux/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FAKE_FETCH_MENU);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => render(<RestaurantMenu />));

  const accordionHeader = screen.getByText("Recommended (20)");

  expect(accordionHeader).toBeInTheDocument();
});

it("Should load Restaurant Menu Component & Click on the Accordion", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );

  const accordionHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionHeader);

  const itemsList = screen.getAllByTestId("itemsList");

  expect(itemsList.length).toBe(20);
});

it("Should ADD + button Clicked & Update the Header Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordionHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionHeader);

  const itemsList = screen.getAllByTestId("itemsList");

  // expect(itemsList.length).toBe(20);

  const clickedBeforeHeader = screen.getByText("Cart - (0 items)");

  expect(clickedBeforeHeader).toBeInTheDocument();

  const addBtnsFind = screen.getAllByRole("button", { name: "ADD +" });

  fireEvent.click(addBtnsFind[0]);

  const clickedAfterHeader = screen.getByText("Cart - (1 items)");

  expect(clickedAfterHeader).toBeInTheDocument();

  // Clicked (ADD+ btn) another ItemsList

  fireEvent.click(addBtnsFind[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
});

it("Should also Update the Cart Page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordionHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionHeader);

  //   expect(screen.getAllByTestId("itemsList").length).toBe(20);

  // Also Update the Cart Page!
  const cartItems = screen.getAllByTestId("itemsList");

  expect(cartItems.length).toBe(22);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("itemsList").length).toBe(20);

  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
