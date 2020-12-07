import { BoxShadowManifest } from "../box-shadow";
import { Color } from "../color";
import { BorderRadiusManifest } from "../ui/border-radius";

/**
 * [konva#Rect](https://konvajs.org/api/Konva.Rect.html)
 */
export interface CGRectManifest {
    width: number
    height: number
    borderRadius?: BorderRadiusManifest

    // TODO  - support gradient fill

    // fills - figma
    // fill - graphics standard
    fill?: Color
    opacity?: number

    stroke?: {
        strokeColor: string
        strokeWidth: number
    }

    shadow?: BoxShadowManifest
}