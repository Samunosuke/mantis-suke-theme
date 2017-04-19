window.addEventListener('load', overrideStyles, false);

function overrideStyles(){
	try {

        /* Set brand name to be white again */
    	var navbarBrand = document.getElementsByClassName('navbar-brand');
    	navbarBrand[0].firstChild.style.color = '#FFFFFF';
    
    	/*  */
    	var bgColor;
    	var rows = document.getElementsByClassName('my-buglist-bug');
    	for(i=0; i<rows.length; i++) {
        	var elem = rows[i].getElementsByClassName('fa');
            var cStyle = window.getComputedStyle(elem[0]);
        	bgColor = cStyle.backgroundColor;
        	rows[i].style.backgroundImage = '-moz-linear-gradient(to left, ' + bgColor + ', white)';
    	}
    
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
  			rows[i].style.backgroundImage = '-moz-linear-gradient(to left, ' + bgColor + ', white, white, white, white, '+ bgColor +')';
		}
	}catch(err){ console.log(err); }
	window.removeEventListener('load', overrideStyles);
}