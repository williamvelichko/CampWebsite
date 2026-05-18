import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("./components/Header/Header", () => ({
  default: () => <div>Header Component</div>,
}));

vi.mock("./components/Footer/Footer", () => ({
  default: () => <div>Footer Component</div>,
}));

import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("wraps route content with the shared header and footer", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div>Page Content</div>
      </RootLayout>
    );

    expect(markup).toContain("Header Component");
    expect(markup).toContain("Page Content");
    expect(markup).toContain("Footer Component");
  });

  it("defines the site metadata", () => {
    expect(metadata.title).toBe("Bible Camp 2026");
    expect(metadata.description).toBe("The Gospel of God Bible Camp 2026");
  });
});
