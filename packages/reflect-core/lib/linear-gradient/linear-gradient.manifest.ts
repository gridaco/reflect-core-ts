import type { Color } from "../color";
import { Alignment } from "../alignment";

/**
 * reflect's global linear gradient manifest
 * [flutter#LinearGradient](https://api.flutter.dev/flutter/painting/LinearGradient-class.html)
 * [css#linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient())
 */
export interface LinearGradientManifest {
    /**
     * The offset at which stop 0.0 of the gradient is placed.
     */
    begin: Alignment;
    /**
     * The offset at which stop 1.0 of the gradient is placed.
     */
    end: Alignment;
    /**
     * The colors the gradient should obtain at each of the stops.
     */
    colors: Array<Color>;
    /**
     * A list of values from 0.0 to 1.0 that denote fractions along the gradient.
     */
    stops?: Array<number>;
}

export class LinearGradient implements LinearGradientManifest {
    readonly _type = "LinearGradient";

    readonly begin: Alignment;
    readonly end: Alignment;
    readonly colors: Color[];
    readonly stops?: number[];

    constructor({
        begin = Alignment.centerLeft,
        end = Alignment.centerRight,
        colors,
        stops,
    }: {} & LinearGradientManifest) {
        this.begin = begin;
        this.end = end;
        this.colors = colors;
        this.stops = stops;
    }
}
