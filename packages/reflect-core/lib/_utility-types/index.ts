export type Dynamic<T> = Proxied<T> | Rendered<T>;
export type Rendered<T> = T;

export interface IProxied {
    readonly proxied: true;
}

export abstract class Proxied<T> implements IProxied {
    readonly proxied: true = true;
    constructor() {}
}
