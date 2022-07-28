# Value types

The property value of ui tokens can have a static placed value, or a symanic value, including Proxied value, Getter, and so on.

```ts
type Proxied<T> = T;
type Dynamic<T> = Proxied<T> | T;
type Rendered<T> = T;

// the core definition
export class Text {
    data: Dynamic<string>;
}

// rendered value token
export class RenderedText extends Text {
    data: Rendered<string>;
    constructor(data: string) {
        super();
        this.data = data;
    }
}

export class ProxiedText extends Text {
    data: Proxied<string>;
    constructor(data: Accessor) {
        super();
        this.data = data;
    }
}

const proxied = new ProxiedText(new Accessor("props.title"));
proxied.data; // -> props.title

const rendered = new RenderedText("hello");
rendered.data; // -> "hello"
```
