import { cgrmixin } from "..";

interface GradientPaint extends cgrmixin.PaintMixin {
    readonly type:
        | "GRADIENT_LINEAR"
        | "GRADIENT_RADIAL"
        | "GRADIENT_ANGULAR"
        | "GRADIENT_DIAMOND";
    // readonly gradientTransform: Transform
    // readonly gradientStops: ReadonlyArray<ColorStop>

    // readonly blendMode?: BlendMode
}
