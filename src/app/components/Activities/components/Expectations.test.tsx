import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import expectData from "../data/expectData.json";
import Expectations from "./Expectations";

describe("Expectations", () => {
  it("renders an activity card for each JSON entry", () => {
    render(<Expectations />);

    for (const item of expectData) {
      expect(
        screen.getByRole("heading", { name: item.activity })
      ).toBeInTheDocument();
      expect(screen.getByAltText(item.activity)).toHaveAttribute("src", item.image);
      expect(screen.getByText(item.description)).toBeInTheDocument();
    }
  });

  it("uses WebP source files for each activity card", () => {
    for (const item of expectData) {
      expect(item.image).toMatch(/\.webp$/);
      expect(item.imageWebp).toBe(item.image);
    }
  });
});
