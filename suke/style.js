/* V 0.2 by Samunosuke */
window.addEventListener('load', overrideStyles, false);

function overrideStyles(){
	try {

      /* Set brand name to be white again - this is neccessary because color overrides in the default.css */
    	var navbarBrand = document.getElementsByClassName('navbar-brand');
    	navbarBrand[0].firstChild.style.color = '#FFFFFF';
    
    	/* Add gradient to my buglist entries - uses the status colors of the mantis installation or set by custom values */
    	var bgColor;
    	var rows = document.getElementsByClassName('my-buglist-bug');
    	for(i=0; i<rows.length; i++) {
        	var elem = rows[i].getElementsByClassName('fa');
            var cStyle = window.getComputedStyle(elem[0]);
        	bgColor = cStyle.backgroundColor;
        	rows[i].style.backgroundImage = '-moz-linear-gradient(to top, #DEDEDE, white)';
            rows[i].style.height = '55px';
        	rows[i].style.borderBottom = "thick solid "
            rows[i].style.borderBottomColor = bgColor;
    	}
    
    	/* Improve style for all buglist entries */
			var bgColor;
			var buglist = document.getElementById('buglist');
			var bugListChild = buglist.getElementsByTagName('tbody');
			var rows = bugListChild[0].getElementsByTagName('tr');
			for (i = 0; i < rows.length; i++) {
					var colStatus = rows[i].getElementsByClassName('column-status');
					var elem = colStatus[0].getElementsByClassName('align-left');
					var iElement = elem[0].getElementsByClassName('fa-square');
		      var cStyle = window.getComputedStyle(iElement[0]);
					bgColor = cStyle.backgroundColor;
					/* add some nicer looking gradient */
		      rows[i].style.backgroundImage = '-moz-linear-gradient(to top, #CECECE, white)';
		      rows[i].style.height = '55px';
		      /* add a bottom colored line to the issue row */
		      rows[i].style.borderBottom = "thick solid "
		      rows[i].style.borderBottomColor = bgColor;
		}
	}catch(err){ console.log(err); }
	window.removeEventListener('load', overrideStyles);
