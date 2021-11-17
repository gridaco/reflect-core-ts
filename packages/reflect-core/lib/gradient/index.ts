export * from "./gradient.manifest";

import type { LinearGradient } from "../linear-gradient";
import type { RadialGradient } from "../radial-gradient";

/**
 * Single gradient token type alias
 *
 * {@link LinearGradient} or {@link RadialGradient}
 */
export type Gradient = LinearGradient | RadialGradient;

/**
 * Gradient group to visually express gradients.
 *
 * In most cases, this will be to atomic token for gradient expression.
 */
export type GradientGroup = LinearGradientGroup | RadialGradientGroup;

export type LinearGradientGroup = LinearGradient | LinearGradient[];
export type RadialGradientGroup = RadialGradient | RadialGradient[];
