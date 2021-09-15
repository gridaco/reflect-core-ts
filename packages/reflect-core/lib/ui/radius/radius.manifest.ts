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
