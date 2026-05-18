import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { setMockPathname } from "../../../../test/testUtils";

const loadMobileNavbar = async () => {
  vi.resetModules();
  return import("./MobileNavbar");
};

describe("MobileNavbar", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    document.body.style.overflow = "";
  });

  it("renders the full public navigation when open", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");
    setMockPathname("/schedule");

    const { default: MobileNavbar } = await loadMobileNavbar();
    const toggleMenu = vi.fn();
    const { container } = render(
      <MobileNavbar isMenuOpen toggleMenu={toggleMenu} />
    );

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

    fireEvent.click(container.firstChild as HTMLElement);
    fireEvent.click(screen.getByRole("button", { name: "Close navigation menu" }));
    fireEvent.click(screen.getByRole("link", { name: "Schedule" }));

    expect(toggleMenu).toHaveBeenCalledTimes(3);
  });

  it("locks page scrolling only while the mobile navigation is open", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");
    setMockPathname("/");

    const { default: MobileNavbar } = await loadMobileNavbar();
    const toggleMenu = vi.fn();
    const { rerender } = render(
      <MobileNavbar isMenuOpen={false} toggleMenu={toggleMenu} />
    );

    expect(document.body.style.overflow).toBe("");

    rerender(<MobileNavbar isMenuOpen toggleMenu={toggleMenu} />);

    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toHaveAttribute(
      "aria-hidden",
      "false"
    );

    rerender(<MobileNavbar isMenuOpen={false} toggleMenu={toggleMenu} />);

    expect(document.body.style.overflow).toBe("");
  });
});
