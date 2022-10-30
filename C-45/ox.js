class Ox {
    constructor(type, x, y) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    show() {
        push();
        translate(this.x, this.y);

        if (this.type == 0) {
            rotate(PI / 4);
            rect(-30, -4, 60, 8, 20);
            rect(-4, -30, 8, 60, 20);
        } else if (this.type == 1) {
            circle(0, 0, 60);
            fill(68, 55, 55);
            circle(0, 0, 45);
        }

        pop();
    }
}