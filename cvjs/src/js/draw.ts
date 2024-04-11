import '../css/style.css';
const bool = document.getElementById('canvas-bool')! as HTMLCanvasElement;
bool.width = innerWidth
bool.height = innerHeight
const ctx = bool.getContext('2d')
interface boolFace{
  genirate(): void;
  draw(a:number,b:number,c:string): void;
  update(): void;
  x: number;
  y: number;
  dx: number;
  dy: number;
  width: number;
  height: number;
  radius: number;
  color: string[];
  arrCircle: any[]

}
class bools implements boolFace {
  width: number;
  height: number;
  color: string[];
  arrCircle: any[];

  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public dx: number = 0,
    public dy: number = 0,
  ) {
    this.width = innerWidth
    this.height = innerHeight
    this.color = [
      "#FF0000", // Red
      "#00FF00", // Green
      "#0000FF", // Blue
      "#FFFF00", // Yellow
      "#00FFFF", // Cyan
      "#FF00FF", // Magenta
      "#000000", // Black
      "#FFFFFF", // White
      "#FFA500", // Orange
      "#800080"  // Purple
    ];
    this.arrCircle = []
    
  }
  genirate(): void {
    for (let i = 0; i < 500; i++) {
      new bools(
        Math.random() * this.width,
        Math.random() * this.height,
        10,
        1,
        1,
      ).update()
    }
  }
  draw(dx: number, dy: number,color:string): void {
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = color;
        ctx.lineWidth=0
        ctx.arc(this.x+dx, this.y+dy, this.radius, 0, Math.PI * 2);
        ctx.fill()
        ctx.stroke();
    }

  }
  update(): void {
    this.draw(this.dx, this.dy, this.color[Math.floor(Math.random() * 10)])
    this.dx++
    this.dy++
    requestAnimationFrame(this.update.bind(this))

  }
}
//const b = new bools(0,0,0,1,1,'red')
//b.genirate()