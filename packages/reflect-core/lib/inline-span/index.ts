import type { TextStyle } from "../text-style";

/**
 * - [`flutter#InlineSpan`](https://api.flutter.dev/flutter/painting/InlineSpan-class.html)
 */
export class InlineSpan {
    readonly style?: TextStyle;
    constructor({ style }: { style?: TextStyle }) {
        this.style = style;
    }
}
