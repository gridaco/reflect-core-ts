/**
 *
 * A direction in which text flows.
 * Some languages are written from the left to the right (for example, English, Tamil, or Chinese), while others are written from the right to the left (for example Aramaic, Hebrew, or Urdu). Some are also written in a mixture, for example Arabic is mostly written right-to-left, with numerals written left-to-right.
 * The text direction must be provided to APIs that render text or lay out boxes horizontally, so that they can determine which direction to start in: either right-to-left, TextDirection.rtl; or left-to-right, TextDirection.ltr.
 *
 * - [flutter#TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection.html)
 */
export enum TextDirection {
    /**
     * The text flows from left to right (e.g., English, French).
     */
    ltr = "ltr",
    /**
     * The text flows from right to left (e.g. Arabic, Hebrew).
     */
    rtl = "rtl",
}
