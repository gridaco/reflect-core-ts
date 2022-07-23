/**
 * the default widget key interface. infered from design source.
 */
export class WidgetKey {
    id: string;
    name: string;
    readonly originName: string;
    constructor({
        id = `${Math.random()}`.replace(".", ""),
        originName = "unknown",
        name,
    }: {
        id: string;
        originName?: string;
        name?: string;
    }) {
        this.id = id;
        (this.originName as any) = originName;
        this.name = name ?? originName;
    }

    public static copyWith(
        k: WidgetKey,
        {
            id,
            name,
        }: {
            id?: string;
            name?: string;
        }
    ): WidgetKey {
        const copied = k.constructor({
            id: id ?? k.id,
            originName: k.originName,
            name: name ?? k.name,
            ...k,
        });

        // set dynamic properties
        const _k = { ...k };
        delete _k.id;
        delete _k.name;
        delete _k.originName;

        Object.assign(copied, {
            ...k,
        });

        return copied;
    }

    rename(name: string): this {
        this.name = name;
        return this;
    }
}

type WidgetKeyLike = WidgetKey;

/**
 * Reflect core widget
 */
export class Widget {
    readonly _type: string;
    readonly key: WidgetKeyLike;

    constructor({ key }: { key: WidgetKeyLike }) {
        this.key = key;
    }
}

export class RenderObjectWidget extends Widget {
    constructor({ key }: { key: WidgetKeyLike }) {
        super({ key });
    }
}

export interface ISingleChildRenderObjectWidget {
    readonly child?: Widget;
}

export class SingleChildRenderObjectWidget<C extends Widget = Widget>
    extends RenderObjectWidget
    implements ISingleChildRenderObjectWidget
{
    readonly child?: C;
    constructor({ key, child }: { key?: WidgetKeyLike; child?: C }) {
        super({ key });
        this.child = child;
    }
}

export interface IMultiChildRenderObjectWidget {
    readonly children: Array<Widget>;
}

export class MultiChildRenderObjectWidget
    extends RenderObjectWidget
    implements IMultiChildRenderObjectWidget
{
    readonly children: Array<Widget>;
    constructor({
        key,
        children,
    }: {
        key?: WidgetKeyLike;
        children: Array<Widget>;
    }) {
        super({ key: key });
        this.children = children;
    }
}
