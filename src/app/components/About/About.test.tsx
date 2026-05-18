import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About";

describe("About", () => {
  it("renders the camp theme verse", () => {
    render(<About />);

    expect(screen.getByText("Romans 1:16")).toBeInTheDocument();
    expect(
      screen.getByText(/for I am not ashamed of the gospel/i)
    ).toBeInTheDocument();
  });
});
