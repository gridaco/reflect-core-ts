/**
 *
 *
 * @see
 * - [flutter#RoundSliderThumbShape](https://api.flutter.dev/flutter/material/RoundSliderThumbShape-class.html)
 */
export class RoundSliderThumbShape {
    disabledThumbRadius: number;
    elevation: number;
    enabledThumbRadius: number;
    pressedElevation: number;

    constructor({
        disabledThumbRadius,
        elevation = 0,
        enabledThumbRadius,
        pressedElevation,
    }: {
        disabledThumbRadius?: number;
        elevation?: number;
        enabledThumbRadius: number;
        pressedElevation?: number;
    }) {
        this.disabledThumbRadius = disabledThumbRadius;
        this.elevation = elevation;
        this.enabledThumbRadius = enabledThumbRadius;
        this.pressedElevation = pressedElevation;
    }
}
