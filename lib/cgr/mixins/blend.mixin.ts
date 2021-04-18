export interface BlendMixin {
    opacity: number;
    isMask: boolean;

    // todo - add effect struct
    effects: ReadonlyArray<any>;
}
