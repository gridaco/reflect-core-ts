import { BaseConceptMixin } from "../../cgr/mixins/base-concept.mixin";

enum DefaultValueModificationState {
    INITIAL,
    INITIAL_N_ALLOW_AUTOCHANGE,
    INITIAL_N_NO_AUTOCHANGE,
    MODIFIED,
}

interface BaseConceptContextMixin extends BaseConceptMixin {
    nameState: DefaultValueModificationState;
}
