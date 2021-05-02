export * from "./flex";
export * from "./row";
export * from "./column";

import type { Row } from "./row";
import type { Flex } from "./flex";
import type { Column } from "./column";
import type { Stack } from "./stack";

/**
 * the type alias that can represent a layout
 *
 * Row | Column | Flex | Stack
 */
export type LayoutRepresntatives = Row | Column | Flex | Stack;
