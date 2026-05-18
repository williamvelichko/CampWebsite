import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { setMockPathname, setScrollY, setWindowWidth } from "../../../test/testUtils";

vi.mock("./components/DesktopNavbar", () => ({
  default: ({ isAtTop }: { isAtTop: boolean }) => (
    <div>{isAtTop ? "Desktop Navbar Top" : "Desktop Navbar Scrolled"}</div>
  ),
}));

vi.mock("./components/MobileNavbar", () => ({
  default: ({ isMenuOpen }: { isMenuOpen: boolean }) => (
    <div>{isMenuOpen ? "Mobile Navbar Open" : "Mobile Navbar Closed"}</div>
  ),
}));

import Header from "./Header";

describe("Header", () => {
  it("uses the desktop navigation at desktop widths on the homepage", () => {
    setMockPathname("/");
    setWindowWidth(1024);
    setScrollY(0);

    render(<Header />);

    expect(screen.getByText("Desktop Navbar Top")).toBeInTheDocument();
    expect(screen.queryByText("Mobile Navbar Closed")).not.toBeInTheDocument();
  });

  it("marks inner pages as scrolled immediately", () => {
    setMockPathname("/faq");
    setWindowWidth(1024);

    render(<Header />);

    expect(screen.getByText("Desktop Navbar Scrolled")).toBeInTheDocument();
  });

  it("uses the mobile navigation below the mobile breakpoint and toggles it", () => {
    setMockPathname("/");
    setWindowWidth(600);

    render(<Header />);

    expect(screen.getByText("Mobile Navbar Closed")).toBeInTheDocument();

    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Mobile Navbar Open")).toBeInTheDocument();
  });
});
