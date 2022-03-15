/**
 * - [flutter]: none available - via scripting
 * - [css](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
 */
export enum TextTransform {
    /**
     * Is a keyword that converts the first letter of each word to uppercase. Other characters remain unchanged (they retain their original case as written in the element's text). A letter is defined as a character that is part of Unicode's Letter or Number general categories ; thus, any punctuation marks or symbols at the beginning of a word are ignored.
     */
    capitalize = "capitalize",

    /**
     * Is a keyword that converts all characters to uppercase.
     */
    uppercase = "uppercase",

    /**
     * Is a keyword that converts all characters to lowercase.
     */
    lowercase = "lowercase",

    /**
     * Is a keyword that prevents the case of all characters from being changed.
     */
    none = "none",

    /**
     * Is a keyword that forces the writing of a character — mainly ideograms and Latin scripts — inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese).
     */
    fullwidth = "full-width",

    /**
     * Generally used for [\<ruby\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby) annotation text, the keyword converts all small Kana characters to the equivalent full-size Kana, to compensate for legibility issues at the small font sizes typically used in ruby.
     */
    fullsizekana = "full-size-kana",
}
