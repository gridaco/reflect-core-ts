import { MultiChildRenderObjectWidget, WidgetKey } from "../widget";
import { Widget } from "../widget";
import { Clip } from "../clip";
import { VerticalDirection } from "../vertical-direction";
import { Axis } from "../axis";
import { WrapAlignment } from "../wrap-alignment";
import { WrapCrossAlignment } from "../wrap-cross-alignment";
import { IContainerInitializerProps } from "../container";

interface IWrapManifest {
    direction: Axis;
    alignment: WrapAlignment;
    spacing: number;
    runAlignment: WrapAlignment;
    runSpacing: number;
    crossAxisAlignment: WrapCrossAlignment;
    // textDirection: TextDirection
    verticalDirection: VerticalDirection;
    clipBehavior: Clip;
}

/**
 * Wrap - a flex based layout with wrapping.
 *
 * [Flutter#Wrap](https://api.flutter.dev/flutter/widgets/Wrap-class.html)
 *
 * [css#flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
 */
export class Wrap
    extends MultiChildRenderObjectWidget
    implements IWrapManifest {
    readonly _type = "Wrap";

    direction: Axis;
    alignment: WrapAlignment;
    spacing: number;
    runAlignment: WrapAlignment;
    runSpacing: number;
    crossAxisAlignment: WrapCrossAlignment;
    // textDirection: TextDirection
    verticalDirection: VerticalDirection;
    clipBehavior: Clip;
    children: Widget[];

    constructor({
        key,
        direction = Axis.horizontal,
        alignment = WrapAlignment.start,
        spacing = 0,
        runAlignment = WrapAlignment.start,
        runSpacing = 0,
        crossAxisAlignment = WrapCrossAlignment.start,
        // textDirection: TextDirection
        verticalDirection = VerticalDirection.down,
        clipBehavior = Clip.none,
        children = [],
        ...container_initializer
    }: { key: WidgetKey; children: Widget[] } & {
        direction?: Axis;
        alignment?: WrapAlignment;
        spacing?: number;
        runAlignment?: WrapAlignment;
        runSpacing?: number;
        crossAxisAlignment?: WrapCrossAlignment;
        // textDirection: TextDirection
        verticalDirection?: VerticalDirection;
        clipBehavior?: Clip;
        children?: Widget[];
    } & IContainerInitializerProps) {
        super({ key, ...container_initializer, children: children });

        this.direction = direction;
        this.alignment = alignment;
        this.spacing = spacing;
        this.runAlignment = runAlignment;
        this.runSpacing = runSpacing;
        this.crossAxisAlignment = crossAxisAlignment;
        this.verticalDirection = verticalDirection;
        this.clipBehavior = clipBehavior;
        this.children = children;
    }
}
