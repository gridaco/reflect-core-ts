export interface IconConfig {
    default_size: string | number;
    variant: "outlined" | "twotone" | "default" | "sharp" | string;
    family?: string;
    host: "material" | "reflect" | "ant-design" | "bridged" | string;
}
