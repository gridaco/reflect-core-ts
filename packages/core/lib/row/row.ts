import { WidgetKey } from "../widget/widget";
import { Axis } from "../axis";
import { Flex } from "../flex/flex";
import { BoxShadowManifest } from "../box-shadow";
import type { Border, BorderRadiusManifest, Color, EdgeInsets } from "..";
import { Background, BackgroundPaintLike } from "../background";
import { IFlexManifest } from "../flex/flex.manifest";

/**
 * references:
 *
 * [flutter#Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
 */
export class Row extends Flex {
    readonly _type: "Row" = "Row";
    constructor(
        p: Omit<IFlexManifest, "direction"> & {
            key: WidgetKey;
            //
            boxShadow?: BoxShadowManifest[];
            margin?: EdgeInsets;
            padding?: EdgeInsets;
            background?: Background;
            borderRadius?: BorderRadiusManifest;
            border?: Border;
        }
    ) {
        super({ ...p, direction: Axis.horizontal });
    }
}
