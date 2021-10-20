/**
 * the default widget key interface. infered from design source.
 */
export interface WidgetKey {
    id: string;
    originName: string;
}

export class WidgetKey {
    id: string;
    originName: string;
    constructor({
        id = `${Math.random()}`.replace(".", ""),
        originName = "unknown",
    }: {
        id: string;
        originName: string;
    }) {
        this.id = id;
        this.originName = originName;
    }
}

type WidgetKeyLike = WidgetKey;

/**
 * Reflect core widget
 */
export class Widget {
    readonly _type: string;
    readonly key?: WidgetKeyLike;

    constructor(p?: { key: WidgetKeyLike }) {
        this.key = p?.key;
    }
}

export class RenderObjectWidget extends Widget {
    readonly key?: WidgetKeyLike;
}

export interface ISingleChildRenderObjectWidget {
    readonly child?: Widget;
}

export class SingleChildRenderObjectWidget
    extends RenderObjectWidget
    implements ISingleChildRenderObjectWidget {
    readonly key?: WidgetKeyLike;
    readonly child?: Widget;
    constructor({ key, child }: { key?: WidgetKeyLike; child?: Widget }) {
        super({ key });
        this.child = child;
    }
}

export interface IMultiChildRenderObjectWidget {
    readonly children: Array<Widget>;
}

export class MultiChildRenderObjectWidget
    extends RenderObjectWidget
    implements IMultiChildRenderObjectWidget {
    readonly key?: WidgetKeyLike;
    readonly children: Array<Widget>;
    constructor({
        key,
        children,
    }: {
        key?: WidgetKeyLike;
        children: Array<Widget>;
    }) {
        super({ key });
        this.children = children;
    }
}
