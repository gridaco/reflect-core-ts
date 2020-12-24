import { Color, ColorFormat, RGB, RGBA } from "../../color";

/**
 * converts reflect color type alias to universal color format.
 * @param color 
 * @param format 
 */
export function convertReflectColorToUniversal(color?: Color, format = ColorFormat.hex): string | undefined {
    if (color === undefined || color === null) {
        return undefined
    }

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


/**
 * fetch opacity / alpha value from color, returns 0 if not present.
 * @param color 
 */
export function fetchColrOpacity(color?: Color) {
    if (color) {
        return colorToRGBA(color).a
    } else {
        return 1
    }
}

export function colorToRGBA(color: Color, format: ColorFormat = ColorFormat.rgba): RGBA {
    // TODO add other type alias converting.
    // console.log('converting color to rgba', color)

    if (typeof color == 'string') {
        return hexToRGBA(color, format)
    }

    return (color as RGBA)
}


function hexToRGBA(hex: string, format: ColorFormat = ColorFormat.rgba): RGBA {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    let a = 1

    try {
        a = parseInt(hex.slice(7, 9), 16);
    } catch (_) { }

    switch (format) {
        case ColorFormat.rgba:
            return {
                r: r,
                g: g,
                b: b,
                a: a
            }
        case ColorFormat.rgbaF:
            return {
                r: r / 255.0,
                g: g / 255.0,
                b: b / 255.0,
                a: a
            }
        default:
            throw `format ${format} is not supported when converting hex to rgba`
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