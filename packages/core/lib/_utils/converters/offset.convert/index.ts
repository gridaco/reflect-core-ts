import type { Offset } from "../../../";

export function convertOffsetToUniversal(offset?: Offset) {
    if (offset) {
        return {
            x: offset.dx,
            y: offset.dy,
        };
    }
    return undefined;
}
