import { Widget } from "../../widget/widget";
import { Axis } from "../flex/axis";
import { CrossAxisAlignment } from "../flex/cross-axis-alignment";
import { Flex } from "../flex/flex";
import { MainAxisAlignment } from "../flex/main-axis-alignment";
import { MainAxisSize } from "../flex/main-axis-size";
import { VerticalDirection } from "../flex/vertical-direction";

/**
 * references:
 *
 * [flutter#Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
 */
export class Row extends Flex {
    constructor({
        mainAxisAlignment = MainAxisAlignment.start,
        mainAxisSize = MainAxisSize.max,
        crossAxisAlignment = CrossAxisAlignment.center,
        verticalDirection = VerticalDirection.down,
        children,
    }: {
        children: Widget[];
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        verticalDirection?: VerticalDirection;
    }) {
        // MainAxisAlignment mainAxisAlignment: MainAxisAlignment.start, MainAxisSize mainAxisSize: MainAxisSize.max, CrossAxisAlignment crossAxisAlignment: CrossAxisAlignment.center, TextDirection? textDirection, VerticalDirection verticalDirection: VerticalDirection.down, TextBaseline? textBaseline, List<Widget> children: const <Widget>[]
        super({
            direction: Axis.horizontal,
            mainAxisAlignment: mainAxisAlignment,
            mainAxisSize: mainAxisSize,
            crossAxisAlignment: crossAxisAlignment,
            verticalDirection: verticalDirection,
            children: children,
        });
    }
}
