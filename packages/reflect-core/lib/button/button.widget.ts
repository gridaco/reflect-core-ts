import { Widget } from "../widget";
import type { WidgetKey } from "..";
import type { ButtonStyle } from "../button.style";

export interface IButtonStyleButton {
    autofocus?: boolean;
    style: ButtonStyle;
    child: Widget;
    /**
     * Whether the button is disabled or enabled.
     * @default false
     */
    disabled?: boolean;
}

export interface IButtonStyleButtonProps {
    autofocus?: boolean;
    style?: ButtonStyle;
    child: Widget;
    disabled?: boolean;
}

export class ButtonStyleButton extends Widget implements IButtonStyleButton {
    readonly _type: "button-style-button" = "button-style-button";

    autofocus?: boolean;
    style: ButtonStyle;
    child: Widget;
    disabled?: boolean;

    constructor({
        key,
        //
        autofocus = false,
        style,
        child,
        disabled = false,
    }: {
        key: WidgetKey;
    } & IButtonStyleButtonProps) {
        super({ key });

        this.autofocus = autofocus;
        this.style = style;
        this.child = child;
        this.disabled = disabled;
    }
}
