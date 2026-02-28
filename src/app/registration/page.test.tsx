import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadRegistrationPage = async () => {
  vi.resetModules();
  vi.doMock("../components/Registration/Registration", () => ({
    default: () => <div>Registration Component</div>,
  }));

  return import("./page");
};

describe("RegisterPage", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.doUnmock("../components/Registration/Registration");
  });

  it("shows the temporary notice when temporary mode is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");

    const { default: RegisterPage } = await loadRegistrationPage();
    render(<RegisterPage />);

    expect(
      screen.getByRole("heading", { name: "Registration will open later" })
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Registration Component")
    ).not.toBeInTheDocument();
  });

  it("shows the registration component when temporary mode is disabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");

    const { default: RegisterPage } = await loadRegistrationPage();
    render(<RegisterPage />);

    expect(screen.getByText("Registration Component")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Registration will open later" })
    ).not.toBeInTheDocument();
  });
});
