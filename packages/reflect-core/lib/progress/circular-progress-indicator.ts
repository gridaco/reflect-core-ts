import type { WidgetKey } from "../widget";
import {
    ProgressIndicator,
    IProgressIndicatorProps,
} from "./progress-indicator";

/**
 * Linear progress indicator (Linear progress bar)
 *
 * @see
 * - [flutter#CircularProgressIndicator](https://api.flutter.dev/flutter/material/CircularProgressIndicator-class.html)
 */
export class CircularProgressIndicator extends ProgressIndicator {
    strokeWidth?: number;

    constructor({
        key,
        strokeWidth = 4.0,
        ...rest
    }: { key: WidgetKey } & {
        strokeWidth?: number;
    } & IProgressIndicatorProps) {
        super({ key, ...rest });
        this.strokeWidth = strokeWidth;
    }
}
