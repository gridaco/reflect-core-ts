import type { ButtonBaseManifest } from "../button.base/button.base.manifest";
import type { ButtonIconManifest } from "../button.icon/button.icon.manifest";
import type { ButtonTextManifest } from "../button.text/button.text.manifest";
import type { EdgeInsetsManifest } from "../";

export enum ButtonVariant {
    flatText = "FlatText",
    flatTextIcon = "FlatTextIcon",
    raisedText = "RaisedText",
    raisedTextIcon = "RaisedTextIcon",
    outlinedText = "OutlinedText",
    outlinedTextIcon = "OutlinedTextIcon",
    icon = "Icon",
    custom = "Custom",
}

/**
 * relfect's button manifest
 *
 * referenced - [Flutter#Button](https://api.flutter.dev/flutter/material/OutlineButton-class.html)
 */
export interface ButtonManifest<
    B = ButtonBaseManifest,
    T = ButtonTextManifest,
    I = ButtonIconManifest
> {
    /**
     * the base of the button. e.g. black background with grey border
     */
    base: B;
    text?: T | null;

    /**
     * optional icon for icon only button, icon with text button
     */
    icon?: I | null;
    variant: ButtonVariant;
    minWidth?: number;
    height?: number;

    /**
     * name of the button
     */
    name?: string;

    /**
     * padding for content(s)
     */
    padding?: EdgeInsetsManifest;
}
