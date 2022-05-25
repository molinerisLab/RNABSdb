let table = new DataTable('#experiments_table', {
    // options
});
//$('#full-width-block').width(window_width)
/*
$(window).bind('resize', function(e) {
    if(window_width != $(window).width()) {
        // run through our logic again to determine element size and left margin offset
    }
});
*/
function setZoom(zoom,el) {
      
      transformOrigin = [0,0];
	    el = el || instance.getContainer();
	    var p = ["webkit", "moz", "ms", "o"],
            s = "scale(" + zoom + ")",
            oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";

	    for (var i = 0; i < p.length; i++) {
	        el.style[p[i] + "Transform"] = s;
	        el.style[p[i] + "TransformOrigin"] = oString;
	    }

	    el.style["transform"] = s;
	    el.style["transformOrigin"] = oString;
      
}

//setZoom(0.4,document.getElementById('experiments_table_wrapper'))
