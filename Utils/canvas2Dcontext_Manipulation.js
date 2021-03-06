CanvasRenderingContext2D.prototype.__proto__ = {

    /**
     * @description suitable for clearing screen in during animation
     * @param {number} x starting point of the rectangle
     * @param {number} y starting point of the rectangle on the Y-axis
     * @param {number} w width of the rectangle
     * @param {number} h height of the rectangle
     * @param {string} color color of the rectangle
     */
    clearColor(x, y, w, h, color) {
        this.fillStyle = color;
        if(color !== undefined)
            this.fillRect(x, y, w, h);
        else this.clearRect(x, y, w, h);
    },

    /**
     * 
     * @description Draws an arc made specially for joystick
     * @param {number} x centre point on the X-axis
     * @param {number} y centre point on the Y-axis
     * @param {number} radius radius of the circle
     * @param {string} fill fillStyle for the circle
     * @param {string} stroke strokeStyle for the circle
     * @param {number} width thickness only if strokeStyle is being used
     * 
     */

    Joystick2dArc(x, y, radius, fill, stroke, width=0) {
        this.save();
        this.lineWidth = width;
        this.strokeStyle = stroke || fill;
        this.fillStyle = fill;
        this.beginPath();
        this.arc(x, y, radius, 0, 2 * Math.PI);
        this.closePath();
        if(!(stroke === "none" || stroke === "")) this.stroke();
        if(!(fill === undefined || fill === "none" || fill === "")) this.fill();
        this.restore();
    }

};
