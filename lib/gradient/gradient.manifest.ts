interface GradientManifest {}

/**
 * Enumeration of the gradient type
 */
export enum GradientType {
    /**
     * [flutter:LinearGradient](https://api.flutter.dev/flutter/painting/LinearGradient-class.html)
     *
     *
     */
    LINEAR = "LI",

    /**
     * [flutter:RadialGradient](https://api.flutter.dev/flutter/painting/RadialGradient-class.html)
     */
    RADIAL = "RA",

    /**
     * [flutter:SweepGradient](https://api.flutter.dev/flutter/painting/SweepGradient-class.html) (not testified; we are not sure if Diamond represents Sweep Gradient)
     */
    ANGULAR = "AN",

    /**
     * Diamond Gradient
     * this exists on figma, reflect does not consider this as a standard way of gradient representation. this may not be supported on many platforms, we don't recommand you to use this property. this is only for representing value converted from figma design platform
     */
    DIANOND = "DI",
}
