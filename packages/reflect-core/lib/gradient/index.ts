export * from "./gradient.manifest";

import type { LinearGradient } from "../linear-gradient";
import { RadialGradient } from "../radial-gradient";

export type Gradient = LinearGradient | RadialGradient;
