export type ButtonVariant =
    "FlatText" |
    "FlatTextIcon" |
    "RaisedText" |
    "RaisedTextIcon" |
    "OutlinedText" |
    "OutlinedTextIcon" |
    "Icon"


export interface ButtonManifest<B, T, I> {
    base: B
    text?: T | null
    icon?: I | null
    variant: ButtonVariant
}