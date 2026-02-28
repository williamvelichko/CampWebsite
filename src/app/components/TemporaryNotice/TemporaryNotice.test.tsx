import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TemporaryNotice from "./TemporaryNotice";

describe("TemporaryNotice", () => {
  it("renders the provided title and description", () => {
    render(
      <TemporaryNotice
        title="Registration will open later"
        description="We are updating the next camp details."
      />
    );

    expect(
      screen.getByRole("heading", { name: "Registration will open later" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("We are updating the next camp details.")
    ).toBeInTheDocument();
    expect(screen.getByText("Temporary Update")).toBeInTheDocument();
  });
});
