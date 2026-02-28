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
});
