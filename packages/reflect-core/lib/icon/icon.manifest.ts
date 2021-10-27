import { NamedIconConfig } from "./icon.config";
import type { Color } from "../color";

export type IconData = RemoteImageIconData | NamedIconData;
export type NamedIconData = { _type: "named-icon" } & NamedIconConfig;
export type RemoteImageIconData = {
    _type: "remote-uri";
    uri: RemoteUri;
};
type RemoteUri = `https://${string}` | `http://${string}` | `grida://${string}`;

export interface IconManifest<T = IconData> {
    /**
     * icon data / icon provider / named icon
     */
    icon: T;
    /**
     * size of the icon
     */
    size: number;
    /**
     * color of the icon
     */
    color: Color;
    /**
     * additional context string. (like alt on image)
     */
    semanticLabel?: string;
}
