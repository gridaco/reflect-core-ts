import type { WidgetKey } from "../widget";
import {
    ProgressIndicator,
    IProgressIndicatorProps,
} from "./progress-indicator";

/**
 * Linear progress indicator (Linear progress bar)
 *
 * @see
 * - [flutter#LinearProgressIndicator](https://api.flutter.dev/flutter/material/LinearProgressIndicator-class.html)
 */
export class LinearProgressIndicator extends ProgressIndicator {
    constructor({
        key,
        ...rest
    }: { key: WidgetKey } & IProgressIndicatorProps) {
        super({ key, ...rest });
    }
}
