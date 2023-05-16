const canvas=document.getElementById("MyCanvas");
const context=canvas.getcontext("2d");
// properties of circle Radius =R
const Radius=30;
//default colors of  circles
const circleColors=["red", "orange","Green","Blue"];
const arrowHeight=20;
const arrowWidth=10;
const arrowColor=10;
const arrowcolor="Black";

const circlePositions=[
    { x:50,y:canvas.height/4},
    { x:50,y:(canvas.height*3)/4},
    { x:150,y:canvas.height/4},
    {x:150,y:(canvas.height*3)/4},
];
const arrowPositions=[
    {x:canvas.width-arrowMargin,y:canvas.height/4},
    {x:canvas.width-arrowMargin,y:(canvas.height*3)/4},
    {x:canvas.width-arrowMargin,y:canvas.height/4},
    {x:canvas.width-arrowMargin,y:(canvas.height*3)/4},
];
let colors=[circleColors];
function draw(){
    context.clearrect(0,0,canvas.width,canvas.height);
    for( let i=0;i<circlePositions.length;i++){
        const circle= circlePositions[i];
        const arrow=arrowPositons[i];
        context.beginPath();
        context.arc(circle.x,circle.y,R,0,2*Math.PI);
        context.fillStyle=circleColors[i];
        context.full();

        context.beginPath();
        context.moveTo(arrow.x,arrow.y);
        context.lineTo(arrow.x-arrow,arrow.y+arrowHeight/2);
        context.lineTo(arrow.x-arrow,arrow.y-arrowHeight/2);
        context.LineTo(arrow.x,arrow.y);
        context. fillstyle=arrowColor;
        context.fill();
    }
}
    function movearrow(index){
  const circle=circlePositions[index];
  const arrow=arrowPositions[index];
  const speed=10;
  const dx=circle.x-arrow.x;
  const dy=circle.y-arrow.y;
  const distence=math.sqrt(dx*dx+dy*dy);
    const vx=(dx/distence*speed);
    const vy=(dy/distence*speed);
    function animateArrow(){
    if(distence>speed){
         arrow.x+=vx;
        arrow.y+=vy;
        distence-=speed;
        requestAnimationFrame(animateArrow);
         }else{
        arrow.x=circle.x;
        arrow.y=circle.y;
    }
    draw();
    } 
    animateArrow();
    }
    function resetArrows(){
    for(let i=0;i<arrowPositions.length;i++){
    const arrow=arrowPositions[i];
    arrow.x=canvas.width-arrowmargin;
    arrow.y=circlePositions[i].y;
    circleColors[i]=circleColors;
        }
    draw();
    } 
    function Click(event){
        const rect=canvas.getBoundingClientRect();
        const clickX=event.clientX-rect.left;
        const clicky=event.clienty-rect.top;
        for(let i=0;circlePositions.length;i++){
            const circle=circlePositions[i];
            if(clickX>=circle.x-Radius&&
                clickX<=circle.x+Radius&&
                clickY>=circle.y-Radius&&
                clickY<=circle.y+Radius){
                    movearrow();
                    break;
                }
        }
    }  
    canvas.addEventListener("click",handleclick);
    document.getElementById("ResetButton").addEventListener("Click",resetArrows);
    draw();
