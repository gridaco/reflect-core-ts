import { BorderRadiusManifest } from "../border-radius";
import { BorderSide } from "../border-side";

/**
 *
 * Rounded recteangle border
 *
 * - [Flutter#RoundedRectangleBorder](https://api.flutter.dev/flutter/painting/RoundedRectangleBorder-class.html)
 * - [Flutter#RoundedRectangleBorder#contructor](https://api.flutter.dev/flutter/painting/RoundedRectangleBorder/RoundedRectangleBorder.html)
 */
export interface RoundedRectangleBorderManifest {
    side: BorderSide;
    borderRadius: BorderRadiusManifest;
}
