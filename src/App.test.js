import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders scenery toggle button", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /view scenery/i })).toBeInTheDocument();
});
