export interface Alignment {
    /**
     * The distance fraction in the horizontal direction.
     *
     * A value of -1.0 corresponds to the leftmost edge. A value of 1.0 corresponds to the rightmost edge. Values are not limited to that range; values less than -1.0 represent positions to the left of the left edge, and values greater than 1.0 represent positions to the right of the right edge.
     */
    readonly x: number;

    /**
     * The distance fraction in the vertical direction.
     *
     * A value of -1.0 corresponds to the topmost edge. A value of 1.0 corresponds to the bottommost edge. Values are not limited to that range; values less than -1.0 represent positions above the top, and values greater than 1.0 represent positions below the bottom.
     */
    readonly y: number;
}

/**
 * A point within a rectangle.
 * - Alignment(0.0, 0.0) represents the center of the rectangle. The distance from -1.0 to +1.0 is the distance from one side of the rectangle to the other side of the rectangle. Therefore, 2.0 units horizontally (or vertically) is equivalent to the width (or height) of the rectangle.
 * - Alignment(-1.0, -1.0) represents the top left of the rectangle.
 * - Alignment(1.0, 1.0) represents the bottom right of the rectangle.
 * - Alignment(0.0, 3.0) represents a point that is horizontally centered with respect to the rectangle and vertically below the bottom of the rectangle by the height of the rectangle.
 * - Alignment(0.0, -0.5) represents a point that is horizontally centered with respect to the rectangle and vertically half way between the top edge and the center.
 * - Alignment(x, y) in a rectangle with height h and width w describes the point (x * w/2 + w/2, y * h/2 + h/2) in the coordinate system of the rectangle.
 *
 * **References**
 * [Flutter#Alignment](https://api.flutter.dev/flutter/painting/Alignment-class.html)
 */
export class Alignment {
    constructor(readonly x: number, readonly y: number) {}

    static get bottomCenter() {
        return new Alignment(0.0, 1);
    }

    static get bottomLeft() {
        return new Alignment(-1.0, 1.0);
    }

    static get bottomRight() {
        return new Alignment(1.0, 1.0);
    }

    static get center() {
        return new Alignment(0.0, 0.0);
    }

    static get centerLeft() {
        return new Alignment(-1.0, 0.0);
    }

    static get centerRight() {
        return new Alignment(1.0, 0.0);
    }

    static get topCenter() {
        return new Alignment(0.0, -1.0);
    }

    static get topLeft() {
        return new Alignment(-1.0, -1.0);
    }

    static get topRight() {
        return new Alignment(1.0, -1.0);
    }
}
