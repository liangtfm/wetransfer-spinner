import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { UploadCard } from "..";

describe("UploadCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<UploadCard />);

    expect(asFragment(<UploadCard />)).toMatchSnapshot();
    expect(screen.getByText(/Add your files/i)).toBeInTheDocument();
    expect(screen.getByRole("button", /Transfer/i)).toBeInTheDocument();
    expect(screen.queryByText(/0%/i)).toBeNull();
  });

  it("shows spinner when transfer button is clicked", () => {
    render(<UploadCard />);
    const transferButton = screen.getByRole("button", /Transfer/i);

    fireEvent.click(transferButton);

    expect(screen.getByText(/0%/i)).toBeInTheDocument();
    expect(screen.getByText("Transferring...")).toBeInTheDocument();
    expect(screen.getByRole("button", /Cancel/i)).toBeInTheDocument();
  });

  it("shows done button when upload is complete", () => {
    render(<UploadCard progress={100} />);

    const transferButton = screen.getByRole("button", /Transfer/i);

    fireEvent.click(transferButton);

    expect(screen.getByText(/100%/i)).toBeInTheDocument();
    expect(screen.getByText(/Transfer Complete!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", /Done/i)).toBeInTheDocument();
  });
});
