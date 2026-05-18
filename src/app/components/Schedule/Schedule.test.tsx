import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Schedule from "./Schedule";

describe("Schedule", () => {
  it("renders the editorial schedule header, sections, and representative items", () => {
    render(<Schedule />);

    expect(screen.getByRole("heading", { name: "Camp Schedule" })).toBeInTheDocument();
    expect(screen.getByText("August 12 – 16, 2026")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A week filled with the Word, worship, fellowship, and the glory of God."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Arrival Day — August 12" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Full Days — August 13 – 15" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Departure Day — August 16" })
    ).toBeInTheDocument();

    expect(screen.getByText("Drive In / Check In")).toBeInTheDocument();
    expect(screen.getAllByText("Morning Devotional")).toHaveLength(2);
    expect(screen.getByText("Final Church Service")).toBeInTheDocument();
    expect(screen.getByText("Departure")).toBeInTheDocument();
  });

  it("marks service, devotional, and church events as highlighted timeline rows", () => {
    const { container } = render(<Schedule />);

    expect(container.querySelectorAll('[data-highlighted="true"]')).toHaveLength(6);
    expect(screen.getByText("Welcome Service").closest("li")).toHaveAttribute(
      "data-highlighted",
      "true"
    );
    expect(screen.getAllByText("Dinner")[0].closest("li")).not.toHaveAttribute(
      "data-highlighted"
    );
  });
});
