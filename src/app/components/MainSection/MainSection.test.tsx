import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadMainSection = async () => {
  vi.resetModules();
  return import("./MainSection");
};

describe("MainSection", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("shows the register link and banner hero when temporary mode is disabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");

    const { MainSection } = await loadMainSection();
    render(<MainSection />);

    expect(
      screen.getByRole("heading", { name: "The Gospel of God", level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText("Bible Camp 2026 · August 12 – 16")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Register Now" })).toHaveAttribute(
      "href",
      "/registration"
    );
    expect(screen.getByRole("link", { name: "View Schedule" })).toHaveAttribute(
      "href",
      "/schedule"
    );
    expect(screen.getByAltText("Bible camp banner artwork")).toHaveAttribute(
      "src",
      "/Auburn-Camp-Banner.jpg"
    );
  });

  it("shows the temporary badge with the banner hero when temporary mode is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");

    const { MainSection } = await loadMainSection();
    render(<MainSection />);

    expect(
      screen.getByRole("heading", { name: "The Gospel of God", level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText("Registration opens later")).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Register Now" })
    ).not.toBeInTheDocument();
    expect(screen.getByAltText("Bible camp banner artwork")).toHaveAttribute(
      "src",
      "/Auburn-Camp-Banner.jpg"
    );
  });
});
