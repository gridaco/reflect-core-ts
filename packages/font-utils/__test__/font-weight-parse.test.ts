import { FontWeight } from "@reflect-ui/core";
import { inferFontWeight } from "../font-weight-parser";

const answer_map = {
    "Roboto Bold": FontWeight.w700,
    "Roboto-Bold": FontWeight.w700,
    "Roboto Mono Bold": FontWeight.w700,
    "RobotoMono Bold": FontWeight.w700,
    "Roboto-MonoBold": FontWeight.w700,
    "Roboto-Mono-Bold": FontWeight.w700,
};

test("infer font names", () => {
    Object.keys(answer_map).forEach((k) => {
        expect(inferFontWeight(k)).toBe(answer_map[k]);
    });
});
