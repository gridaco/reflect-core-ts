/**
 * The type of information for which to optimize the text input control.
 * On Android, behavior may vary across device and keyboard provider.
 *
 * - [flutter#TextInputType](https://api.flutter.dev/flutter/services/TextInputType-class.html)
 */
export enum TextInputType {
    /**
     * Optimize for date and time information.
     */
    datetime = "datetime",
    /**
     * Optimize for email addresses.
     */
    emailAddress = "email-address",
    /**
     * Optimize for multiline textual information.
     */
    multiline = "multiline",
    /**
     * Optimized for a person's name.
     */
    name = "name",
    /**
     * Prevent the OS from showing the on-screen virtual keyboard.
     */
    none = "none",
    /**
     * Optimize for unsigned numerical information without a decimal point.
     */
    number = "number",
    /**
     * Optimize for telephone numbers.
     */
    phone = "phone",
    /**
     * Optimized for postal mailing addresses.
     */
    streetAddress = "street-address",
    /**
     * Optimize for textual information.
     */
    text = "text",
    /**
     * Optimize for URLs.
     */
    url = "url",
    /**
     * Optimize for passwords that are visible to the user.
     */
    visiblePassword = "visible-password",
}
