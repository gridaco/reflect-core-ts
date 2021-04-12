export interface BaseConceptMixin {
    /**
     * id on figma, uuid on sketch
     */
    readonly id: string;

    /**
     *  name on sketch, name on figma
     */
    name: string;

    enabled: boolean;
}
