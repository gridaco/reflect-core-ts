import { Widget } from "../../widget";
import { Axis } from "./axis";
import { CrossAxisAlignment } from "./cross-axis-alignment";
import { IFlexManifest } from "./flex.manifest";
import { MainAxisAlignment } from "./main-axis-alignment";
import { MainAxisSize } from "./main-axis-size";
import { VerticalDirection } from "./vertical-direction";

/**
 * references:
 *
 * [flutter#flex](https://api.flutter.dev/flutter/widgets/Flex-class.html)
 */
export class Flex extends Widget implements IFlexManifest {
    children: Widget[];
    crossAxisAlignment: CrossAxisAlignment;
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    verticalDirection: VerticalDirection;

    constructor({
        direction,
        mainAxisAlignment = MainAxisAlignment.start,
        crossAxisAlignment = CrossAxisAlignment.center,
        mainAxisSize = MainAxisSize.max,
        children = [],
        verticalDirection,
    }: {
        children?: Widget[];
        crossAxisAlignment?: CrossAxisAlignment;
        direction?: Axis;
        verticalDirection: VerticalDirection;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
    }) {
        super();
        this.children = children;
        this.crossAxisAlignment = crossAxisAlignment;
        this.direction = direction;
        this.mainAxisAlignment = mainAxisAlignment;
        this.mainAxisSize = mainAxisSize;
        this.verticalDirection = verticalDirection;
    }
}
