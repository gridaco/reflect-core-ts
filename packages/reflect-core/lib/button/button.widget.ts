import { ButtonManifest } from ".";
import { Widget, WidgetKey } from "..";
import { ButtonBaseManifest } from "../button.base";
import { ButtonIconManifest } from "../button.icon";
import { ButtonTextManifest } from "../button.text";
import { ButtonVariant } from "./button.manifest";

export class ButtonWidget extends Widget implements ButtonManifest {
    constructor({
        key,
        //
        base,
        text,
        icon,
        variant,
        minWidth,
        name,
    }: { key: WidgetKey } & ButtonManifest) {
        super({ key });

        this.base = base;
        this.text = text;
        this.icon = icon;
        this.variant = variant;
        this.minWidth = minWidth;
        this.name = name;
    }

    base: ButtonBaseManifest;
    text?: ButtonTextManifest;
    icon?: ButtonIconManifest;
    variant: ButtonVariant;
    minWidth?: number;
    name?: string;
}
