import { lerp } from "./utils/lerp";

console.log("connected");
class app {
    constructor() {
        // Smooth scroll properties
        this.scrollElement = document.querySelector("[smooth-scroll]")
        this.currentScrollPos = 0;
        this.targetScrollPos = 0;
        this.scrollEase = 0.1;
        this._initSmoothscroll();
        this._update();
    }
    _update() {
        this._smoothScroll();
        console.log("Update Working");
        this.frame = requestAnimationFrame(this._update.bind(this))
    }
    _initSmoothscroll() {
        // Calculate the total scrollable height
        document.body.style.height = `${this.scrollElement.getBoundingClientRect().height
            }px`
    }
    _smoothScroll() {
        console.log("smooth scroll running")
        this.targetScrollPos = window.scrollY;
        console.log(this.targetScrollPos);
        // calulate a value that "ease" to target the targetScrollPos
        this.currentScrollPos = lerp(
            this.currentScrollPos,
            this.targetScrollPos,
            this.scrollEase

        )
        this.currentScrollPos = parseFloat(this.currentScrollPos.toFixed(2))
        console.log(this.currentScrollPos);
        //Transform the scroll container to lerp value 
        const transformProperty = `translate3d(0, ${this.currentScrollPos * -1}px, 0)`

        //Set the transform property to the element container
        this.scrollElement.style.transform = transformProperty;
    }
}

new app();