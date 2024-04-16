import { describe, it, expect } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  it("日付文字列を日本語ロケール文字列にフォーマットする", () => {
    const input = "2022-01-01T12:00:00Z";
    const expected = new Date(input).toLocaleString("ja-JP");
    const result = formatDate(input);
    expect(result).toBe(expected);
  });
});
