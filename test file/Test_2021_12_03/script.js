// JavaScript Documentfunction showTime() 
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();    /* set function: the */
}
showTime();
setInterval(function () {
	showTime();
}, 1000);