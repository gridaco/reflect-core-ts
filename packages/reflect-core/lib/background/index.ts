import type { Color } from "../color";
import type { Gradient } from "../gradient";

export type BackgroundPaintLike =
    | (Color & {
          type: "solid-color";
      })
    | (Gradient & {
          type: "gradient";
      })
    | { type: "graphics" };
export type Background = BackgroundPaintLike | BackgroundPaintLike[];
