import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import FETCH_MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FETCH_MOCK_DATA);
    },
  });
});

it("Should render a Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
});

it("Should Search Res. List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");

  expect(cardAfterSearch.length).toBe(3);
});

it("Should filtered a Top Reated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard");

  expect(cardAfterFilter.length).toBe(5);
});
