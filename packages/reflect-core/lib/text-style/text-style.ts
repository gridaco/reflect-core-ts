import { LetterSpacing } from "@design-sdk/figma-types";
import { DimensionLength } from "..";
import { Color, Colors } from "../color";
import { FontStyle } from "../font-style";
import { FontWeight } from "../font-weight";
import { TextDecoration, TextDecorationStyle } from "../text-decoration";
import { ITextStyle as ITextStyle } from "./text-style.manifest";
export class TextStyle implements ITextStyle {
    fontFamily: string;
    fontWeight: FontWeight;
    fontSize: number;
    fontStyle: FontStyle;
    backgroundColor?: Color;
    color: Color;
    decoration: TextDecoration;
    decorationStyle?: TextDecorationStyle;
    decorationThickness?: number;
    letterSpacing: LetterSpacing;
    wordSpacing?: number;
    lineHeight: DimensionLength;

    constructor({
        fontFamily,
        fontWeight,
        fontSize,
        fontStyle = FontStyle.normal,
        backgroundColor = Colors.transparent,
        color,
        decoration = TextDecoration.none,
        decorationStyle,
        decorationThickness,
        letterSpacing,
        wordSpacing,
        lineHeight,
    }: ITextStyle) {
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.fontStyle = fontStyle;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.decoration = decoration;
        this.decorationStyle = decorationStyle;
        this.decorationThickness = decorationThickness;
        this.letterSpacing = letterSpacing;
        this.wordSpacing = wordSpacing;
        this.lineHeight = lineHeight;
    }
}
