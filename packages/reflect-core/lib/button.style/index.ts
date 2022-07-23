import type { Alignment } from "../alignment";
import type { BorderSide } from "../border-side";
import type { Color } from "../color";
import type { EdgeInsets } from "../edge-insets";
import type { MouseCursor } from "../mouse-cursor";
import type { OutlinedBorder } from "../outline-border";
import type { ReflectStateProperty } from "../reflect-state";
import type { Size } from "../size";
import type { TextStyle } from "../text-style";

export interface ButtonStyle {
    textStyle?: ReflectStateProperty<TextStyle>;
    backgroundColor?: ReflectStateProperty<Color>;
    foregroundColor?: ReflectStateProperty<Color>;
    overlayColor?: ReflectStateProperty<Color>;
    shadowColor?: ReflectStateProperty<Color>;
    elevation?: ReflectStateProperty<number>;
    padding?: ReflectStateProperty<EdgeInsets>;
    minimumSize?: ReflectStateProperty<Size>;
    fixedSize?: ReflectStateProperty<Size>;
    maximumSize?: ReflectStateProperty<Size>;
    side?: ReflectStateProperty<BorderSide>;
    shape?: ReflectStateProperty<OutlinedBorder>;
    mouseCursor?: ReflectStateProperty<MouseCursor>;
    // animationDuration?: Duration;

    /**
     * Whether detected gestures should provide acoustic and/or haptic feedback.
     * @default false
     */
    enableFeedback?: boolean;

    alignment?: Alignment;
}
