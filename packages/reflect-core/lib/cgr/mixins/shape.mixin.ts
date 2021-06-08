import { BaseConceptMixin } from "./base-concept.mixin";
import { BlendMixin } from "./blend.mixin";
import { PaintableMixin } from "./paintable.mixin";

export interface DefaultShapeMixin
    extends BaseConceptMixin,
        BlendMixin,
        PaintableMixin {}
