import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FAQ from "./FAQ";

describe("FAQ", () => {
  it("toggles HTML answers open and closed", () => {
    render(<FAQ />);

    expect(
      screen.queryByRole("link", { name: /2495 Kings Hill Rd/i })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "What is the camp address?" }));

    const mapLink = screen.getByRole("link", { name: /2495 Kings Hill Rd/i });
    expect(mapLink).toHaveAttribute(
      "href",
      "https://www.google.com/maps?q=2495+Kings+Hill+Rd,+Colfax,+CA+95713"
    );

    fireEvent.click(screen.getByRole("button", { name: "What is the camp address?" }));

    expect(
      screen.queryByRole("link", { name: /2495 Kings Hill Rd/i })
    ).not.toBeInTheDocument();
  });

  it("renders array answers as lists", () => {
    render(<FAQ />);

    fireEvent.click(
      screen.getByRole("button", { name: "What should I bring to camp?" })
    );

    expect(screen.getByText("Camping chair")).toBeInTheDocument();
    expect(screen.getByText("A BIBLE")).toBeInTheDocument();
    expect(
      screen.getByText(/all male campers must bring a tent/i)
    ).toBeInTheDocument();
  });
});
