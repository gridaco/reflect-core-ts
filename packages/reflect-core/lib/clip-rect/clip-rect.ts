import { Widget, WidgetKey } from "../widget";

interface ClipRectManifest {}

/**
 * @deprecated - not ready
 */
export class ClipRect extends Widget implements ClipRectManifest {
    constructor({
        key,
        ...manifest
    }: {
        key: WidgetKey;
    } & ClipRectManifest) {
        super({ key });
    }
}
