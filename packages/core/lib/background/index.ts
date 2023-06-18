import type { Color } from "../color";
import type { Gradient } from "../gradient";
import type { ImageManifest } from "../image";

export type TBackgroundColor = {
  type: "solid-color";
} & Color;

export type TBackgroundGradient = {
  type: "gradient";
} & Gradient;

export type TBackgroundImage = {
  type: "image";
} & ImageManifest;

/**
 * @deprecated - this will be removed
 */
export type TBackgroundGraphics = {
  type: "graphics";
};

export type BackgroundPaintLike =
  | TBackgroundColor
  | TBackgroundGradient
  | TBackgroundImage
  | TBackgroundGraphics;

export type BackgroundType = BackgroundPaintLike["type"];

export type Background = BackgroundPaintLike | BackgroundPaintLike[];
