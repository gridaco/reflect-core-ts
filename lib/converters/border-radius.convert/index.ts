import { BorderRadiusManifest } from "../../ui/border-radius"

/**
 * converts reflect border radius to universal format
 * @param borderRadius 
 */
export function convertBorderRadius(borderRadius: BorderRadiusManifest): number | number[] {
    if (borderRadius.all !== undefined) {
        return borderRadius.all!
    } else {
        return [
            borderRadius.tl!,
            borderRadius.tr!,
            borderRadius.br!,
            borderRadius.bl!,
        ]
    }
}