import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { site } from "@/lib/site";
import { Bidang } from "@/components/bidang";

describe("site config", () => {
  it("defines exactly four focus areas", () => {
    expect(site.bidang).toHaveLength(4);
    expect(site.bidang.map((b) => b.id)).toEqual([
      "web",
      "jaringan",
      "iot",
      "server",
    ]);
  });

  it("references local asset paths", () => {
    for (const item of site.galeri) {
      expect(item.file).toMatch(/^\/assets\/gallery\//);
    }
    for (const logo of Object.values(site.logos)) {
      expect(logo).toMatch(/^\/assets\/logos\//);
    }
  });
});

describe("Bidang section", () => {
  it("renders one card per focus area", () => {
    render(<Bidang />);
    for (const b of site.bidang) {
      expect(screen.getByText(b.title)).toBeInTheDocument();
    }
  });
});
