import { Widget } from "../widget";
import { Axis } from "../axis";
import { CrossAxisAlignment } from "../cross-axis-alignment";
import { Flex } from "../flex/flex";
import { MainAxisAlignment } from "../main-axis-alignment";
import { MainAxisSize } from "../main-axis-size";
import { VerticalDirection } from "../vertical-direction";

/**
 * references:
 *
 * [flutter#Column](https://api.flutter.dev/flutter/widgets/Column-class.html)
 */
export class Column extends Flex {
    readonly _type: "Column" = "Column";
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
            direction: Axis.vertical,
            mainAxisAlignment: mainAxisAlignment,
            mainAxisSize: mainAxisSize,
            crossAxisAlignment: crossAxisAlignment,
            verticalDirection: verticalDirection,
            children: children,
        });
    }
}
