export type DimensionLength =
    | number
    | Calculation
    | `${number}%`
    | `${number}vh`
    | `${number}vw`
    /**
     * css - 100vh / 100vw
     * dart - X / double.infinity
     */
    | "match-screen-size";

export type Calculation = {
    type: "calc";
    operations: Operations | Operation;
};

export type Operations = Array<Operation>;
export type Operation = {
    type: "op";
    op: "+" | "-" | "*" | "/";
    left: DimensionLength;
    right: DimensionLength;
};

export function isPossibleDimensionLength(dl: DimensionLength | any): boolean {
    if (typeof dl === "number") return true;
    if (dl === "match-screen-size") return true;
    if (typeof dl === "string") {
        const matched =
            /\\d+(?:\\.\\d+)?%/g.test(dl) || // %
            /\\d+(?:\\.\\d+)?vh/g.test(dl) || // vh
            /\\d+(?:\\.\\d+)?vw/g.test(dl); // vw
        if (matched) return true;
    }
    // calc
    if (typeof dl === "object") {
        if (dl.type === "calc") {
            return true;
        }
    }
    return false;
}
