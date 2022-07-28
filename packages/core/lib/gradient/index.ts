export * from "./gradient.manifest";

import type { LinearGradient } from "../linear-gradient";
import type { RadialGradient } from "../radial-gradient";

export type Gradient = LinearGradient | RadialGradient;
