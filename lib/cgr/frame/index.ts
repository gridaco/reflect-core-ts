import { BaseConceptMixin } from "../mixins/base-concept.mixin";
import { TransformMixin } from "../mixins/transform.mixin";

export interface Frame extends BaseConceptMixin, TransformMixin {
    children?: any[];
}

// Artboard from sketch file format v3
/**
 export type Artboard = {
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    horizontalRulerData: RulerData;
    verticalRulerData: RulerData;
    layout?: LayoutGrid;
    grid?: SimpleGrid;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    includeInCloudUpload: boolean;
    _class: "artboard";
    backgroundColor: Color;
    hasBackgroundColor: boolean;
    includeBackgroundColorInExport: boolean;
    isFlowHome: boolean;
    resizesContent: boolean;
    presetDictionary?: any;
    layers: (
        | Group
        | Oval
        | Polygon
        | Rectangle
        | ShapePath
        | Star
        | Triangle
        | ShapeGroup
        | Text
        | SymbolInstance
        | Slice
        | Hotspot
        | Bitmap
    )[];
};
 */

// Frame from figma plugin typings
/**
  interface BaseFrameMixin extends
    BaseNodeMixin, SceneNodeMixin, ChildrenMixin,
    ContainerMixin, GeometryMixin, CornerMixin,
    RectangleCornerMixin, BlendMixin, ConstraintMixin,
    LayoutMixin, ExportMixin {

    layoutMode: "NONE" | "HORIZONTAL" | "VERTICAL"
    primaryAxisSizingMode: "FIXED" | "AUTO" // applicable only if layoutMode != "NONE"
    counterAxisSizingMode: "FIXED" | "AUTO" // applicable only if layoutMode != "NONE"

    primaryAxisAlignItems: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN" // applicable only if layoutMode != "NONE"
    counterAxisAlignItems: "MIN" | "MAX" | "CENTER" // applicable only if layoutMode != "NONE"


    paddingLeft: number // applicable only if layoutMode != "NONE"
    paddingRight: number // applicable only if layoutMode != "NONE"
    paddingTop: number // applicable only if layoutMode != "NONE"
    paddingBottom: number // applicable only if layoutMode != "NONE"
    itemSpacing: number // applicable only if layoutMode != "NONE"

    horizontalPadding: number // DEPRECATED: use the individual paddings
    verticalPadding: number // DEPRECATED: use the individual paddings

    layoutGrids: ReadonlyArray<LayoutGrid>
    gridStyleId: string
    clipsContent: boolean
    guides: ReadonlyArray<Guide>
  }
 */
