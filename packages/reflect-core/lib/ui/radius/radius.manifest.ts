/**
 * [flutter#Radius.circular](https://api.flutter.dev/flutter/dart-ui/Radius/Radius.circular.html)
 */
type ICircularRadius = number

/**
 * [flutter#Radius.elliptical](https://api.flutter.dev/flutter/dart-ui/Radius/Radius.elliptical.html)
 */
interface IEllipticalRadius {
    x: number
    y: number
}

export type IRadius = ICircularRadius | IEllipticalRadius