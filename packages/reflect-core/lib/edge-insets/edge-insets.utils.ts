import type { EdgeInsets } from "./edge-insets";

/**
 * - empty - no margin
 * - all - all sides have the same margin
 * - vert_horiz - top and bottom, left and right
 * - top_horiz_bottom - horizontally symmetric; top and bottom are not equal.
 * - trbl - top, right, bottom, left
 */
export enum EdgeInsetsShorthandMode {
    /**
     * none. should not specify any value
     */
    empty = "empty",
    /**
     * all value is same
     *
     * e.g.
     * - `EdgeInsets.all(10)`
     * - `margin: 10px`
     */
    all = "all",
    /**
     * vertically and horizontally symmetric.
     *
     * e.g.
     * - `EdgeInsets.symmetric({ vertical: 10, horizontal: 10 })`
     * - `margin: 10px 10px`
     */
    symetric = "symetric",
    /**
     * horizontally symmetric; top and bottom are not equal.
     *
     * e.g.
     * - `margin: 10px 20px 10px`
     */
    top_horiz_bottom = "top-horiz-bottom",
    /**
     * trbl. should specify all values
     *
     * e.g.
     * - `margin: 10px 20px 30px 40px`
     */
    trbl = "trbl",
}

export function edgeInsetsShorthandMode(
    m: EdgeInsets,
    options?: {
        explicit?: boolean;
    }
): EdgeInsetsShorthandMode {
    if (!m) {
        // no margin
        return EdgeInsetsShorthandMode.empty;
    }
    if (m.top === 0 && m.right === 0 && m.bottom === 0 && m.left === 0) {
        if (options?.explicit) {
            return EdgeInsetsShorthandMode.all;
        }
        return EdgeInsetsShorthandMode.empty;
    }
    if (m.top === m.left && m.left === m.bottom && m.bottom === m.right) {
        return EdgeInsetsShorthandMode.all;
    }
    if (m.top === m.bottom && m.left === m.right) {
        return EdgeInsetsShorthandMode.symetric;
    } else if (m.left === m.right) {
        return EdgeInsetsShorthandMode.top_horiz_bottom;
    }
    return EdgeInsetsShorthandMode.trbl;
}
