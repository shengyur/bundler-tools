import "./style.css"
import ImgPng from './myImg.png'
import printMe from './print.js'
import "./sass.scss"
import "./less.less"

// console.log('ENV',process.env.NODE_ENV)

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = Array.prototype.join(['Hello', 'webpack'], ' ');
  

    btn.innerHTML = `Click me and check the console!${process.env.NODE_ENV}}`;
    btn.onclick = printMe;
  
    element.appendChild(btn);

    const Img = new Image()
    Img.src = ImgPng
    element.appendChild(Img)

    return element;
}
  
document.body.appendChild(component());