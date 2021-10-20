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
