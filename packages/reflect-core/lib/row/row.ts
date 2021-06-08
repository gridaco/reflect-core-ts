import { Widget, WidgetKey } from "../widget/widget";
import { Axis } from "../axis";
import { CrossAxisAlignment } from "../cross-axis-alignment";
import { Flex } from "../flex/flex";
import { MainAxisAlignment } from "../main-axis-alignment";
import { MainAxisSize } from "../main-axis-size";
import { VerticalDirection } from "../vertical-direction";
import { BoxShadowManifest } from "../box-shadow";
import { EdgeInsets } from "../ui";
import { BackgroundPaintLike } from "../background";

/**
 * references:
 *
 * [flutter#Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
 */
export class Row extends Flex {
    readonly _type: "Row" = "Row";
    constructor({
        key,
        mainAxisAlignment = MainAxisAlignment.start,
        mainAxisSize = MainAxisSize.max,
        crossAxisAlignment = CrossAxisAlignment.center,
        verticalDirection = VerticalDirection.down,
        children,
        //
        boxShadow,
        margin,
        padding,
        background,
    }: {
        key: WidgetKey;
        children: Widget[];
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        verticalDirection?: VerticalDirection;
        //
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
    }) {
        // MainAxisAlignment mainAxisAlignment: MainAxisAlignment.start, MainAxisSize mainAxisSize: MainAxisSize.max, CrossAxisAlignment crossAxisAlignment: CrossAxisAlignment.center, TextDirection? textDirection, VerticalDirection verticalDirection: VerticalDirection.down, TextBaseline? textBaseline, List<Widget> children: const <Widget>[]
        super({
            key: key,
            direction: Axis.horizontal,
            mainAxisAlignment: mainAxisAlignment,
            mainAxisSize: mainAxisSize,
            crossAxisAlignment: crossAxisAlignment,
            verticalDirection: verticalDirection,
            children: children,
            //
            boxShadow: boxShadow,
            margin: margin,
            padding: padding,
            background: background,
        });
    }
}
