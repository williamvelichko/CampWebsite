import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const loadRegistration = async () => {
  vi.resetModules();
  const { default: Registration } = await import("./Registration");
  return Registration;
};

describe("Registration", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("renders the key registration details and embedded form when the payment link is visible", async () => {
    vi.stubEnv("NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK", "true");

    const Registration = await loadRegistration();
    const { container } = render(<Registration />);

    expect(
      screen.getByRole("heading", { name: "Register for Bible Camp 2026" })
    ).toBeInTheDocument();
    expect(screen.getByText("August 12 – 16, 2026")).toBeInTheDocument();
    expect(screen.getByText("Registration Deadline")).toBeInTheDocument();
    expect(screen.getByText("July 1, 2026")).toBeInTheDocument();
    expect(screen.getByText("No Refunds After")).toBeInTheDocument();
    expect(screen.getByText("August 1, 2026")).toBeInTheDocument();

    const iframe = container.querySelector("iframe");
    expect(iframe).toHaveAttribute(
      "src",
      "https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register"
    );
    expect(iframe).toHaveAttribute("title", "Bible Camp 2026 Registration Form");
    expect(
      screen.getByRole("link", { name: "open registration directly" })
    ).toHaveAttribute(
      "href",
      "https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register"
    );
  });

  it("shows the closed-registration disclaimer when the payment link is hidden", async () => {
    vi.stubEnv("NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK", "false");

    const Registration = await loadRegistration();
    const { container } = render(<Registration />);

    expect(
      screen.getByRole("heading", { name: "Register for Bible Camp 2026" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Registration is currently closed" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The registration/payment link is temporarily unavailable. Please check back later for registration updates."
      )
    ).toBeInTheDocument();
    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "open registration directly" })
    ).not.toBeInTheDocument();
  });
});
