// JavaScript Document
/*
Check on settings the additional JS files loaded
//https://labs.nearpod.com/bodymovin/demo/text_demo/bodymovin.min.js
//https://labs.nearpod.com/bodymovin/demo/text_demo/text_demo.js

text_demo.js is the .json data exported from AE saved as a Javascript object and assigned to a variable "text_demo_data"
*/

//Defining text values: A-Z,a-z,0-9 are valid
var text1 = "Bouncing text";
var text2 = "Scale in text";
var text3 = "Wipe to center";
var text4 = "Jump in text";
var text5 = "Mixed animation text";

//Updating Animation data with text values before loading
//This is the hard part since there is not an official API yet to edit values, you need to find them by hand.
//Documentation on the exported json data can help
//https://github.com/bodymovin/bodymovin/tree/master/docs/json
text_demo_data.layers[0].t.d.k[0].s.t = text1;
text_demo_data.layers[1].t.d.k[0].s.t = text2;
text_demo_data.layers[2].t.d.k[0].s.t = text3;
text_demo_data.layers[3].t.d.k[0].s.t = text4;
text_demo_data.layers[4].t.d.k[0].s.t = text5;

var anim;
var animData = {
  container: document.getElementById('animContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
    progressiveLoad: false
  },
  animationData: text_demo_data
};
anim = bodymovin.loadAnimation(animData);