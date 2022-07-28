/**
 * [flutter#Radius.circular](https://api.flutter.dev/flutter/dart-ui/Radius/Radius.circular.html)
 */
type ICircularRadius = number;

/**
 * [flutter#Radius.elliptical](https://api.flutter.dev/flutter/dart-ui/Radius/Radius.elliptical.html)
 */
interface IEllipticalRadius {
    x: number;
    y: number;
}

export type IRadius = ICircularRadius | IEllipticalRadius;

export class Radius implements IEllipticalRadius {
    public static circular(radius: number): Radius {
        return new Radius(radius);
    }

    public static elliptical(x: number, y: number): Radius {
        return new Radius(x, y);
    }

    constructor(private _x: number, private _y?: number) {}

    public get isCircular(): boolean {
        return (
            this._x !== undefined &&
            (this._x === this._y || this._y === undefined)
        );
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y || this._x;
    }
}

export function isCircularRadius(radius: IRadius): radius is ICircularRadius {
    return typeof radius === "number";
}

export function isEllipticalRadius(
    radius: IRadius
): radius is IEllipticalRadius {
    return (
        typeof radius === "object" &&
        typeof radius.x === "number" &&
        typeof radius.y === "number"
    );
}

export function isRadius(radius: IRadius): radius is IRadius {
    return isCircularRadius(radius) || isEllipticalRadius(radius);
}
