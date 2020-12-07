import { Color, ColorFormat, RGB, RGBA } from "../../color";

/**
 * converts reflect color type alias to universal color format.
 * @param color 
 * @param format 
 */
export function convertReflectColorToUniversal(color: Color, format = ColorFormat.hex): string {

    /**
     * handle string typed color - which is hex color if valid.
     */
    if (typeof color == 'string') {
        if (isHexColor(color)) {
            return formatHexColor(color)
        }
    }

    /**
     * handle RGB or RGBA typed color.
     */
    if ('r' in (color as any) &&
        'g' in (color as any) &&
        'b' in (color as any)) {
        if ('a' in (color as any)) {
            switch (format) {
                case ColorFormat.hex:
                    return rgbaTo8Hex(color as RGBA, { format: true })
                case ColorFormat.hex6:
                    console.info(`while converting Color, the givven color ${color} is type of RGBA, but tring to convert it as hex6. dropping the alpha value.`)
                    return rgbTo6hex(color as RGB, { format: true })
                case ColorFormat.hex8:
                    return rgbaTo8Hex(color as RGBA, { format: true })
            }
        } else {
            switch (format) {
                case ColorFormat.hex:
                    return rgbTo6hex(color as RGB, { format: true })
                case ColorFormat.hex6:
                    return rgbTo6hex(color as RGB, { format: true })
                case ColorFormat.hex8:
                    return rgbTo8hex(color as RGB, 1, { format: true })
            }
        }
    }

    throw `the givven color ${color} is not currently supported for coversion. is it in a valid hex value or RGB/RGBA format?`
}

export function rgbTo6hex(color: RGB | RGBA, options?: {
    format: boolean
}): string {
    const hex = ((color.r * 255) | (1 << 8)).toString(16).slice(1) +
        ((color.g * 255) | (1 << 8)).toString(16).slice(1) +
        ((color.b * 255) | (1 << 8)).toString(16).slice(1);

    if (options?.format) {
        return formatHexColor(hex)
    }
    return hex;
}

export function rgbTo8hex(color: RGB, alpha: number, options?: {
    format: boolean
}): string {
    // when color is RGBA, alpha is set automatically
    // when color is RGB, alpha need to be set manually (default: 1.0)
    const hex = ((alpha * 255) | (1 << 8)).toString(16).slice(1) +
        ((color.r * 255) | (1 << 8)).toString(16).slice(1) +
        ((color.g * 255) | (1 << 8)).toString(16).slice(1) +
        ((color.b * 255) | (1 << 8)).toString(16).slice(1);

    if (options?.format) {
        return formatHexColor(hex)
    }
    return hex;
}

export function rgbaTo8Hex(color: RGBA, options?: {
    format: boolean
}): string {
    try {
        return rgbTo8hex(color, color.a, options);
    } catch (e) {
        console.warn('error while converting color to hex string, returning fallback #FFFFFF')
        return '#FFFFFF'
    }
}



function isHexColor(hex: string) {
    if (hex.includes('#')) {
        hex = hex.split('#').join()
    }
    return typeof hex === 'string'
        && (hex.length === 6 || hex.length === 4)
        && !isNaN(Number('0x' + hex))
}

/**
 * add # prefix if non present. otherwise return the original input value.
 * @param hex 
 */
function formatHexColor(hex: string) {
    if (hex.includes('#')) {
        hex = hex.split('#').join()
    }
    hex = `#${hex}`
    return hex
}