import type { Color } from "../color";
import { Alignment } from "../alignment";
import { GradientType } from "../gradient";

/**
 * reflect's global radial gradient manifest
 * [flutter#RadialGradient](https://api.flutter.dev/flutter/painting/RadialGradient-class.html)
 * [css#radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient())
 */
export interface RadialGradientManifest {
    readonly _type: GradientType.RADIAL;
    /**
     * The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box.
     */
    center?: Alignment;
    /**
     * The radius of the gradient, as a fraction of the shortest side of the paint box.
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
