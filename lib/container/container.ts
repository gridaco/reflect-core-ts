import { EdgeInsetsManifest } from "../ui";
import { EdgeInsetsGeometry } from "../ui/edge-insets-geomatry";
import { Widget } from "../widget";

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    x: number;
    y: number;
    width: number;
    height: number;

    child: Widget;

    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    fills: any[]; // todo
    borders: any[]; // todo

    visible: boolean;
    opacity: number;
    // filter?
    // transform
    // effects

    constructor() {
        super();
    }
}
