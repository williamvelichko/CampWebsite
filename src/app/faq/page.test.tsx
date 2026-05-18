import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadFaqPage = async () => {
  vi.resetModules();
  vi.doMock("../components/FAQ/FAQ", () => ({
    default: () => <div>FAQ Component</div>,
  }));

  return import("./page");
};

describe("FAQPage", () => {
  afterEach(() => {
    vi.doUnmock("../components/FAQ/FAQ");
  });

  it("renders the FAQ component", async () => {
    const { default: FAQPage } = await loadFaqPage();
    render(<FAQPage />);

    expect(screen.getByText("FAQ Component")).toBeInTheDocument();
  });
});
