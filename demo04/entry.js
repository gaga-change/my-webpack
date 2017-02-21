/**
 * Created by 严俊东 on 2017/2/20.
 */
require('./public.css');
var name = "严俊东";
console.log("Hello Webapck !  -- " + name);

var img1 = document.createElement("img");
img1.src = require("./img/little.png");
document.body.appendChild(img1);