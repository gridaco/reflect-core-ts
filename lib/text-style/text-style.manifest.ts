import { ColorManifest } from "../color";
import { TextDecorationManifest } from "../text-decoration";

export interface TextStyleManifest {
    fontFamily: string
    backgroundColor: ColorManifest
    color: ColorManifest
    decoration: TextDecorationManifest
}