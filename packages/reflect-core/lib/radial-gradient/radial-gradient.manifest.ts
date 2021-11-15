import type { Color } from "../color";
import { Alignment } from "../alignment";
import { GradientType } from "../gradient";

/**
 * reflect's global linear gradient manifest
 * [flutter#RadialGradient](https://api.flutter.dev/flutter/painting/RadialGradient-class.html)
 * [css#radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient())
 */
export interface RadialGradientManifest {
    readonly _type: GradientType.RADIAL;
    /**
     * center of gradient
     */
    center?: Alignment;
    /**
     * The radius that determines the circular shape
     */
    radius?: number;
    /**
     * The colors the gradient should obtain at each of the stops.
     */
    colors: Array<Color>;
    /**
     * A list of values from 0.0 to 1.0 that denote fractions along the gradient.
     */
    stops?: Array<number>;
}

export class RadialGradient implements RadialGradientManifest {
    readonly _type = GradientType.RADIAL;

    readonly center: Alignment;
    readonly radius: number;
    readonly colors: Color[];
    readonly stops?: number[];

    constructor({
        center = Alignment.center,
        radius,
        colors,
        stops,
    }: {} & Omit<RadialGradientManifest, "_type">) {
        this.center = center;
        this.radius = radius;
        this.colors = colors;
        this.stops = stops;
    }
}
