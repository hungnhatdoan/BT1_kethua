export class Circle{
    private radius : number;
    private color : string;
    constructor(radius : number, color : string){
        this.radius = radius;
        this.color = color;
    }
    public getRadius() : number {
        return this.radius
    }
    public setRadius(radius : number) : void {
        this.radius = radius;
    }
    public getColor() : string {
        return this.color;
    }
    public setColor(color : string) : void {
        this.color = color
    } 
    public getArea() : number {
        return this.radius * this.radius * Math.PI;
    }   
}
