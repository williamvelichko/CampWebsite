import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Registration from "./Registration";

describe("Registration", () => {
  it("renders the key registration details and embedded form", () => {
    const { container } = render(<Registration />);

    expect(
      screen.getByRole("heading", { name: "Register for Bible Camp 2026" })
    ).toBeInTheDocument();
    expect(screen.getByText("August 12 – 16, 2026")).toBeInTheDocument();
    expect(screen.getByText("Registration Deadline")).toBeInTheDocument();
    expect(screen.getByText("July 1, 2026")).toBeInTheDocument();
    expect(screen.getByText("No Refunds After")).toBeInTheDocument();
    expect(screen.getByText("August 1, 2026")).toBeInTheDocument();

    const iframe = container.querySelector("iframe");
    expect(iframe).toHaveAttribute(
      "src",
      "https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register"
    );
    expect(iframe).toHaveAttribute("title", "Bible Camp 2026 Registration Form");
    expect(
      screen.getByRole("link", { name: "open registration directly" })
    ).toHaveAttribute(
      "href",
      "https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register"
    );
  });
});
