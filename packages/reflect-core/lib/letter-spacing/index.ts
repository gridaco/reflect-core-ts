/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
 *
 * flutter: https://api.flutter.dev/flutter/painting/TextStyle/letterSpacing.html
 *
 * flutter letter spacing unit is pixel phttps://github.com/flutter/flutter/blob/18116933e7/packages/flutter/lib/src/painting/text_style.dart#L592
 *
 * figma: `type LetterSpacing = {
 *  value: number;
 *  unit: "PIXELS" | "PERCENT";
 * };
 */

/**
 * css supports various units, flutter only supports px.
 * However, the figma we currently support supports pixels and percent,
 * so only two units are used.
 *
 * In the future, what is used as DimensionLength will also be converted and integrated into the following format.
 */

enum Unit {
    pixels = "pixels",
    percent = "percent",
}

export type LetterSpacing = {
    value: number;
    unit: Unit;
};
