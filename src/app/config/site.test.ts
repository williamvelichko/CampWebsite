import { afterEach, describe, expect, it, vi } from "vitest";

const loadSiteConfig = async () => {
  vi.resetModules();
  return import("./site");
};

describe("site config", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("enables temporary mode and trims navigation when the env flag is true", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "true");

    const site = await loadSiteConfig();

    expect(site.isTemporaryModeEnabled).toBe(true);
    expect(site.primaryNavLinks).toEqual([
      { href: "/", label: "Home" },
      { href: "/faq", label: "FAQ" },
    ]);
    expect(site.temporaryModeMessage.title).toContain("Registration");
  });

  it("uses the full navigation when the env flag is false", async () => {
    vi.stubEnv("NEXT_PUBLIC_TEMPORARY_MODE", "false");

    const site = await loadSiteConfig();

    expect(site.isTemporaryModeEnabled).toBe(false);
    expect(site.primaryNavLinks).toEqual([
      { href: "/", label: "Home" },
      { href: "/schedule", label: "Schedule" },
      { href: "/faq", label: "FAQ" },
      { href: "/registration", label: "Register" },
    ]);
  });

  it("defaults to full navigation when the env flag is unset", async () => {
    const site = await loadSiteConfig();

    expect(site.isTemporaryModeEnabled).toBe(false);
    expect(site.primaryNavLinks).toHaveLength(4);
  });

  it("shows the registration payment link by default", async () => {
    const site = await loadSiteConfig();

    expect(site.isRegistrationPaymentLinkVisible).toBe(true);
  });

  it("hides the registration payment link when the env flag is false", async () => {
    vi.stubEnv("NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK", " false ");

    const site = await loadSiteConfig();

    expect(site.isRegistrationPaymentLinkVisible).toBe(false);
    expect(site.registrationPaymentLinkClosedMessage.title).toBe(
      "Registration is currently closed"
    );
  });

  it("uses the default Subsplash registration URL when the env value is blank", async () => {
    vi.stubEnv("NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL", "");

    const site = await loadSiteConfig();

    expect(site.registrationFormUrl).toBe(
      "https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register"
    );
  });

  it("uses the configured Subsplash registration URL when provided", async () => {
    vi.stubEnv(
      "NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL",
      "https://subsplash.com/example/register"
    );

    const site = await loadSiteConfig();

    expect(site.registrationFormUrl).toBe(
      "https://subsplash.com/example/register"
    );
  });
});
