import { IRadius } from "../radius";

/**
 * [css#border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
 */
export interface BorderRadiusManifest {
    all?: IRadius;
    tl?: IRadius;
    tr?: IRadius;
    bl?: IRadius;
    br?: IRadius;
}

export class BorderRadius implements BorderRadiusManifest {
    readonly all?: IRadius;
    readonly tl?: IRadius;
    readonly tr?: IRadius;
    readonly bl?: IRadius;
    readonly br?: IRadius;

    constructor({ all, tl, tr, bl, br }: BorderRadiusManifest) {
        this.all = all;
        this.tl = tl;
        this.tr = tr;
        this.bl = bl;
        this.br = br;
    }

    static zero = BorderRadius.all(0);

    static all(d: IRadius) {
        return new BorderRadius({
            tl: d,
            tr: d,
            bl: d,
            br: d,
            all: d,
        });
    }
}
