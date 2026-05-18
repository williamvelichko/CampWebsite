import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadHomePage = async () => {
  vi.resetModules();
  vi.doMock("./components/MainSection/MainSection", () => ({
    MainSection: () => <div>Main Section</div>,
  }));
  vi.doMock("./components/About/About", () => ({
    default: () => <div>About Section</div>,
  }));
  vi.doMock("./components/Activities/Activities", () => ({
    default: () => <div>Activities Section</div>,
  }));
  vi.doMock("./components/Video/Video", () => ({
    Video: () => <div>Video Section</div>,
  }));

  return import("./page");
};

describe("Home page", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.doUnmock("./components/MainSection/MainSection");
    vi.doUnmock("./components/About/About");
    vi.doUnmock("./components/Activities/Activities");
    vi.doUnmock("./components/Video/Video");
  });

  it("renders every homepage section when temporary mode is disabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");

    const { default: HomePage } = await loadHomePage();
    render(<HomePage />);

    expect(screen.getByText("Main Section")).toBeInTheDocument();
    expect(screen.getByText("About Section")).toBeInTheDocument();
    expect(screen.getByText("Video Section")).toBeInTheDocument();
    expect(screen.getByText("Activities Section")).toBeInTheDocument();
  });

  it("hides the video section when temporary mode is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");

    const { default: HomePage } = await loadHomePage();
    render(<HomePage />);

    expect(screen.getByText("Main Section")).toBeInTheDocument();
    expect(screen.getByText("About Section")).toBeInTheDocument();
    expect(screen.queryByText("Video Section")).not.toBeInTheDocument();
    expect(screen.getByText("Activities Section")).toBeInTheDocument();
  });
});
