export interface IconConfig {
    default_size: string | number;
    variant: "outlined" | "twotone" | "default" | "sharp" | "all";
    family?: string;
    host: "material" | "reflect" | string;
}
