import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { setMockPathname } from "../../../../test/testUtils";

const loadDesktopNavbar = async () => {
  vi.resetModules();
  return import("./DesktopNavbar");
};

describe("DesktopNavbar", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("renders the full public navigation when temporary mode is disabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");
    setMockPathname("/faq");

    const { default: DesktopNavbar } = await loadDesktopNavbar();
    render(<DesktopNavbar isAtTop={false} />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Schedule" })).toHaveAttribute(
      "href",
      "/schedule"
    );
    expect(screen.getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "/faq");
    expect(screen.getByRole("link", { name: "Register" })).toHaveAttribute(
      "href",
      "/registration"
    );
  });

  it("renders the trimmed navigation when temporary mode is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");
    setMockPathname("/");

    const { default: DesktopNavbar } = await loadDesktopNavbar();
    render(<DesktopNavbar isAtTop />);

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "FAQ" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Schedule" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Register" })).not.toBeInTheDocument();
  });
});
