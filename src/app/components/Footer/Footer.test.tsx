import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders contact details and social links", () => {
    render(<Footer />);

    expect(screen.getByAltText("Bible Camp Logo")).toBeInTheDocument();
    expect(
      screen.getByText("Bible Camp is a ministry of Bible Baptist Church")
    ).toBeInTheDocument();
    expect(screen.getByText("2495 Kings Hill Rd, Colfax, CA 95713")).toBeInTheDocument();
    expect(screen.getByText("Phone: (916) 882-6630")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/biblebaptist.youth/"
    );
    expect(screen.getByRole("link", { name: "YouTube" })).toHaveAttribute(
      "href",
      "https://www.youtube.com/@BibleBaptistChurch_CA"
    );
    expect(screen.getByText("© 2026 Bible Camp. All rights reserved.")).toBeInTheDocument();
  });
});
