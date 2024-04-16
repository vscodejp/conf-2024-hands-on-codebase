import { expect, test, describe } from "vitest";
import { isInsideCircle } from "./practice";

describe("isInsideCircleは点が円の内部にあるかどうかを判定します", () => {
  test("点が円の内部にある場合、trueを返します", () => {
    const circleX = 0;
    const circleY = 0;
    const r = 5;
    const targetX = 3;
    const targetY = 4;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(true);
  });

  test("点が円の外部にある場合、falseを返します", () => {
    const circleX = 0;
    const circleY = 0;
    const r = 5;
    const targetX = 6;
    const targetY = 8;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(false);
  });

  test("点が円の上にある場合、trueを返します", () => {
    const circleX = 0;
    const circleY = 0;
    const r = 5;
    const targetX = 0;
    const targetY = 5;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(true);
  });

  test("円の中心が第一象限にある場合", () => {
    const circleX = 3;
    const circleY = 4;
    const r = 5;
    const targetX = 3;
    const targetY = 5;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(true);
  });

  test("円の中心が第二象限にある場合", () => {
    const circleX = -3;
    const circleY = 4;
    const r = 5;
    const targetX = -3;
    const targetY = 5;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(true);
  });

  test("円の中心が第三象限にある場合", () => {
    const circleX = -3;
    const circleY = -4;
    const r = 5;
    const targetX = -3;
    const targetY = -5;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(true);
  });

  test("円の中心が第四象限にある場合", () => {
    const circleX = 3;
    const circleY = -4;
    const r = 5;
    const targetX = 3;
    const targetY = -5;
    const result = isInsideCircle(circleX, circleY, r, targetX, targetY);
    expect(result).toBe(false);
  });
});
