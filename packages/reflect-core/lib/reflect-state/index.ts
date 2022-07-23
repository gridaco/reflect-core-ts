/**
 *
 * @see
 * - [flutter#MaterialState](https://api.flutter.dev/flutter/material/MaterialState.html)
 */
export enum ReflectState {
    default = "default",
    /**
     * :disabled
     */
    disabled = "disabled",

    dragged = "dragged",

    /**
     * - :invalid
     */
    error = "error",

    /**
     * - :focus
     */
    focused = "focused",

    /**
     * - :hover
     */
    hovered = "hovered",

    pressed = "pressed",

    /**
     *
     * - :checked
     */
    selected = "selected",
}

/**
 *
 * @see
 * - [flutter#MaterialStateProperty](https://api.flutter.dev/flutter/material/MaterialStateProperty-class.html)
 */
export type ReflectStateProperty<T> = {
    [K in ReflectState]?: T;
} & {
    default: T;
};
