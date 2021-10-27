export interface NamedIconConfig {
    /**
     * the namespace / host of the icon. if custom provided, your unique domain / package id might be good host name.
     */
    host: string;
    /**
     * the name of the icon
     */
    family: string;
    /**
     * default size of the icon
     */
    default_size: number;
    /**
     * the variant of the icon
     */
    variant: MdiVariant;
}

export type NamedDefaultOssIconConfig = AntdIconConfig | MdiConfig;

export type AntdIconVariant = "outlined" | "twotone" | "default";
/**
 * 
 * e.g.
 * ```json
  "codepen-square-default": {
    "default_size": 24,
    "variant": "default",
    "family": "codepen-square",
    "host": "ant-design"
  },
 * ```
 */
export interface AntdIconConfig extends NamedIconConfig {
    host: "ant-design";
    /**
     * the name of the icon
     */
    family: string;
    /**
     * default size of the icon
     */
    default_size: number;
    /**
     * the variant of the icon
     */
    variant: MdiVariant;
}

export type MdiVariant = "outlined" | "twotone" | "default" | "sharp";
export interface MdiConfig extends NamedIconConfig {
    host: "material";
    /**
     * the name of the icon
     */
    family: string;
    /**
     * default size of the icon
     */
    default_size: number;
    /**
     * the variant of the icon
     */
    variant: MdiVariant;
}
