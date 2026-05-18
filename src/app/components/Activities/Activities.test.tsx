import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Activities from "./Activities";

describe("Activities", () => {
  it("renders the intro copy and expectation cards", () => {
    render(<Activities />);

    expect(
      screen.getByRole("heading", { name: "What to Expect" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/everything we do is centered on Jesus Christ/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Preaching" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Prayer" })).toBeInTheDocument();
  });
});
