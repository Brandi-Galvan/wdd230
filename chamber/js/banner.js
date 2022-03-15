// Banner for web page
const dayofweek = now.getDay();

let banner;
	if (dayofweek == 1 || dayofweek == 2) {
		banner = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
	} 
	document.querySelector('#eventbanner').textContent = banner;