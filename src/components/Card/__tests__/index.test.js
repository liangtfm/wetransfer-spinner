import React from "react";
import { render, screen } from "@testing-library/react";

import Card, { CardBody, CardFooter } from "..";

describe("Card", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Card>Card Text</Card>);

    expect(asFragment(<Card>Card Text</Card>)).toMatchSnapshot();
    expect(screen.getByText(/Card Text/i)).toBeInTheDocument();
  });

  it("renders CardBody and CardFooter correctly", () => {
    const { asFragment } = render(
      <Card>
        <CardBody>Card Body Text</CardBody>
        <CardFooter>Card Footer Text</CardFooter>
      </Card>
    );

    expect(
      asFragment(
        <Card>
          <CardBody>Card Body Text</CardBody>
          <CardFooter>Card Footer Text</CardFooter>
        </Card>
      )
    ).toMatchSnapshot();
    expect(screen.getByText(/Card Body Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Card Footer Text/i)).toBeInTheDocument();
  });
});
