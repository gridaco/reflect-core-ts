import { WidgetKey } from "../widget";
import { Axis } from "../axis";
import { Flex } from "../flex/flex";
import { BoxShadowManifest } from "../box-shadow";
import { EdgeInsets } from "../edge-insets";
import { BackgroundPaintLike } from "../background";
import { IFlexManifest } from "../flex/flex.manifest";
import { Color } from "../color";

/**
 * references:
 *
 * [flutter#Column](https://api.flutter.dev/flutter/widgets/Column-class.html)
 */
export class Column extends Flex {
    readonly _type: "Column" = "Column";
    constructor(
        p: Omit<IFlexManifest, "direction"> & {
            key: WidgetKey;
            //
            boxShadow?: BoxShadowManifest;
            margin?: EdgeInsets;
            padding?: EdgeInsets;
            background?: BackgroundPaintLike[];
            color?: Color;
        }
    ) {
        super({ ...p, direction: Axis.vertical });
    }
}
