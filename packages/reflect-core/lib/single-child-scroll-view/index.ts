import type { Axis, Widget, WidgetKey } from "..";
import { Flex } from "../flex/flex";
import { IFlexManifest } from "../flex/flex.manifest";

export class SingleChildScrollView extends Flex {
    readonly child?: Widget;
    constructor(
        p: Omit<IFlexManifest, "children" | "direction"> & {
            key: WidgetKey;

            /** ============================================================================
             * singlechild scroll view related
             */
            child: Widget;
            scrollDirection: Axis;
            // ============================================================================
        }
    ) {
        super({
            ...p,
            // region omitted fields
            direction: p.scrollDirection,
            children: [p.child],
            // endregion omitted fields
        });

        this.child = p.child;
    }
}
