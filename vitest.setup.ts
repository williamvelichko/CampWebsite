import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import {
  MockImage,
  MockLink,
  mockUsePathname,
  resetMockPathname,
} from "./src/test/testUtils";

vi.mock("next/head", () => ({
  default: ({ children }: { children?: unknown }) => children ?? null,
}));

vi.mock("next/image", () => ({
  default: MockImage,
}));

vi.mock("next/link", () => ({
  default: MockLink,
}));

vi.mock("next/navigation", () => ({
  usePathname: mockUsePathname,
}));

afterEach(() => {
  cleanup();
  resetMockPathname();
});
