import { Circle } from "./circle";
export class Cylinder extends Circle {
    private height : number = 1;
    constructor(radius : number,color : string,height: number) {
        super(radius,color)
        this.height = height;
    }
    public getHeight() : number {
        return this.height;
    }
    public setHeight( height: number) : void {
        this.height = height;
    }
    public getVolume() : number {
        return this.height * this.getArea();
    }
}
    
        
    

    
