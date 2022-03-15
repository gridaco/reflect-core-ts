import { LetterSpacing } from "../letter-spacing";
import { DimensionLength } from "..";
import { Color, Colors } from "../color";
import { FontStyle } from "../font-style";
import { FontWeight } from "../font-weight";
import { TextDecoration, TextDecorationStyle } from "../text-decoration";
import { TextShadow } from "../text-shadow";
import { ITextStyle as ITextStyle } from "./text-style.manifest";
import { TextTransform } from "../text-transform";
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
    textShadow: TextShadow[];
    textTransform: TextTransform;

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
        textShadow,
        textTransform = TextTransform.none,
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
        this.textShadow = textShadow;
        this.textTransform = textTransform;
    }
}
