import React from "react";
import { render, screen } from "@testing-library/react";

import { Button, ActiveButton, CancelButton } from "..";

describe("Button", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Button>Button Text</Button>);

    expect(asFragment(<Button>Button Text</Button>)).toMatchSnapshot();
    expect(screen.getByRole("button")).toHaveTextContent(/Button Text/i);
  });

  it("renders ActiveButton correctly", () => {
    const { asFragment } = render(<ActiveButton>Active Text</ActiveButton>);

    expect(
      asFragment(<ActiveButton>Active Text</ActiveButton>)
    ).toMatchSnapshot();
    expect(screen.getByRole("button")).toHaveTextContent(/Active Text/i);
  });

  it("renders CancelButton correctly", () => {
    const { asFragment } = render(<CancelButton>Cancel Text</CancelButton>);

    expect(
      asFragment(<CancelButton>Cancel Text</CancelButton>)
    ).toMatchSnapshot();
    expect(screen.getByRole("button")).toHaveTextContent(/Cancel Text/i);
  });
});
