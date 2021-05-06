import { BorderRadiusManifest } from "../../../ui/border-radius";

/**
 * converts reflect border radius to universal format
 * @param borderRadius
 */
export function convertBorderRadius(
    borderRadius: BorderRadiusManifest
): number | number[] {
    if (borderRadius.all !== undefined) {
        return borderRadius.all! as number;
    } else {
        return [
            borderRadius.tl! as number,
            borderRadius.tr! as number,
            borderRadius.br! as number,
            borderRadius.bl! as number,
        ];
    }
}
