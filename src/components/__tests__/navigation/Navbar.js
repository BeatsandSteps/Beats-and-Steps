import React from "react";
import { render } from "@testing-library/react";

import Navbar from "../../navigation/Navbar";

test("temp", () => {
  expect(true).toBe(true);
});

test("Navbar exists", () => {
  const { debug } = render(<Navbar />);

  debug();
});
