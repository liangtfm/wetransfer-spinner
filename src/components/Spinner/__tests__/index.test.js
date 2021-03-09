import React from "react";
import { render, screen } from "@testing-library/react";

import Spinner from "..";

describe("Spinner", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment(<Spinner />)).toMatchSnapshot();
    expect(screen.getByText(/0%/i)).toBeInTheDocument();
  });
});
