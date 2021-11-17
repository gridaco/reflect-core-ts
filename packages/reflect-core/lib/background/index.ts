import type { Color } from "../color";
import type { GradientGroup } from "../gradient";

export type BackgroundPaintLike =
    | (Color & {
          type: "solid-color";
      })
    | {
          type: "gradient";
          gradient: GradientGroup;
      }
    | { type: "graphics" };
export type Background = BackgroundPaintLike | BackgroundPaintLike[];
