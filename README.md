# Moving_boxes
My first project with the usage of JavaScript. User can move boxes up and down by clicking on them.
## Content
The graphic is written in svg. Based on IDs given to specific elements two classes are added to elements that are supposed to move:
```css
.moveUp{fill: white; 
    animation: moveUp 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;}
    @keyframes moveUp{
    0%{transform: translateY(0px); stroke: black}
    100% {transform: translateY(-20px); stroke: orange;}
} 

.moveDown{
    fill: white; 
    animation: moveDown 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;}
    @keyframes moveDown{
    0%{transform: translateY(-20px); stroke: orange}
    100% {transform: translateY(00px); stroke: black;}
}
};
```
To add classes to elements [JavaScript functions](js/index.js) were used.

[Link to GitHub Page](https://glawian.github.io/Moving_boxes/)
