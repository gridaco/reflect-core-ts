import type { Alignment } from "../alignment";
import type { BoxFit } from "../box-fit";
import type { Rect } from "../cgr";
import type { Color } from "../color";
import type { ImageRepeat } from "../image-repeat";

/**
 * A Manifest for an image (not a widget).
 * This data represents how the image related properties would apply to a widget.
 * For instance, this Manifest can be passed to a `background` / `background-image` property in css along with other image related properties.
 */
export interface ImageManifest {
  src: string;
  /**
   * A Semantic description of the image.
   * - also known as `alt`
   */
  semanticLabel?: string;

  /**
   * How to align the image within its bounds.
   * - also known as `object-position`
   */
  alignment?: Alignment;

  /**
   * Image filter
   */
  filter?: any;

  /**
   * @deprecated - this property does not meet the standard
   *
   * The center slice for a nine-patch image.
   *
   * - [flutter#Image#centerSlice](https://api.flutter.dev/flutter/widgets/Image/centerSlice.html)
   *
   * The region of the image inside the center slice will be stretched both horizontally and vertically to fit the image into its destination. The region of the image above and below the center slice will be stretched only horizontally and the region of the image to the left and right of the center slice will be stretched only vertically.
   *
   * In CSS, a similar effect can be achieved using the border-image property with border-image-slice, but it's not a direct equivalent and doesn't work with background images or <img> tags. It only works with the border of the element, and it requires you to have a transparent center in the original image if you want to see the background or other content inside the border.
   *
   * Here's an example of how you might use it:
   * ```css
   * div {
   *     border: 10px solid transparent;
   *     border-image: url('your-image.png') 30 30 30 30 stretch;
   *     border-image-slice: 30 30 30 30 fill;
   * }
   * ```
   *
   * In the example above, '30 30 30 30' is the equivalent to the Rect you would pass to centerSlice in Flutter. It represents the top, right, bottom, and left insets of the slice, respectively.
   *
   * However, it's important to note that CSS and Flutter have different capabilities in this regard. While centerSlice in Flutter allows you to stretch a section of an image across the entire space of the widget, CSS's border-image is used specifically to create complex border styles and isn't designed to fill the entire content area of an element with an image slice.
   *
   * TODO: the Rect type does not follow the standard
   */
  centerSlice?: Rect;

  /**
   * How to inscribe the image into the space allocated during layout.
   * > in css, this is handled by object-fit
   */
  fit?: BoxFit;

  repeat?: ImageRepeat;
}

export interface ImageWidgetManifest extends ImageManifest {
  readonly width: number;
  readonly height: number;
}
