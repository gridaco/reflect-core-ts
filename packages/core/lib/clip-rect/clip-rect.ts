import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

interface ClipRectManifest {}

/**
 * @deprecated - not ready
 */
export class ClipRect
    extends SingleChildRenderObjectWidget
    implements ClipRectManifest {
    constructor({
        key,
        ...manifest
    }: {
        key: WidgetKey;
    } & ClipRectManifest) {
        super({ key });
    }
}
