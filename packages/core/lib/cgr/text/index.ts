import { Color } from "../../color";
import { TextAlign, TextAlignVertical } from "../../text-align";
import { TextDecoration } from "../../text-decoration";
import { ShadowEffect, InnerShadowEffect } from "../effects";
import { BaseConceptMixin } from "../mixins/base-concept.mixin";
import { TransformMixin } from "../mixins/transform.mixin";

/**
 * A text layer represents a discrete block or line of text
 */
export interface Text
    extends TransformMixin,
        BaseConceptMixin,
        ParagraphTokenStyle {
    isLocked: boolean;

    // isVisible on sketch, visible on figma
    visible: boolean;

    /**
     * text case modifier - how this text will be displayed as cases
     */
    textCase: TextCaseModifier;

    // ? - style region
    textAlign: TextAlign;
    textAlignVertical: TextAlignVertical;

    textStyleId?: string;
    style?: Style;

    letterSpacing: LetterSpacing;

    /**
     * sketch: attributedString
     *
     * flutter: something like TextSpan
     *
     * figma: not supported - data export not enabled, should get this data via function call on runtime
     */
    children: TextSpanAttribute[];

    /**
     * characters of this text - each style of char may differ. use attributed for scoping
     */
    characters: string;

    // TODO - not implemented
    // this snippet is from figma
    // textAutoResize: "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT";
}

interface LetterSpacing {
    readonly value: number;
    readonly unit: "PIXELS" | "PERCENT";
}

export interface TextSpanAttribute extends ParagraphTokenStyle {
    /**
     * location of this text on parent rich text
     */
    location: number;
    /**
     * length of this text
     */
    length: number;

    /**
     * text of this text span. if this lives under rich text, it will be fraction of full characters, as in location and length
     */
    characters: string;

    /**
     * not supported. ignore this
     */
    textStyleId?: string;

    /**
     * char spacing (not letter spacing)
     * not supported on figma
     */
    kerning?: number;

    /**
     * vertical alignment of this textspan. if this textspan lives under rich text, this will be empty and should not have any value.
     */
    verticalAlignment?: TextAlignVertical;

    /**
     * if non set, it means it lives under rich text and follows parent's color config
     */
    color?: Color;

    fontAttr?: FontDescriptor;
}

/**
 * Defines a font selection
 */
export declare type FontDescriptor = {
    size: number;
    family: string;
    style: string;
};

interface ParagraphTokenStyle {
    alignment?: TextAlign;

    /**
     * text case modifier - how this text will be displayed as cases
     */
    textCase?: TextCaseModifier;

    /**
     * Decoration of text such like underline
     */
    textDecoration?: TextDecoration;

    /**
     * non exists on sketch; use maximumLineHeight instead.
     */
    paragraphSpacing?: number;

    /**
     * only on figma
     */
    paragraphIndent?: number;

    /**
     * not supported on figma
     */
    maximumLineHeight?: number;

    /**
     * not supported on figma
     */
    minimumLineHeight?: number;

    /**
     * default by "Auto"
     */
    lineHeight?: LineHeight;
}

type LineHeight =
    | "Auto"
    | {
          readonly value: number;
          readonly unit: "PIXELS" | "PERCENT";
      };

export enum TextCaseModifier {
    /**
     * display text as-is
     */
    default = "default",
    upper = "upper",
    /**
     * some text with multiple space will still be displayed like this. no uppercase.
     */
    lower = "lower",
    /**
     * e.g. Some Text With Multiple Space Will Be Displayed Like This. The First Letter Will Be On Uppercase
     */
    title = "title",
}

// style
/**
 * Defines a layer style
 */
export declare type Style = {
    _class: "style";

    // borders?: Border[];

    // borderOptions: BorderOptions;

    // blur?: Blur;

    // fills?: Fill[];

    // startMarkerType: MarkerType;
    // endMarkerType: MarkerType;
    // textStyle?: TextStyle;

    shadows?: ShadowEffect[];
    innerShadows: InnerShadowEffect[];

    // contextSettings?: GraphicsContextSettings;
};
//
