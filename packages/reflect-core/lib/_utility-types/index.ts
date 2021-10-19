export interface Accessor<T> {
    key: string;
    type: T;
}
export type Proxied<T> = Accessor<T> | T;
export type Dynamic<T> = Proxied<T> | Rendered<T>;
export type Rendered<T> = T;
