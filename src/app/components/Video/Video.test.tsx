import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { setWindowWidth } from "../../../test/testUtils";
import { Video } from "./Video";

describe("Video", () => {
  it("uses the 2026 horizontal promo video on small screens", () => {
    setWindowWidth(500);

    const { container } = render(<Video />);

    const sources = container.querySelectorAll("source");
    expect(sources).toHaveLength(1);
    expect(sources[0]).toHaveAttribute("src", "/BibleCamp2026PromoV3.mp4");
    expect(sources[0]).toHaveAttribute("type", "video/mp4");
  });

  it("uses the same 2026 horizontal promo video on larger screens", () => {
    setWindowWidth(900);

    const { container } = render(<Video />);

    const sources = container.querySelectorAll("source");
    expect(sources).toHaveLength(1);
    expect(sources[0]).toHaveAttribute("src", "/BibleCamp2026PromoV3.mp4");
    expect(sources[0]).toHaveAttribute("type", "video/mp4");
  });
});
