import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadSchedulePage = async () => {
  vi.resetModules();
  vi.doMock("../components/Schedule/Schedule", () => ({
    default: () => <div>Schedule Component</div>,
  }));

  return import("./page");
};

describe("SchedulePage", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.doUnmock("../components/Schedule/Schedule");
  });

  it("shows the temporary notice when temporary mode is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");

    const { default: SchedulePage } = await loadSchedulePage();
    render(<SchedulePage />);

    expect(
      screen.getByRole("heading", { name: "Registration will open later" })
    ).toBeInTheDocument();
    expect(screen.queryByText("Schedule Component")).not.toBeInTheDocument();
  });

  it("shows the schedule component when temporary mode is disabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");

    const { default: SchedulePage } = await loadSchedulePage();
    render(<SchedulePage />);

    expect(screen.getByText("Schedule Component")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Registration will open later" })
    ).not.toBeInTheDocument();
  });
});
