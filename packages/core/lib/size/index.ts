export interface Size {
    width: number;
    height: number;
}

export class Size {
    constructor({ width, height }: { width: number; height: number }) {
        this.width = width;
        this.height = height;
    }

    static copy(size: Size): Size {
        return new Size(size);
    }

    static fromHeight(height: number): Size {
        return new Size({
            width: Infinity,
            height,
        });
    }

    static fromWidth(width: number): Size {
        return new Size({
            width,
            height: Infinity,
        });
    }

    static square(l: number): Size {
        return new Size({
            width: l,
            height: l,
        });
    }

    get aspectRatio() {
        if (this.height != 0.0) return this.width / this.height;
        if (this.width > 0.0) return Infinity;
        if (this.width < 0.0) return -Infinity;
        return 0.0;
    }

    get isEmpty() {
        return this.width <= 0.0 || this.height <= 0.0;
    }

    get longestSide() {
        return Math.max(Math.abs(this.width), Math.abs(this.height));
    }

    get shortestSide() {
        return Math.min(Math.abs(this.width), Math.abs(this.height));
    }
}
