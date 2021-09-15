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
