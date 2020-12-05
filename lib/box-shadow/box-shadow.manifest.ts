import { Color } from "../color";
import { Offset } from "../ui/offset";

/**
 * [flutter#BoxShadow](https://api.flutter.dev/flutter/painting/BoxShadow-class.html)
 * [css#BoxShadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
 * [figma#ShadowEffect](https://www.figma.com/plugin-docs/api/Effect/#shadoweffect)
 */
export interface BoxShadowManifest {
    color: Color
    blurRadius: number
    offset: Offset
    spreadRadius: number
}