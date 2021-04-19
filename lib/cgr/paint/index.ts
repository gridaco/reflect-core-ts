import { SolidPaint } from "./solid-paint";
import { ImagePaint } from "./image-paint";
import { GradientPaint } from "./gradient-paint";

declare type Paint = SolidPaint | ImagePaint | GradientPaint;

export { Paint, SolidPaint, ImagePaint, GradientPaint };
