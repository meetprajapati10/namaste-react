import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenResLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render a RestaurantCard Component with PROPS data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Querying
  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

it("Should render a RestaurantCard Component with Open Restaurant data(HOC)", () => {
  const RestaurantCardOpen = withOpenResLabel(RestaurantCard);
  render(<RestaurantCardOpen resData={MOCK_DATA} />);

  // Querying
  const isOpen = screen.getByText("Open");

  expect(isOpen).toBeInTheDocument();
});
