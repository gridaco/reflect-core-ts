import { EdgeInsetsManifest } from "../ui";
import { Widget } from "../widget";

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    width: number;
    height: number;

    child: Widget;

    padding: "";
    margin: EdgeInsetsManifest;

    // opacity
    // size
    // transform
}
