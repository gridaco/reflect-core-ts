export enum ButtonVariant {
    flatText = "FlatText",
    flatTextIcon = "FlatTextIcon",
    raisedText = "RaisedText",
    raisedTextIcon = "RaisedTextIcon",
    outlinedText = "OutlinedText",
    outlinedTextIcon = "OutlinedTextIcon",
    icon = "Icon",
    custom = "Custom"
}


/**
 * relfect's button manifest
 */
export interface ButtonManifest<B, T, I> {
    base: B
    text?: T | null
    icon?: I | null
    variant: ButtonVariant
}