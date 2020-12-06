export type ChipVariant =
    "Chip" | "ChoiceChip" | "FilterChip" | "ActionChip" | "InputChip"

export interface ChipManifest<B, C, L, T> {
    base : B,
    content : C,
    leading : L,
    trailing : T,
    variant? : ChipVariant
}